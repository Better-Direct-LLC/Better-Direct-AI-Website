import React from 'react';

const SuccessStories = () => {
  // Project highlights data
  const projectHighlights = [
    {
      title: 'Project Overview',
      content: 'Better Direct\'s Services team successfully executed a comprehensive wireless infrastructure upgrade at <strong>Joint Base Charleston</strong>. This initiative aimed to modernize the base\'s connectivity, increase network resilience, and support mission-critical operations across all facilities.'
    },
    {
      title: 'System Integration',
      content: 'Our team traveled to <strong>South Carolina</strong> to install and integrate the new system with the <strong>existing second-generation Air Force ARUBA network</strong>, originally deployed through the <strong>Base Information Transport Infrastructure (BITI)</strong> program. The integration was seamless, ensuring continuity with the Air Force\'s current network environment.'
    },
    {
      title: 'Equipment Upgrade',
      content: 'We replaced all outdated <strong>2G Wireless LAN equipment</strong> with <strong>430 advanced Access Points</strong>. These units meet rigorous <strong>Joint Interoperability Test Command (JITC)</strong> standards and are compliant with <strong>Federal Information Processing Standard (FIPS)</strong> and <strong>Trade Agreements Act (TAA)</strong> regulations, ensuring top-tier performance, security, and compliance.'
    },
    {
      title: 'Improved Performance',
      content: 'The upgrade delivered <strong>enhanced bandwidth</strong> and <strong>stronger signal strength</strong>, significantly improving wireless performance across the base. This was especially crucial for the <strong>Flightline areas</strong>, where consistent and reliable connectivity supports critical day-to-day operations.'
    },
    {
      title: 'High Availability & Network Coverage',
      content: 'To ensure uninterrupted connectivity, we maintained <strong>multitiered network access</strong> across all essential areas, including <strong>flight lines, hangars, offices, warehouses</strong>, and other critical facilities. The design focused on maximizing uptime and ensuring a resilient communications environment.'
    },
    {
      title: 'Redundancy & Reliability',
      content: 'We implemented <strong>overlapping access point coverage</strong> with both <strong>primary and backup controllers</strong>. This redundancy strategy was key to <strong>minimizing service interruptions</strong> and ensuring operational continuity in the event of equipment failure.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center md:text-left">
                  Better Direct's Mission to Power Federal IT
                </h1>
                <div className="w-16 h-1 bg-blue-600 mb-6 mx-auto md:mx-0"></div>
                <p className="text-blue-600 leading-relaxed">
                  Founded in 2006 by Army Major Mark S. Evans (Ret.), Better Direct has grown from a veteran-led vision into a nationwide leader in IT solutions for the U.S. government. As the only dual-certified SDVOSB and HUBZone value-added reseller in Arizona, Better Direct supports federal agencies with over 400,000 products from 140+ OEMs, spanning data centers, end-user devices, cybersecurity, and cloud solutions. With an impeccable record of 20,000+ orders fulfilled annually, a 100% RFQ responsiveness rate, and tailored innovations like $800,000 worth of ruggedized high-performance workstations, Better Direct consistently delivers mission-critical technology when and where it's needed most. Their story is one of resilience, precision, and unwavering commitment to serving those who serve the nation.
                </p>
              </div>

              {/* Right side - Image */}
              <div>
                <img 
                  src="./assets/Success/1.jpg"
                  alt="Better Direct Office"
                  className="w-full h-auto rounded-lg shadow-xl"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Better+Direct+Office';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Title Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-6">
              Empowering Mission-Critical Connectivity Better Direct Elevates Wireless Infrastructure at Joint Base Charleston
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-blue-600 leading-relaxed text-center">
              Better Direct recently partnered with the 628th Communications Squadron (628 CS) at Joint Base Charleston to deliver a seamless, state-of-the-art wireless upgrade that enhances mission readiness and operational efficiency. By modernizing the base's wireless infrastructure, Better Direct not only strengthened connectivity across critical areas but also earned an outstanding CPARS rating, reflecting exceptional performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
              Project Highlights
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

            {/* Grid of highlights */}
            <div className="grid md:grid-cols-3 gap-8">
              {projectHighlights.map((highlight, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-bold text-blue-600">
                    {highlight.title}
                  </h3>
                  <p 
                    className="text-blue-600 leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{ __html: highlight.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;