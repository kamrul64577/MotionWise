import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = ({ handleScroll, offerRef, videoRef, howitworksRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="navbar bg-custom-gradient text-white px-4">
            <div className="navbar-start lg:flex-1">
                <img className="w-42 h-16" src={logo} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="text-lg px-3 py-2" to='/'>Home</Link></li>
                    <li><a className="text-lg px-3 py-2" onClick={() => handleScroll(howitworksRef)}>How It Works</a></li>
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {isMenuOpen && (
                        <ul className="dropdown-content mt-2 z-[1] p-2 shadow bg-custom-gradient rounded-box">
                            <li><Link className="text-lg block py-2" to='/' onClick={closeMenu}>Home</Link></li>
                            <li><a className="text-lg block py-2" onClick={() => { handleScroll(howitworksRef); closeMenu(); }}>How It Works</a></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="navbar-end hidden md:flex">
                <Link to='https://calendly.com/imperiumscale/consultation' className="btn btn-primary btn-lg px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 border-none text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">Call Now</Link>
            </div>
        </div>
    );
};

export default Navbar;
