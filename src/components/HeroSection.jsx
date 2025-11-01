import React from 'react';
import Hero_section from '../assets/Hero_section.jpeg';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Leading SDVOSB & HUBZone IT Provider in Arizona
              </h1>
              <p className="text-gray-700 mb-8">
                If you're an OEM interested in joining our GSA schedule
              </p>
              <div>
                <a 
                  href="/contracts"
                  className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Explore our Contracts
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex items-center justify-center">
              <img 
                src={Hero_section}
                alt="Better Direct Team" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Team+Photo';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;