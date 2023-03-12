import '../header/Header.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import logo from '../../imgs/logo.png';
import { Button } from 'react-bootstrap';
import LogIn from './LogIn';

function Header() {
    return(
        <div>
            <Navbar className="links_row" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="links_row">
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Telecoffee
                    </Navbar.Brand>

                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> no sé si esto hace falta lol*/}

                    <Nav className="container-fluid" >
                        <NavDropdown href="#cafe" title="Café"  >
                            <NavDropdown.Item href="#cafe/1.1">Café en grano</NavDropdown.Item>
                            <NavDropdown.Item href="#cafe/1.2">Café molido</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>                                
                        </NavDropdown>
                        
                        <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
                        <Nav.Link href="#Accesorios">¿Quienes somos?</Nav.Link>  
                          
                        <Navbar.Collapse className="justify-content-end">
                            <LogIn></LogIn>
                            <Nav.Item> <BsCart2></BsCart2> Carrito</Nav.Item>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;