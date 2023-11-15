import React from 'react';
import '../App.css';
import './Footer.css';

function Footer({ title, color }) {

    let footer_container_classname = "footer-container "
    footer_container_classname += color

    let upfade_classname = "up-fade "
    upfade_classname += color

    return (
        <>
            <div className={footer_container_classname}>
                <div className={upfade_classname} />
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
