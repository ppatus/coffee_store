import React, { useContext, useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
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
        const index = carrito.indexOf({"name":nombre,"img":imagen,"price":precio,"qty":quantity});
        carrito.splice(index,1);
        setQuantity(0);
    }

    const añadirUno = () => {
        const index = carrito.indexOf({"name":nombre,"img":imagen,"price":precio,"qty":quantity});
        setQuantity(quantity+1);
        carrito.splice(index,1,{"name":nombre,"img":imagen,"price":precio,"qty":quantity+1});
    }

    const quitarUno = () => {
        const index = carrito.indexOf({"name":nombre,"img":imagen,"price":precio,"qty":quantity});
        setQuantity(quantity-1);
        if(quantity-1==0){
            //Borramos el producto
            carrito.splice(index,1);
        } else {
            carrito.splice(index,1,{"name":nombre,"img":imagen,"price":precio,"qty":quantity-1});
        }
    }

    return(

        <Card style={{ width: '23%', marginLeft:"10px", marginRight:"10px", marginBottom:"20px" }}>
          <Card.Img
              variant="top"
              //src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
              src={ imagen }
              height="200rem"
              style={{objectFit: 'contain'}}
          />
          <Card.Body className = "d-flex flex-column">
              <Card.Title className = "d-flex justify-content-space-between align-items-baseline">
                  <p style={{fontSize:"20px"}}>{nombre}</p>
                  <p className='ms-2 text-muted'>{precio} €</p>
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
    );
};

export default Store_item;