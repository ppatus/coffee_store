import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";

function Store_item(props){

    const quantity = 2;

    const precio = props.precio;
    const nombre = props.nombre;
    const imagen = props.imagen;
    const descripcion = props.descripcion;

    return(

        <Card style={{ width: '23%', marginLeft:"10px", marginRight:"10px", marginBottom:"20px" }}>
          <Card.Img
              variant="top"
              //src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
              src={ imagen }
              height="200rem"
              style={{objectFit: 'contain'}}
          />
          <Card.Body classname = "d-flex flex-column">
              <Card.Title classname = "d-flex justify-content-space-between align-items-baseline">
                  <p style={{fontSize:"20px"}}>{nombre}</p>
                  <p className='ms-2 text-muted'>{precio} €</p>
              </Card.Title >
              <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className='w-100'>+ Añadir al carrito</Button>
                ) : (
                    <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem"}}
                    >
                        <div className='d-flex align-items-center
                        justify-content-center'
                        style={{gap: ".5rem"}}
                        >
                           <Button className='w-100'>-</Button>
                            <div>
                                <span className='fs-10'>{quantity}</span>
                            </div>
                           <Button className='w-100'>+</Button>
                        </div>
                        <Button variant='danger'>
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
    );
};

export default Store_item;