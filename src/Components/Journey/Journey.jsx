import React from 'react';

const Journey = () => {
    const milestones = [
        { year: "2015", description: "Founded our company, bringing creative ideas to life." },
        { year: "2017", description: "Expanded services to corporate events and destination weddings." },
        { year: "2019", description: "Introduced cutting-edge digital solutions for seamless event planning." },
        { year: "2021", description: "Achieved 500+ successful events and a growing client base." },
        { year: "2023", description: "Launched sustainable event initiatives, focusing on eco-friendly solutions." }
    ];

    return (
        <div className='p-10 bg-gray-50'>
            <h1 className='text-3xl font-bold text-center text-black-500 mb-10'>Our Journey</h1>
            <div className='relative max-w-5xl mx-auto'>
                <div className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full'></div>
                {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className='bg-white shadow-lg rounded-lg p-5 w-2/5 relative'>
                            <h2 className='text-xl font-semibold text-blue-500'>{milestone.year}</h2>
                            <p className='text-gray-600 mt-2'>{milestone.description}</p>
                            <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold`}>✔</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journey;
