import React from "react";
import { Row, Col } from "react-bootstrap";
import "./PrecioCarrito.css";

function PrecioCarrito(props) {

    let carrito = props.products;

    const calcularPrecioTotal = () => {
        let price = 0;
        carrito.forEach(producto => {
            price+=producto.price*producto.qty;
        });
        return price.toFixed(2).replace(".",",")+"€";
    }
    return(
    <>
    <Row className="totalPriceContainer">
        <Col>
            <strong>Total:</strong>
        </Col>
        <Col className="totalPrice">
        {calcularPrecioTotal()}
        </Col>
    </Row>
    </>
    );
}

export default PrecioCarrito;