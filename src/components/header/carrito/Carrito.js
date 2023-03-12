import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BsCart2 } from "react-icons/bs";
import ListadoProductos from "./ListadoProductos";
import "./Carrito.css";

import Coffee1 from "../../../imgs/products/coffee1.jpg";
import Coffee2 from "../../../imgs/products/coffee2.jpg";

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
              </Popover.Body>
            </Popover>
          }
        >
          <Nav.Item> <BsCart2></BsCart2></Nav.Item>
        </OverlayTrigger>
        
    );
}

export default Carrito;