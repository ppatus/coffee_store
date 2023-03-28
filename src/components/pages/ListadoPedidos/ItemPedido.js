import React, { useState, useContext } from "react";
import './ListadoPedidos.css';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";
import {ImCancelCircle } from "react-icons/im";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import toast from 'react-hot-toast';



function ItemPedido(props){

    let idPedido = props.idPedido;
    let fecha = props.fecha;
    let precioTotal = props.precioTotal;
    let cantidadTotal = props.cantidadTotal;
    let compra = props.compra;
    let pedidos = props.pedidos;
    let getPedidos = props.getPedidos;

    const navigate = useNavigate();

    const handleDetalles = () => {
        navigate("/detalles-pedido", {state: {detalles:compra, id:idPedido, date: fecha, total: precioTotal, qty:cantidadTotal}});
    }



    const [showModalOK, setShowModalOK] = useState(false);
    const handleShowOK = () => setShowModalOK(true);
    
    const handleSi = () => {
        axios.delete("https://telecoffee-30869-default-rtdb.europe-west1.firebasedatabase.app/pedidos/"+idPedido+".json")
        
        getPedidos(pedidos.filter(element => element[0]!==idPedido));
        toast.success(`Se ha cancelado el pedido.`);
        setShowModalOK(false);
    };

    const handleNo = () => {
        setShowModalOK(false);
    };


    return(
        <Container >
            <Card fluid className="mb-4 text">
                <Card.Title className="tituloPedidos">Tu pedido: {idPedido}</Card.Title>
                <Card.Body classname='float-right'>
                    <Card.Text>
                        <p>Fecha: {fecha}</p>
                        <p>Precio total: {precioTotal}</p>
                        <p>Número artículos: {cantidadTotal}</p>
                        <span className="float-end mb-2 mt-2"><Button onClick={handleDetalles} className="btn btn-primary detailsButton">Ver detalles del pedido</Button></span>
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