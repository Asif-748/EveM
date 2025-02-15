import React from 'react';
import { FaUserFriends, FaRocket, FaGlobe, FaHandshake } from 'react-icons/fa';

const principlesData = [
    {
        icon: <FaUserFriends size={40} className='text-red-500' />, 
        title: 'Beneficiary-centric Approach',
        description: 'Treat all the beneficiaries as valued clients, striving to meet their needs and exceed their expectations.'
    },
    {
        icon: <FaRocket size={40} className='text-red-500' />,
        title: 'Innovation at Scale',
        description: 'Foster a culture of ambitious thinking and innovation to create a widespread, meaningful impact.'
    },
    {
        icon: <FaGlobe size={40} className='text-red-500' />,
        title: 'Global Vision, Local Execution',
        description: 'Maintain a global perspective in strategy, coupled with a commitment to localized operations.'
    },
    {
        icon: <FaHandshake size={40} className='text-red-500' />,
        title: 'Collaborative Ecosystem',
        description: 'Actively collaborate with the government, academia, and industry to maximize impact and reach.'
    }
];

const Principles = () => {
    return (
        <div className='py-16 bg-gray-50 text-center'>
            <h2 className='text-4xl font-bold text-red-600 mb-10'>Our Guiding Principles</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16'>
                {principlesData.map((principle, index) => (
                    <div key={index} className='p-6 bg-white border border-red-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300'>
                        <div className='mb-4 flex justify-center'>{principle.icon}</div>
                        <h3 className='text-xl font-semibold text-red-700 mb-3'>{principle.title}</h3>
                        <p className='text-gray-600'>{principle.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Principles;
