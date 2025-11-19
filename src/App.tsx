import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Gallery from './gallery';

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/chat/:session_id" element={<Chat />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;