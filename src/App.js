import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/pages';
import Footer from "./components/footer/footer";
import './App.css';
import React from 'react';
import Header from './components/header/Header.js';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Carrito_pagina from './components/pages/Carrito_pagina';
import { Route, Routes } from 'react-router';
import Productos from './components/pages/Productos'


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/productos/cafe-en-grano" element={<Productos category="grano"/>}/>
        <Route path="/productos/cafe-molido" element={<Productos category="molido"/>}/>
        <Route path="/productos/accesorios" element={<Productos category="accesorios"/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
