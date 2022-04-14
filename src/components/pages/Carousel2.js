import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Two1 from '../../img/harrison hotel/two beds/Two1.jpg';
import Two2 from '../../img/harrison hotel/two beds/Two2.jpg';
import Two3 from '../../img/harrison hotel/two beds/Two3.jpg';
import Two4 from '../../img/harrison hotel/two beds/Two4.jpg';
import Two5 from '../../img/harrison hotel/two beds/Two5.jpg';
import Two6 from '../../img/harrison hotel/two beds/Two6.jpg';
import Two7 from '../../img/harrison hotel/two beds/Two7.jpg';
import Two8 from '../../img/harrison hotel/two beds/Two8.jpg';
import Two9 from '../../img/harrison hotel/two beds/Two9.jpg';
import Two10 from '../../img/harrison hotel/two beds/Two10.jpg';
const Carousel2 = () => {
  return (
    <div className="caja">
      <div className="elemento">
        <h3 className="cardTitle">Deluxe Queen Room</h3>
        <div className="cajadescription">
          <p className="carddescription">
            -2 Large double beds <br />
            -Room 23 m² <br />
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
            <img className="d-block w-100" src={Two1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two4} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two5} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two6} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two7} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two8} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two9} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two10} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousel2;
