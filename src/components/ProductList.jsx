// src/components/ProductList.jsx
import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product Listings</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
