import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Tooltip, Container } from 'react-bootstrap';
import './CarritoPagina.css';
import { BsTrash } from "react-icons/bs";

function Item_Carrito(props){
    let producto = props.producto;
    return(
        <Container fluid>
            <Row className='d-inline-flex'>
                <Col lg="3" className="mb-4 mb-lg-0">
                    <div>
                    <img
                        src={producto.img}
                        className="w-100" />
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                        </div>
                    </a>
                    </div>
                </Col>

                <Col lg="9" className=" mb-4 mb-lg-0 align-self-center">
                    <Row>
                        <Col>
                            <p>
                            <strong>{producto.name}</strong>
                            </p>
                        </Col>
                        <Col>
                            <h4 className="text-start text-md-center">
                            <strong>{producto.price.toFixed(2).replace(".",",")} €</strong>
                            </h4>
                        </Col>
                        
                    </Row>
                    
                    <Row style={{marginLeft:"5px"}}>
                        <div className="d-flex mb-4" >
                        <Button className="px-3 me-2 buttons">-</Button>

                        <p>{producto.qty}</p>

                        <Button className="px-3 ms-2 buttons">+</Button>
                        <Button style={{marginLeft:"10px"}} variant='danger'>
                            <BsTrash></BsTrash>
                        </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    );
};

export default Item_Carrito;