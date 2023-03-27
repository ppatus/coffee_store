import React from 'react';
import CarouselOfertas from "../carousels/ofertas/CarouselOfertas";
import CarouselProductos from "../carousels/productos/CarouselProductos";
import { useLocation } from 'react-router';

function Index(){
    
    return(
        <>
            <CarouselOfertas/>
            <CarouselProductos/>
        </>
        
    );
}

export default Index;