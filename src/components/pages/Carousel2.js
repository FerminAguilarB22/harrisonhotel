import React from 'react';
import { Carousel } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Img4 from '../../img/img4.jpg';
import Img5 from '../../img/img5.jpg';
import Img6 from '../../img/img6.jpg';
const Carousel2 = () => {
    return (
        <div className="caja">
        <div className="elemento">
          <h3 className="cardTitle">Triple Room</h3>
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
                src={Img4}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Img5}
  
              />
  
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Img6}
   
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
};

export default Carousel2;