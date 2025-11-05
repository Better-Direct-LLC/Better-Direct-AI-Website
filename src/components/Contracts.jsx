import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import contract logos
import GSALogo from '.././assets/GSA.jpg';
import TwoGITLogo from '.././assets/2GIT.png';
import SEWPLogo from '.././assets/SEWP.png';
import ADMCLogo from '.././assets/ADMC.png';
import SeaportLogo from '.././assets/Seaport.jpg';
import ITESLogo from '.././assets/ITES.png';

const Contracts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStateSlide, setCurrentStateSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isStateTransitioning, setIsStateTransitioning] = useState(false);

  // State Contracts Carousel slides
  const stateSlides = [
    {
      image: './assets/Contracts/state/state-1.jpeg',
      title: 'CMAS',
      description: 'The State of California establishes multiple award agreements in accordance with Public Contract Code Sections 10290 et seq. and 12101.5 (effective January 1994). A multiple award is an award to two or more contractors for the same products and/or services at the same or similar prices. Multiple award does not pertain to the number of buyers who would be ordering from the agreement, but rather the number of contractors receiving an award from a common bid process.'
    },
    {
      image: './assets/Contracts/state/state-2.jpeg',
      title: 'NYSOGS',
      description: 'The Office of General Services (OGS) was established in 1960 to provide essential support services for the operations of state government. Since then, OGS has grown significantly in scope and complexity. Today, we are a diversified organization providing a broad spectrum of services to state agencies, local governments, and the public. Since its inception, OGS has developed expertise in centralizing critical support services and functions leading to a cost-effective government. OGS facilitates the work of New York State agencies, the Legislature and Judiciary; support local government, eligible nonprofits, school districts, and public authorities. The agency provides services through the development and management of efficient, cost-effective, and environmentally-sustainable programs and activities. Delivery of critical services is performed in partnering with New York State businesses'
    },
    {
      image: './assets/Contracts/state/state-3.jpeg',
      title: 'WSCA-NASPO',
      description: 'The Western States Contracting Alliance (WSCA) awarded contracts to several companies that offer Facilities Maintenance, Repair and Operations (MRO) products. Three of the awardees can offer products in all MRO categories (including cleaning supplies, paints, trash bags, lighting equipment, power tools, batteries, and other building maintenance products). These products are available to public agencies in all participating states.'
    }
  ];

  // Federal Carousel slides
  const carouselSlides = [
    {
      image: './assets/Contracts/gsa.jpg',
      title: 'GSA MAS #GS-35F-0503X',
    },
    {
      image: './assets/Contracts/2git.png',
      title: 'GSA 2GIT #47QTCA21000P',
    },
    {
      image: './assets/Contracts/sewp.png',
      title: 'NNG15SD445B ,NNG15SD10B, NNG15SD65B',
    },
    {
      image: './assets/Contracts/admc.png',
      title: 'W52P1J20D0018',
    },
    {
      image: './assets/Contracts/Seaport.jpg',
      title: 'N001782FD7129',
    }
  ];

  // Contract information cards
  const contracts = [
    {
      logo: GSALogo,
      title: 'General Services Administration (GSA) Multiple Award Schedule (MAS)',
      description: 'Better Direct elevates your IT procurement as a strategic partner under GSA MAS (Contract #GS-35F-0503X), providing access to over 400,000 products from 140+ OEMs like Dell, HP, and Dell. Ideal for federal, state, and local agencies, we offer competitive pricing, personalized expertise across SINs such as IT Hardware (33411), Furniture (33721), Professional Services (54151), Security (334010), Office Equipment (339940), Software (511210), and Maintenance (811212), effortless acquisition via GSA Advantage, full FAR/TAA/cybersecurity compliance, and swift, scalable solutions backed by proven results like $40M+ in Navy repairs.',
      buttonText: 'Learn More About GSA MAS',
      buttonLink: '/mas'
    },
    {
      logo: TwoGITLogo,
      title: '2nd Generation Information Technology (2GIT) Blanket Purchase Agreement (BPA)',
      description: 'Better Direct is your premier partner under the GSA-managed 2GIT BPA (Contract #47QTCA21A000P), offering cutting-edge IT hardware, software, and services through March 30, 2026. Tailored for federal, state, local, tribal, and regional governments, including the U.S. Air Force and DoD, we deliver maximized savings with pre-negotiated discounts, expert guidance on SINs like IT Hardware (33411), Services (54151), Software (511210), and Maintenance (811212), seamless ordering via GSA Advantage or eBuy, trusted FAR/DoD compliance, and rapid delivery from 70+ vendors, including 50+ small businesses, for scalable IT modernization.',
      buttonText: 'Learn More About GSA 2GIT',
      buttonLink: '/2git'
    },
    {
      logo: SEWPLogo,
      title: 'NASA SEWP V',
      description: 'Better Direct powers federal IT needs as a key partner under NASA\'s SEWP V GWAC, holding contracts in Group A (NNG15SD45B), Group B (NNG15SD10B), and Group C (NNG15SD65B). As an SDVOSB and HUBZone-certified company, we provide cost-effective IT products and services, including hardware, networking, software, cloud, mobility, and supporting tech, with expert support, seamless ordering via the SEWP Quote Request Tool, FAR-compliant solutions, and rapid scalability for any agency mission, proven by achievements like $40M+ in Navy repairs.',
      buttonText: 'Learn More About SEWP V',
      buttonLink: '/sewp'
    },
    {
      logo: ADMCLogo,
      title: 'Chess ADMC-3',
      description: 'Better Direct is your go-to partner under the ADMC-3 BPA (W52P1J-20-D-0018) within the Army\'s CHESS program, delivering fee-free COTS IT hardware like desktops, notebooks, tablets, printers, displays, and accessories to the U.S. Army, DoD, and all federal agencies. As the sole SDVOSB and HUBZone vendor among 10 awardees, we offer cost mastery, tailored expert guidance, effortless ordering via CHESS IT e-mart, full FAR/DoD compliance, and fast, scalable solutions, highlighted by a 130.25% sales increase in 2023 and 64.3% in 2024.',
      buttonText: 'Learn More About ADMC-3',
      buttonLink: '/admc'
    },
    {
      logo: SeaportLogo,
      title: 'Navy Seaport NXG',
      description: 'Better Direct supports Navy missions under the SeaPort-NxG IDIQ (N0017825D7129), a $4B vehicle running through January 1, 2029, for engineering, program management, and IT services across commands like NAVSEA, NAVWAR, and USMC. We deliver best-value pricing, expert-led solutions in design, testing, risk management, AI/ML, secure infrastructure, and incidental materials, streamlined Task Orders, FAR/DFARS/DoD compliance, and scalable, rapid deployment for innovative projects, ensuring mission success with our proven federal expertise.',
      buttonText: 'Learn More About Seaport',
      buttonLink: '/seaport'
    },
    {
      logo: ITESLogo,
      title: 'Chess ITES-4H',
      description: 'Better Direct is your trusted partner under the ITES-4H contract (W52P1J-23-D-0005), delivering cost-effective, compliant, and mission-ready IT hardware for the Army, DoD, and federal agencies. Through CHESS IT e-mart, we offer zero-fee pricing and a comprehensive portfolio of desktops, laptops, servers, tablets, printers, monitors, and accessories, delivered quickly and reliably. As a Service-Disabled Veteran-Owned Small Business (SDVOSB) and Certified HUBZone vendor, we combine speed, scalability, and expertise to ensure your agency\'s IT needs are met with precision and value.',
      buttonText: 'Learn More About ITES-4H',
      buttonLink: '/ites'
    }
  ];

  const animateSlideChange = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsTransitioning(false);
    }, 350); // 350ms fade duration
  };

  const nextSlide = () => {
    animateSlideChange((currentSlide + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    animateSlideChange((currentSlide - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index) => {
    animateSlideChange(index);
  };

  // State carousel navigation with animation
  const animateStateSlideChange = (newIndex) => {
    setIsStateTransitioning(true);
    setTimeout(() => {
      setCurrentStateSlide(newIndex);
      setIsStateTransitioning(false);
    }, 350); // 350ms fade duration
  };

  const nextStateSlide = () => {
    animateStateSlideChange((currentStateSlide + 1) % stateSlides.length);
  };

  const prevStateSlide = () => {
    animateStateSlideChange((currentStateSlide - 1 + stateSlides.length) % stateSlides.length);
  };

  const goToStateSlide = (index) => {
    animateStateSlideChange(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="py-16" style={{ backgroundColor : "#1161ad"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{color: "#0570c6"}}>
                  Federal Contracts
                </h1>
                <p className="leading-relaxed" style={{ color: "#0570c6" }}>
                  Better Direct is your trusted partner for federal IT procurement, leveraging premier contracts like GSA's 2GIT BPA, GSA MAS, NASA SEWP V, Army CHESS ADMC-3, and Navy SeaPort-NxG to deliver innovative, compliant, and cost-effective IT solutions. As a Service-Disabled Veteran-Owned Small Business (SDVOSB) and Certified HUBZone company, we process 20,000 orders annually with 60% year-over-year revenue growth, providing access to over 400,000 products from 2,000+ OEMs, offering tailored expertise, seamless acquisition, and rapid deployment for federal, state, and local agency missions, backed by proven success like $40M+ in Navy repairs.
                </p>
              </div>

              {/* Right side - Carousel */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor : "#1161ad"}}>
                  {/* Carousel Image */}
                  <div className={`relative h-0 transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} style={{paddingBottom: '56.25%'}}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={carouselSlides[currentSlide].image}
                        alt={carouselSlides[currentSlide].title}
                        className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/600x400?text=Contract';
                        }}
                      />
                    </div>
                  </div>

                  {/* Text Overlay */}
                  <div className="text-white text-center py-6" style={{ backgroundColor : "#1161ad"}}>
                    <h3 className="text-2xl font-bold mb-2">
                      {carouselSlides[currentSlide].title}
                    </h3>
                    <p className="text-lg">
                      {carouselSlides[currentSlide].subtitle}
                    </p>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 pb-4">
                    {carouselSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`rounded-full transition-all duration-300 border-2 focus:outline-none ${
                          currentSlide === index
                            ? 'bg-[#0570c6] border-white shadow-lg w-4 h-4 scale-125'
                            : 'bg-white/50 border-transparent opacity-70 w-3 h-3'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-300 group"
                  aria-label="Previous slide"
                >
                  <svg 
                    className="w-6 h-6 text-blue-600 group-hover:translate-x-[-2px] transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-300 group"
                  aria-label="Next slide"
                >
                  <svg 
                    className="w-6 h-6 text-blue-600 group-hover:translate-x-[2px] transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {contracts.map((contract, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                {/* Logo */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={contract.logo}
                    alt={contract.title}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80x80?text=Logo';
                    }}
                  />
                  <h2 className="text-xl font-bold" style={{ color: "#1161ad" }}>
                    {contract.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="leading-relaxed mb-6" style={{ color: "#0570c6" }}>
                  {contract.description}
                </p>

                {/* Button */}
                <Link 
                  to={contract.buttonLink}
                  className="inline-block px-6 py-3 border-2 font-medium rounded hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  style={{ color: "#0570c6" , borderColor: "#0570c6"}}
                >
                  {contract.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Contracts Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0570c6" }}>
                  State Contracts
                </h2>
                <p className="leading-relaxed" style={{ color: "#0570c6" }}>
                  Better Direct partners with NYSOGS, WSCA-NASPO, and CMAS to provide cost-effective, environmentally sustainable products and services. NYSOGS supports New York State agencies, local governments, and nonprofits with centralized, efficient solutions. WSCA-NASPO contracts offer MRO products to public agencies across participating states. CMAS establishes multiple award agreements for California, enabling multiple contractors to supply similar products/services at competitive prices.
                </p>
              </div>

              {/* Right side - Carousel */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor : "#1161ad"}}>
                  {/* Carousel Image and Text */}
                  <div className="p-8">
                    <div className={`bg-white rounded-lg mb-6 p-6 flex items-center justify-center h-64 transition-all duration-500 ${isStateTransitioning ? 'opacity-0' : 'opacity-100'}`}> 
                      <img 
                        src={stateSlides[currentStateSlide].image}
                        alt={stateSlides[currentStateSlide].title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(stateSlides[currentStateSlide].title);
                        }}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-4">
                        {stateSlides[currentStateSlide].title}
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {stateSlides[currentStateSlide].description}
                      </p>
                    </div>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 pb-6">
                    {stateSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToStateSlide(index)}
                        className={`rounded-full transition-all duration-300 border-2 focus:outline-none ${
                          currentStateSlide === index
                            ? 'bg-[#0570c6] border-white shadow-lg w-4 h-4 scale-125'
                            : 'bg-white/50 border-transparent opacity-70 w-3 h-3'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={prevStateSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-300 group"
                  aria-label="Previous slide"
                >
                  <svg 
                    className="w-6 h-6 text-blue-600 group-hover:translate-x-[-2px] transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button 
                  onClick={nextStateSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-300 group"
                  aria-label="Next slide"
                >
                  <svg 
                    className="w-6 h-6 text-blue-600 group-hover:translate-x-[2px] transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contracts;