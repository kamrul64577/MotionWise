// src/components/CalendlyWidgets.jsx
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidgets = () => {
    return (
        <div className='bg-gray-800 h-screen'>
            <InlineWidget className="h-screen" url="https://calendly.com/motionwise/30min" />
        </div>
    );
};

export default CalendlyWidgets;
