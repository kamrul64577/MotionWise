import React from 'react'
const Testimonial = () => {
    const testimonialData = [
        {
            author: 'John Doe',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            author: 'Jane Smith',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        // Add more testimonial objects as needed
    ];
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Testimonials</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                </div>
            </div>
        </div>
    )
}

export default Testimonial
