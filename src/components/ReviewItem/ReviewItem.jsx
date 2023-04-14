import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './reviewItem.css'
const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            <div className='item-container'>
                <img src={img} alt="" className='item-img' />
                <div className='item-text'>
                    <h4>{name}</h4>
                    <p>Price: <span className='price'>${price}</span></p>
                    <p>Shopping Charge: <span className='price'>${price * quantity}</span></p>
                </div>
            </div>
            <div>
                <button onClick={()=> handleRemoveFromCart(id)} className='dlt-btn'><FontAwesomeIcon icon={faTrashCan}/></button>
            </div>
        </div>
    );
};

export default ReviewItem;