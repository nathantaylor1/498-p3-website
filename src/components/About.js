import React from 'react';
import '../App.css';
import './About.css';

function About({ title, desc, youtubeEmbedCode }) {
    return (
        <>
            <div className='about-container' id='about'>
                <div className='about-desc'>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
                {youtubeEmbedCode == "" ? (<div />) : (
                    <div className='about-video'>
                        <h1>Check it out!</h1>
                        <iframe src={`https://www.youtube.com/embed/${youtubeEmbedCode}`}/>
                    </div>
                )}
            </div>
        </>
    );
}

export default About;
