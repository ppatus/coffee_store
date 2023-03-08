import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./CarouselProductos.css";
import Producto from "./Producto";

import Coffee1 from "../../../imgs/products/coffee1.jpg";
import Coffee2 from "../../../imgs/products/coffee2.jpg";

function CarouselProductos(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
    <div className="globalContainer">
        <p className="title">Productos destacados</p>
        <Carousel responsive={responsive}>
            <Producto img={Coffee1} name="Café 1" price="20€"/>
            <Producto img={Coffee2} name="Café 2" price="20€"/>
            <Producto img={Coffee1} name="Café 3" price="20€"/>
            <Producto img={Coffee2} name="Café 4" price="20€"/>
            <Producto img={Coffee1} name="Café 5" price="20€"/>
            <Producto img={Coffee2} name="Café 6" price="20€"/>
            <Producto img={Coffee1} name="Café 7" price="20€"/>
            <Producto img={Coffee2} name="Café 8" price="20€"/>
            <Producto img={Coffee1} name="Café 9" price="20€"/>
            <Producto img={Coffee2} name="Café 10" price="20€"/>
        </Carousel>
    </div>
    );
}

export default CarouselProductos;