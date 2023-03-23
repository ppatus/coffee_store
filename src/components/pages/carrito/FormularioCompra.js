import React, { useState, useContext } from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';
import axios from "axios";
import LogInContext from '../../../contexts/LogInContext';
import './CarritoPagina.css';
import ModalFinalizarCompra from './ModalFinalizarCompra';
import CarritoContext from '../../../contexts/Carrito';


function FormularioCompra(){

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [login, loginData, updateLogin] = useContext(LogInContext);
    const [showModalOK, setShowModalOK] = useState(false);

    const [productos, setProductos] = useContext(CarritoContext);

    const handleFinalizarCompra = () => {
        // TODO: SUBIR DATOS A BBDD
        setShowModalOK(true);
        setProductos([]);
    }
    const calcularPrecioTotal = () => {
        let price = 0;
        productos.forEach(producto => {
            price+=producto.price*producto.qty;
        });
        return price.toFixed(2).replace(".",",")+"€";
    }

    const calcularTotalProductos = () => {
        let total = 0;
        productos.forEach(producto => {
            total+=producto.qty;
        });
        return total;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
    
            const clientData = {
                compra: productos,
                precio: calcularPrecioTotal(),
                fecha: hoy.toLocaleDateString(),
                numItems: calcularTotalProductos(),
                user: loginData[0]
            };
    
            console.log(clientData);
            
            
            axios.post("https://telecoffee-30869-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json",clientData)
            .then((response) => {
                handleFinalizarCompra();
            });
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
                                                <Form.Control type="name" placeholder="Nombre y apellidos" />
                                            </Form.Group>
                                        </Col>
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