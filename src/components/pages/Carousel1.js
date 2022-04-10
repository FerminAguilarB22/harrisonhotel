import React from "react";
import { Carousel } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Img1 from '../../img/img1.jpg';
import Img2 from '../../img/img2.jpg';
import Img3 from '../../img/img3.jpg';
const Carousel1 = () => {
  return (
    <div className="caja">
      <div className="elemento">
        <h3 className="cardTitle">Doble Room</h3>
        <p className="carddescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          nesciunt ipsum laboriosam inventore odio facere.
        </p>
        <div className="booknowPosition">
          <Link to="/contact">Book now</Link>
        </div>
      </div>
      <div className="elemento">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img1}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img2}

            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img3}
 
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousel1;
