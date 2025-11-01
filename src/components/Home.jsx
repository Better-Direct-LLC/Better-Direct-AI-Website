import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ContractsSection from '../components/Contractssection.jsx';
import RebrandSection from '../components/Rebrandsection';
import WhatWeDoSection from '../components/WhatWeDosection';
import HubZoneSection from '../components/HubZonesection';
import CommunitySection from '../components/Communitysection';
import ServicesSection from '../components/Servicessection';
import PartnersSection from '../components/PartnersSection.jsx';

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