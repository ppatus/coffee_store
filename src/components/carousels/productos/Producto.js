import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Producto(props){
    return(
        <Container>
            <Col>
                <Row><img src={props.img}></img></Row>
                <Row><h5>{props.name}</h5></Row>
                <Row><h6>{props.price}</h6></Row>
            </Col>
        </Container>
    );
}

export default Producto;