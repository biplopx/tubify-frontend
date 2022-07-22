import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className='px-5'>
      <div className="container mx-auto">
        <div className='logo'>
          <img src="https://i.ibb.co/fFhrMHZ/tubify-logo.png" alt="logo" />
        </div>
        <nav className={isMenuOpen ? "navbar menu-open" : "navbar"}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/" >Explore</NavLink></li>
            <li><NavLink to="/">Pricing</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
            <button className='px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 lg:mt-0 md:mt-0'>Create New Accont</button>
          </ul>
        </nav>
        <div className='menu-btn' onClick={() => { setMenuOpen(!isMenuOpen) }}>
          <i className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;