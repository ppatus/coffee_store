import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function ModalFinalizarCompra(props){
    return(
        <Modal show={props.variable} centered>
            <Modal.Header closeButton>
            <Modal.Title>Gracias por tu compra :)</Modal.Title>
            </Modal.Header>
            <Modal.Body>¡Gracias por comprar en Telecoffee! Trabajamos para que los apasionados del café disfruten al máximo de cada sorbo :)</Modal.Body>
            <Modal.Footer>
            <Link to='/'><Button variant="secondary">
                Suficiente por hoy
            </Button></Link>
            <Link to='/productos/cafe-en-grano'><Button variant="success">
                Seguir comprando
            </Button></Link>
            </Modal.Footer>
        </Modal>    
    );
};

export default ModalFinalizarCompra;