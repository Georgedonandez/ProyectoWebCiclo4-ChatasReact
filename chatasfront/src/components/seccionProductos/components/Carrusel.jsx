import React from "react";
import {Carousel} from "react-bootstrap";


export default function Carrusel() {
  return (
    <div className="container table-responsive" style={{padding: "150px 5px 30px"}}>
      {/* Inicio Carrusel */}
      <Carousel fade>
        <Carousel.Item>
          <a href="http://localhost:3000/products#">
          <img
            title="Churrasco"
            className="d-block w-100"
            src="https://www.tauruscarnes.com/wp-content/uploads/2020/08/Churrasco-baja-2.jpg"
            height="450"
            alt="First slide"
          />
          </a>
        </Carousel.Item>
        <Carousel.Item>
        <a href="http://localhost:3000/products#">
          <img
            title="Lomo de Cerdo"
            className="d-block w-100"
            src="https://carnescastillo.com/wp-content/uploads/2020/04/Lomo-cerdo-crudo.jpg"
            height="450"
            alt="Second slide"
          />
          </a>
        </Carousel.Item>
        <Carousel.Item>
        <a href="http://localhost:3000/products#">
          <img
            title="Pollo"
            className="d-block w-100 h-450"
            src="https://www.cocinavital.mx/wp-content/uploads/2018/01/rayas-blancas-pollo-crudo-malas.jpg"
            height="450"
            alt="Third slide"
          />
          </a>
        </Carousel.Item>
      </Carousel>
      {/* Fin Carrusel */}
    </div>
  );
}
