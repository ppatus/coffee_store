import React from "react";
import './ListadoPedidos.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ItemDetallado(){
    return(
        <Container >
            <Card fluid className="mb-4 text">
                <Row>
                    <Col>
                        <Card.Img variant="start" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elle.com%2Fes%2Fbelleza%2Fsalud-fitness%2Fa33941080%2Fcomo-elegir-buen-cafe%2F&psig=AOvVaw3Wx7zyhHl8-iN6pgCA98Ok&ust=1679585365710000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCKwJrt7_0CFQAAAAAdAAAAABAE" ></Card.Img>
                    </Col>
                    <Col>
                        <Card.Title className="tituloPedidos">#NOMBREITEM</Card.Title>
                        <Card.Body classname='float-right'>
                            <Card.Text>
                                <p>Precio por unidad</p>
                                <p>Cantidad</p>
                                <p>Precio total</p>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ItemDetallado;