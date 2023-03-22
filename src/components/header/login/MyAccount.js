import React, { useContext } from "react";
import { OverlayTrigger, Popover, Button, Form, Col, Container, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BiUser } from "react-icons/bi";
import './LogIn.css'
import { useState } from 'react';
import axios from "axios";
import LogInContext from "../../../contexts/LogInContext";
import { BiUserCircle } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import './MyAccount.css';
import { Link } from "react-router-dom";



function MyAccount(){

    const [login, loginData, updateLogin] = useContext(LogInContext);

    const logoutHandler = () => {
        updateLogin(false,{});
    }

    return(
        <OverlayTrigger
          trigger="click"
          key="bottom"
          rootClose
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`} className="popoverBodyLogIn">
              <Popover.Body>
                {/* TODO: METER EL NOMBRE DEL USUARIO */}
                <h5>¡Hola, nombreusuario!</h5>
                <Row className="verPedidos mt-2">
                    <Link to="/pedidos"><h6 href="/pedidos" className="verPedidos"><BsBoxSeam style={{ marginRight: '1rem'}}></BsBoxSeam>Ver mis pedidos</h6></Link>
                </Row>
                
                <div className="float-end mb-2 mt-2">
                    <Col><Button className="botonLogout" onClick={logoutHandler} style={{ width: "105px", height: "30px", fontSize: 12}}>Cerrar sesión</Button></Col>
                </div>
                

              </Popover.Body>
            </Popover>
          }
        >
          <Nav.Item><h2><CiUser style={{ marginRight: '1rem'}}></CiUser></h2> </Nav.Item>
        </OverlayTrigger>
        
    );
};

export default MyAccount;