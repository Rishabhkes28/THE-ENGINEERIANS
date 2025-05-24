import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full grid grid-cols-12 grid-rows-14">
        {Array(144).fill(0).map((_, i) => (
          <div key={i} className="border-[0.5px] border-gray-200"></div>
        ))}
      </div>
    </div>
  );
}

export default GridBackground;