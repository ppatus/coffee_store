import React, {useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from "react-router-dom";
import CarritoContext from '../../../contexts/Carrito';


function ModalFinalizarCompra(props){
    const [productos, setProductos] = useContext(CarritoContext);
    const navigate = useNavigate();

    const setSeguirComprando = () => {
        navigate('/productos/cafe-en-grano');
        setProductos([]);
    }

    const setFinCompra = () => {
        navigate('/');
        setProductos([]);
    }

    return(
        <Modal show={props.variable} centered>
            <Modal.Header closeButton>
            <Modal.Title>Gracias por tu compra :)</Modal.Title>
            </Modal.Header>
            <Modal.Body>¡Gracias por comprar en Telecoffee! Trabajamos para que los apasionados del café disfruten al máximo de cada sorbo :)</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={setSeguirComprando}>
                Suficiente por hoy
            </Button>
            <Button variant="success" onClick={setSeguirComprando}>
                Seguir comprando
            </Button>
            </Modal.Footer>
        </Modal>    
    );
};

export default ModalFinalizarCompra;