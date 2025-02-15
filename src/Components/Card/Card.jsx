import React, { useRef, useState } from "react";

const destinations = [
  { id: 1, name: "Orlando", image: "orlando.jpg" },
  { id: 2, name: "Philadelphia", image: "c (1).jpg" },
  { id: 3, name: "San Diego", image: "c (2).jpg" },
  { id: 4, name: "New York", image: "c (3).jpg" },
  { id: 5, name: "Los Angeles", image: "c (4).jpg" },
  { id: 6, name: "Chicago", image: "c (5).jpg" },
  { id: 7, name: "Miami", image: "c (6).jpg" },
  { id: 8, name: "Seattle", image: "c (7).jpg" },
];

const DestinationCard = ({ destination }) => {
  return (
    <div className="relative w-80 rounded-xl overflow-hidden shadow-lg flex-shrink-0 group">
      <img src={destination.image} alt={destination.name} className="w-full h-56 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-red-300 h-1 transition-all duration-300 group-hover:h-12 group-hover:bg-gradient-to-t from-red-500 to-transparent p-4">
        <h2 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {destination.name}
        </h2>
      </div>
    </div>
  );
};

const Carousel = () => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollLeft = () => {
    if (index > 0) {
      setIndex(index - 4);
    }
  };

  const scrollRight = () => {
    if (index + 4 < destinations.length) {
      setIndex(index + 4);
    }
  };

  return (
    <div className="relative w-full px-6">
      <h2 className="text-3xl text-center font-bold mb-4">Top destinations</h2>
      <div className="flex items-center relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 bg-white p-3 rounded-full shadow-md z-10"
          disabled={index === 0}
        >
          ◀
        </button>
        <div className="flex gap-6 overflow-hidden w-full px-16">
          <div
            ref={scrollRef}
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${index * 21}rem)` }}
          >
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 bg-white p-3 rounded-full shadow-md z-10"
          disabled={index + 4 >= destinations.length}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousel;
