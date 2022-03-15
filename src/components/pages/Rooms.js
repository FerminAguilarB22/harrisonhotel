import React from "react";
import "../styles/rooms.css";
import Room from "../../img/arbisoftimages-272276-DSC_0340-image.jpg";
import { Carousel } from "react-carousel-minimal";

const Rooms = () => {
  const data = [
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

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
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
              <a href="https://www.hotelscombined.com/hotels/The-Harrison-Hotel-Miami-Beach,MiamiBeach,UnitedStates-c30651-h272276-details">
                Book now
              </a>
            </div>
          </div>
          <div className="elemento">
          <div className="App">
        <div style={{ textAlign: "center" }}>
          
          <div
           
          >
            <Carousel
            className='carousel'
              data={data}
              time={5000} 
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              automatic={true}
              dots={true}
              pauseIconSize="40px"
              // slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              // style={{
              //   textAlign: "center",
              //   maxWidth: "850px",
              //   maxHeight: "500px",
              //   margin: "40px auto",
              // }}
            />
          </div>
        </div>
      </div>
          </div>
        </div>
        {/* Triple Room */}
        <div className="caja">
          <div className="elemento">
            <h3 className="cardTitle">Triple Room</h3>
            <p className="carddescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              nesciunt ipsum laboriosam inventore odio facere.
            </p>
            <div className="booknowPosition">
              <a href="https://www.hotelscombined.com/hotels/The-Harrison-Hotel-Miami-Beach,MiamiBeach,UnitedStates-c30651-h272276-details">
                Book now
              </a>
            </div>
          </div>
          <div className="elemento">
            <img src={Room} className="img" />
          </div>
        </div>
        {/* Room */}
        <div className="caja">
          <div className="elemento">
            <h3 className="cardTitle">Triple Room</h3>
            <p className="carddescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              nesciunt ipsum laboriosam inventore odio facere.
            </p>
            <div className="booknowPosition">
              <a href="https://www.hotelscombined.com/hotels/The-Harrison-Hotel-Miami-Beach,MiamiBeach,UnitedStates-c30651-h272276-details">
                Book now
              </a>
            </div>
          </div>
          <div className="elemento">
            <img src={Room} className="img" />
          </div>
        </div>
      </section>
    
    </>
  );
};
export default Rooms;
