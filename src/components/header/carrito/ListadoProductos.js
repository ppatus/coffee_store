import React from "react";
import Producto from "./Producto";

function ListadoProductos(props){
    let products = props.products;

    const generateProductList = (products) => {
        let output = [];
        products.forEach(element => {
            output.push(<Producto product={element}></Producto>);
        });
        return output;
    }

    return(
        <>
            {products.length == 0 && <div>Tu cesta está vacía</div>}
            {products.length > 0 && generateProductList(products)}
        </> 
    );
}

export default ListadoProductos;