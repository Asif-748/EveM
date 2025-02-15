import React, { useEffect, useState } from 'react';

const slides = [
    { src: "b (4).jpg", title: "CELEBRATION", subtitle: "PARTIES" },
    { src: "b (1).jpg", title: "CORPORATE-OFFICE", subtitle: "MEETINGS" },
    { src: "b (2).jpg", title: "FAMILY ", subtitle: "GATHERINGS" },
    { src: "b (3).jpg", title: "ART & WINE NIGHT", subtitle: "CREATIVE FUN" },
    { src: "b (5).jpg", title: "DANCE PARTY", subtitle: "FEEL THE BEAT" },
    { src: "b (6).jpg", title: "COFFEE MEETUP", subtitle: "NEW FRIENDS" }
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[98%] mx-auto h-[450px] overflow-hidden bg-pink-200 rounded-xl">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute top-1/4 left-10 bg-red-600 text-white px-4 py-2 text-lg font-bold rounded-md">{slide.title}</div>
                    <div className="absolute top-1/3 left-10 bg-white text-red-600 px-4 py-2 text-lg font-bold rounded-md">{slide.subtitle}</div>
                </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button 
                    onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)} 
                    className="btn btn-circle bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
                >
                    ❮
                </button>
                <button 
                    onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} 
                    className="btn btn-circle bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
                >
                    ❯
                </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentSlide(index)} 
                        className={`h-3 w-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
