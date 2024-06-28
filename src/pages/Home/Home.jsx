// Home.jsx
import React from 'react';
import OfferSection from './OfferSection';
import Video from './Video';
import { useOutletContext } from 'react-router-dom';
import AboutMe from './AboutMe';
import Testimonial from './Testimonial';
import TimelineSection from '../TimelineSection/TimelineSection';
import Footer from '../../components/shared/Footer'

const Home = () => {
    const { offerRef, videoRef, aboutRef, testimonialRef } = useOutletContext();
    return (
        <div>
            <div ref={offerRef}>
                <OfferSection />
            </div>
            <div ref={videoRef}>
                <Video />
            </div>
            <div ref={aboutRef}>
                <AboutMe />
            </div>
            {/* <div ref={testimonialRef}>
                <Testimonial />
            </div> */}
            <div>
                <TimelineSection />
            </div>
            <div>
                <Footer/>
            </div>
          
        </div>
    );
};

export default Home;

