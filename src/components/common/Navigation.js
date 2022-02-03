import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

const Navigation = () => {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>

  );
};

export default Navigation;
