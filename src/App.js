import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/pages';
import Footer from "./components/footer/footer";
import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router';
import Productos from './components/pages/Productos/Productos';
import CarritoContext from './contexts/Carrito';

import Coffee1 from "./imgs/products/coffee1.jpg";
import Coffee2 from "./imgs/products/coffee2.jpg";

function App() {

  const [carrito, setCarrito] = useState([]);

  return (
    <div className="App">
      <CarritoContext.Provider value={[carrito, setCarrito]}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/productos/cafe-en-grano" element={<Productos category="grano"/>}/>
          <Route path="/productos/cafe-molido" element={<Productos category="molido"/>}/>
          <Route path="/productos/accesorios" element={<Productos category="accesorios"/>}/>
        </Routes>
        <Footer />
      </CarritoContext.Provider>
    </div>
  );
}

export default App;
