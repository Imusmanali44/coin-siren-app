import React from 'react';

interface LoaderProps {
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ color = 'blue-500' }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-6 h-6 border-4 border-${color} border-r-transparent border-solid rounded-full animate-spin`}></div>
    </div>
  );
};

export default Loader;
