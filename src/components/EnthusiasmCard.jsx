import React from 'react';

// Strong Enthusiasm card component for displaying interests
const EnthusiasmCard = () => {
  // Interests list for easy updates
  const interests = [
    'DevOps',
    'System Administration',
    'Deep Learning for medical imaging',
    'Signal Processing',
    'Hello World'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
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
  );
};

export default EnthusiasmCard;