import React from 'react'
import './CSS/Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';




function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();


    return (
        <div className = "subtotal">
            <CurrencyFormat 
                renderText = 
                {(value) => (<> <p> Subtotal ({basket?.length} items): 
                <strong className = "subtotal_price">{value}</strong> 
                </p> 
                    <small className = "subtotal_gift">
                            <input type = "checkbox" /> 
                            This order contains a gift 
                            </small> </>)}
                            decimalScale = {2} 
                            value = {getBasketTotal(basket)} 
                            displayType = {"text"} 
                            thousandSeperator = {true} 
                            prefix = {"$"}/>
        
            <button onClick = {e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
