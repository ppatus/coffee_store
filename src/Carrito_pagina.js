import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Container } from 'react-bootstrap';

function Carrito_pagina(){
    return(
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>Mi carrito</CardHeader>
                            <Row>
                                <Col widht='2'>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"></img>
                                </Col>
                                <Col>
                                    <p>
                                    <strong>Blue denim shirt</strong>
                                    </p>
                                    <p>Color: blue</p>
                                    <p>Size: M</p>

                                    <Button wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                    title="Remove item">
                                        
                                    <icon fas icon="BsTrash" />
                                    </Button>
                                </Col>
                                <Col>
                                <p>a</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col widht='2'>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"></img>
                                </Col>
                                <Col>
                                    <p>
                                    <strong>Blue denim shirt</strong>
                                    </p>
                                    <p>Color: blue</p>
                                    <p>Size: M</p>

                                    <Button wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                    title="Remove item">
                                        
                                    <icon fas icon="BsTrash" />
                                    </Button>
                                </Col>
                                <Col>
                                <p>a</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col widht='2'>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"></img>
                                </Col>
                                <Col>
                                    <p>
                                    <strong>Blue denim shirt</strong>
                                    </p>
                                    <p>Color: blue</p>
                                    <p>Size: M</p>

                                    <Button wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                    title="Remove item">
                                        
                                    <icon fas icon="BsTrash" />
                                    </Button>
                                </Col>
                                <Col>
                                <p>a</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Carrito_pagina;