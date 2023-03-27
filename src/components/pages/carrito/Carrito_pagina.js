import { React, useContext, useEffect, useState } from 'react';
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Container } from 'react-bootstrap';
import Item_carrito from './item.js';
import './CarritoPagina.css';
import { Link } from "react-router-dom";
import CarritoContext from '../../../contexts/Carrito';

function Carrito_pagina(){
    const [productos, setProductos] = useContext(CarritoContext);
    const [finishPedidoAvailable, setfinishPedidoAvailable] = useState(true);

    useEffect( () => {
        if(productos.length === 0 ? setfinishPedidoAvailable(false) : setfinishPedidoAvailable(true)){

        }
    }, [productos]);

    const renderizarProductos = (productos) => {
        let output = [];
        productos.forEach(element => {
            output.push(
            <>
                <Item_carrito producto={element} carrito={productos} setCarrito={setProductos}></Item_carrito>
                <hr className="my-4" />
            </> 
            )
        })
        
        if(productos.length===0){
            //setfinishPedidoAvailable(false);
            return <p style={{textAlign:"center",marginTop:"12px",marginBottom:"12px"}}>Tu carrito está vacío.</p>;
        } else {
            //setfinishPedidoAvailable(true);
        }
        ;
        return output;
    }

    const calcularPrecioTotal = () => {
        let price = 0;
        productos.forEach(producto => {
            price+=producto.price*producto.qty;
        });
        return price.toFixed(2).replace(".",",")+"€";
    }

    const calcularTotalProductos = () => {
        let total = 0;
        productos.forEach(producto => {
            total+=producto.qty;
        });
        return total;
    }

    return(
        <div className="h-100 gradient-custom">
            <Container className="py-5 h-100">
                <Row className="justify-content-center my-4">
                    <Col md="8">
                    
                        <Card className="mb-4">
                            <CardHeader className="py-3"><h5 className="mb-0">Mi carrito</h5></CardHeader>
                            <Card.Body>
                                {renderizarProductos(productos)} 
                            </Card.Body>
                        </Card>

                        <Card lg="3" md="12" className="mb-4 mb-lg-0">
                            <Card.Body>
                                <p>
                                <strong>We accept</strong>
                                </p>
                                <Row className='justify-content-center'>
                                    <Col><Card.Img className="me-2" height="50rem"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                    alt="Visa" /></Col>
                                    <Col><Card.Img  className="me-2" height="50rem"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                    alt="American Express" /></Col>
                                    <Col><Card.Img  className="me-2" height="50rem"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                    alt="Mastercard" /></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    <Card className="mb-4">
                        <CardHeader>
                            <h5>Resumen del pedido</h5>
                        </CardHeader>
                            <Card.Body>
                                <ListGroup flush>
                                    <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Productos
                                        <span>{calcularPrecioTotal()}</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between align-items-center px-0 border-0 gastosEnvio">
                                        Gastos de envío
                                        <span>Gratis</span>
                                    </ListGroupItem>
                                    <ListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                        <strong>Precio total</strong>
                                        <strong>
                                            <p className="mb-0">(IVA incluído)</p>
                                        </strong>
                                        </div>
                                        <span>
                                        <strong>{calcularPrecioTotal()}</strong>
                                        </span>
                                    </ListGroupItem>
                                </ListGroup>

                                <Link to={finishPedidoAvailable ? '/finalizar-compra' : "" } disabled={!finishPedidoAvailable}><Button className='buttons' block size="lg" disabled={!finishPedidoAvailable}>Realizar pedido</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Carrito_pagina;