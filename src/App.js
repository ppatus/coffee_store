import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/pages';
import Footer from "./components/footer/footer";
import './App.css';
import React from 'react';
import Header from './components/header/Header.js';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Carrito_pagina from './components/pages/Carrito_pagina';

import Elemento_Producto from './components/pages/store_item';
import {Card} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <br></br>
      <Container >
        <Row>
          <Col>
            <Elemento_Producto></Elemento_Producto>
          </Col>
          <Col>
            <Elemento_Producto></Elemento_Producto>
          </Col>
        </Row>
      </Container>

      

      {/* <Index/> */}
      <Footer />
    </div>
  );
}

export default App;
