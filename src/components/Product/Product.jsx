import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
   const handleAddToCart = props.handleAddToCart;
    return (
        <div>
            <div className='product'>
            <img src={img} alt="" />
            <div className="card-body">
            <h3>{name}</h3>
            <h4>Price: ${price} </h4>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star </p>
            </div>
            </div>
            <button className='btn' onClick={() => handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default Product;