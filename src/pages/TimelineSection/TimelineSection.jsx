import React from 'react';
import TimelineStep from './TimelineStep'; // Adjust the path as necessary
<span style={{ color: 'Orange' }}></span>
const TimelineSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Build Your Brand ',
      description: 
        "We will produce high volume, organic content on multiple social media platforms. This will contain extreme value & help you build a strong brand which produces compounding returns over the long run.",
      

      icon: '📸',
    },
    {
      number: 2,
      title: 'Expand Your Reach',
      description:
       "We will fully setup, manage & track email campaigns, we’ll send lots of personalised emails to your desired prospects and schedule appointments. Our service includes Numerous scripts & A/Z split testing to increase conversion rates & book more calls.",
      icon: '📩',
    },
    {
      number: 3,
      title: 'Turn Clicks Into Clients ',
      description:
        "We will create high - converting landing pages with compelling copy, fast loading speeds & visual appeal whilst making sure they are mobile friendly & offer A/B split testing to ensure high conversion rates.",
      icon: '🎥',
    },
    {
      number: 4,
      title: 'On Top of That ',
      description:
        "We will guide you on how to create effective lead magnets & email flows to help generate more conversions easier and produce more revenue.",
      icon: '🎥',
    },
    

    // Add more steps as needed
  ];

  return (
    <div className="bg-custom-gradient text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 pr-12">
              <h3 className="text-6xl font-bold mb-2">Here's What We Do</h3>
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
                    <div className="border-b border-gray-600 my-8 " />
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
