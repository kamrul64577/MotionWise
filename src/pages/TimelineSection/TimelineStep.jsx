import React from 'react';
import { useInView } from 'react-intersection-observer';

const TimelineStep = ({ stepNumber, title, description, icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start mb-8 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="relative md:hidden mb-4">
        {/* This div with a gray background acts as the connecting line */}
        <div className={`right-full transform -translate-y-1/2 w-2 h-full bg-gray-600 ${inView ? 'scale-y-100' : 'scale-y-0'}`} />
      </div>
      <div className="flex-1 md:pl-8 text-left  md:border-l border-gray-600 py-4 md:py-0 md:ml-8">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <div className="md:hidden block text-left p-4">
        {/* <h1 className="text-5xl  p-4 border-none ">{icon}</h1> */}
        </div>
        <p className="text-xl text-white">{description}</p>
      </div>
      <div className="hidden md:block">
        {/* This div with a gray background acts as the connecting line */}
        <div className={`right-full transform -translate-y-1/2 w-2 h-full bg-gray-600 ${inView ? 'scale-y-100' : 'scale-y-0'}`} />
        <h1 className="text-5xl  p-4 border-none transform rotate-12">{icon}</h1>
      </div>
     
    </div>
  );
};

export default TimelineStep;
