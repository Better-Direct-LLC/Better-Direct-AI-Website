import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '.././assets/Logo1.png';
import { FaEnvelope, FaPhone, FaShoppingCart } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    // Small delay to allow route change, then smooth scroll
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth',
        // Additional smoothness for supported browsers
        block: 'start'
      });
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl px-8 py-8 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0 relative">
          {/* Logo */}
          <div className="flex-1 flex flex-col items-center justify-center mb-6 md:mb-0">
            <Link to="/" onClick={scrollToTop}>
              <img 
                src={Logo} 
                alt="Better Direct AI Logo" 
                className="h-24 w-auto object-contain mb-2 transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-200" style={{transform: 'translateX(-50%)'}}></div>
          {/* Links */}
          <div className="flex-1 grid grid-cols-2 gap-4 items-center justify-items-center md:pl-12">
            <div className="flex flex-col gap-2 items-center">
              <Link to="/about-us" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">About us</Link>
              <Link to="/buy-now" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">Buy Now</Link>
              <Link to="/careers" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">Careers</Link>
              <Link to="/contact-us" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">Contact us</Link>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Link to="/contracts" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">Contracts</Link>
              <Link to="/" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">Home</Link>
              <Link to="/services" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">Services</Link>
              <Link to="/success-stories" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">Success Stories</Link>
            </div>
          </div>
        </div>
        {/* Contact & Social Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button 
            onClick={() => window.location.href = 'mailto:info@betterdirectai.com'}
            className="flex items-center gap-2 px-5 py-2 border-2 border-white text-white font-medium text-sm rounded-full bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow"
          >
            <FaEnvelope /> Email us
          </button>
          <a 
            href="tel:4809213858"
            className="flex items-center gap-2 px-5 py-2 border-2 border-white text-white font-medium text-sm rounded-full bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow"
          >
            <FaPhone /> 480.921.3858
          </a>
          <Link
            to="/buy-now"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2 border-2 border-white text-white font-medium text-sm rounded-full bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow"
          >
            <FaShoppingCart /> Buy Now
          </Link>
        </div>
        {/* Address & Copyright */}
        <div className="text-center text-white mt-8 text-sm">
          <p className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className='font-bold'>2425 E. University Dr., Tempe, AZ 85288</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;