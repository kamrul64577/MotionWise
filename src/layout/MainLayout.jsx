// MainLayout.jsx
import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

const MainLayout = () => {
    const offerRef = useRef(null);
    const videoRef = useRef(null);
    const aboutRef = useRef(null);
    const howitworksRef = useRef(null);

    const handleScroll = (ref) => {
      console.log(ref.current); 
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <Navbar handleScroll={handleScroll} offerRef={offerRef} videoRef={videoRef} aboutRef = {aboutRef} howitworksRef={howitworksRef} />
            <Outlet context={{ offerRef, videoRef, aboutRef, howitworksRef }} />
        </div>
    );
};

export default MainLayout;

