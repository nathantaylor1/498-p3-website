import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import '../App.css';
import './Navbar.css';

export default function Navbar({ title }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/#home' className='navbar-logo'>
                        <b>{title}</b><i className="fa-solid fa-vr-cardboard fa-rotate-by" />
                    </Link>
                    <div className='nav-menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/#home' className='nav-link' onClick={closeMobileMenu}>
                                HOME
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavHashLink to='/#about' className='nav-link' onClick={closeMobileMenu}>
                                ABOUT
                            </NavHashLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/dev-blog' className='nav-link' onClick={closeMobileMenu}>
                                DEV BLOG
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
