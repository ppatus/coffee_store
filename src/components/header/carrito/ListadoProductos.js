import React from "react";
import Producto from "./Producto";

function ListadoProductos(props){
    let carrito = props.products[0];
    let setCarrito = props.products[1];

    const generateProductList = (carrito) => {
        let output = [];
        let key_counter = 1;
        carrito.forEach(element => {
            output.push(<Producto product={element} key={key_counter} carrito={carrito} setCarrito={setCarrito}></Producto>);
            key_counter++;
        });
        return output;
    }

    return(
        <>
            {carrito.length == 0 && <div>Tu cesta está vacía</div>}
            {carrito.length > 0 && generateProductList(carrito)}
        </> 
    );
}

export default ListadoProductos;