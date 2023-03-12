import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import oferta1 from '../../../imgs/ofertas/majahual.png';
import oferta2 from '../../../imgs/ofertas/guji.png';

function CarouselOfertas(){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={oferta1}
                    alt="Café Majahual"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={oferta2}
                    alt="Café Guji"
                />
            </Carousel.Item>
        </Carousel>
        
    );

}

export default CarouselOfertas;