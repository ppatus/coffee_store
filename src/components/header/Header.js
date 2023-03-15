import '../header/Header.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import logo from '../../imgs/logo.png';
import Carrito from './carrito/Carrito';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Telecoffee
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Nav className="container-fluid">
                        <NavDropdown href="#cafe" title="Café">
                            <NavDropdown.Item href="/productos/cafe-en-grano">Café en grano</NavDropdown.Item>
                            <NavDropdown.Item href="/productos/cafe-molido">Café molido</NavDropdown.Item>                             
                        </NavDropdown>
                        
                        <Nav.Link href="/productos/accesorios">Accesorios</Nav.Link>
                        <Nav.Link href="#Accesorios">¿Quienes somos?</Nav.Link>    
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Item><BiUser></BiUser> Log in</Nav.Item>
                            <Carrito></Carrito>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;