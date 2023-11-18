import React from 'react';
import '../App.css';
import './Hero.css';
function Hero({ title, bio }) {

    return (
        <>
            <div className='hero-container'>
                <div className='hero-wrapper'>
                    <video src={process.env.PUBLIC_URL + `/videos/background.mp4`} autoPlay loop muted />
                </div>
                <div className='hero-content'>
                    <h1>{title}</h1>
                    <p>{bio}</p>
                </div>
                {/*
                <div className='hero-bottom'>
                    <p>Learn more!</p>
                    <p><i class="fa-solid fa-arrow-down" /></p>
                </div>
                */}
            </div>
        </>
    );
}

export default Hero;
