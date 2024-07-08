import React from 'react';
import TimelineStep from './TimelineStep'; // Adjust the path as necessary
<span style={{ color: 'Orange' }}></span>
const TimelineSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Build Your Brand ',
      description: <>
        We will produce high volume, <span className='text-green-400'> organic content </span> on multiple social media platforms. This will contain extreme value & help you build a <span className='text-green-400'>strong brand</span>  which produces <span className='text-green-400'></span> compounding returns over the long run.
      </>
      ,

      icon: '📸',
    },
    {
      number: 2,
      title: 'Expand Your Reach',
      description: <>
        We will fully setup, manage & track email campaigns, we’ll send lots of <span className='text-green-400'>personalised emails</span>   to your desired prospects and schedule appointments. Our service includes Numerous scripts & A/Z split testing to increase conversion rates & book more calls.
      </>,

      icon: '📩',
    },
    // {
    //   number: 3,
    //   title: 'Turn Clicks Into Clients ',
    //   description: <>
    //     We will create high - converting <span className='text-green-400'>landing pages  </span> with compelling copy, fast loading speeds & visual appeal whilst making sure they are mobile friendly & offer A/B split testing to ensure high conversion rates.
    //   </>
    //   ,
    //   icon: '🎥',
    // },
    {
      number: 4,
      title: 'On Top of That ',
      description: <>
        We will guide you on how to create effective <span className='text-green-400'>lead magnets</span> & <span className='text-green-400'>email flows</span> to help generate more conversions easier and produce more revenue.
      </>,

      icon: '🎥',
    },


    // Add more steps as needed
  ];

  return (
    <div className="bg-custom-gradient text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/3 ">
              <h3 className="md:text-6xl text-4xl text-center font-bold mb-2 pt-20">Here's What We Do</h3>
              <p className='text-center text-xl md:text-2xl text-gray-400'>How Our Done-For-You Service Will Transform Your Business. </p>
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
