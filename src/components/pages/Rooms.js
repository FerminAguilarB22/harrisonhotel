import React from "react";
import "../styles/rooms.css";
import { Carousel } from "react-carousel-minimal";
import { Link } from "react-router-dom";
import Carousel1 from "./Carousel1";
const Rooms = () => {
  const data1 = [
    {
      image:
        "https://content.r9cdn.net/rimg/himg/77/59/0f/sembo-118314534-80256c01_z.jpg_resizeMode=FitInside_formatSettings=jpeg(quality-90)-556538.jpg?width=113&height=82&xhint=540&yhint=333&crop=true"
    },
    {
      image:
        "https://content.r9cdn.net/rimg/himg/77/59/0f/sembo-118314534-2418b604_z.jpg_resizeMode=FitInside_formatSettings=jpeg(quality-90)-206586.jpg?width=915&height=345&xhint=540&yhint=333&crop=true"
    },
    {
      image:
        "https://content.r9cdn.net/rimg/himg/77/59/0f/sembo-118314534-b7251720_z.jpg_resizeMode=FitInside_formatSettings=jpeg(quality-90)-975179.jpg?width=113&height=82&crop=true"
    },
    {
      image:
        "https://content.r9cdn.net/rimg/himg/77/59/0f/sembo-118314534-7ad26346_z.jpg_resizeMode=FitInside_formatSettings=jpeg(quality-90)-431890.jpg?width=113&height=82&xhint=540&yhint=333&crop=true"
    }
  ];
 


  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };


  return (
    <>
      <section className="contenedor">
        {/* Doble Room */}
        <div className="caja">
          <div className="elemento">
            <h3 className="cardTitle">Doble Room</h3>
            <p className="carddescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              nesciunt ipsum laboriosam inventore odio facere.
            </p>
            <div className="booknowPosition">
            <Link to='/contact'>Book now</Link>
            </div>
          </div>
          <div className="elemento">
          <div className="App">
        <div style={{ textAlign: "center" }}>
          <div
          
          >
            <Carousel
            className='carousel'
              data={data1}
              time={5000} 
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              automatic={true}
              dots={true}
              pauseIconSize="40px"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
      
            />
          </div>
        </div>
      </div>
          </div>
        </div>
      </section>
    
    </>
  );
};
export default Rooms;
