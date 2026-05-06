import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Card.css';

const Card = ({ imageUrl, name, price, description, onDelete }) => {
  return (
    <article className="product-card">
      <div className="product-card-media">
        {onDelete ? (
          <button
            type="button"
            className="product-card-delete"
            aria-label={`Delete ${name}`}
            onClick={onDelete}
          >
            <DeleteIcon fontSize="small" />
          </button>
        ) : null}
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
