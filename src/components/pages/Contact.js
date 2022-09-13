import React, { useState } from 'react';
import '../styles/contact.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {

    init("user_Y8n6ZNvbd70tCPorAXpJO");
   const [user_name, setUser_name]=useState('');
   const [email, setEmail] =useState('');
   const [guests, setGuests] =useState('');
   const [room, setRoom] =useState('');
   const [date, setDate] =useState('');
   const [message, setMessage] =useState('');
  
    const validarEmail = (email) => {
      let expReg =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      let isValid = expReg.test(email);
      if (isValid === true) {
        return true;
      } else {
        return false;
      }
    };
    const campoRequerido = (input) => {
      if (input.trim() === "") {
        return false;
      } else {
        return true;
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        (campoRequerido(user_name),campoRequerido(guests),
        campoRequerido(room),campoRequerido(date),campoRequerido(message),
        validarEmail(email))
      ) {
        const templateParams = {
          user_name,
         email,
         guests,
         room,
         date,
         message,
        };
  
        emailjs.send("service_wjjuv3i", "template_gb6v34i", templateParams).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
        e.target.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your message was successfully sent",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Make sure you fill in all the fields correctly",
        });
      }
    };
    return (
        <section className='contact'>
            <div className='content'>
                <h2>Contact Us</h2>
                <p>Located in the high-end area of South Beach, within a 5-minute walk to the beach, bars, clubs, restaurants, and easily accessible to many popular attractions, Harrison Hotel offers stylish 3-star accommodation, a 24-hour front desk, valet parking, and a garden with patio seating. Amenities include daily housekeeping, free Wi-Fi, luggage storage, and dry cleaning. Multilingual staff can provide around-the-clock assistance. The rooms feature air-conditioning, en suite bathrooms, pillow-top beds, and modern wall art. Each has a flat-screen cable TV, iPod docking station, a work desk, mini-fridge, large closet with a safe and iron, and a coffee machine.
                </p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                        <div className="text">
                            <h3>Adress</h3>
                            <p>411 Washington Ave,<br /> Miami Beach, FL 33139, United States</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><FontAwesomeIcon icon={faPhoneAlt}/></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+1 (305) 397-8543</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><FontAwesomeIcon icon={faEnvelope}/></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>Theharrisonhotelmiami@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form onSubmit={handleSubmit}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" required onChange={(e)=>setUser_name(e.target.value)} />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required onChange={(e)=>setEmail(e.target.value)}/>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <input type="number" required onChange={(e)=>setGuests(e.target.value)}/>
                            <span>Persons</span>
                        </div>
                        <div className="inputBox select">
                            <label>Room your looking for </label>
                            <select name="Room" id="room" className='my-2 py-1' onChange={(e)=>setRoom(e.target.value)}>
                                <option value="">Select room</option>
                                <option value="Doble Room">Doble Room</option>
                                <option value="Deluxe Queen Room">Deluxe Queen Room</option>
                                <option value="King Studio / Family Room">King Studio / Family Room</option>
                            </select>

                        </div>
                        <div className="inputBox date">
                            <input type="date" required onChange={(e)=>setDate(e.target.value)}/>
                            <span>Date</span>
                        </div>
                        <div className="inputBox">
                            <textarea required onChange={(e)=>setMessage(e.target.value)} />
                            <span>Type your Message</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" required />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;