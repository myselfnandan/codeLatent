import React from 'react';

const InteractiveBackground = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-white animate-gradient-flow"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Interactive Background</h1>
      </div>
    </div>
  );
};

export default InteractiveBackground;
