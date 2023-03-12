import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";

function store_item(props){

    const quantity = 2;

    const precio = props.precio;
    const nombre = props.nombre;
    const imagen = props.imagen;
    const descripcion = props.descripcion;

    return(

        <Card style={{ width: '15rem'}}>
          <Card.Img
              variant="top"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
              //src={ imagen }
              height="200rem"
              style={{objectFit: 'cover'}}
          />
          <Card.Body classname = "d-flex flex-column">
              <Card.Title classname = "d-flex justify-content-space-between align-items-baseline">
                  {/* <p className='fs-2'>{ nombre }</p>
                  <p className='ms-2 text-muted'>{ precio } € </p> */}
                  <p className='fs-2'>nombre</p>
                  <p className='ms-2 text-muted'>precio</p>
              </Card.Title >
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Text>{ descripcion }</Card.Text>
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

export default store_item;