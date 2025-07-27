import React from 'react';

// About card component for displaying a brief bio
const AboutCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-4">About Me</h3>
      <p className="text-gray-600 text-sm">
        I'm Kalhara Batangala, an aspiring engineer passionate about leveraging technology to solve real-world problems. With a keen interest in DevOps, system administration, and deep learning for medical imaging, I strive to build innovative solutions that drive progress and impact lives positively.
      </p>
    </div>
  );
};

export default AboutCard;