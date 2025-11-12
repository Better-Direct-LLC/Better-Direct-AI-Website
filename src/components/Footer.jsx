import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '.././assets/Logo1.png';
import { FaEnvelope, FaPhone, FaShoppingCart } from 'react-icons/fa';

// Editable CC email list
const ccEmails = [
  'mark@betterdirect.com',
  'kim@betterdirect.com',
  // Add more emails as needed
];

// Generate mailto link with CC
const mailtoLink = `mailto:info@betterdirect.com?cc=${encodeURIComponent(ccEmails.join(','))}`;

const Footer = () => {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <footer className="py-10" style={{ background: '#1161ad' }}>
      <div className="w-full max-w-[1600px] mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl w-full px-4 py-8 md:px-16 md:py-12 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0 relative overflow-x-auto">
          {/* Logo */}
          <div className="flex-1 flex flex-col items-center justify-center mb-6 md:mb-0">
            <Link to="/" onClick={scrollToTop}>
              <img
                src={Logo}
                alt="Better Direct AI Logo"
                className="h-32 md:h-40 w-auto object-contain mb-2 transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-200" style={{ transform: 'translateX(-50%)' }}></div>
          {/* Links */}
          <div className="flex-1 grid grid-cols-2 gap-6 md:gap-10 items-center justify-items-center md:pl-16">
            <div className="flex flex-col gap-4 md:gap-6 items-center">
              <Link to="/about-us" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-bold text-xl md:text-3xl transition-colors transform hover:scale-105 duration-300" style={{ color: "#0570c6" }}>About us</Link>
              <Link to="/buy-now" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-bold text-xl md:text-3xl transition-colors transform hover:scale-105 duration-300" style={{ color: "#0570c6" }}>Buy Now</Link>
              <Link to="/careers" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-bold text-xl md:text-3xl transition-colors transform hover:scale-105 duration-300" style={{ color: "#0570c6" }}>Careers</Link>
              <Link to="/contact-us" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-bold text-xl md:text-3xl transition-colors transform hover:scale-105 duration-300" style={{ color: "#0570c6" }}>Contact us</Link>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 items-center">
              <Link to="/contracts" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-bold text-xl md:text-3xl transition-colors transform hover:scale-105 duration-300" style={{ color: "#0570c6" }}>Contracts</Link>
              <Link to="/" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-bold text-xl md:text-3xl transition-colors transform hover:scale-105 duration-300" style={{ color: "#0570c6" }}>Home</Link>
              <Link to="/services" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-bold text-xl md:text-3xl transition-colors transform hover:scale-105 duration-300" style={{ color: "#0570c6" }}>Services</Link>
              <Link to="/success-stories" onClick={scrollToTop} className="text-blue-600 hover:text-blue-800 font-bold text-xl md:text-3xl transition-colors transform hover:scale-105 duration-300" style={{ color: "#0570c6" }}>Success Stories</Link>
            </div>
          </div>
        </div>
        {/* Contact & Social Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <button
            onClick={() => window.location.href = mailtoLink}
            className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium text-lg text-bold rounded-full transition-all duration-300 shadow cursor-pointer hover:bg-[#0570c6] hover:text-white hover:scale-105 hover:shadow-lg"
            style={{ background: '#1161ad' }}
          >
            <FaEnvelope /> Email us
          </button>
          <a
            href="tel:4809213858"
            className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium text-lg rounded-full transition-all duration-300 shadow cursor-pointer hover:bg-[#0570c6] hover:text-white hover:scale-105 hover:shadow-lg"
            style={{ background: '#1161ad' }}
          >
            <FaPhone /> 480.921.3858
          </a>
          <Link
            to="/buy-now"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium text-lg rounded-full transition-all duration-300 shadow cursor-pointer hover:bg-[#0570c6] hover:text-white hover:scale-105 hover:shadow-lg"
            style={{ background: '#1161ad' }}
          >
            <FaShoppingCart /> Buy Now
          </Link>
        </div>
        {/* Address & Copyright */}
        <div className="text-center text-white mt-10 text-lg">
          <p className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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