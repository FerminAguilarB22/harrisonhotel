import React from "react";
import "../styles/rooms.css";
import Room from "../../img/arbisoftimages-272276-DSC_0340-image.jpg";

const Rooms = () => {

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
            <a
              href="https://www.hotelscombined.com/hotels/The-Harrison-Hotel-Miami-Beach,MiamiBeach,UnitedStates-c30651-h272276-details"
            >
              Book now
            </a>
          </div>
        </div>
        <div className="elemento">
          <img src={Room} className="img" alt="img" />
          
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
            <a
              href="https://www.hotelscombined.com/hotels/The-Harrison-Hotel-Miami-Beach,MiamiBeach,UnitedStates-c30651-h272276-details"
            >
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
            <a
              href="https://www.hotelscombined.com/hotels/The-Harrison-Hotel-Miami-Beach,MiamiBeach,UnitedStates-c30651-h272276-details"
            >
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
