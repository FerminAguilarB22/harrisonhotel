import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import King1 from '../../img/harrison hotel/king/King1.jpg';
import King2 from '../../img/harrison hotel/king/King2.jpg';
import King3 from '../../img/harrison hotel/king/King3.jpg';
import King4 from '../../img/harrison hotel/king/King4.jpg';
const Carousel3 = () => {
  return (
    <div className="caja">
      <div className="elemento">
        <h3 className="cardTitle">King Studio / Family  Room</h3>
        <div className="cajadescription">
          <p className="carddescription">
            -2 Extra-large double beds <br />
            -Room 42 m² <br />
            -Air conditioning <br />
            -Bathroom in the room <br />
            -Free WIFI <br />
            -Free toiletries <br />
            -Flat screen tv <br />
            -Bath or shower <br />
            -Wood or parquet floor <br />
            -Safe <br />
            -Towels <br />
          </p>
          <p className="carddescription">
            -Linens <br />
            -Plug near the bed <br />
            -Desk <br />
            -Fridge <br />
            -Telephone <br />
            -Clothes iron <br />
            -Hair dryer <br />
            -Wake up service <br />
            -Closet <br />
            -Toilet paper <br />
          </p>
        </div>
        <div className="booknowPosition">
          <Link to="/contact">Book now</Link>
        </div>
      </div>
      <div className="elemento">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={King1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={King2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={King3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={King4} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousel3;
