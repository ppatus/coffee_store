import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";

import './footer.css';

import logo from '../../imgs/logo.png';


function Footer(){
    return(
    <footer>
        <Container fluid>
            <Row className="social_row">
                <Col><SocialIcon fgColor="white" url="https://twitter.com/" /></Col>
                <Col><SocialIcon fgColor="white" url="https://www.instagram.com/" /></Col>
                <Col><SocialIcon fgColor="white" url="https://www.facebook.com/" /></Col>
                <Col><SocialIcon fgColor="white" url="https://www.youtube.com/" /></Col>
            </Row>
            <Row className="links_row">
                <Col className="logoCol">
                    <img src={logo} alt="Logo" className="logo"></img>
                    <p><b>Telecoffee</b></p>
                </Col>
                <Col className="descriptionCol">
                    Somos expertos en telecomunicaciones y aspiramos también a ser expertos en el arte del café. Descubre nuestra selección de cafés y packs de degustación para amantes del café y para estudiantes de teleco que se trasnochan para sacar un 5.
                </Col>
                <Col>
                    <Container className="contact_container">
                    <h5>Contáctanos</h5>
                        <p><IoLocationSharp className="icon"/>UPNA</p>
                        <p><IoCall className="icon"/>948 12 34 56</p>
                        <IoMail className="icon"/><a className="links" href="mailto:coffeestore@upna.es">coffeestore@upna.es</a>
                    </Container>
                </Col>
                <Col>
                    <Container className="contact_container">
                    <h5>Descúbrenos</h5>
                        <Row><a className="links">Cafés</a></Row>
                        <Row><a className="links">Accesorios</a></Row>
                        <Row><a className="links">Aviso legal</a></Row>
                    </Container>
                </Col>
            </Row>
            <Row className="copyright_row">
                <Col>
                    <div><b>Telecoffee © 2023</b></div>
                    <div>Creado por Soraya Carrasco y Pablo Patús : )</div>
                </Col>
            </Row>
        </Container>
    </footer>
    );
}

export default Footer;