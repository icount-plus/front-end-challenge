import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
    <header>
        <nav className='nav-bar'>
            <ul>
                <li className='nav-item'>
                    <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/info">Info</Link>
                </li>
            </ul>
        </nav>
    </header>
)
  
