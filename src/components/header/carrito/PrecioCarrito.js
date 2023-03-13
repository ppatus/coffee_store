import React from "react";
import { Row, Col } from "react-bootstrap";
import "./PrecioCarrito.css";

function PrecioCarrito() {
    return(
    <>
    <Row className="totalPriceContainer">
        <Col>
            <strong>Total:</strong>
        </Col>
        <Col className="totalPrice">
        45€
        </Col>
    </Row>
    </>
    );
}

export default PrecioCarrito;