import React, { useState, useContext } from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';
import axios from "axios";
import LogInContext from '../../contexts/LogInContext';
import { useNavigate } from 'react-router';
import Modal from 'react-bootstrap/Modal';


function CreateAccount(){

    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [calle,setCalle] = useState('');
    const [portal,setPortal] = useState('');
    const [piso,setPiso] = useState('');
    const [ciudad,setCiudad] = useState('');
    const [CP,setCP] = useState('');
    const [login, loginData, updateLogin] = useContext(LogInContext);

    const [showModalOK, setShowModalOK] = useState(false);
    const [showModalFail, setShowModalFail] = useState(false);

    const handleCloseOK = () => {
        setShowModalOK(false);
        navigate(-1);
    };
    
    const handleShowOK = () => setShowModalOK(true);
    
    const handleCloseFail = () => {
        setShowModalFail(false);
    };
    
    const handleShowFail = () => setShowModalFail(true);

    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const authData = {
            email: email,
            password: password,
            nombre: nombre,
            returnSecureToken: true
        }

        if(email=="" || nombre=="" || phone=="" || calle=="" || portal=="" || piso=="" || ciudad=="" || CP==""){
            handleShowFail();
            return;
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1V12BYDrMT04hpCPZXIrIk-BrwylEYiA', authData)
        .then((response)=>{            
            updateLogin(true, response.data);
            //Y ahora, mandamos a la base de datos los datos del usuario
            const clienData = {
                email: email,
                name: nombre,
                phone: phone,
                calle: calle,
                portal: portal,
                piso: piso,
                ciudad: ciudad,
                CP: CP
            };

            axios.post("https://telecoffee-30869-default-rtdb.europe-west1.firebasedatabase.app/clients.json",clienData)
            .then((response) => {
                handleShowOK();
            });
            
            //toast('¡Bienvenido, Pablo! Esperemos que...');
        }).catch((error) => {
            handleShowFail();
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
                                                <Form.Control type="name" placeholder="Nombre y apellidos" onChange={(event)=>setNombre(event.target.value)} value={nombre} />
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
                                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                                <Form.Control type="phone" placeholder="Número de teléfono" onChange={(event)=>setPhone(event.target.value)} value={phone}/>
                                                <p className="text-muted textMutedCasilla">Solo te llamaremos si tenemos alguna duda sobre la entrega de tu pedido</p>

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <h5 className='d-flex justify-content-start align-items-start'>Dirección</h5>
                                    <Row className=' mb-md-4'>
                                        <Col>
                                            <Form.Group className="mb-4" controlId="formBasicText">
                                                <Form.Control type="calle" placeholder="Calle" onChange={(event)=>setCalle(event.target.value)} value={calle}/>
                                                <p className="text-muted textMutedCasilla">P. ej. Calle Mayor</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-1" controlId="formBasicText">
                                                <Form.Control placeholder="Portal" onChange={(event)=>setPortal(event.target.value)} value={portal}/>
                                                <p className="text-muted textMutedCasilla">P. ej. 5</p>
                                            </Form.Group>
                                        </Col>
                                        
                                    </Row>
                                    <Row >
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                <Form.Control placeholder="Piso y puerta" onChange={(event)=>setPiso(event.target.value)} value={piso}/>
                                                <p className="text-muted textMutedCasilla">P. ej. 1A</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                <Form.Control type="ciudad" placeholder="Ciudad" onChange={(event)=>setCiudad(event.target.value)} value={ciudad}/>
                                                <p className="text-muted  textMutedCasilla">P. ej. Pamplona</p>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                <Form.Control type="cp" placeholder="Código postal" onChange={(event)=>setCP(event.target.value)} value={CP}/>
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

                            <Modal show={showModalOK} centered>
                                <Modal.Header closeButton>
                                <Modal.Title>¡Bienvenido a Telecoffee!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>¡{nombre}, estamos encantados de saludarte!</Modal.Body>
                                <Modal.Body>¡Tu cuenta se ha creado correctamente!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseOK}>
                                    ¡Vale!
                                </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={showModalFail} centered>
                                <Modal.Header closeButton>
                                <Modal.Title>Algo no ha ido bien...</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>¡Revisa bien todos tus campos antes de crear una cuenta!</Modal.Body>
                                <Modal.Body>¡Estás a punto de formar parte de Telecoffee!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="danger" onClick={handleCloseFail}>
                                    Vale
                                </Button>
                                </Modal.Footer>
                            </Modal>

                        </Form>
                    </Card.Body>
                    
                </Card>
            </Col>

        </Container>
    );
};

export default CreateAccount;