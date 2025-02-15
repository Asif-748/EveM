import React from 'react';

const sponsors = [
  {
    id: 1,
    name: "Red Bull",
    image: "d (2).jpg",
  },
  {
    id: 2,
    name: "Nike",
    image: "d (1).jpg",
  },
  {
    id: 3,
    name: "Spotify",
    image: "d (4).jpg",
  },
  {
    id: 4,
    name: "Tesla",
    image: "d (3).jpg",
  },
];

const SponsorCard = ({ sponsor }) => {
  return (
    <div className="w-64 p-4 bg-white shadow-md rounded-lg text-center">
      <img
        src={sponsor.image}
        alt={sponsor.name}
        className="w-24 h-24 mx-auto rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold mt-3">{sponsor.name}</h3>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
