import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        revenue: '',
    });

    const revenueOptions = [
        { label: '$0 - $5000', value: '$0 - $5000' },
        { label: '$5000 - $10000', value: '$5000 - $10000' },
        { label: '$10000 - $30000', value: '$10000 - $30000' },
        { label: '$30000 - $50000', value: '$30000 - $50000' },
        { label: '$50000 - $100000', value: '$50000 - $100000' },
        { label: '$100000+', value: '$100000+' },
    ];

    const handleChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, revenue: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend or store locally)
        console.log('Form submitted:', formData);
        // You can add further logic here, like sending the data to a server
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Fill out the form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                    </label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        placeholder="Enter your website URL"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Revenue <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="revenue"
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        required
                    >
                        <option value="">Select monthly revenue</option>
                        {revenueOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
