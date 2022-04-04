import React from 'react';
import '../styles/contact.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
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
                            <p>+1 305-722-3538</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><FontAwesomeIcon icon={faEnvelope}/></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>harrisonhotel@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <input type="number" required />
                            <span>Persons</span>
                        </div>
                        <div className="inputBox date">
                            <input type="date" required />
                            <span>Date</span>
                        </div>
                        <div className="inputBox">
                            <textarea required />
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