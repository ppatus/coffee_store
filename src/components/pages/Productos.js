import { React, useEffect, useState } from "react";
import axios from "axios";

function Productos(props){

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        let url = "https://telecoffee-30869-default-rtdb.europe-west1.firebasedatabase.app/";

        switch(props.category){
            case "grano":
                console.log("Productos en grano");
                url += "en_grano.json";
                break;
            case "molido":
                console.log("Productos molidos");
                url += "molido.json";
                break;
            case "accesorios":
                console.log("Productos accesorios");
                url += "accesorios.json";
                break;
        }


        axios.get(url)
        .then((response) => {
            setProductos(response.data);
        });
    },[props]);

    return(
        <>
            <div>Esto es la página de productos {props.category}.</div>
            <div>Y su listado de productos son esos:</div>
            <div>{JSON.stringify(productos)}</div>
        </>
    );
}

export default Productos;