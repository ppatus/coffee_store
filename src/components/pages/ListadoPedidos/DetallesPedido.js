import React from 'react';
import ItemDetallado from './ItemDetallado';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function DetallesPedido(props){
    const location = useLocation();
    let idPedido = props.idPedido;

    return(
        <div>
            <Container fluid className="productsTitle">
                Detalles del pedido {location.state.id}
            </Container>

            <Container>
                <p>Fecha de la compra: {location.state.date}</p>
            </Container>
            

            <ItemDetallado detalles={location.state.detalles}></ItemDetallado>

            <Container className='mb-4'>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                    <p>{location.state.qty} ARTÍCULOS</p>
                    <p>GASTOS DE ENVÍO</p>
                    <p style={{ fontWeight: 'bold' }}>TOTAL</p>
                </Col>
                <Col>
                    <p>{location.state.total}</p>
                    <p>0,00 €</p>
                    <p style={{ fontWeight: 'bold' }}>{location.state.total}</p>
                </Col>
            </Row>  
            </Container>
        </div>
    );
};

export default DetallesPedido;