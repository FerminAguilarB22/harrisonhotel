import React from 'react';
import Video from '../../img/SouthBeach.mp4'
import '../styles/home.css'
const Home = () => {
    return (
        <section className='showcase'>
            <header>
                <h2 className='logo'>Harrison Hotel</h2>
            </header>
            <video src={Video} muted loop autoPlay></video>
            <div className='text'>
                <h2>Welcome to Miami</h2>
                <h3>Enjoy your stay</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, amet minima explicabo saepe fugit at ut tempora blanditiis voluptatibus eum!</p>
                <a href='https://www.hotelscombined.com/hotels/The-Harrison-Hotel-Miami-Beach,MiamiBeach,UnitedStates-c30651-h272276-details'>Book now</a>
            </div>
        </section>
    );
};

export default Home;