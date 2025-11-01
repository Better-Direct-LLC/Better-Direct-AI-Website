import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo1.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      {/* Top Bar with CTA Buttons */}
      <div className="border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-3">
            {/* Email us button */}
            <button
              className="group relative px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-medium text-sm rounded overflow-hidden transition-all duration-300 hover:bg-gray-100 hover:border-transparent"
              onClick={() => window.location.href = 'mailto:info@betterdirectai.com'}
            >
              <span className="relative inline-flex items-center gap-1">
                Email us
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  »
                </span>
              </span>
            </button>

            {/* Phone button */}
            <p
              href="tel:4809213858"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Phone — 480.921.3858
            </p>

            {/* Buy Now button */}
            <button className="group relative px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-medium text-sm rounded overflow-hidden transition-all duration-300 hover:bg-gray-100 hover:border-transparent">
              <span className="relative inline-flex items-center gap-1">
                Buy Now
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  »
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="BetterDirect AI Logo"
                  className="h-14 w-auto max-w-xs object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-6">
              {/* About Us - with dropdown */}
              <div className="group relative">
                <Link
                  to="/about-us"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200 py-2"
                >
                  About Us
                </Link>
                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] border-t-4 border-t-blue-600">
                    <Link to="/certifications" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      Certifications
                    </Link>
                    <a href="https://drive.google.com/file/d/1Ktch401esB3V1p8dNACra15UUbHVUc_p/view" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      Credit Application
                    </a>
                    <Link to="/employee-review" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      Employee Review
                    </Link>
                    <a href="https://drive.google.com/file/d/1ErvMYOaUJKVTVquuXcaWNO-Nrni2bTLC/view" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      W-9
                    </a>
                  </div>
                </div>
              </div>

              {/* Buy Now - with dropdown */}
              <div className="group relative">
                <Link
                  to="/buy-now"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200 py-2"
                >
                  Buy Now
                </Link>
                {/* Dropdown - Add your Buy Now dropdown items here */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] border-t-4 border-t-blue-600">
                    <a href="https://global.channelonline.com/bdc/gsastore/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fgsastore%2FsDashboard%2Fmain" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      GSA Store
                    </a>
                    <a href="https://global.channelonline.com/bdc/gsastore/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fgsastore%2FsDashboard%2Fmain" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      2GIT Store
                    </a>
                    <a href="https://global.channelonline.com/bdc/admc3/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fadmc3" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      ADMC 3 Store
                    </a>
                    <a href="https://global.channelonline.com/bdc/sewp/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fsewp%2FsDashboard%2Fmain" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      SEWP Store
                    </a>
                    <a href="https://global.channelonline.com/bdc/storesite/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fstoresite" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      Open Market
                    </a>
                    <a href="https://global.channelonline.com/bdc/admc3/Login/main?fdestination=https:%2F%2Fusm.channelonline.com%2Fbdc%2Fadmc3" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      ITES-4H Store
                    </a>
                  </div>
                </div>
              </div>

              <Link
                to="/capability-statement"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200"
              >
                Capability statement
              </Link>

              <Link
                to="/careers"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200"
              >
                Careers
              </Link>

              <Link
                to="/contact-us"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200"
              >
                Contact Us
              </Link>

              {/* Contracts - with dropdown */}
              <div className="group relative">
                <Link
                  to="/contracts"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200 py-2"
                >
                  Contracts
                </Link>
                {/* Dropdown - Add your Contracts dropdown items here */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] border-t-4 border-t-blue-600">
                    <Link to="/2git" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      GSA 2GIT
                    </Link>
                    <Link to="/mas" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      GSA MAS
                    </Link>
                    <Link to="/sewp" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      SEWP V
                    </Link>
                    <Link to="/admc" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      ADMC 3
                    </Link>
                    <Link to="/ites" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      ITES-4H
                    </Link>
                    <Link to="/seaport" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                      SEAPORT
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                to="/news"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200"
              >
                News
              </Link>

              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200"
              >
                Services
              </Link>

              <Link
                to="/success-stories"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap transition-colors duration-200"
              >
                Success Stories
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-blue-600 hover:bg-blue-50"
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
                <Link to="/about-us" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  About Us
                </Link>
                <Link to="/buy-now" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  Buy Now
                </Link>
                <Link to="/capability-statement" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  Capability statement
                </Link>
                <Link to="/careers" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  Careers
                </Link>
                <Link to="/contact-us" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  Contact Us
                </Link>
                <Link to="/contracts" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  Contracts
                </Link>
                <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  Home
                </Link>
                <Link to="/news" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  News
                </Link>
                <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                  Services
                </Link>
                <Link to="/success-stories" className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
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