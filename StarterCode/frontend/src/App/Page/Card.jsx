import React from 'react';
import './Card.css';

const Card = ({ imageUrl, name, price, description }) => {
  return (
    <article className="product-card">
      <div className="product-card-media">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-card-body">
        <h2 className="product-card-title">{name}</h2>
        <p className="product-card-price">${price}</p>
        <p className="product-card-desc">{description}</p>
      </div>
    </article>
  );
};

export default Card;
