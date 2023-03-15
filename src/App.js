import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/pages';
import Footer from "./components/footer/footer";
import './App.css';
import React from 'react';
import Header from './components/header/Header.js';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Carrito_pagina from './components/pages/carrito/Carrito_pagina';
import CreateAccount from './components/pages/CreateAccount';

import Elemento_Producto from './components/pages/store_item';
import {Card} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <br></br>
      {/* <Index/> */}

      {/* <Carrito_pagina></Carrito_pagina> */}

      <CreateAccount></CreateAccount>

      {/* <Container >
        <Row>
          <Col>
            <Elemento_Producto></Elemento_Producto>
          </Col>
          <Col>
            <Elemento_Producto></Elemento_Producto>
          </Col>
        </Row>
      </Container> */}

      <Footer />
    </div>
  );
}

export default App;
