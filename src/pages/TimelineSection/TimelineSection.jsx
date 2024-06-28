import React from 'react';
import TimelineStep from './TimelineStep'; // Adjust the path as necessary

const TimelineSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Get on Camera',
      description:
        "We will produce high volumes of organic content on various social media platforms, which will contain an abundance of value for your target audience. This will help you construct a strong brand & generate compounding returns over the long run. ",
      icon: '📸',
    },
    {
      number: 2,
      title: 'We Edit The Videos',
      description:
        "We will fully setup, manage & track email campaigns, send high volume, personalised emails to qualified high ticket prospects & set appointments. We provide a variety of scripts, including A/Z split testing to ensure the highest rates of conversion & book more appointments",
      icon: '🎥',
    },
    {
      number: 3,
      title: 'Share Your Videos',
      description:
        "We will construct high - converting landing pages with compelling, creative copy, fast loading speeds & visual appeal whilst making sure they are mobile friendly & offer A/B split testing to ensure high conversion rates. Tracking metrics is also included.",
      icon: '',
    },
    {
      number: 3,
      title: 'Share Your Videos',
      description:
        "We will construct high - converting landing pages with compelling, creative copy, fast loading speeds & visual appeal whilst making sure they are mobile friendly & offer A/B split testing to ensure high conversion rates. Tracking metrics is also included.",
      icon: '',
    },
    // Add more steps as needed
  ];

  return (
    <div className="bg-custom-gradient text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 pr-12">
              <h3 className="text-6xl font-bold mb-2">Here's How It Works</h3>
            </div>
            <div className="md:w-2/3 mt-12 pl-0 md:pl-48 p-4">
              {steps.map((step, index) => (
                <div key={step.number} className="mb-8">
                  <TimelineStep
                    stepNumber={step.number}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                  />
                  {index !== steps.length - 1 && (
                    <div className="border-b border-gray-300 my-8 " />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
