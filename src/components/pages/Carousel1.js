import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import One1 from '../../img/harrison hotel/one/One1.jpg';
import One2 from '../../img/harrison hotel/one/One2.jpg';
import One3 from '../../img/harrison hotel/one/One3.jpg';
import One4 from '../../img/harrison hotel/one/One4.jpg';
import One5 from '../../img/harrison hotel/one/One5.jpg';
import One6 from '../../img/harrison hotel/one/One6.jpg';
import One7 from '../../img/harrison hotel/one/One7.jpg';
import One8 from '../../img/harrison hotel/one/One8.jpg';
const Carousel1 = () => {
  return (
    <div className="caja">
      <div className="elemento">
        <h3 className="cardTitle">Double Room</h3>
        <div className="cajadescription">

        <p className="carddescription">
          -Large double bed <br />
          -Room 23 m²
          <br />
          -Air conditioning
          <br />
          -Bathroom in the room
          <br />
          -Free WIFI
          <br />
          -Free toiletries
          <br />
          -Flat screen tv
          <br />
          -Bath or shower
          <br />
          -Wood or parquet floor
          <br />
          -Safe
          <br />
        </p>
        <p className="carddescription">
          -Towels
          <br />
          -Linens
          <br />
          -Plug near the bed
          <br />
          -Desk
          <br />
          -Fridge
          <br />
          -Telephone
          <br />
          -Clothes iron
          <br />
          -Hair dryer
          <br />
          -Wake up service
          <br />
          -Closet
          <br />
          -Toilet paper
          <br />
        </p>
        </div>
        <div className="booknowPosition">
          <Link to="/contact">Book now</Link>
        </div>
      </div>
      <div className="elemento">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={One1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={One2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={One3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={One4} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={One5} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={One6} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={One7} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={One8} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousel1;
