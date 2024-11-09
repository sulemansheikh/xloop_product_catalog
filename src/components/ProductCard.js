// src/components/ProductCard.js

import React from 'react';
import styles from './ProductCard.module.css';  // CSS Module for styling

const ProductCard = ({ name, price, description, image, category, rating }) => {
  // Dynamic styling based on category
  const categoryStyle = category === "Electronics" ? styles.electronics : 
                        category === "Clothing" ? styles.clothing : styles.homeAppliance;

  return (
    <div className={`card ${categoryStyle} m-3`} style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>{price}</strong></p>
        <p className="card-text">Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

export default ProductCard;
