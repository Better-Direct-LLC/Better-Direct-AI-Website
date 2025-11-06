import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  const services = [
    {
      title: 'Audio / Video',
      description: 'Systems Design and implementation of advanced audio and video solutions.'
    },
    {
      title: 'Networking',
      description: 'Enterprise networking solutions for businesses of all sizes.'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services.'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your infrastructure.'
    },
    {
      title: 'IT Support',
      description: '24/7 managed IT services and technical support.'
    },
    {
      title: 'Consulting',
      description: 'Strategic IT consulting and planning services.'
    }
  ];

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
      setFade(false);
    }, 700);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
      setFade(false);
    }, 700);
  };

  const goToSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(false);
    }, 700);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Link
            to="/services"
            className="inline-block text-white px-8 py-3 rounded text-2xl font-bold mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-cyan-300 hover:shadow-lg transition-colors transition-shadow duration-200 cursor-pointer"
            aria-label="Go to Services page"
            style={{ background: '#1161ad' }}
          >
            Services
          </Link>
          <p className="font-medium mb-8" style={{ color: '#0570c6' }}>
            Empowering Your IT Infrastructure with Expert Solutions
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div className={`text-center py-12 transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}
            key={currentSlide}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#0570c6' }}>
              {services[currentSlide].title}
            </h3>
            <p className="text-gray-700">
              {services[currentSlide].description}
            </p>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-blue-700 transition-colors hover:scale-105 cursor-pointer"
            style={{ background: '#1161ad' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-blue-700 transition-colors hover:scale-105 cursor-pointer"
            style={{ background: '#1161ad' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8' : 'w-2 bg-gray-400'}`}
                style={currentSlide === index ? { background: '#1161ad' } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;