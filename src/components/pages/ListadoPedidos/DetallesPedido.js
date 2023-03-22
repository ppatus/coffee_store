import React from 'react';
import { CreditCard } from 'react-bootstrap-icons';
import ItemDetallado from './ItemDetallado';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function DetallesPedido(){
    return(
        <div>
            <Container fluid className="productsTitle">
                Detalles del pedido #numeropedido
            </Container>

            <Container>
                <p>Fecha de la compra: #fecha</p>
            </Container>
            

            <ItemDetallado></ItemDetallado>
            <ItemDetallado></ItemDetallado>

            <Container className='mb-4'>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                    <p>X ARTÍCULOS</p>
                    <p>GASTOS DE ENVÍO</p>
                    <p style={{ fontWeight: 'bold' }}>TOTAL</p>
                </Col>
                <Col>
                    <p>#preciototal</p>
                    <p>0,00 €</p>
                    <p style={{ fontWeight: 'bold' }}>#preciototal</p>
                </Col>
            </Row>  
            </Container>
        </div>
    );
};

export default DetallesPedido;