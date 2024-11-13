import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de crear este archivo CSS para los estilos.

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Celulares</Link>
      <Link to="/products" className="nav-link">Indumentaria</Link>
      <Link to="/contact" className="nav-link">Vehículos</Link>
      
      <Link to="/cart" className="cart-icon" aria-label="Ver carrito">
        🛒
      </Link>
    </nav>
  );
}

