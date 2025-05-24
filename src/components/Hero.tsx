import React from 'react';
import GradientCard from './GradientCard';
import BottomNav from './BottomNav';

const Hero: React.FC = () => {
  return (
    <div className="py-10 md:py-24 flex flex-col items-center">
      <div className="text-center mb-1">
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-black tracking-tight leading-none zoom-target">
          WE BUILD FOR <br />
          THE BOLD.
        </h1>
      </div>
      
      <div className="relative w-full max-w-3xl mx-auto ">
        <GradientCard />
      </div>

      <button className="bg-black text-white px-9 py-3 rounded-full font-medium text-lg transition-colors shadow-lg hover:shadow-xl  active:translate-y-0 active:shadow-lg">
        Lets talk
      </button>

      <div className="fixed bottom-0 left-0 right-0 py-6">
        <BottomNav />
      </div>
    </div>
  );
}

export default Hero;