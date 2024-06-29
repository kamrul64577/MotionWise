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
      className={`relative flex items-start mb-8 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="relative">
        <div className={`right-full transform -translate-y-1/2 w-2 h-full bg-gray-600 ${inView ? 'scale-y-100' : 'scale-y-0'}`} />
      </div>
      <div className="flex-1 pl-8 border-l py-10 my-[-40px]">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-lg text-white">{description}</p>
      </div>
      {/* <h1 className="text-5xl p-4 border-none transform rotate-12 ">{icon}</h1> */}
    </div>
  );
};

export default TimelineStep;
