import React from "react";
import "../styles/rooms.css";
import { Carousel } from "react-carousel-minimal";
import { Link } from "react-router-dom";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";

const Rooms = () => {
  return (
    <>
      <section className="contenedor">
        <Carousel1></Carousel1>
        <Carousel2></Carousel2>
        <Carousel3></Carousel3>
      </section>
    
    </>
  );
};
export default Rooms;
