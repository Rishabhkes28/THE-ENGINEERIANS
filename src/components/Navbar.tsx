import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="pt-2 pb-2 flex flex-col items-center justify-between">

      <div className="flex items-center ">
          <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-blink"></div>
          <span className="text-sm font-medium">We are available</span>
        </div>
      </div>
  );
}

export default Navbar;