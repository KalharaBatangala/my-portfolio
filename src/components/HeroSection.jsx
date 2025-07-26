

// import React from 'react';
// import profilePic from './assets/profile-pic.jpg';
// import bannerPic from './assets/Portfolio-banner.png';

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-[550px] bg-transparent">
//       {/* Banner Wrapper with Padding and Margin-Top */}
//       <div className="mt-8 pt-12 px-12">
//         {/* Banner with Curved Top Corners and Background */}
//         <div
//           className="rounded-t-[32px] overflow-hidden"
//           style={{
//             backgroundImage: `url(${bannerPic})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'bottom',
//             height: '350px',
//           }}
//         />
//       </div>
//       {/* Card with Profile Photo and Text, Shifted Left */}
//       <div className="absolute top-[200px] left-[5%] sm:left-[10%] md:left-[15%] transform transition-transform duration-300 hover:scale-105 bg-white p-6 rounded-lg shadow-xl max-w-sm w-full cursor-pointer">
//         <img
//           src={profilePic}
//           alt="Profile"
//           className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md mx-auto sm:mx-0 object-cover"
//         />
//         <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">Kalhara Batangala</h1>
//         <h2 className="text-lg sm:text-xl text-gray-600 text-center sm:text-left">Aspiring Engineer</h2>
//         <p className="mt-2 text-gray-500 text-center sm:text-left">Building the Future, One Project at a Time</p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState } from 'react';
import profilePic from '../assets/profile-pic.jpg';
import bannerPic from '../assets/Portfolio-banner.png';

const HeroSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="relative w-full h-[550px] bg-transparent">
      {/* Banner Wrapper with Padding, Margin-Top, and Shadow */}
      <div className="mt-8 pt-12 px-12 shadow-md">
        {/* Banner with Curved Top Corners and Background */}
        <div
          className="rounded-t-[32px] overflow-hidden"
          style={{
            backgroundImage: `url(${bannerPic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            height: '350px',
          }}
        />
      </div>
      {/* Card with Profile Photo and Text, Shifted Left */}
      <div className="absolute top-[200px] left-[5%] sm:left-[10%] md:left-[15%] transform transition-transform duration-300 hover:scale-105 bg-white p-6 rounded-lg shadow-xl max-w-sm w-full cursor-pointer">
        <img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md mx-auto sm:mx-0 object-cover cursor-pointer"
          onClick={() => setIsZoomed(true)}
        />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">Kalhara Batangala</h1>
        <h2 className="text-lg sm:text-xl text-gray-600 text-center sm:text-left">Aspiring Engineer</h2>
        <p className="mt-2 text-gray-500 text-center sm:text-left">Building the Future, One Project at a Time</p>
      </div>
      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={profilePic}
            alt="Zoomed Profile"
            className="max-w-[80%] max-h-[80%] animate-zoom-in"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;