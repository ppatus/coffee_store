import React, { useEffect } from "react";
import './ListadoPedidos.css';
import { Container, Row, Button, Col } from 'react-bootstrap';
import ItemPedido from "./ItemPedido";
import axios from "axios";
import { useState, useContext } from 'react';
import LogInContext from "../../../contexts/LogInContext";
import { Link } from "react-router-dom";

function ListadoProductos(){

    const [pedidos, getPedidos] = useState([]);
    const [login, loginData, updateLogin] = useContext(LogInContext);

    

    useEffect(()=>{
    
        axios.get("https://telecoffee-30869-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json?orderBy=\"user\"&equalTo=\""+loginData[0]+"\"&print=pretty")
            .then((response) => {
                getPedidos(Object.entries(response.data))
        });        
    },
    []
    )

    const renderizarPedidos = (pedidos) => {
        let output = [];
        pedidos.forEach(element => {
            output.push(
            <>
                <ItemPedido pedidos={pedidos} getPedidos={getPedidos} idPedido={element[0]} fecha={element[1].fecha} cantidadTotal={element[1].numItems} precioTotal={element[1].precio} compra={element[1].compra}></ItemPedido>
            </> 
            )
        });
        return output;
    }

    return(
        <div>
            <Container fluid className="productsTitle">
                Historial de pedidos
            </Container>
            {pedidos.length==0 &&
            <div style={{marginTop:'5rem', marginBottom:'5rem'}}>
            <h5>Todavía no has hecho ningún pedido. ¿A qué estás esperando?</h5>
            <Row style={{marginTop: '3rem'}}>
                <Col style={{marginLeft:'15rem'}}><Link to='/productos/cafe-en-grano'><Button className="listadoButton">Comprar café en grano</Button></Link></Col>
                <Col><Link to='/productos/cafe-molido'><Button className="listadoButton">Comprar café molido</Button></Link></Col>
                <Col style={{marginRight:'15rem'}}><Link to='/productos/accesorios'><Button className="listadoButton">Comprar accesorios</Button></Link></Col>
            </Row>
            
            </div>
            }
            {renderizarPedidos(pedidos)}

        </div>
    );
};

export default ListadoProductos;    