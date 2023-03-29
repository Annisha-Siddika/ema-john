import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const cart= props.cart; //option 1
    // const {cart} =props; //option 2
    let total = 0;
    let shipping =0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        
    }
    const tax = total*7/100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;