import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar appears on all pages */}
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
    </BrowserRouter>
  );
}

export default App;