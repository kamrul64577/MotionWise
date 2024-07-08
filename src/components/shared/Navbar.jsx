import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = ({ handleScroll, offerRef, videoRef, howitworksRef }) => {
    return (
        <div className="navbar bg-custom-gradient text-white px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-custom-gradient rounded-box w-52">
                        <li><Link className="text-lg" to='/'>Home</Link></li>
                        <li><a className="text-lg" onClick={() => handleScroll(howitworksRef)}>How It Works</a></li>
                    </ul>
                </div>
                <img className='w-42 h-16' src={logo} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="text-lg px-3 py-2" to='/'>Home</Link></li>
                    <li><a className="text-lg px-3 py-2" onClick={() => handleScroll(howitworksRef)}>How It Works</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='appt' className="btn btn-primary btn-lg px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 border-none text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">Call Now</Link>
            </div>
        </div>
    );
};

export default Navbar;
