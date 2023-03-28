import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, seller, quantity, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="card-body">
            <h3>{name}</h3>
            <h4>Price: ${price} </h4>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star </p>
            </div>
            <button>Add to Cart </button>
        </div>
    );
};

export default Product;