import React from "react";
import { Container, OverlayTrigger, Popover, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BsCart2 } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ListadoProductos from "./ListadoProductos";
import "./Carrito.css";

import Coffee1 from "../../../imgs/products/coffee1.jpg";
import Coffee2 from "../../../imgs/products/coffee2.jpg";
import PrecioCarrito from "./PrecioCarrito";

function Carrito(){
    const productos=[
        {"name":"Café 1 - y encima vamos a hacer que el nombre sea largo","img":Coffee1,"price":20,"qty":2},
        {"name":"Café 2","img":Coffee2,"price":40,"qty":4},
        {"name":"Café 3","img":Coffee1,"price":30,"qty":3}
    ]; //definido de manera auxiliar por el momento
    return(
        <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`} className="popoverBody">
              <Popover.Body>
                <ListadoProductos products={productos}></ListadoProductos>
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