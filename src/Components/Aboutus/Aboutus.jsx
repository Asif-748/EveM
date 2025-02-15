import React from 'react';

const Aboutus = () => {
    return (
        <div className='p-10 bg-gradient-to-r from-blue-400 to-red-900 text-white mx-auto'>
            <div className='max-w-5xl mx-auto'>
                <h1 className='text-5xl font-bold mb-6'>About Us</h1>
                <p className='text-lg leading-relaxed'>
                    We are passionate about crafting unforgettable experiences that bring people together. 
                    With creativity, precision, and dedication, we turn moments into memories. Whether it's a corporate event, 
                    wedding, or social gathering, our team is committed to delivering exceptional experiences.
                </p>
                <p className='text-lg leading-relaxed mt-4'>
                    Our mission is to make your vision a reality, ensuring every detail is perfect. From planning to execution, 
                    we handle everything so you can focus on enjoying the moment. Join us in celebrating life’s special occasions.
                </p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
                    <h2 className='text-2xl font-semibold text-blue-500'>Our Vision</h2>
                    <p className='text-gray-600 mt-4'>
                        To be the most trusted and creative event management company, 
                        delivering impactful and memorable experiences.
                    </p>
                </div>
                <div className='p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
                    <h2 className='text-2xl font-semibold text-blue-500'>Why Choose Us</h2>
                    <ul className='list-disc list-inside text-gray-600 mt-4 space-y-2'>
                        <li>Innovative event concepts</li>
                        <li>Professional and experienced team</li>
                        <li>Attention to detail and seamless execution</li>
                        <li>Client-centric approach</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
