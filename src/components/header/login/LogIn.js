import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BsCart2 } from "react-icons/bs";
import { BiColor, BiUser } from "react-icons/bi";
import './LogIn.css'

function LogIn() {

    const productos=[
        {"name":"Café 1 - y encima vamos a hacer que el nombre sea largo","img":'',"price":20,"qty":2},
        {"name":"Café 2","img":'',"price":40,"qty":4},
        {"name":"Café 3","img":'',"price":30,"qty":3}
    ]; //definido de manera auxiliar por el momento


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
                
                <form>
                    <div className="mb-3">
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Introducir correo electrónico"
                    />
                    </div>
                    <div className="mb-3">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Introducir contraseña"
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
                        <Button className="btn btn-primary createAccountButton" variant="secondary" size="sm"  href="/crear-cuenta">
                            Crear cuenta
                        </Button>
                    </div>
                    
                </form>


                </Popover.Body>
            </Popover>
          }
        >
          <Nav.Item><BiUser></BiUser> Log in</Nav.Item>
        </OverlayTrigger>
        
    )
};

export default LogIn;