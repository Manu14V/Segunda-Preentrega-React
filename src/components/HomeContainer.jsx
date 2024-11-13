import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


import productsData from '../products.json'; 

export default function CellPhoneContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="cellphone-container">
      <h2>Celulares</h2>
      <section className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}