import React, { useContext } from "react";
import { Container, OverlayTrigger, Popover, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BsCart2 } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ListadoProductos from "./ListadoProductos";
import "./Carrito.css";

import CarritoContext from "../../../contexts/Carrito";

import Coffee1 from "../../../imgs/products/coffee1.jpg";
import Coffee2 from "../../../imgs/products/coffee2.jpg";
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
                <PrecioCarrito></PrecioCarrito>
                <Container className="verCarrito"><Col><AiOutlineShoppingCart></AiOutlineShoppingCart>     Ver carrito</Col></Container>
              </Popover.Body>
            </Popover>
          }
        >
          <Nav.Item> <BsCart2></BsCart2></Nav.Item>
        </OverlayTrigger>
        
    );
}

export default Carrito;