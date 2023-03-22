import React, { useContext } from "react";
import { Container, OverlayTrigger, Popover, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BsCart2 } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ListadoProductos from "./ListadoProductos";
import "./Carrito.css";
import { Link } from "react-router-dom";
import CarritoContext from "../../../contexts/Carrito";
import PrecioCarrito from "./PrecioCarrito";

function Carrito(){
    //Variable de estado (contexto) que guarda los productos almacenados en el carrito del cliente
    const [productos, setProductos] = useContext(CarritoContext);
    
    return(
        <OverlayTrigger
          trigger="click"
          key="bottom"
          rootClose
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`} className="popoverBody">
              <Popover.Body>
                <ListadoProductos products={[productos, setProductos]}></ListadoProductos>
                <PrecioCarrito products={productos}></PrecioCarrito>
                <Link to='/carrito'><Container className="verCarrito"><Col><AiOutlineShoppingCart></AiOutlineShoppingCart>     Ver carrito</Col></Container></Link>
              </Popover.Body>
            </Popover>
          }
        >
          <Nav.Item> <h2><BsCart2 style={{ marginRight: '1rem'}}></BsCart2></h2></Nav.Item>
        </OverlayTrigger>
        
    );
}

export default Carrito;