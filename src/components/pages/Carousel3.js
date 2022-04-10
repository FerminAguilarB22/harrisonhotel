import React from 'react';
import { Carousel } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Img7 from '../../img/img7.jpg';
import Img8 from '../../img/img8.jpg';
import Img9 from '../../img/img9.jpg';
const Carousel3 = () => {
    return (
        <div className="caja">
        <div className="elemento">
          <h3 className="cardTitle">King Room</h3>
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
                src={Img7}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Img8}
  
              />
  
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Img9}
   
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
};

export default Carousel3;