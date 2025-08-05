import React, { useState } from 'react';

const getProgressLabel = (progress) => {
  if (progress < 25) return "Very Bad";
  if (progress < 50) return "Bad";
  if (progress < 75) return "Good";
  return "Very Good";
};

const Progress = () => {
  const [progress, setProgress] = useState(60);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="w-[50%] bg-white/20 rounded-full h-4 overflow-hidden shadow-inner mx-auto cursor-pointer"
        style={{ position: "relative" }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percent = Math.max(0, Math.min(1, x / rect.width));
          setProgress(Math.round(percent * 100));
        }}
        // Remove onMouseLeave so progress stays where left
      >
        <div
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-2 text-amber-50 font-semibold text-lg">
        Progress: {progress}% - {getProgressLabel(progress)}
      </div>
    </div>
  );
};

export default Progress;