import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import './Footer.css';

function Footer({ title }) {

    return (
        <>
            <div className='footer-container'>
                <div className='footer-thankyou'>
                    <h1>Thank you for your interest in</h1>
                    <div className='footer-logo'>
                        <b>{title}</b><i className="fa-solid fa-vr-cardboard fa-rotate-by" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
