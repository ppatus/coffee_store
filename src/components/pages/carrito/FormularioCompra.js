import React, { useState, useContext } from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';
import axios from "axios";
import LogInContext from '../../../contexts/LogInContext';
import './CarritoPagina.css';
import ModalFinalizarCompra from './ModalFinalizarCompra';


function FormularioCompra(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [calle, setCalle] = useState('');
    const [portal, setPortal] = useState('');
    const [piso, setPiso] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [CP, setCP] = useState('');

    const [login, loginData, updateLogin] = useContext(LogInContext);
    const [showModalOK, setShowModalOK] = useState(false);

    const handleFinalizarCompra = () => {
        // TODO: SUBIR DATOS A BBDD
        setShowModalOK(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // const authData = {
        //     email: email,
        //     password: password,
        //     returnSecureToken: true
        // }
        // axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1V12BYDrMT04hpCPZXIrIk-BrwylEYiA', authData)
        // .then((response)=>{
        //     // TODO: CAMBIAR EMAIL POR EL NOMBRE DEL USUARIO 
        //     updateLogin(true, response.data);
        //     alert('Hola, '+{email}+'! Tu cuenta se ha creado correctamente :)');
        // }).catch((error) => {
        //     alert('¡Ups! Parece que ha habido un error... ¡Vuelve a intentarlo!');
        // })
    }

    return(
        
        <Container fluid className='d-flex justify-content-center align-items-center'>
            <Col lg='11'>
                <Card  className='my-5 rounded-3'>                    
                    <Card.Body className='px-5'>
                        <h3 className="px-md-2 mb-md-3 mt-4">Solo tienes que rellenar los siguientes campos para poder disfrutar de tu café :)</h3>
                        <Form  onSubmit={submitHandler}>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Col >
                                    <h5 className='d-flex justify-content-start align-items-start'>Datos personales</h5>
                                    <Row className=' mb-md-4'>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                {loginData[1] &&<Form.Control type="name" placeholder="Nombre y apellidos" value={loginData[1].name} disabled/>}
                                                {!loginData[1] &&<Form.Control type="name" placeholder="Nombre y apellidos" onChange={(event)=>setName(event.target.value)} value={name}/>}
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                {loginData[1] &&<Form.Control type="email" placeholder="Correo electrónico" value={loginData[1].email} disabled/> }
                                                {!loginData[1] &&<Form.Control type="email" placeholder="Correo electrónico" onChange={(event)=>setEmail(event.target.value)} value={email}/>}
                                            </Form.Group>
                                        </Col>
                                        
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                                {loginData[1] &&<Form.Control type="phone" placeholder="Número de teléfono" value={loginData[1].phone} disabled/>}
                                                {!loginData[1] &&<Form.Control type="phone" placeholder="Número de teléfono" onChange={(event)=>setPhone(event.target.value)} value={phone}/>}
                                                <p className="text-muted textMutedCasilla">Solo te llamaremos si tenemos alguna duda sobre la entrega de tu pedido</p>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <h5 className='d-flex justify-content-start align-items-start'>Dirección</h5>
                                    <Row className=' mb-md-4'>
                                        <Col>
                                            <Form.Group className="mb-4" controlId="formBasicCalle">
                                                {loginData[1] &&<Form.Control placeholder="Calle" value={loginData[1].calle} disabled/>}
                                                {!loginData[1] &&<Form.Control placeholder="Calle" onChange={(event)=>setCalle(event.target.value)} value={calle}/>}
                                                <p className="text-muted textMutedCasilla">P. ej. Calle Mayor</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-1" controlId="formBasicPortal">
                                                {loginData[1] && <Form.Control placeholder="Portal" value={loginData[1].portal} disabled/>}
                                                {!loginData[1] && <Form.Control placeholder="Portal" onChange={(event)=>setPortal(event.target.value)} value={portal} />}
                                                <p className="text-muted textMutedCasilla">P. ej. 5</p>
                                            </Form.Group>
                                        </Col>   
                                    </Row>
                                    <Row >
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicPiso">
                                                {loginData[1] &&<Form.Control placeholder="Piso y puerta" value={loginData[1].piso} disabled/>}
                                                {!loginData[1] &&<Form.Control placeholder="Piso y puerta" onChange={(event)=>setPiso(event.target.value)} value={loginData[1].piso}/>}

                                                <p className="text-muted textMutedCasilla">P. ej. 1A</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicCiudad">
                                                {loginData[1] &&<Form.Control type="ciudad" placeholder="Ciudad" value={loginData[1].ciudad} disabled/>}
                                                {!loginData[1] &&<Form.Control type="ciudad" placeholder="Ciudad"onChange={(event)=>setCiudad(event.target.value)} value={ciudad}/>}

                                                <p className="text-muted  textMutedCasilla">P. ej. Pamplona</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicCP">
                                                {loginData[1] &&<Form.Control type="cp" placeholder="Código postal" value={loginData[1].CP} disabled/>}
                                                {!loginData[1] &&<Form.Control type="cp" placeholder="Código postal" onChange={(event)=>setCP(event.target.value)} value={CP} />}

                                                <p className="text-muted textMutedCasilla">P. ej. 31001</p>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                            </Row>
                            <br></br>
                            <Button type="submit" className="btn btn-primary logInButton btn-lg" onClick={handleFinalizarCompra}>
                                Finalizar compra
                            </Button>
                        </Form>
                    </Card.Body>
                    <ModalFinalizarCompra variable={showModalOK}></ModalFinalizarCompra>
                    
                </Card>
            </Col>

        </Container>
    );
};

export default FormularioCompra;