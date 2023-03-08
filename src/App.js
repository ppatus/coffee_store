import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/pages';
import Footer from "./components/footer/footer";
import './App.css';
import React from 'react';
import Header from './Común/Header.js';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Carrito_pagina from './Carrito_pagina';


function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <Index/>
      <Footer />
    </div>
  );
}

export default App;
