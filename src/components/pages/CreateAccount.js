import React, { useState, useContext } from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';
import axios from "axios";
import LogInContext from '../../contexts/LogInContext';


function CreateAccount(){

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [login, loginData, updateLogin] = useContext(LogInContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1V12BYDrMT04hpCPZXIrIk-BrwylEYiA', authData)
        .then((response)=>{
            // TODO: CAMBIAR EMAIL POR EL NOMBRE DEL USUARIO 
            updateLogin(true, response.data);
            alert('Hola, '+{email}+'! Tu cuenta se ha creado correctamente :)');
        }).catch((error) => {
            alert('¡Ups! Parece que ha habido un error... ¡Vuelve a intentarlo!');
        })
    }

    return(

        <Container fluid className='d-flex justify-content-center align-items-center'>
            <Col lg='7'>
                <Card  className='my-5 rounded-3'>                    
                    <Card.Body className='px-5'>
                        <h3 className=" px-md-2 mb-md-3">Hola, coffeelover</h3>
                        <p className="text-muted  mb-md-5">Crea tu cuenta para acceder al historial de tus pedidos online y poder hacer tus próximas compras más rápido :)</p>
                        <Form onSubmit={submitHandler} >
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Col >
                                    <h5 className='d-flex justify-content-start align-items-start'>Datos personales</h5>
                                    <Row className=' mb-md-4'>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="name" placeholder="Nombre y apellidos" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="password" placeholder="Contraseña" onChange={(event)=>setPassword(event.target.value)} value={password}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    

                                    <h5 className='d-flex justify-content-start align-items-start'>Datos de contacto</h5>
                                    <Row className=' mb-md-4'>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Correo electrónico" onChange={(event)=>setEmail(event.target.value)} value={email}/>
                                            </Form.Group>
                                        </Col>
                                        
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="phone" placeholder="Número de teléfono" />
                                                <p className="text-muted textMutedCasilla">Solo te llamaremos si tenemos alguna duda sobre la entrega de tu pedido</p>

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <h5 className='d-flex justify-content-start align-items-start'>Dirección</h5>
                                    <Row className=' mb-md-4'>
                                        <Col>
                                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                                <Form.Control placeholder="Calle" />
                                                <p className="text-muted textMutedCasilla">P. ej. Calle Mayor</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                                <Form.Control placeholder="Portal" />
                                                <p className="text-muted textMutedCasilla">P. ej. 5</p>
                                            </Form.Group>
                                        </Col>
                                        
                                    </Row>
                                    <Row >
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control placeholder="Piso y puerta" />
                                                <p className="text-muted textMutedCasilla">P. ej. 1A</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="ciudad" placeholder="Ciudad" />
                                                <p className="text-muted  textMutedCasilla">P. ej. Pamplona</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="cp" placeholder="Código postal" />
                                                <p className="text-muted textMutedCasilla">P. ej. 31001</p>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                            </Row>
                            <br></br>
                            <Button type="submit" className="btn btn-primary logInButton btn-lg " >
                                Crear cuenta
                            </Button>
                        </Form>
                    </Card.Body>
                    
                </Card>
            </Col>

        </Container>
    );
};

export default CreateAccount;