// import React from 'react';
// import profilePic from './assets/profile-pic.jpg';
// import bannerPic from './assets/Portfolio-banner.png';

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-[400px] bg-gray-200">
//       {/* Banner Image */}
//       <img
//         src={bannerPic}
//         alt="Banner"
//         className="w-full h-[250px] object-cover"
//       />
//       {/* Card with Profile Photo and Text */}
//       <div className="absolute top-[150px] left-[10%] sm:left-[15%] md:left-[20%] transform transition-transform duration-300 hover:scale-105 bg-white p-6 rounded-lg shadow-xl max-w-sm w-full cursor-pointer">
//         <img
//           src={profilePic}
//           alt="Profile"
//           className="w-49 h-49 sm:w-60 sm:h-60 rounded-full border-4 border-white shadow-md mx-auto sm:mx-0 object-cover"
//         />
//         <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">Kalhara Batangala</h1>
//         <h2 className="text-lg sm:text-xl text-gray-600 text-center sm:text-left">DevOps Engineer and System Administrator</h2>
//         <p className="mt-2 text-gray-500 text-center sm:text-left">Building the Future, One Project at a Time</p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react';
import profilePic from './assets/profile-pic.jpg';
import bannerPic from './assets/Portfolio-banner.png';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-200">
      {/* Banner Image */}
      <img
        src={bannerPic}
        alt="Banner"
        className="w-full h-[350px] object-cover"
      />
      {/* Card with Profile Photo and Text */}
      <div className="absolute top-[200px] left-[10%] sm:left-[15%] md:left-[20%] transform transition-transform duration-300 hover:scale-105 bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md mx-auto sm:mx-0 object-cover"
        />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">Your Name</h1>
        <h2 className="text-lg sm:text-xl text-gray-600 text-center sm:text-left">Aspiring Engineer</h2>
        <p className="mt-2 text-gray-500 text-center sm:text-left">Building the Future, One Project at a Time</p>
      </div>
    </div>
  );
};

export default HeroSection;