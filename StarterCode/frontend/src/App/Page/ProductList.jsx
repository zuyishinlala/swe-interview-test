import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Card from './Card';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  //implement the get products function
  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container maxWidth="lg" className="product-list">
      <h1 className="product-list-title">Simple Card List</h1>
      <div className="product-list-grid">
        {products.map((p) => (
          <Card
            key={p.id}
            imageUrl={p.imageUrl}
            name={p.name}
            price={p.price}
            description={p.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
