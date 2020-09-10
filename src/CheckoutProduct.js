import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, quantity}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    const handleDownProduct = () => {
        dispatch({
            type: "DOWN_ONE_PRODUCT",
            id: id
        })
    }

    const handleUpProduct = () => {
        dispatch({
            type: "UP_ONE_PRODUCT",
            id: id  
        })
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="banner"/>
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p><StarIcon/></p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            <div className="checkoutProduct__upDownButton">
                <button onClick={handleDownProduct}>-</button>
                <input value={quantity} type="text"/>
                <button onClick={handleUpProduct} >+</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
