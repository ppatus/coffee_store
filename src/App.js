import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/pages';
import Footer from "./components/footer/footer";
import './App.css';
import React from 'react';
import Header from './components/header/Header.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router';
import Productos from './components/pages/Productos/Productos'


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
