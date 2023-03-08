import Carousel from 'react-bootstrap/Carousel';

import placeholder1 from '../../../imgs/placeholder1.jpg';

function CarouselOfertas(){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={placeholder1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={placeholder1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={placeholder1}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
        
    );

}

export default CarouselOfertas;