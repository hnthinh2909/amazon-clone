import React, { useState } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';


function Subtotal() {

    const [{basket, totalPrice}, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=> (
                    <>
                    <p>
                        {/* Part of the homework */}
                Subtotal ({basket?.length} items): <strong>{basket.length ? value : 0}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                    </>
                )} 
                decimalScale={2}
                value={totalPrice.reduce((a,b) => a + b, 0)} // part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
