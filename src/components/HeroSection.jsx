
// import React, { useState } from 'react';
// import profilePic from '../assets/profile-pic.jpg';
// import bannerPic from '../assets/Portfolio-banner.png';
// import EnthusiasmCard from './EnthusiasmCard';
// import AboutCard from './AboutCard';

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

//   return (
//     <div className="relative w-full min-h-[550px] bg-transparent">
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
//       {/* Cards Container for About and Enthusiasm */}
//       <div className="relative mt-[150px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-80">
//         <AboutCard />
//         <EnthusiasmCard />
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
//             onClick={(e) => e.stopPropagation()}
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
import EnthusiasmCard from './EnthusiasmCard';

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
      {/* Content Container for About and Enthusiasm */}
      <div className="relative mt-[150px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        {/* About Section */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-4">About Me</h3>
          <p className="text-gray-600 text-sm">
            I'm Kalhara Batangala, an aspiring engineer passionate about leveraging technology to solve real-world problems. With a keen interest in DevOps, system administration, and deep learning for medical imaging, I strive to build innovative solutions that drive progress and impact lives positively.
          </p>
        </div>
        {/* Vertical Separator */}
        <div className="hidden md:block border-l border-secondary h-auto self-stretch"></div>
        {/* Enthusiasm Card */}
        <div className="max-w-sm w-full md:ml-auto">
          <EnthusiasmCard />
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