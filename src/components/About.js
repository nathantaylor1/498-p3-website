import React from 'react';
import '../App.css';
import './About.css';

function About({ title, desc, youtubeEmbedCode }) {
    return (
        <>
            <div className='about-container'>
                <div className='about-content'>
                    <div className='about-desc'>
                        <h1>{title}</h1>
                        {desc.map((desc_item) =>
                            <p>{desc_item}</p>
                        )}
                    </div>
                    {youtubeEmbedCode === "" ? (<div />) : (
                        <div className='about-video'>
                            <h1>Check it out!</h1>
                            <div className='about-video-player'>
                                <iframe title="Youtube Player" src={`https://www.youtube.com/embed/${youtubeEmbedCode}`}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default About;
