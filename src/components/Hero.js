import React from 'react';
import '../App.css';
import './Hero.css';
import videoBg from '../videos/background.mp4'

function Hero({ title, bio, youtubeEmbedCode }) {

    return (
        <>
            <div className='hero-container'>
                <div className='hero-wrapper'>
                    <video src={videoBg} autoPlay loop muted />
                </div>
                <div className='hero-content'>
                    <h1>{title}</h1>
                    <p>{bio}</p>
                </div>
            </div>
        </>
    );
}

export default Hero;
