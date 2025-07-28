import React from 'react';

const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-transparent dark:bg-gray-900 font-poppins pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          About Me
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm Kalhara Batangala, an aspiring engineer passionate about leveraging technology to solve real-world problems. With a keen interest in DevOps, system administration, and deep learning for medical imaging, I strive to build innovative solutions that drive progress and impact lives positively. This section will be expanded with more details about my background, skills, and experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;