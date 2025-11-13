import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [showHeroText, setShowHeroText] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Animate hero text after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroText(true);
    }, 500); // Delay before animation starts

    return () => clearTimeout(timer);
  }, []);

  // Team member data
  const teamMembers = [
    {
      name: 'Mark Evans',
      title: 'Founder & President',
      image: './assets/AboutUs/video/mark.png',
      videoUrl: 'https://www.youtube.com/embed/24MM5z35wuA',
      bio: 'Mark Evans is the founder and president of Better Direct. He started in this industry as a sales agent for IBM and Lenovo, and has now grown Better Direct into a HUBZone-certified, Service-Disabled Veteran-Owned IT VAR with 45+ employees. Mark continually looks for ways to innovate and has teams dedicated to new projects. He has built a business that values customer success and has a positive community impact. As a harbour combat veteran and IT expert, he leads the company while encouraging leadership and discipline. His entrepreneurial vision guides the Better Direct team to deliver cutting-edge IT solutions.',
      imagePosition: 'right'
    },
    {
      name: 'Diana Zhong',
      title: 'Financial Quantitative Analyst',
      image: './assets/AboutUs/video/diana.png',
      videoUrl: 'https://www.youtube.com/embed/SO7wcmXjjP4',
      bio: 'Diana Zhong is the Manager of Operations and Finance at Better Direct. In her Operations role, she aligns the departments with strategic goals and watches over the government projects so they run seamlessly. On the financial side, Diana optimizes the profitability of the company by making sure it runs efficiently, and by mitigating its financial risk. She also has the role of co-manager of the Army CHESS ADMC-3 contract.',
      imagePosition: 'left'
    },
    {
      name: 'Chase Cai',
      title: 'Purchasing Manager',
      image: './assets/AboutUs/video/chase.png',
      videoUrl: 'https://www.youtube.com/embed/lldvAJHiBPo',
      bio: 'Chase Cai is the Purchasing Manager at Better Direct. Seven years at Better Direct, she now manages the team that handles every aspect of Purchasing, including order processing, invoices, returns and even issue resolution. Chase develops and implements cost-saving strategies to strengthen the company\'s bottom line. She also has a role in working with the company\'s vendors to strengthen partnerships with them. Her goals are to ensure customer orders run smoothly and make the customer\'s jobs easier.',
      imagePosition: 'right'
    },
    {
      name: 'Kim Lambert',
      title: 'Sales Manager, Deputy SEWP Program Manager',
      image: './assets/AboutUs/video/kim.jpg',
      videoUrl: 'https://www.youtube.com/embed/T3W3muADeMY',
      bio: 'Kim Lambert is a Sales Manager at Better Direct who leads a dynamic sales team. She works on developing strong partnerships with distributors and manufacturers, she assists her team in helping customers grow. Her goal is for clients to receive fast service and tailored IT solutions, all at a better value. Kim challenges her team to innovate, so the team can deliver beyond expectations.',
      imagePosition: 'left'
    },
    {
      name: 'Kato Wong',
      title: 'Sales Manager, ADMC-3 Program Manager',
      image: './assets/AboutUs/video/kato.png',
      videoUrl: 'https://www.youtube.com/embed/A8Fs9TOv2Ys',
      bio: 'Kato Wong is a Better Direct Sales Manager. Since 2018, he has overseen the ADMC-3 and Army CHESS contracts for the company. He focuses on building longterm relationships with his customers so he can better understand their operational requirements and align IT solutions to their needs.',
      imagePosition: 'right'
    },
    {
      name: 'Joe Holt',
      title: 'Senior Engineer',
      image: './assets/AboutUs/video/joe.png',
      videoUrl: 'https://www.youtube.com/embed/nWddftjCXD0',
      bio: 'Joe Holt is the Senior Engineer at Better Direct. Joe has over 43 years in IT technical roles and sales experience. He even has System x engineering experience at IBM. Joe holds certifications from Cisco, IBM, HPE, and VMware. He is Better Direct\'s specialist in evaluating, repairing, and deploying both legacy and modern IT solutions.',
      imagePosition: 'left'
    },
    {
      name: 'Rashawn Hugg',
      title: 'Senior Program Manager',
      image: './assets/AboutUs/video/rashawn.png',
      videoUrl: 'https://www.youtube.com/embed/W8buP_sxQl8',
      bio: 'Rashawn Hugg is Better Direct\'s Senior Program Manager. He leads federal contract programs and project management teams, supporting agencies like NASA, DOA, and NSA. Rashawn develops partner relationships for the company as well as professional services initiatives. Rashawn\'s goal is to ensure successful project completion for Better Direct\'s customers.',
      imagePosition: 'right'
    },
    {
      name: 'Rachel Mock',
      title: 'GSA & 2GIT Program Manager',
      image: './assets/AboutUs/video/rachel.png',
      videoUrl: 'https://www.youtube.com/embed/6SI7Me-l5oA',
      bio: 'Rachel Mock is the Program Manager for GSA and 2GIT at Better Direct. She manages the GSA Advantage storefront, while also focusing on strategic vendor relations and marketing. Her goal is to assist Better Direct in delivering exceptional customer service. With over a decade of experience, Rachel crafts IT solutions that solve complex problems efficiently.',
      imagePosition: 'left'
    },
    {
      name: 'Thien Duc Phung',
      title: 'GSA & 2GIT Contract Manager',
      image: './assets/AboutUs/video/thien.png',
      videoUrl: 'https://www.youtube.com/embed/tFmVHjEJ-oQ',
      bio: 'Thien Duc Phung, oversees GSA and 2GIT contracts at Better Direct. Thien\'s focus with managing these contracts is to keep product listings current, ensure government compliance, and maintain strong client relationships. He began at Better Direct as a GSA Admin in 2022, and has been promoted to now lead catalog growth, bid responses, and revenue-driving initiatives, collaborating closely with our fulfillment team to resolve customer inquiries.',
      imagePosition: 'right'
    },

    {
      name: 'Matthew Walz',
      title: 'SEWP Program Manager',
      image: './assets/AboutUs/video/matt.png',
      videoUrl: 'https://www.youtube.com/embed/YPBn0WZhQqU',
      bio: 'Matthew Walz is the NASA SEWP Program Manager at Better Direct, which is its largest revenue-generating contract. Matt works closely with federal procurement teams to deliver IT solutions to government agencies. He focuses on expanding partnerships with OEMs so he has the best possible solutions for Better Direct\'s clients.',
      imagePosition: 'left'
    },
    {
      name: 'Anthony Hernandez',
      title: 'Project Manager',
      image: './assets/AboutUs/video/anthony.png',
      videoUrl: 'https://www.youtube.com/embed/ekB2n8ZM4u4',
      bio: 'Anthony Hernandez is the Project Manager at Better Direct. In this role, he leads the company\'s services team, and Theirn handles installations, repairs, and custom manufacturing projects. Years ago he started in data entry at Better Direct, and has grown with the company to manage house accounts and high-value contracts. He meets Better Direct\'s high standards as he delivers excellent customer services.',
      imagePosition: 'right'
    },
    {
      name: 'McKenna Mulligan',
      title: 'Project Manager',
      image: './assets/AboutUs/mckenna.jpg',
      videoUrl: 'https://www.youtube.com/embed/gOQocJ0WMzQ?feature=oembed',
      bio: 'McKenna Mulligan is a Project Manager at Better Direct, specializing in technology solutions and software implementations for government clients. She began her career as a Federal Sales Executive, gaining expertise in federal procurement and agency partnerships that now guide her project work. Combining her government sector insight with a background in custom software development, McKenna delivers impactful IT solutions across federal, state, and local agencies while helping grow Better Direct\'s services department and uphold its Tempe-based HUBZone, Service-Disabled Veteran-Owned mission.',
      imagePosition: 'left'
    }
  ];

  // Team grid data for "People Who Make a Difference" section
  const teamGrid = [
    { name: 'Mark Evans', title: 'President', image: './assets/AboutUs/mark.jpg' },
    { name: 'Diana Zhong', title: 'Financial Quantitative Analyst', image: './assets/AboutUs/diana.jpg' },
    { name: 'Rashawn Hugg', title: 'Senior Program Manager', image: './assets/AboutUs/video/rashawn.png' },
    { name: 'Chase Cai', title: 'Purchasing Manager', image: './assets/AboutUs/chase.jpg' },
    { name: 'Kim Lambert', title: 'Sales Manager/Deputy SEWP Program Manager', image: './assets/AboutUs/video/kim.jpg' },
    { name: 'Kato Wong', title: 'Sales Manager, ADMC-3 Program Manager', image: './assets/AboutUs/video/kato.png' },
    { name: 'Matt Walz', title: 'SEWP Program Manager', image: './assets/AboutUs/video/matt.png' },
    { name: 'Thien Duc Phung', title: 'GSA & 2GIT Contract Manager', image: './assets/AboutUs/video/thien.png' },
    { name: 'Rachel Mock', title: 'GSA & 2GIT Program Manager', image: './assets/AboutUs/rachel.jpg' },
    { name: 'Anthony Hernandez', title: 'Project Manager', image: './assets/AboutUs/anthony.jpg' },
    { name: 'McKenna Mulligan', title: 'Project Manager', image: './assets/AboutUs/mckenna.jpg' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image and Animated Text */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with strong blue tint and moved down */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(./assets/AboutUs/Group-scaled.jpg)'
          }}
        >
          <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ background: '#1161ad' }}></div>
        </div>

        {/* Animated Text Overlay - nearly transparent */}
        <div className="relative w-full flex items-center justify-center px-4 py-20">
          <div
            className={`rounded-xl shadow-2xl p-6 md:p-10 max-w-5xl w-full transition-all duration-1000 transform ${showHeroText
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
              }`}
            style={{ background: showHeroText ? 'rgba(248, 248, 248, 0.33)' : 'rgba(255, 255, 255, 0)' }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-start leading-tight" style={{ color: "#0570c6" }}>
              Rooted in Our Community, Driven by Innovation
            </h1>
            <div className="w-16 h-1 mb-6 md:mb-8" style={{ background: '#1161ad' }}></div>
            <p className="text-sm md:text-base text-start leading-relaxed" style={{ color: "#0570c6" }}>
              Since 2006, we've grown alongside Tempe, Arizona, creating opportunities for local talent and building IT solutions that make a difference. As a HUBZone-certified business, we take pride in employing community members who bring skill, dedication, and fresh ideas to every project, strengthening both our company and the neighborhoods we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-16" style={{ background: '#1161ad' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white leading-relaxed">
            Better Direct, LLC is a value-added reseller and manufacturer of information technology hardware, software, and related services headquartered in Tempe, Arizona. The Company was founded in 2006 and provides products and services to customers across all 50 states, as well as U.S. federal offices overseas. Better Direct is certified as a Historically Underutilized Business Zone (HUBZone), Service-Disabled Veteran-Owned Small Business (SDVOSB), and Small Disadvantaged Business (SDB). The Company is a prime contract holder under several federal procurement programs, including the GSA Multiple Award Schedule, 2nd Generation Information Technology (2GIT), NASA SEWP V (Groups A, B, and C), Army CHESS ADMC-3, and Navy SeaPort Next Generation. Better Direct offers more than 2,000 brands and approximately 400,000 products, and maintains two database centers with a focus on developing artificial intelligence solutions.
          </p>
        </div>
      </section>

      {/* Team Members Section - Alternating Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center mb-16 ${index !== teamMembers.length - 1 ? 'pb-16 border-b border-gray-200' : ''
                }`}
            >
              {/* Image and Video - Order changes based on imagePosition */}
              <div className={`${member.imagePosition === 'right' ? 'md:order-2' : ''}`}>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  {currentVideo === member.videoUrl ? (
                    // Video Player
                    <div className="relative w-full" style={{ height: '300px' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={member.videoUrl}
                        title={`${member.name} Video Interview`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      {/* Close button */}
                      <button
                        onClick={() => setCurrentVideo(null)}
                        className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    // Image with Play Button
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{ height: '300px' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/420x300?text=' + encodeURIComponent(member.name);
                        }}
                      />
                      {/* Video Play Button Overlay */}
                      <button
                        onClick={() => setCurrentVideo(member.videoUrl)}
                        className="absolute inset-0 flex items-center justify-center group hover:bg-black hover:bg-opacity-20 transition-all duration-300"
                      >
                        <div className="w-16 h-16 flex items-center justify-center">
                          <svg className="w-14 h-14 hover:scale-105 cursor-pointer" viewBox="0 0 56 56" fill="none">
                            <circle cx="28" cy="28" r="26" stroke="#0570c6 " strokeWidth="4" fill="transparent" />
                            <polygon points="22,18 22,38 40,28" fill="#0570c6" />
                          </svg>
                        </div>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className={`${member.imagePosition === 'right' ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "#0570c6" }}>
                  {member.name}
                </h2>
                <p className="mb-4 font-bold" style={{ color: "#0570c6" }}>
                  {member.title}
                </p>
                <div className="w-16 h-1" style={{ background: '#1161ad' }}></div>
                <p className="text-gray-700 leading-relaxed" style={{ color: "#0570c6" }}>
                  <span className="block rounded-lg px-4 py-3">
                    {member.bio.split(member.name).map((part, i, arr) =>
                      i < arr.length - 1
                        ? <>{part}<b className="font-bold" style={{ color: "#0570c6" }}>{member.name}</b></>
                        : part
                    )}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* People Who Make a Difference - Team Grid */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Title and Paragraph (1/4) */}
            <div className="lg:w-1/4 md:w-1/3 w-full flex-shrink-0">
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#0570c6" }}>
                People Who Make a Difference
              </h2>
              <div className="w-16 h-1 mb-4" style={{ background: '#1161ad' }}></div>
              <p className="max-w-md" style={{ color: "#0570c6" }}>
                Our team is the driving force behind everything we do. They are not just employees, they are innovators, problem-solvers, and champions of the community. More than half of our staff live locally, and many have found opportunities here that they might not have had at larger IT firms. By providing meaningful careers, mentorship, and a supportive environment, we help our team unlock their full potential, create lasting impact, and deliver exceptional IT solutions that benefit both our clients and the community we proudly call home.
              </p>
            </div>
            {/* Right: Team Grid (3/4 width for better 4-column layout) */}
            <div className="lg:w-3/4 md:w-2/3 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamGrid.map((person, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
                  >
                    <div className="w-full aspect-square relative flex-shrink-0">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: person.name === 'Rashawn Hugg' ? '5% center' : 'center' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(person.name);
                        }}
                      />
                      {/* Consistent white divider line */}
                      <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: '#fff' }} />
                    </div>
                    <div className="p-4 md:p-6 w-full flex flex-col items-center justify-center flex-grow">
                      <h3 className="font-bold mb-2 text-center leading-tight" style={{ color: "#0570c6" }}>{person.name}</h3>
                      <p className="text-sm text-gray-600 text-center leading-relaxed" style={{ color: "#0570c6" }}>{person.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;