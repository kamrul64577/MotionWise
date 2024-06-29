import React from 'react';
import { Link } from 'react-router-dom';

const OfferSection = () => {
  return (
    <div className="flex flex-col items-center bg-custom-gradient text-white p-8 md:p-16">
      <div className="text-left md:text-center max-w-4xl">
        <h1 className="text-4xl md:text-4xl font-bold mb-20 mt-6">
          We will book you 10 - 30+ qualified appointments Or you don’t pay & we will work with you for free until we do.
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          We generate you more leads & book you more appointments organically & through cold outreach, helping you to achieve a brand and make more money.
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
