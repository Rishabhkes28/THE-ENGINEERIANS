import React from 'react';


const BottomNav: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-4">
      <div className="bg-[#f2f2f2] rounded-full shadow-md flex px-10 py-5 space-x-12 max-w-4xl w-full justify-center">
        <div className='flex items-center space-x-4'>
        <span className="font-bold px-4 text-black">THE ENGINEERIANS</span>
        </div>
        <span className="text-gray-600 hover:text-black cursor-pointer">What</span>
        <span className="text-gray-600 hover:text-black cursor-pointer">Who</span>
        <span className="text-gray-600 hover:text-black cursor-pointer">How</span>
        <span className="text-gray-600 hover:text-black cursor-pointer">Pricing</span>
      </div>
    </div>
  );
};


export default BottomNav;