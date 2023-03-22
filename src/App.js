import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/pages';
import Footer from "./components/footer/footer";
import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router';
import Productos from './components/pages/Productos/Productos';
import CreateAccount from './components/pages/CreateAccount';
import Carrito from './components/pages/carrito/Carrito_pagina';
import LogInContext from './contexts/LogInContext';
import CarritoContext from './contexts/Carrito';
import ListadoPedidos from './components/pages/ListadoPedidos/ListadoPedidos';
import DetallesPedido from './components/pages/ListadoPedidos/DetallesPedido';
import FormularioCompra from './components/pages/carrito/FormularioCompra';

function App() {

  const [login, setLogin] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [carrito, setCarrito] = useState([]);

  const updateLogin = (login, loginData) => {
    setLogin(login);
    setLoginData(loginData);
  }

  return (
    <div className="App">
      
      <CarritoContext.Provider value={[carrito, setCarrito]}>      
        <LogInContext.Provider value={[login, loginData, updateLogin]}>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/productos/cafe-en-grano" element={<Productos category="grano"/>}/>
            <Route path="/productos/cafe-molido" element={<Productos category="molido"/>}/>
            <Route path="/productos/accesorios" element={<Productos category="accesorios"/>}/>
            <Route path="/crear-cuenta" element={<CreateAccount></CreateAccount>}/>
            <Route path="/carrito" element={<Carrito></Carrito>}/>
            <Route path="/pedidos" element={<ListadoPedidos></ListadoPedidos>}/>
            <Route path='/detalles-pedido' element={<DetallesPedido></DetallesPedido>}></Route>
            <Route path='/finalizar-compra' element={<FormularioCompra></FormularioCompra>}></Route>
          </Routes>
          <Footer />
        </LogInContext.Provider>
      </CarritoContext.Provider>
      
    </div>
  );
}

export default App;
