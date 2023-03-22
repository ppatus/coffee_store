import React, { useContext } from "react";
import { OverlayTrigger, Popover, Button, Form, Col, Container, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BiUser } from "react-icons/bi";
import './LogIn.css'
import { useState } from 'react';
import axios from "axios";
import LogInContext from "../../../contexts/LogInContext";
import { Link } from "react-router-dom";

const LogIn = (props) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, loginData, updateLogin] = useContext(LogInContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1V12BYDrMT04hpCPZXIrIk-BrwylEYiA', authData)
        .then((response)=>{
            updateLogin(true, response.data);
            alert('Ha iniciado sesión correctamente.');
        }).catch((error) => {
            alert('Error al iniciar sesión. Comprueba que has introducido correctamente el usuario y la contraseña.');
        })
    }

    return(
        <OverlayTrigger
          trigger="click"
          key="bottom"
          rootClose
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`} className="popoverBodyLogIn">
                <Popover.Header as="h2">Iniciar sesión</Popover.Header>

                <Popover.Body>
                
                <Form onSubmit={submitHandler}>
                    <Container>
                        <Row>
                            <div className="mb-3">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control onChange={(event)=>setEmail(event.target.value)} type='email' value={email} placeholder="Introduce el correo electrónico"/>
                            </div>
                            
                            <div className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                onChange={(event)=>setPassword(event.target.value)}
                                type="password"
                                className="form-control"
                                value={password}
                                placeholder="Introduce la contraseña"
                            />
                            </div>
                            
                            <div className="mb-3">
                            </div>
                            <div className="d-grid">
                            <button type="submit" className="btn btn-primary logInButton">
                                Iniciar sesión
                            </button>
                            </div>
                            <div>
                                <br></br>
                                <p>¿Todavía no te has registrado?</p>
                                <Link to="/crear-cuenta"><Button className="btn btn-primary createAccountButton" variant="secondary" size="sm"  href="/crear-cuenta">
                                    Crear cuenta
                                </Button></Link>
                            </div>
                        </Row>
                    </Container>
                </Form>
                </Popover.Body>
            </Popover>
          }
        >
          <Nav.Item><BiUser></BiUser> Log in</Nav.Item>
        </OverlayTrigger>
        
    )
};

export default LogIn;