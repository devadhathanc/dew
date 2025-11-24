import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Products from './Products';
import ProductPage from './ProductPage';
import Contact from './Contact';
import About from './About';
import Admin from './admin';

function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App;