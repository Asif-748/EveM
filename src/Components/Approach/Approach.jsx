import React from 'react';

const Approach = () => {
    return (
        <div className="bg-gradient-to-r from-red-900 to-blue-400 text-white py-16 px-6 md:px-24">
            <h2 className="text-center text-4xl font-extrabold mb-10 tracking-wide">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <img src="a.jpg" alt="Elderly man" className="rounded-lg shadow-4xl" />
                    <div className="absolute bottom-0 left-0 bg-white text-gray-600 bg-opacity-75 p-6 text-lg italic rounded-br-lg">
                        "The best way to celebrate success is by giving back through high-impact philanthropy
                        based on a long-term strategic commitment of ideas, energy, time, and money
                        that can change the face of India and other emerging economies."
                    </div>
                </div>
                <div>
                    <div className="mb-6">
                        <div className="flex items-center mb-3">
                            <span className="bg-white text-red-700 font-bold rounded-full px-4 py-2 mr-4 text-lg">1</span>
                            <h3 className="text-2xl font-semibold">Partnerships</h3>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                            The Foundation extends its capabilities and the depth and breadth of its impact through
                            an extensive network of partners, including governments, educational institutions,
                            corporates, mentors, industry experts, investors, NGOs, and industry associations.
                        </p>
                    </div>
                    <hr className="border-white/50 mb-6" />
                    <div className="mb-6">
                        <div className="flex items-center mb-3">
                            <span className="bg-white text-red-700 font-bold rounded-full px-4 py-2 mr-4 text-lg">2</span>
                            <h3 className="text-2xl font-semibold">Technology</h3>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                            Programs are supported by our own cutting-edge AI-powered platform GenieAI that enables
                            personalized learning, access to an expert network, and other resources from across the world.
                        </p>
                    </div>
                    <hr className="border-white/50 mb-6" />
                    <div className="mb-6">
                        <div className="flex items-center mb-3">
                            <span className="bg-white text-red-700 font-bold rounded-full px-4 py-2 mr-4 text-lg">3</span>
                            <h3 className="text-2xl font-semibold">Sustainability</h3>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                            Our initiatives focus on sustainable practices, ensuring that every effort contributes to long-term
                            environmental and social well-being while fostering innovation for a better future.
                        </p>
                    </div>
                    <hr className="border-white/50 mb-6" />
                    <div>
                        <div className="flex items-center mb-3">
                            <span className="bg-white text-red-700 font-bold rounded-full px-4 py-2 mr-4 text-lg">4</span>
                            <h3 className="text-2xl font-semibold">Community Engagement</h3>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                            We actively engage with communities to create meaningful change, empowering individuals with
                            resources, education, and opportunities to uplift their lives and contribute positively.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approach;
