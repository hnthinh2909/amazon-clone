import React from 'react';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    console.log(basket);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>
                        You have no items in your cat. To buy one, click on "Add to Cart"
                        next to the item
                        </p>
                    </div>
                    ) : (
                    <div>
                        <h2 className="checkout__title"> Your shopping basket</h2>
                            {basket?.map((item) => (
                                <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                quantity={item.quantity}
                                />
                            ))}
                    </div>
                    )}
                </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
