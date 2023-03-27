import React from "react";
import './ListadoPedidos.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ItemDetallado(props){

    let detalles = props.detalles;

    const renderizarProductos = () => {
        let output = [];
        
        detalles.forEach(element => {
            output.push(
            <>
                <Row>
                    <Col>
                        <Card.Img variant="start" src={element.img} style={{height:'15rem'}}></Card.Img>
                    </Col>
                    <Col>
                        <Card.Title className="tituloPedidos">{element.name}</Card.Title>
                        <Card.Body classname='float-right'>
                            <Card.Text>
                                <p>Precio por unidad: {element.price.toFixed(2).replace(".",",")} €</p>
                                <p>Cantidad: {element.qty}</p>
                                <p>Precio total: {(element.price*element.qty).toFixed(2).replace(".",",")} €</p>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </> 
            )
        });
        return output;
    }


    return(
        <Container >
            <Card fluid className="mb-4 text">
                {renderizarProductos()}
            </Card>
        </Container>
    );
};

export default ItemDetallado;