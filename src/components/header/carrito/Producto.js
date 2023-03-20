import { React, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Producto.css";
import CarritoContext from "../../../contexts/Carrito";

import { GoX } from "react-icons/go";


function Producto(props){
    let product = props.product;
    let carrito = props.carrito;
    let setCarrito = props.setCarrito;

    const eliminarProducto = () => {
        let nombre = product.name;
        let imagen = product.img;
        let precio = product.price;
        let quantity = product.qty;

        const index = carrito.indexOf({"name":nombre,"img":imagen,"price":precio,"qty":quantity});
        let c = carrito.filter(product => !(product.name == nombre && product.img == imagen && product.price == precio && product.qty == quantity));
        setCarrito(c);

    }

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
                    <p>- {product.qty} +</p>
                </Col>
                <Col sm={1}>
                    <GoX className="cross" onClick={eliminarProducto}/>
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