import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: new Date(), // Set initial date to today
        time: '',
    });

    useEffect(() => {
        // Set the initial form data here if needed
    }, []);

    const handleDateChange = (date) => {
        setFormData({ ...formData, date });
    };

    const handleTimeChange = (e) => {
        setFormData({ ...formData, time: e.target.value });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Appointment booked successfully!');
                // Optionally, reset form state or show a success message
            } else {
                console.error('Failed to book appointment');
                // Handle error scenarios
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            // Handle network or server errors
        }
    };

    return (
        <div className="max-w-4xl mx-auto flex">
            {/* Left Side: Appointment Form */}
            <div className="flex-1">
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Book an Appointment</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mb-6">
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                                Select Time <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="time"
                                value={formData.time}
                                onChange={handleTimeChange}
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                                required
                            >
                                <option value="">Select a time</option>
                                <option value="09:00 AM">09:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="01:00 PM">01:00 PM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="03:00 PM">03:00 PM</option>
                                <option value="04:00 PM">04:00 PM</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Right Side: Calendar */}
            <div className="flex-1 ml-8">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Select Date</h2>
                    <div className="mt-4">
                        <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            className="border border-gray-200 rounded-md"
                            open // Automatically open the calendar
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentForm;
