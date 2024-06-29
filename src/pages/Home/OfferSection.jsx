import React from 'react';
import { Link } from 'react-router-dom';

const OfferSection = () => {
  return (
    <div className="flex flex-col items-center bg-custom-gradient text-white p-8 md:p-16">
      <div className="text-left md:text-center max-w-5xl">
        <h1 className="text-3xl md:text-4xl  mb-4 mt-6 text-transform: capitalize">
        We <span style={{ color: '#4e85de' }} className='underline'>guarantee</span> 10-30+ new qualified calls every month or we work for free until you get that, and
        <span className="block md:inline">  <span style={{ color: '#4e85de' }} > (you don't pay)</span> </span> 
        </h1>
        <p className="text-lg md:text-xl mb-4 ">
        We generate you more leads & book you additional calls through our proven system, making you more money.
        </p>
        <Link to='appt'>
          <button className="btn btn-primary btn-lg px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 border-none text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            Book Your Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfferSection;
