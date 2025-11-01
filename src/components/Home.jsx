import React from 'react';
import HeroSection from '../components/HeroSection';
import ContractsSection from '../components/Contractssection';
import RebrandSection from '../components/Rebrandsection';
import WhatWeDoSection from '../components/Whatwedosection';
import HubZoneSection from '../components/Hubzonesection.jsx';
import CommunitySection from '../components/Communitysection.jsx';
import ServicesSection from '../components/Servicessection.jsx';
import PartnersSection from '../components/Partnerssection.jsx';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContractsSection />
      <RebrandSection />
      <WhatWeDoSection />
      <HubZoneSection />
      <CommunitySection />
      <ServicesSection />
      <PartnersSection />
    </div>
  );
};

export default Home;