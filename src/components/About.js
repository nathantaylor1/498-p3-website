import React from 'react';
import '../App.css';
import './About.css';
import Button from './Button';

function About({ title, desc, image, youtubeEmbedCode, button_text, button_link, color }) {

    let container_classname = "about-container "
    container_classname += color

    return (
        <>
            <div className={container_classname}>
                <div className='about-content'>
                    <h1>{title}</h1>
                    {image === "" ? (<div />) : (
                        <div className='about-image-container'>
                            <img src={process.env.PUBLIC_URL + `/img/${image}`} alt={`${image}`} className='about-image' />
                        </div>
                    )}
                    {desc.map((desc_item) =>
                        <p>{desc_item}</p>
                    )}
                    {youtubeEmbedCode === "" ? (<div />) : (
                        <div className='about-video'>
                            <div className='about-video-player'>
                                <iframe title="Youtube Player" src={`https://www.youtube.com/embed/${youtubeEmbedCode}`}/>
                            </div>
                        </div>
                    )}
                    {button_text === "" ? (<div />) : (
                        <Button text={button_text} link={button_link} />
                    )}
                </div>
            </div>
        </>
    );
}

export default About;
