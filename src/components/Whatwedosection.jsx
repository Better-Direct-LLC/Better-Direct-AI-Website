import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/whatwedo-1.jpeg';
import image2 from '../assets/whatwedo-2.jpg';
import image3 from '../assets/whatwedo-3.jpeg';

const WhatWeDoSection = () => {
  const services = [
    {
      title: 'Personalized, Local Support',
      description: "As Arizona's only HUBZone, SDVOSB, SDB, IT Solutions Integrator, and OEM, our Tempe-based team answers every call 365 days a year, including weekends.",
      image: image1
    },
    {
      title: 'Tailored IT Solutions for Every Industry',
      description: 'We provide technology solutions for Federal, State, and Local Government, Education, and Commercial Enterprises covering planning, implementation, installation, and training.',
      image: image2
    },
    {
      title: 'Partnership with OEMs',
      description: 'OEMs can join our GSA Contract to expand their reach.',
      image: image3,
      hasButton: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#0570c6' }}>
          What do we do?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="rounded-lg flex items-center justify-center h-48 overflow-hidden mt-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(service.title);
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                {service.hasButton && (
                  <Link
                    to="/mas"
                    className="inline-block px-6 py-2 border-2 font-medium rounded transition-all duration-300"
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
                    Partner with us on GSA
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;