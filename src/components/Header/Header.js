import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useSingleUser from '../../Hooks/useSingleUser';
import Loading from '../Loading/Loading';
import './Header.css';

const Header = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [user, loading] = useAuthState(auth);
    const [singleUser]= useSingleUser(user?.email);
    const payment = singleUser?.payment;
  if (loading) {
    return <Loading />
  }
  return (
    <header className='px-5'>
      <div className="container mx-auto ">
        <div className='logo cursor-pointer'>
          <img onClick={()=>navigate('/')} src="https://i.ibb.co/fFhrMHZ/tubify-logo.png" alt="logo" />
        </div>
        <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/dashboard" >Explore</NavLink></li>
            {payment ||<li><NavLink to="/pricing">Pricing</NavLink></li>}
            <li><NavLink to="/">Blogs</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {
              user ? <button className='py-1 px-2 bg-sky-500 text-white rounded-md'><Link to="/dashboard">Dashboard</Link></button> : <li>
                <NavLink to="/signup"><button className='py-1 px-2 bg-sky-500 text-white rounded-md'>Create New Accont</button></NavLink>
              </li>
            }
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