import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from "react-currency-format"
import CheckoutProduct from '../Checkoutpage/CheckoutProduct';
import { useStateValue } from '../Checkoutpage/StateProvider'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { getBasketTotal } from '../Checkoutpage/reducer';
import './CSS/Payment.css'
import axios from './Axios';
import {db} from '../../FireBase';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    const elements = useElements();
    const stripe = useStripe();
    const history = useHistory();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);

    console.log('The Secret is ', clientSecret);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            
            console.log(user);
            
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }

    const handleChange = event => {
        //listen to changes in card element
        //display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            
            <div className="payment_container">
                <h1>
                    Checkout {<Link to = "./checkout">{basket?.length} items</Link>}
                </h1>
                {/*payment section - del address*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>abc rada rada</p>
                        <p>qwe,qwe</p>
                    </div>
                </div>

                {/*payment section - del items*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/*payment section - payment method*/}
                <div className="payment_section">
                    <div className = "payment_title"><h3>Payment Method</h3></div>
                    <div className = 'payment_detail'>
                        {/*all stripe */}
                        <form onSubmit = {handleSubmit}>
                            <CardElement onChange = {handleChange} />
                            <div className = 'payment_priceContainer'>
                                <CurrencyFormat 
                                    renderText = 
                                    {(value) => (<> <p> Subtotal ({basket?.length} items): 
                                    <strong className = "subtotal_price">{value}</strong> 
                                    </p> 
                                    </>)}
                                    decimalScale = {2} 
                                    value = {getBasketTotal(basket)} 
                                    displayType = {"text"} 
                                    thousandSeperator = {true} 
                                    prefix = {"$"}
                                />
                                <button className = 'payment_buyNow' disabled = {processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
