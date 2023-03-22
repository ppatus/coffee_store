import React from "react";
import './ListadoPedidos.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemPedido from "./ItemPedido";

function ListadoProductos(){
    return(
        <div>
            <Container fluid className="productsTitle">
                Historial de pedidos
            </Container>

            <ItemPedido></ItemPedido>
            <ItemPedido></ItemPedido>
        </div>
        
    );
};

export default ListadoProductos;