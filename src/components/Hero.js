import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Hero.css';

function Hero({ title, bio, youtubeEmbedCode }) {

    return (
        <>
            <div className='hero-container'>
                <div className='hero-wrapper'>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeEmbedCode}?playlist=${youtubeEmbedCode}&amp;loop=1&amp;mute=1&amp;autoplay=1&amp;controls=0`}
                        frameBorder="0"
                    />
                </div>
                <h1>{title}</h1>
                <p>{bio}</p>
            </div>
        </>
    );
}

export default Hero;
