import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Producto.css";

function Producto(props){
    let product = props.product;

    return(
        <Container fluid className="productsContainer">
            <Row className="productRow">
                <Col sm={2}>
                    <img src={product.img} height="50px" width="50px" className="productImage"></img>
                </Col>
                <Col className="productName" sm={7}>
                    <p>{product.name}</p>
                </Col>
                <Col sm={2}>
                    <p>- 2 +</p>
                </Col>
                <Col sm={1}>
                    <p>x</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Producto;