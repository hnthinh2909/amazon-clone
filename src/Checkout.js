import React from 'react';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                            {
                                basket.length > 0 && basket.map( item => (
                                    <CheckoutProduct 
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.image}
                                    />
                                ))
                            }
                            {
                                basket.length === 0 && 
                                    <div className="checkout__emptyBasket">
                                        <ErrorOutlineIcon style={{ fontSize: 40 }}/> 
                                        <p>You are not add anything to Basket yet.</p>
                                    </div>
                            }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
