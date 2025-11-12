import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '.././assets/Logo1.png';

// Editable CC email list
const ccEmails = [
  'mark@betterdirect.com',
  'kim@betterdirect.com',
  // Add more emails as needed
];

// Generate mailto link with CC
const mailtoLink = `mailto:info@betterdirect.com?cc=${encodeURIComponent(ccEmails.join(','))}`;
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Function to close mobile menu when link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full bg-white" ref={navRef}>
      {/* Top Bar with CTA Buttons */}
      <div className="border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-3">
            {/* Email us button */}
            <button
              className="group relative px-6 py-2.5 border-2 font-medium text-sm rounded overflow-hidden transition-all duration-300 hover:bg-gray-100 hover:border-transparent cursor-pointer hover:scale-105"
              style={{ color: '#1161ad', borderColor: '#1161ad' }}
              onClick={() => window.location.href = mailtoLink}
            >
              <span className="relative inline-flex items-center gap-1">
                Email us
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  »
                </span>
              </span>
            </button>

            {/* Phone button */}
            <a
              href="tel:4809213858"
              className="px-6 py-2.5 font-medium text-sm rounded transition-colors duration-200 hover:scale-105"
              style={{ background: '#0570c6', color: 'white' }}
              onMouseOver={e => e.currentTarget.style.background = '#1161ad'}
              onMouseOut={e => e.currentTarget.style.background = '#0570c6'}
            >
              Phone  480.921.3858
            </a>

            {/* Buy Now button */}
            <Link to="/buy-now" className="group relative px-6 py-2.5 border-2 font-medium text-sm rounded overflow-hidden transition-all duration-300 hover:bg-gray-100 hover:border-transparent cursor-pointer hover:scale-105" style={{ color: '#1161ad', borderColor: '#1161ad' }}>
              <span className="relative inline-flex items-center gap-1">
                Buy Now
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  »
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-100">
        <div className="px-1 sm:px-4 lg:px-8 w-full">
          <div className="flex justify-between xl:justify-start items-center h-20 md:h-20 lg:h-28">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 mr-2 sm:mr-4 xl:ml-8 xl:mr-8 max-w-full xl:h-24">
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="BetterDirect AI Logo"
                  className="h-12 sm:h-16 md:h-20 lg:h-28 xl:h-24 w-auto max-w-full object-contain hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links*/}
            <div className="hidden xl:flex items-center gap-8 xl:ml-auto">
              {/* About Us - with dropdown */}
              <div className="group relative">
                <Link
                  to="/about-us"
                  className="font-medium xl:text-xl whitespace-nowrap transition-all duration-200 py-2"
                  style={{ color: '#1161ad' }}
                >
                  About Us
                </Link>
                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] border-t-4" style={{ borderTopColor: '#1161ad', borderColor: '#1161ad' }}>
                    <Link to="/certifications" className="block px-4 py-2 text-sm" style={{ color: '#1161ad' }}>
                      Certifications
                    </Link>
                    <a href="https://drive.google.com/file/d/1Ktch401esB3V1p8dNACra15UUbHVUc_p/view" className="block px-4 py-2 text-sm" style={{ color: '#1161ad' }}>
                      Credit Application
                    </a>
                    <Link to="/employee-review" className="block px-4 py-2 text-sm" style={{ color: '#1161ad' }}>
                      Employee Review
                    </Link>
                    <a href="https://drive.google.com/file/d/1ErvMYOaUJKVTVquuXcaWNO-Nrni2bTLC/view" className="block px-4 py-2 text-sm" style={{ color: '#1161ad' }}>
                      W-9
                    </a>
                  </div>
                </div>
              </div>

              {/* Buy Now - with dropdown */}
              <div className="group relative">
                <Link
                  to="/buy-now"
                  className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent"
                  style={{ color: '#1161ad' }}
                >
                  Buy Now
                </Link>
                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] border-t-4" style={{ borderTopColor: '#1161ad', borderColor: '#1161ad' }}>
                    <a href="https://global.channelonline.com/bdc/gsastore/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fgsastore%2FsDashboard%2Fmain" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      GSA Store
                    </a>
                    <a href="https://global.channelonline.com/bdc/gsastore/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fgsastore%2FsDashboard%2Fmain" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      2GIT Store
                    </a>
                    <a href="https://global.channelonline.com/bdc/admc3/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fadmc3" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      ADMC 3 Store
                    </a>
                    <a href="https://global.channelonline.com/bdc/sewp/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fsewp%2FsDashboard%2Fmain" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      SEWP Store
                    </a>
                    <a href="https://global.channelonline.com/bdc/storesite/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fstoresite" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      Open Market
                    </a>
                    <a href="https://global.channelonline.com/bdc/admc3/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fadmc3" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      ITES-4H Store
                    </a>
                  </div>
                </div>
              </div>

              <Link
                to="/capability-statement"
                className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent hover:border-[#1161ad]"
                style={{ color: '#1161ad' }}
              >
                Capability statement
              </Link>

              <Link
                to="/careers"
                className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent hover:border-[#1161ad]"
                style={{ color: '#1161ad' }}
              >
                Careers
              </Link>

              <Link
                to="/contact-us"
                className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent hover:border-[#1161ad]"
                style={{ color: '#1161ad' }}
              >
                Contact Us
              </Link>

              {/* Contracts - with dropdown */}
              <div className="group relative">
                <Link
                  to="/contracts"
                  className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent"
                  style={{ color: '#1161ad' }}
                >
                  Contracts
                </Link>
                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] border-t-4" style={{ borderTopColor: '#1161ad', borderColor: '#1161ad' }}>
                    <Link to="/2git" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      GSA 2GIT
                    </Link>
                    <Link to="/mas" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      GSA MAS
                    </Link>
                    <Link to="/sewp" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      SEWP V
                    </Link>
                    <Link to="/admc" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      ADMC 3
                    </Link>
                    <Link to="/ites" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      ITES-4H
                    </Link>
                    <Link to="/seaport" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50" style={{ color: '#1161ad' }}>
                      SEAPORT
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent hover:border-[#1161ad]"
                style={{ color: '#1161ad' }}
              >
                Home
              </Link>

              <Link
                to="/news"
                className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent hover:border-[#1161ad]"
                style={{ color: '#1161ad' }}
              >
                News
              </Link>

              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent hover:border-[#1161ad]"
                style={{ color: '#1161ad' }}
              >
                Services
              </Link>

              <Link
                to="/success-stories"
                className="text-blue-600 hover:text-blue-800 font-medium text-xl whitespace-nowrap transition-all duration-200 py-2 border-b-4 border-transparent hover:border-[#1161ad]"
                style={{ color: '#1161ad' }}
              >
                Success Stories
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden  p-2 rounded-md text-blue-600 hover:bg-blue-50"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="xl:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <Link to="/about-us" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  About Us
                </Link>
                <Link to="/buy-now" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  Buy Now
                </Link>
                <Link to="/capability-statement" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  Capability statement
                </Link>
                <Link to="/careers" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  Careers
                </Link>
                <Link to="/contact-us" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  Contact Us
                </Link>
                <Link to="/contracts" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  Contracts
                </Link>
                <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  Home
                </Link>
                <Link to="/news" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  News
                </Link>
                <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  Services
                </Link>
                <Link to="/success-stories" className="text-blue-600 hover:text-blue-800 font-medium text-xl py-4 px-2" style={{ color: '#1161ad' }} onClick={closeMobileMenu}>
                  Success Stories
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;