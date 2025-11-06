import React from 'react';
import { Link } from 'react-router-dom';
import Hero_section from '.././assets/Hero_section.jpeg';

const HeroSection = () => {
  return (
    <section className="py-20" style={{ background: '#1161ad' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0570c6' }}>
                Leading SDVOSB & HUBZone IT Provider in Arizona
              </h1>
              <p className="text-gray-700 mb-8">
                If you're an OEM interested in joining our GSA schedule
              </p>
              <div>
                <Link
                  to="/contracts"
                  className="inline-block px-8 py-3 border-2 font-medium rounded transition-all duration-300"
                  style={{ color: '#0570c6', borderColor: '#0570c6' }}
                  onMouseEnter={e => {
                    e.target.style.backgroundColor = '#0570c6';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.target.style.backgroundColor = '';
                    e.target.style.color = '#0570c6';
                  }}
                >
                  Explore our Contracts
                </Link>
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