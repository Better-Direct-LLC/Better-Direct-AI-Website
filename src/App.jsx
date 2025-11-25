import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import BuyNow from './components/BuyNow';
import CapabilityStatement from './components/CapabilityStatement';
import Careers from './components/Careers';
import Contactus from './components/Contactus';
import Contracts from './components/Contracts';
import News from './components/News';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import Certifications from './components/Certifications';
import EmployeeReview from './components/EmployeeReview';
import TwoGIT from './components/TwoGIT';
import MAS from './components/MAS';
import SEWP from './components/SEWP';
import ADMC from './components/ADMC';
import ITES from './components/ITES';
import SeaPort from './components/SeaPort';
import Events from './components/Events';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      {/* Global Font Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quattrocento:wght@800&family=Source+Serif+4:wght@500&display=swap');
        
        /* Global Font Application */
        * {
          font-family: 'Quattrocento', serif;
        }
        
        /* Headings - Quattrocento Bold (36-42px range) */
        h1, h2, h3, h4, h5, h6, 
        .heading-font,
        [class*="text-2xl"], [class*="text-3xl"], [class*="text-4xl"], [class*="text-5xl"], [class*="text-6xl"],
        .font-bold, .font-semibold {
          font-family: 'Quattrocento', serif !important;
          font-weight: 800 !important;
        }
        
        /* Heading Sizes - Range 36-42px */
        h1, [class*="text-4xl"], [class*="text-5xl"], [class*="text-6xl"] {
          font-size: 42px !important;
          line-height: 1.2 !important;
        }
        
        h2, [class*="text-3xl"] {
          font-size: 40px !important;
          line-height: 1.3 !important;
        }
        
        h3, [class*="text-2xl"] {
          font-size: 36px !important;
          line-height: 1.4 !important;
        }
        
        /* Body Text - SourceSerif4-Medium (16-18px range) - Exclude nav/footer links */
        p, span, div, li, button,
        .body-font,
        [class*="text-sm"], [class*="text-base"], [class*="text-lg"], [class*="text-xl"] {
          font-family: 'Quattrocento', serif !important;
          font-weight: 500 !important;
        }
        
        /* Regular content links (not in nav/footer) */
        a:not(nav a):not(footer a) {
          font-family: 'Quattrocento', serif !important;
        }
        
        /* Body Text Sizes - Range 16-18px */
        [class*="text-lg"], [class*="text-xl"] {
          font-size: 18px !important;
          line-height: 1.6 !important;
        }
        
        p, [class*="text-base"], div, span, li {
          font-size: 17px !important;
          line-height: 1.6 !important;
        }
        
        /* Regular content links sizing */
        a:not(nav a):not(footer a) {
          font-size: 17px !important;
          line-height: 1.6 !important;
        }
        
        [class*="text-sm"] {
          font-size: 16px !important;
          line-height: 1.5 !important;
        }
        
        /* Preserve button and input styling when needed - excluding nav buttons */
        button:not(nav button), input, select, textarea {
          font-family: 'Quattrocento', serif !important;
          font-weight: 500 !important;
        }
        
        /* Override any Tailwind font weights to maintain consistency */
        .font-light { font-weight: 500 !important; }
        .font-normal { font-weight: 500 !important; }
        .font-medium { font-weight: 500 !important; }
        
        /* Footer and Navbar links - Quattrocento Bold - Override all other rules */
        nav a, nav button, nav Link,
        footer a, footer button, footer Link,
        .navbar a, .navbar button,
        header a, header button {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* Extra specific targeting for Link components */
        nav [class*="Link"], footer [class*="Link"],
        nav > * > a, footer > * > a,
        nav div a, footer div a {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* FINAL OVERRIDE - Navigation and Footer links must use Quattrocento */
        nav a, nav button, nav Link,
        footer a, footer button, footer Link,
        .navbar a, .navbar button,
        header a, header button,
        nav [class*="Link"], footer [class*="Link"],
        nav > * > a, footer > * > a,
        nav div a, footer div a,
        nav * a, footer * a {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* NUCLEAR OPTION - Override any Tailwind font classes in nav/footer */
        nav .font-sans, footer .font-sans,
        nav .font-serif, footer .font-serif,
        nav .font-mono, footer .font-mono,
        nav [class*="font-"], footer [class*="font-"] {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* Target specific elements that might have inline styles */
        nav a[style*="font-family"], footer a[style*="font-family"],
        nav button[style*="font-family"], footer button[style*="font-family"] {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* ULTIMATE OVERRIDE - Target React Router Link elements specifically */
        footer .text-blue-600, footer .font-bold,
        nav .text-blue-600, nav .font-bold,
        footer [class*="text-"], nav [class*="text-"],
        footer [class*="hover:"], nav [class*="hover:"] {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* NAVBAR BUTTONS - FORCE BOLD */
        nav button, nav a[class*="border-2"] {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* Target specific navbar button classes */
        .group.relative.px-6.py-2\.5.border-2 {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* NUCLEAR OPTION - ALL TEXT IN NAV BUTTONS */
        nav button *, nav a[class*="border"] *, 
        nav [class*="group"] *, nav [class*="px-6"] *,
        nav span, nav button span {
          font-family: 'Quattrocento', serif !important;
          font-weight: 700 !important;
        }
        
        /* Override any font-medium in navbar */
        nav .font-medium, nav [class*="font-medium"] {
          font-weight: 700 !important;
        }
        
        /* Preserve responsive text sizing for footer links */
        @media (min-width: 768px) {
          footer .md\\:text-3xl {
            font-size: 1.875rem !important; /* text-3xl */
            line-height: 2.25rem !important;
          }
        }
        
        footer .text-xl {
          font-size: 1.25rem !important; /* text-xl for mobile */
          line-height: 1.75rem !important;
        }
      `}</style>
      
      <div className="App overflow-x-hidden">{/* Navbar appears on all pages */}
        <Navbar />
        
        {/* Define all routes */}
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/capability-statement" element={<CapabilityStatement />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/mas" element={<MAS />} />
          <Route path="/2git" element={<TwoGIT />} />
          <Route path="/sewp" element={<SEWP />} />
          <Route path="/admc" element={<ADMC />} />
          <Route path="/ites" element={<ITES />} />
          <Route path="/seaport" element={<SeaPort />} />
          
          {/* About Us sub-pages */}
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/employee-review" element={<EmployeeReview />} />
          <Route path="/events" element={<Events />} />
          
          {/* 404 Not Found - optional */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                <p className="text-xl text-gray-700">Page not found</p>
              </div>
            </div>
          } />
        </Routes>
        
        {/* Footer will go here when you create it */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;