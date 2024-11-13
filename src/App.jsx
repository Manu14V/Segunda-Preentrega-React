import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeContainer from './components/HomeContainer';
import ProductsContainer from './components/ProductsContainer';
import ContactContainer from './components/ContactContainer';
import DetailContainer from './components/DetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/category/:categoryId" element={<ProductsContainer />} /> {/* Ruta para las categorías */}
        <Route path="/product/:prodId" element={<DetailContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;