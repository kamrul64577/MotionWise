import React from 'react';
import { Link } from 'react-router-dom';

const OfferSection = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-custom-gradient text-white p-8 md:p-16">
      <div className="text-center max-w-4xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-20 mt-6">
          We will book you (10-30)+ qualified appointments within 35 days. <span className='text-lime-200'> Or else you don’t pay & we will work</span> with you until we do.
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Unlock the potential of your business with our proven methods. We'll help you secure (10-30)+ qualified appointments within 35 days, or you don't pay. Plus, we'll continue working with you until we achieve your goals.
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
