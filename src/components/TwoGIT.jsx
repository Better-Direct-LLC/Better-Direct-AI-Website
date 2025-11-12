import React from 'react';

const TwoGIT = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Rachel Mock',
      title: 'GSA & 2GIT Program Manager',
      photo: './assets/Contracts/2Git/rachel.png',
      description: 'Rachel Mock, Better Direct\'s GSA and 2GIT Program Manager, oversees the GSA Advantage storefront, vendor relations, and marketing. With over 10 years of experience, she delivers exceptional customer service and crafts efficient IT solutions for complex challenges.',
      buttonText: 'Contact Rachel',
      email: 'rachel.mock@betterdirect.com'
    },
    {
      name: 'Thien Duc Phung',
      title: 'GSA & 2GIT Contract Manager',
      photo: './assets/Contracts/2Git/Thien.jpg',
      description: 'Thien Duc Phung manages GSA and 2GIT contracts at Better Direct, ensuring current product listings, government compliance, and strong client relationships. Starting as a GSA Admin in 2022, he now leads catalog growth, bid responses, and revenue initiatives, working closely with the fulfillment team to address customer inquiries.',
      buttonText: 'Contact Thien',
      email: 'thien@betterdirect.com'
    },
    {
      name: 'Devika N',
      title: 'Assistant GSA & 2GIT Program Manager',
      photo: './assets/Contracts/2Git/devika.jpg',
      description: 'Works as Assistant Program Manager at Better Direct, supporting GSA and 2GIT operations, including GSA Advantage storefronts, vendor coordination, and federal contract management. With 5+ years of product management experience, Devika specializes in workflow optimization, data-driven strategy, and cross-functional collaboration, leveraging tools like Airtable, Drift, and MySQL to streamline procurement and enhance engagement.',
      buttonText: 'Contact Devika',
      email: 'devika.nhendanmadath@betterdirect.com'
    }
  ];

         // ========== EDITABLE CC CONFIGURATION ==========
    // Add or remove emails here as needed
    const additionalCCEmails = [
        'info@betterdirect.com',
        'mark@betterdirect.com'
        // Add more emails below as needed:
    ];
    // ================================================

    // Function to generate mailto link with CC
    const generateMailtoLink = (primaryEmail) => {
        // Get all other team member emails except the primary one
        const otherTeamEmails = teamMembers
            .filter(member => member.email !== primaryEmail)
            .map(member => member.email);

        // Combine team emails with additional CC emails
        const allCCs = [...otherTeamEmails, ...additionalCCEmails];

        // Remove duplicates and filter out the primary email if it exists in additional CCs
        const uniqueCCs = [...new Set(allCCs)].filter(email => email !== primaryEmail);

        // Create the mailto link with CC
        const ccString = uniqueCCs.join(',');
        return `mailto:${primaryEmail}?cc=${encodeURIComponent(ccString)}`;
    }; 
    

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16" style= {{ background: '#1161ad' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0570c6' }}>
                  The Only SDVOSB & HUBZone IT Provider in Arizona
                </h1>
                <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                  If you're an OEM interested in joining our 2GIT schedule
                </p>
              </div>

              {/* Right side - Logo */}
              <div className="flex justify-center">
                <img
                  src="./assets/Contracts/2Git/2GIT.png"
                  alt="2GIT Logo"
                  className="w-64 h-auto"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x150?text=2GIT';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left side - Main Content (2/3) */}
            <div className="md:col-span-2 space-y-8">
              {/* Main heading card */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0570c6' }}>
                  Elevate Your IT Procurement with Better Direct and the 2nd Generation Information Technology (2GIT) Blanket Purchase Agreement (BPA)
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: '#0570c6' }}>
                  Looking for a smarter, faster, and more affordable way to power your agency's IT needs? Better Direct is your premier partner under the 2nd Generation Information Technology (2GIT) Blanket Purchase Agreement (BPA), managed by the U.S. General Services Administration (GSA) — Contract #47QTCA21A000P. We deliver cutting-edge IT hardware, software, and services with exceptional value, expertise, and efficiency— tailored to federal, state, local, tribal, and regional government missions.
                </p>

                <h3 className="text-xl font-bold" style={{ color: '#0570c6' }}>
                  Why Better Direct Stands Out with 2GIT
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: '#0570c6' }}>
                  At Better Direct, we go beyond simply fulfilling orders —we turn the 2GIT BPA into your strategic advantage. Here's how we maximize its value for you:
                </p>

                <ul className="space-y-4 mb-6" style={{ color: '#0570c6' }}>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">•</span>
                    <div>
                      <strong>Maximized Savings:</strong> Enjoy pre-negotiated 2GIT discounts plus Better Direct's exclusive volume pricing and monthly specials. Stretch your budget further, whether upgrading a single workstation or overhauling enterprise systems.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">•</span>
                    <div>
                      <strong>Expert Collaboration:</strong> Our seasoned sales team goes beyond transactions, offering personalized guidance to match your needs with the perfect IT solutions from the 2nd Generation Information Technology (2GIT) Blanket Purchase Agreement (BPA) Special Item Numbers (SINs):
                    </div>
                  </li>
                </ul>

                <ul className="space-y-2 ml-8 mb-6" style={{ color: '#0570c6' }}>
                  <li>• <strong>IT Hardware (SIN 33411):</strong> Desktops, servers, and more.</li>
                  <li>• <strong>IT Services (SIN 54151):</strong> Cybersecurity support and other expert help.</li>
                  <li>• <strong>Software Licenses (SIN 511210):</strong> Critical applications for your operations.</li>
                  <li>• <strong>IT Maintenance (SIN 811212):</strong> Services to keep everything running reliably.</li>
                </ul>

                <ul className="space-y-4 mb-6" style={{ color: '#0570c6' }}>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">•</span>
                    <div>
                      <strong>Seamless Ordering:</strong> With pre-set terms, order effortlessly via GSA Advantage, eBuy, or direct requests. Our fulfillment pros ensure swift delivery and provide substitutes for discontinued items, keeping your projects on schedule.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">•</span>
                    <div>
                      <strong>Trusted Compliance:</strong> Every solution meets Federal Acquisition Regulations (FAR), Department of Defense (DoD) cybersecurity, and Supply Chain Risk Management (SCRM) standards, safeguarding your operations with reliability you can count on.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">•</span>
                    <div>
                      <strong>Speed & Scope:</strong> From laptops to networking gear and IT services, we deliver comprehensive solutions fast—backed by robust vendor support and warranty options for lasting confidence.
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
                  Unlock IT Excellence with the 2GIT contract and Better Direct
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: '#0570c6' }}>
                  The 2GIT Blanket Purchase Agreement (BPA), [available through March 30, 2026], empowers your agency to modernize IT with ease and efficiency. Tailored for clients like the U.S. Air Force, Department of Defense (DoD), and state/local buyers through GSA's Cooperative Purchasing Program, it delivers:
                </p>

                <ul className="space-y-2 ml-8 mb-6" style={{ color: '#0570c6' }}>
                  <li>• <strong>Cost Efficiency:</strong> Competitive pricing from 70+ pre-vetted vendors, including 50+ small businesses, under IT Schedule 70.</li>
                  <li>• <strong>Versatility:</strong> Scales from small upgrades to enterprise-wide deployments.</li>
                  <li>• <strong>Speed:</strong> Lowest Price Technically Acceptable (LPTA) standards accelerate acquisition.</li>
                </ul>

                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
                  Ready to Transform Your IT? Contact Us!
                </h3>
              </div>
            </div>

            {/* Right side - Team Cards (1/3) */}
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  {/* Photo with US flag background */}
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-r from-blue-800 via-red-600 to-blue-800 rounded-lg overflow-hidden">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(member.name);
                        }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0570c6' }}>
                    {member.name}
                  </h3>

                  {/* Title */}
                  <p className="text-sm font-semibold" style={{ color: '#0570c6' }}>
                    {member.title}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#0570c6' }}>
                    {member.description}
                  </p>

                  {/* Contact Button */}
                  <button
                    onClick={() => window.location.href = generateMailtoLink(member.email)}
                    className="px-6 py-2 text-white font-medium rounded shadow hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    style={{ background: '#1161ad' }}>
                    {member.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact 2GIT Sales Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start gap-6">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20  overflow-hidden shadow-lg">
                  <img
                    src="./assets/Contracts/2Git/madison.jpg"
                    alt="Madison Alberts"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80x80?text=MA';
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#0570c6' }}>
                  Contact 2GIT Sales
                </h2>
                <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                  For your 2GIT sales needs, partner with Better Direct to unlock tailored IT solutions and exceptional service. Our GSA sales team, led by Madi Alberts, is dedicated to delivering top-notch support, ensuring seamless procurement and compliance for your agency's mission. Contact us today at <a href="tel:4809213858" className="underline hover:text-blue-800">(480) 921-3858</a> ext.703 or email <a onClick={() => window.location.href = generateMailtoLink('madison.alberts@betterdirect.com')} className="underline cursor-pointer" style={{ color: '#0570c6' }}>madison.alberts@betterdirect.com</a> to get started!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwoGIT;