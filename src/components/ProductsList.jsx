import React, { useState, useEffect } from 'react';
import { getProducts } from '../asyncMock'; // Asegúrate de que la ruta sea correcta
import ProductCard from './ProductCard'; // Componente de producto
import { Link } from 'react-router-dom'; // Si necesitas usar enlaces, asegúrate de que esté importado

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // Para capturar posibles errores
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts;  // Llamada a la promesa getProducts
        setProducts(data); // Cuando se resuelva, guarda los productos en el estado
      } catch (err) {
        setError('Error fetching products');
        console.error('Error fetching products:', err);  // Loguea el error
      } finally {
        setLoading(false); // Ya no está cargando
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Muestra un mensaje mientras cargan los productos
  }

  if (error) {
    return <p>{error}</p>; // Muestra el error si ocurre
  }

  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
