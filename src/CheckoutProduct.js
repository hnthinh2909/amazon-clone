/* eslint-disable no-unused-vars */
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function CheckoutProduct({id, image, title, price, rating, quantity, hideButton}) {

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
                <div className="checkoutProduct__upDownButton">
                {
                    !hideButton && (
                        <RemoveIcon onClick={handleDownProduct} className="checkoutProduct__btn"/>
                    )
                }
                {
                    !hideButton ? ( <input value={quantity} type="text" /> ) : <input value={quantity} type="text" disabled/>
                }
                {
                    !hideButton && (
                        <AddIcon onClick={handleUpProduct} className="checkoutProduct__btn"/>
                    )
                }
                </div>
                {
                    !hideButton && (
                        <button onClick={removeFromBasket}>Remove from Basket</button>
                    )
                }
            </div>
        </div>
    )
}

export default CheckoutProduct
