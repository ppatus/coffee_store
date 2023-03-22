import React, { useState } from "react";
import './ListadoPedidos.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from "react-router-dom";

import {ImCancelCircle } from "react-icons/im";
import Modal from 'react-bootstrap/Modal';




function ItemPedido(){

    const [showModalOK, setShowModalOK] = useState(false);
    
    const handleSi = () => {
        setShowModalOK(false);
    };

    const handleNo = () => {
        setShowModalOK(false);
    };
    
    const handleShowOK = () => setShowModalOK(true);

    return(
        <Container >
            <Card fluid className="mb-4 text">
                <Card.Title className="tituloPedidos">Tu pedido: meternumeropedido</Card.Title>
                <Card.Body classname='float-right'>
                    <Card.Text>
                        <p>Fecha</p>
                        <p>Precio total</p>
                        <p>Número artículos</p>
                        <span className="float-end mb-2 mt-2"><Link to="/detalles-pedido"><Button href="/detalles-pedido" className="btn btn-primary detailsButton">Ver detalles del pedido</Button></Link></span>
                        <span className="float-end mb-2 mt-2" ><Link ><Button onClick={handleShowOK} variant="secondary" className="btn btn-primary"><ImCancelCircle></ImCancelCircle>  Cancelar pedido</Button></Link></span>
                    </Card.Text>

                    <Modal show={showModalOK} centered>
                        <Modal.Header closeButton>
                        <Modal.Title>¡Cuidado!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>¿Estás seguro de que quieres cancelar este pedido?</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleSi} >
                            Sí
                        </Button>
                        <Button variant="danger" onClick={handleNo} >
                            No
                        </Button>
                        </Modal.Footer>
                    </Modal>        
                </Card.Body>
            </Card>


            
        </Container>
    );
};

export default ItemPedido;