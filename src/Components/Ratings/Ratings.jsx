import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Ratings = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (<>
        <section className="w-[95%] mx-auto py-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Testimonials and Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-5">
                    <p className="text-gray-700 italic mb-3">"The event was a huge success! Everything was perfectly organized. Highly recommend!"</p>
                    <p className="text-sm text-gray-500 font-semibold">- Jane Doe</p>
                    <div className="flex mt-2 text-yellow-500">★★★★★</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                    <p className="text-gray-700 italic mb-3">"Exceptional service and attention to detail. Will definitely hire again."</p>
                    <p className="text-sm text-gray-500 font-semibold">- John Smith</p>
                    <div className="flex mt-2 text-yellow-500">★★★★★</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                    <p className="text-gray-700 italic mb-3">"Fantastic experience! The team went above and beyond to make our event special."</p>
                    <p className="text-sm text-gray-500 font-semibold">- Emily Brown</p>
                    <div className="flex mt-2 text-yellow-500">★★★★★</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                    <p className="text-gray-700 italic mb-3">"Superb organization and attention to detail. Would recommend without hesitation!"</p>
                    <p className="text-sm text-gray-500 font-semibold">- Michael Lee</p>
                    <div className="flex mt-2 text-yellow-500">★★★★★</div>
                </div>
            </div>
        </section>

        <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Rate Us</h2>
            <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <button
                            key={index}
                            onClick={() => setRating(ratingValue)}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            className="focus:outline-none"
                        >
                            <Star 
                                size={28} 
                                className={`${ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'} transition-colors duration-300`} 
                            />
                        </button>
                    );
                })}
            </div>
            <p className="text-md text-gray-700">{rating > 0 ? `You rated us ${rating} out of 5` : "Click on the stars to rate!"}</p>
        </div>
    </>);
};

export default Ratings;
