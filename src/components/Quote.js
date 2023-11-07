import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Quote.css';

function Quote({ text }) {
    return (
        <>
            <div className='quote-container'>
                <h1>{text}</h1>
            </div>
        </>
    );
}

export default Quote;
