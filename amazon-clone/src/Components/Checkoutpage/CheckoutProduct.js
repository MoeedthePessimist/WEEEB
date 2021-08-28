import React from 'react';
import './CSS/CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hidebutton}) {
    
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className = 'checkoutProduct'>
            <img className = 'checkoutProduct_image' src = {image} />
            <div className = 'checkoutProduct_info'>
                <p className = 'checkoutProduct_title'>{title}</p>
                <p className = 'checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong> 

                    <div className = 'checkoutProduct_rating'>
                        {Array(rating).fill().map ((_,i) => (<p>🌟</p>))}
                    </div>
                    {!hidebutton && (<button className = 'checkoutProduct_remove' onClick = {removeFromBasket} >Remove from basket</button>)}
                </p>
            </div>
        </div>
    )
}

export default CheckoutProduct
