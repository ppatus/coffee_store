import React, { useEffect } from "react";
import './ListadoPedidos.css';
import { Container } from 'react-bootstrap';
import ItemPedido from "./ItemPedido";
import axios from "axios";
import { useState, useContext } from 'react';
import LogInContext from "../../../contexts/LogInContext";


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

            {renderizarPedidos(pedidos)}

        </div>
    );
};

export default ListadoProductos;