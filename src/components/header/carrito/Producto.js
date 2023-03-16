import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Producto.css";

import { GoX } from "react-icons/go";


function Producto(props){
    let product = props.product;

    return(
        <Container fluid className="productsContainer">
            <Row className="productRow">
                <Col sm={2}>
                    <img src={product.img} height="43px" width="43px" className="productImage"></img>
                </Col>
                <Col className="productName" sm={7}>
                    <p>{product.name}</p>
                </Col>
                <Col sm={2}>
                    <p>- 2 +</p>
                </Col>
                <Col sm={1}>
                    <GoX className="cross"/>
                </Col>
            </Row>
            <Row className="priceRow">
                <Col sm={2}>
                </Col>
                <Col className="priceText" sm={7}>
                    <p>{product.qty} x {product.price}€</p>
                </Col>
                <Col sm={2}>
                </Col>
                <Col sm={1}>
                </Col>
            </Row>
        </Container>
    );
}

export default Producto;