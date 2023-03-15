import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { Tooltip } from 'react-bootstrap';

function Item_Carrito(){
    return(
        <Row>
            <Col lg="3" md="12" className="mb-4 mb-lg-0">
                <div>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    className="w-100" />
                <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                    </div>
                </a>
                </div>
            </Col>

            <Col lg="5" md="6" className=" mb-4 mb-lg-0 align-self-center">
                <p>
                <strong>Blue denim shirt</strong>
                </p>
                <p>Color: blue</p>
                <p>Size: M</p>

                <Tooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                title="Remove item">
                <p>Icono basura</p>
                </Tooltip>
            </Col>
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                <Button className="px-3 me-2">-</Button>

                {/* TODO: poner que pille el total de productos */}
                <p>2</p>

                <Button className="px-3 ms-2">+</Button>
                </div>

                <p className="text-start text-md-center">
                <strong>$17.99</strong>
                </p>
            </Col>
        </Row>
    );
};

export default Item_Carrito;