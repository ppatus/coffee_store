import React, { useContext, useEffect, useState } from 'react';
import {Card, Button, Container, Col, Row} from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";
import CarritoContext from '../../../contexts/Carrito';

function Store_item(props){

    const [carrito, setCarrito] = useContext(CarritoContext);

    const precio = props.precio;
    const nombre = props.nombre;
    const imagen = props.imagen;
    const descripcion = props.descripcion;

    let nameMap = carrito.map((producto) => producto.name);
    let index = 0;
    let initial_qty = 0;

    if(nameMap.includes(nombre)) {
        //Si el producto ya está en el carrito
        index = nameMap.indexOf(nombre);
        initial_qty = carrito[index].qty;
    }

    const [quantity, setQuantity] = useState(initial_qty);
 
    
    

    //Nada más este componente cargue tenemos que comprobar si ya existen unidades de este producto en el carrito
    /*useEffect(() => {
        let nameMap = carrito.map((producto) => producto.name);
        if(nameMap.includes(nombre)){
            //Si el producto ya está en el carrito
            const index = nameMap.indexOf(nombre);
            setQuantity(carrito[index].qty);
        }
    }, []);*/

    const añadirProducto = () => {
        setQuantity(1);
        carrito.push({"name":nombre,"img":imagen,"price":precio,"qty":1});
    }

    const eliminarProducto = () => {
        const index = carrito.map((producto, index) => {
            if(producto.name == nombre) {
                return index;
            }
            return -1;
        }).filter(index => index!==-1)[0];
        carrito.splice(index,1);
        setQuantity(0);
    }

    const añadirUno = () => {
        const index = carrito.map((producto, index) => {
            if(producto.name == nombre) {
                return index;
            }
            return -1;
        }).filter(index => index!==-1)[0];
        setQuantity(quantity+1);
        carrito[index]["qty"]++;
    }

    const quitarUno = () => {
        const index = carrito.map((producto, index) => {
            if(producto.name == nombre) {
                return index;
            }
            return -1;
        }).filter(index => index!==-1)[0];
        setQuantity(quantity-1);
        carrito[index]["qty"]--;
        if(carrito[index]["qty"]===0) eliminarProducto();
    }

    return(
        <Col md={3} sm={4} xs={6} style={{marginBottom:"20px"}}>
        <Card style={{ height:"100%" }}>
          <Card.Img
              variant="top"
              //src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
              src={ imagen }
              height="200rem"
              style={{objectFit: 'contain'}}
          />
          <Card.Body className = "d-flex flex-column">
              <Card.Title className = "d-flex justify-content-space-between align-items-baseline">
                <Container>
                    <Row style={{fontSize:"18px"}}>{nombre}</Row>
                    <Row style={{fontSize:"17px", color: "gray", textAlign: "center", marginTop:"5px", marginBottom:"5px"}}><p>{precio.toFixed(2).replace(".",",")} €</p></Row>
                </Container>
              </Card.Title >
              <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className='w-100' onClick={añadirProducto}>+ Añadir al carrito</Button>
                ) : (
                    <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem"}}
                    >
                        <div className='d-flex align-items-center
                        justify-content-center'
                        style={{gap: ".5rem"}}
                        >
                           <Button className='w-100' onClick={quitarUno}>-</Button>
                            <div>
                                <span className='fs-10'>{quantity}</span>
                            </div>
                           <Button className='w-100' onClick={añadirUno}>+</Button>
                        </div>
                        <Button variant='danger' onClick={eliminarProducto}>
                            <BsTrash></BsTrash>
                        </Button>
                    </div>)
                }
            </div>
            
              {/* <div className="mt-auto">
                <Button className='w-100'>+ Añadir al carrito</Button>

              </div> */}
          </Card.Body>

      </Card>
      </Col>
    );
};

export default Store_item;