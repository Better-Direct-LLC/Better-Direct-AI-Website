// Editable CC email list
const ccEmailsRaw = [
  'rashawn.hugg@betterdirect.com',
  'mark@betterdirect.com',
  'kim@betterdirect.com',
  'kato@betterdirect.com',
  'thien@betterdirect.com',
  'rachel.mock@betterdirect.com',
  'diana@betterdirect.com',
  'devika.nhendanmadath@betterdirect.com',
  'matthew.walz@betterdirect.com'
];
const ccEmails = Array.from(new Set(ccEmailsRaw));
// Generate mailto link with CC
const mailtoLink = `mailto:info@betterdirect.com?cc=${encodeURIComponent(ccEmails.join(','))}`;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


// ImageCarousel component for 4-image auto-fading carousel with manual navigation
function ImageCarousel() {
  const carouselImages = [
    './assets/BuyNow/team-1.jpeg',
    './assets/BuyNow/team-2.jpg',
    './assets/BuyNow/team-3.jpg',
    './assets/BuyNow/team-4.jpg',
  ];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const length = carouselImages.length;

  useEffect(() => {
    const next = () => setCurrent((prev) => (prev + 1) % length);
    timeoutRef.current = setTimeout(next, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, length]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev + 1) % length);

  return (
    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-xl p-4 flex flex-col items-center relative overflow-hidden shadow-xl">
      <div className="w-full h-64 md:h-80 flex items-center justify-center relative">
        {carouselImages.map((src, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-700 ${current === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
            style={{ pointerEvents: current === idx ? 'auto' : 'none' }}
          >
            <img
              src={src}
              alt={`Carousel ${idx + 1}`}
              className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Image';
              }}
            />
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-transparent rounded-xl pointer-events-none" />
          </div>
        ))}
        {/* Left Arrow (always visible) */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border-2 border-white bg-white bg-opacity-90 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white text-blue-700 transition-all duration-300 z-20 hover:scale-105 cursor-pointer "
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Right Arrow (always visible) */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border-2 border-white bg-white bg-opacity-90 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white text-blue-700 transition-all duration-300 z-20 hover:scale-105 cursor-pointer"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${current === idx ? 'bg-blue-400 scale-110 shadow-lg' : 'bg-white opacity-60'}`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const BuyNow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data - you can add more items
  const carouselItems = [
    {
      title: 'ADMC-3 Contract Solutions',
      description: 'As an ADMC-3 contract holder, Better Direct supplies IT hardware, services, and lifecycle support to the U.S. Army and DoD.',
      buttonText: 'Request a Quote',
      buttonLink: '/contact-us',
      logo: './assets/BuyNow/admc.png',
    },
    {
      title: 'GSA Schedule Solutions',
      description: 'With our GSA Schedule contract, Better Direct makes it easy for Federal agencies to purchase the IT products and services they need at pre-negotiated, compliant rates.',
      buttonText: 'Request a Quote',
      buttonLink: '/contact-us',
      logo: './assets/BuyNow/gsa.jpg',
    },
    {
      title: 'SEWP Contract Solutions',
      description: 'Through the NASA SEWP V contract, Better Direct provides cutting-edge IT solutions to Federal agencies across all departments.',
      buttonText: 'Request a Quote',
      buttonLink: '/contracts',
      logo: './assets/BuyNow/sewp.png',
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section - Unlock Growth */}
      <section className="py-16" style={{ background: '#1161ad' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: "#0570c6" }}>
              Unlock Growth with Better Direct
            </h1>
            <p className="text-center leading-relaxed" style={{ color: "#0570c6" }}>
              At Better Direct, we specialize in providing cost-effective IT solutions, technology services, and business products tailored to Federal, DoD, Education, and State/Local needs. Whether you're looking to streamline procurement, stay compliant, reduce costs, or scale quickly, our dedicated sales team for each contract vehicle is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div
                className={` p-12 min-h-[400px] flex items-center justify-center transition-all duration-500`}
                style={{ background: '#1161ad' }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                  {/* Left side - Logo */}
                  <div className="flex justify-center">
                    <img
                      src={carouselItems[currentSlide].logo}
                      alt={carouselItems[currentSlide].title}
                      className="max-w-xs w-full h-auto object-contain"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Logo';
                      }}
                    />
                  </div>

                  {/* Right side - Content */}
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-4">
                      {carouselItems[currentSlide].title}
                    </h2>
                    <p className="mb-6 leading-relaxed">
                      {carouselItems[currentSlide].description}
                    </p>
                    <Link
                      to={carouselItems[currentSlide].buttonLink}
                      className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded hover:scale-105 cursor-pointer transition-all duration-300"
                    >
                      {carouselItems[currentSlide].buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-300 group hover:scale-105 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6  group-hover:translate-x-[-2px] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-300 group hover:scale-105 cursor-pointer"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6  group-hover:translate-x-[2px] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? '' : 'bg-gray-400'}`}
                  style={currentSlide === index ? { background: "#1161ad" } : {}}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Better Direct Section */}
      <section className="py-16" style={{ background: '#1161ad' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-8">
                Why Choose Better Direct?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="h-12 w-1 rounded-full mt-1 flex-shrink-0" style={{ background: '#0570c6' }}></div>
                  <p className="text-white">
                    <strong>Expert Contract Teams</strong> – Sales reps specializing in GSA, SEWP, ADMC-3, and 2GIT
                  </p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="h-12 w-1 rounded-full mt-1 flex-shrink-0" style={{ background: '#0570c6' }}></div>
                  <p className="text-white">
                    <strong>Fast, Reliable Service</strong> – Procurement and support delivered without delays
                  </p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="h-12 w-1 rounded-full mt-1 flex-shrink-0" style={{ background: '#0570c6' }}></div>
                  <p className="text-white">
                    <strong>Nationwide Support</strong> – Serving Federal, DoD, and agencies across the U.S
                  </p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="h-12 w-1 rounded-full mt-1 flex-shrink-0" style={{ background: '#0570c6' }}></div>
                  <p className="text-white">
                    <strong>Tailored IT Solutions</strong> – Hardware, software, and infrastructure that fit mission needs
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image Carousel */}
            <div className="relative">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Call us card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" style={{ color: "#0570c6" }} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold  mb-3" style={{ color: "#0570c6" }}>Call us directly</h3>
                  <p className="text-gray-700 mb-2" style={{ color: "#0570c6" }}>Call Us at:</p>
                  <a href="tel:4809213858" className=" hover:text-blue-800 font-medium" style={{ color: "#0570c6" }}>(480) 921-3858</a>
                  <span className="text-gray-500"> / </span>
                  <a href="tel:8669213858" className=" hover:text-blue-800 font-medium" style={{ color: "#0570c6" }}>(866) 921- 3858</a>
                </div>
              </div>
            </div>

            {/* Email us card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12" style={{ color: "#0570c6" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold  mb-3" style={{ color: "#0570c6" }}>Email us</h3>
                  <a
                    href={mailtoLink}
                    className="hover:text-blue-800 font-medium"
                    style={{ color: "#0570c6" }}
                  >
                    info@betterdirect.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyNow;  