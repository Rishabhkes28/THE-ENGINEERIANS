import React from 'react';
// import variant1 from '/public/variant 1.png'


const GradientCard: React.FC = () => {
  return (
    <div className="px-6 py-6 pt-4 pb-0.5 bg-gradient flex flex-col  items-center justify-center w-full max-w-3xl mx-auto">
      <img src="/public/variant 1.png" alt="Gradient Card" width={500} height={500} />
    </div>
  );
}

export default GradientCard;