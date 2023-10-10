import { Carousel } from 'react-bootstrap';
import images1Carrusel from '../../assets/contact.png';

function MyCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images1Carrusel}
            alt="Primera diapositiva"
          />
          <Carousel.Caption>
            <h3>Primera diapositiva</h3>
            <p>Descripción de la primera diapositiva.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images1Carrusel}
            alt="Segunda diapositiva"
          />
          <Carousel.Caption>
            <h3>Segunda diapositiva</h3>
            <p>Descripción de la segunda diapositiva.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Agrega más diapositivas según sea necesario */}
      </Carousel>
    );
  }
  
  export default MyCarousel;
  