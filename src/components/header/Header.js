import '../header/Header.css';
import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiUser } from "react-icons/bi";
import logo from '../../imgs/logo.png';
import Carrito from './carrito/Carrito';
import { Link } from 'react-router-dom';
import LogIn from './login/LogIn';
import { BsFillClipboard2PulseFill } from 'react-icons/bs';
import LogInContext from '../../contexts/LogInContext';
import MyAccount from './login/MyAccount';

function Header() {

    const [login, loginData, updateLogin] = useContext(LogInContext);

    return(
        <div>
            <Navbar className="links_row" expand="lg">
                <Container>
                <NavLink to="/">
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
                </NavLink>

                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> no sé si esto hace falta lol*/}

                    <Nav className="container-fluid" style={{alignItems: "center"}}>
                        <NavDropdown href="#cafe" title="Café">
                            <NavLink to="/productos/cafe-en-grano"><NavDropdown.Item href="/productos/cafe-en-grano">Café en grano</NavDropdown.Item></NavLink>
                            <NavLink to="/productos/cafe-molido"><NavDropdown.Item href="/productos/cafe-molido">Café molido</NavDropdown.Item></NavLink>                             
                        </NavDropdown>
                        
                        <NavLink to="/productos/accesorios"><Nav.Link href="/productos/accesorios">Accesorios</Nav.Link></NavLink>
                        <Nav.Link href="#Accesorios">¿Quienes somos?</Nav.Link>    
                        <Navbar.Collapse className="justify-content-end">
                            {login && <MyAccount></MyAccount>}
                            {!login && <LogIn></LogIn>}
                            <Carrito></Carrito>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;