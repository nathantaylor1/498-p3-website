import React from 'react';
import '../App.css';
import './Quote.css';

function Quote({ text, color }) {

    let container_classname = "quote-container "
    container_classname += color

    let upfade_classname = "up-fade "
    upfade_classname += color

    let downfade_classname = "down-fade "
    downfade_classname += color

    return (
        <>
            <div className={container_classname}>
                <div className={upfade_classname} />
                <h1>{text}</h1>
                <div className={downfade_classname} />
            </div>
        </>
    );
}

export default Quote;
