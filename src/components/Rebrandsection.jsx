import React from 'react';
import Logo from '.././assets/Logo1.png';

const RebrandSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Better Direct is Now Better Direct AI
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Logo */}
          <div className="flex justify-center">
            <img 
              src={Logo} 
              alt="Better Direct AI Logo" 
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Right side - Text content */}
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <p className="mb-4">
              We're excited to share that Better Direct is officially operating as <strong>Better Direct AI</strong>! This change reflects our continued focus on leveraging cutting-edge AI solutions to deliver exceptional value to our customers.
            </p>
            <p>
              Our commitment to quality, innovation, and service remains stronger than ever. Thank you for your continued support!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RebrandSection;