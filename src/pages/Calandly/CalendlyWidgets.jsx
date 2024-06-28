// src/components/CalendlyWidgets.jsx
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidgets = () => {
    return (
        <div >
            <InlineWidget url="https://calendly.com/motionwise/30min" />
        </div>
    );
};

export default CalendlyWidgets;
