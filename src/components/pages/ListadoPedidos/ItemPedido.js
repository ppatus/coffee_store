import React from "react";
import './ListadoPedidos.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function ItemPedido(){
    return(
        <Container >
            <Card fluid className="mb-4 text">
                <Card.Title className="tituloPedidos">Tu pedido: meternumeropedido</Card.Title>
                <Card.Body classname='float-right'>
                    <Card.Text>
                        <p>Fecha</p>
                        <p>Precio total</p>
                        <p>Número artículos</p>
                        <span className="float-end mb-2 mt-2"><Button href="/detalles-pedido" className="btn btn-primary detailsButton">Ver detalles del pedido</Button></span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ItemPedido;