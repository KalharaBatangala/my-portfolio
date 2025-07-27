// import React, { useState } from 'react';
// import profilePic from '../assets/profile-pic.jpg';
// import bannerPic from '../assets/Portfolio-banner.png';

// const HeroSection = () => {
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   // Handle modal close with zoom-out animation
//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsZoomed(false);
//       setIsClosing(false);
//     }, 300); // Match animation duration
//   };

//   // Interests for the Strong Enthusiasm card
//   const interests = [
//     'DevOps',
//     'System Administration',
//     'Deep Learning for medical imaging',
//     'Signal Processing',
    
//   ];

//   return (
//     <div className="relative w-full h-[650px] bg-transparent">
//       {/* Banner Wrapper */}
//       <div className="mt-8 pt-12 px-12 shadow-md">
//         {/* Banner with Background Image */}
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
//       {/* Profile Card */}
//       <div className="absolute top-[200px] left-[5%] sm:left-[10%] md:left-[15%] transform transition-transform duration-300 hover:scale-105 bg-white p-6 rounded-lg shadow-xl max-w-sm w-full cursor-pointer">
//         <img
//           src={profilePic}
//           alt="Profile"
//           className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md mx-auto sm:mx-0 object-cover cursor-pointer"
//           onClick={() => setIsZoomed(true)}
//         />
//         <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
//           Kalhara Batangala
//         </h1>
//         <h2 className="text-lg sm:text-xl text-gray-600 text-center sm:text-left">
//           Aspiring Engineer
//         </h2>
//         <p className="mt-2 text-gray-500 text-center sm:text-left">
//           Building the Future, One Project at a Time
//         </p>
//       </div>
//       {/* Strong Enthusiasm Card */}
//       <div className="absolute top-[450px] right-[5%] sm:right-[10%] md:right-[15%] bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
//         <h3 className="text-xl font-bold text-gray-800 mb-4">Strong Enthusiasm</h3>
//         <ul className="space-y-2">
//           {interests.map((interest, index) => (
//             <li key={index} className="flex items-start">
//               <span className="text-secondary mr-2">•</span>
//               <span className="text-gray-800">{interest}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Zoomed Image Modal */}
//       {isZoomed && (
//         <div
//           className="fixed inset-0 bg-primary bg-opacity-75 flex items-center justify-center z-50"
//           onClick={handleClose}
//         >
//           <img
//             src={profilePic}
//             alt="Zoomed Profile"
//             className={`max-w-[80%] max-h-[80%] ${isClosing ? 'animate-zoom-out' : 'animate-zoom-in'}`}
//             onClick={(e) => e.stopPropagation()} // Prevent closing on image click
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState } from 'react';
import profilePic from '../assets/profile-pic.jpg';
import bannerPic from '../assets/Portfolio-banner.png';

const HeroSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Handle modal close with zoom-out animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsZoomed(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  // Interests for the Strong Enthusiasm card
  const interests = [
    'DevOps',
    'System Administration',
    'Deep Learning for medical imaging',
  ];

  return (
    <div className="relative w-full min-h-[550px] bg-transparent">
      {/* Banner Wrapper */}
      <div className="mt-8 pt-12 px-12 shadow-md">
        {/* Banner with Background Image */}
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
      {/* Profile Card */}
      <div className="absolute top-[200px] left-[5%] sm:left-[10%] md:left-[15%] transform transition-transform duration-300 hover:scale-105 bg-white p-6 rounded-lg shadow-xl max-w-sm w-full cursor-pointer">
        <img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md mx-auto sm:mx-0 object-cover cursor-pointer"
          onClick={() => setIsZoomed(true)}
        />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
          Kalhara Batangala
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 text-center sm:text-left">
          Aspiring Engineer
        </h2>
        <p className="mt-2 text-gray-500 text-center sm:text-left">
          Building the Future, One Project at a Time
        </p>
      </div>
      
      {/* Strong Enthusiasm Card Container */}
      <div className="relative mt-[100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ml-auto max-w-sm w-full bg-white p-6 rounded-lg shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Strong Enthusiasm</h3>
          <ul className="space-y-2">
            {interests.map((interest, index) => (
              <li key={index} className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-800">{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-primary bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <img
            src={profilePic}
            alt="Zoomed Profile"
            className={`max-w-[80%] max-h-[80%] ${isClosing ? 'animate-zoom-out' : 'animate-zoom-in'}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;