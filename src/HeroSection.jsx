import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] bg-gray-200">
      {/* Banner Image */}
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        alt="Banner"
        className="w-full h-[250px] object-cover"
      />
      {/* Profile Photo and Text */}
      <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="mt-4 text-3xl font-bold text-gray-800">Your Name</h1>
        <h2 className="text-xl text-gray-600">Aspiring Engineer</h2>
        <p className="mt-2 text-gray-500">Building the Future, One Project at a Time</p>
      </div>
    </div>
  );
};

export default HeroSection;