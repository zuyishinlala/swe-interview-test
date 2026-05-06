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

  //implement the delete function
  const handleDelete = async (id) => {
    const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      return;
    }
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            onDelete={() => handleDelete(p.id)}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
