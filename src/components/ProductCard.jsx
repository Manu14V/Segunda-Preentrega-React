import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Asegúrate de tener el archivo CSS correspondiente

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h3 className="product-title">
        {product.title} - {product.id}
      </h3>
      <img className="product-image" src={product.image} alt={product.title} />
      <p className="product-price">${Number(product.price).toFixed(2)}</p>
      <button className="details-button">
        <Link to={`/product/${product.id}`}>Más detalles</Link>
      </button>
    </article>
  );
}