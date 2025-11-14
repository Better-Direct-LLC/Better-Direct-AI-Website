import React, { useState } from 'react';

const News = () => {
  // Photo gallery images
  const galleryPhotos = [
    { src: './assets/News/bd.jpg', alt: 'Better Direct Presentation' },
    { src: './assets/News/bd-2.jpg', alt: 'Team Collaboration' },
    { src: './assets/News/bd-3.jpg', alt: 'Team Meeting' },
    { src: './assets/News/bd-4.jpg', alt: 'Team Event' }
  ];

  // Modal state for gallery
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Senator Sinema Meeting Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#0570c6' }}>
            Better Direct President Mark Evans Met with Senator Sinema at Veterans Round Table
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Body Text */}
            <div>
              <p className="leading-relaxed text-lg" style={{ color: '#0570c6' }}>
                President of Better Direct Mark Evans recently had the opportunity to sit down and speak with Senator Kyrsten Sinema, who represents the state of Arizona in the United States Senate. The two discussed the importance of veteran-owned small businesses and the unique challenges and opportunities these businesses face. They also discussed Senator Sinema's willingness to stand up for what she believes is right and how that aligns with the values at Better Direct.
              </p>
              <br />
              <p className="leading-relaxed text-lg" style={{ color: '#0570c6' }}>
                As an SDVOSB (Service-Disabled Veteran Owned Small Business) as well as being located in a certified HUBZone (Historically Under-utilized Business Zone), Better Direct is in a unique position to assist the United States government in fulfilling its global acquisition needs while significantly contributing to the local community.
              </p>
            </div>

            {/* Right side - Professional Quote */}
            <div className="relative">
              <div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl border-l-4 relative"
                style={{ borderLeftColor: '#0570c6' }}
              >
                {/* Quote Icon */}
                <div 
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: '#0570c6' }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg leading-relaxed mb-6 mt-4" style={{ color: '#0570c6' }}>
                  "Coming from a military family, I take seriously my responsibility to deliver for AZ veterans. I'll keep working to address the challenges facing veteran-owned small businesses to help them thrive and expand economic opportunities across AZ."
                </blockquote>

                {/* Attribution */}
                <div className="border-t pt-4" style={{ borderColor: '#0570c6', borderOpacity: 0.2 }}>
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: '#0570c6' }}
                    >
                      KS
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#0570c6' }}>
                        Kyrsten Sinema
                      </p>
                      <p className="text-sm opacity-75" style={{ color: '#0570c6' }}>
                        @SenatorSinema • October 11, 2023
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Link Indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: '#1da1f2' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CISCO CCNA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#0570c6' }}>
            CISCO CCNA
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            {/* Left side - Text */}
            <div>
              <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                At Better Direct, our Cisco CCNA team specializes in designing and deploying network solutions tailored to our customers' unique needs. We ensure seamless integration with in-house clustered systems and prioritize ease of management. Our team builds robust virtualization infrastructures with enterprise-grade storage, enabling high availability and fault tolerance. We deploy ISP-level services with automated failover, monitoring, and redundancy, while leveraging SD-WAN to achieve sub-second failover. By integrating Next-Generation Firewalls (NGFW), we enforce strict security policies, segmentation, and compliance with government standards, delivering reliable, secure, and future-ready network solutions for our clients.
              </p>
            </div>

            {/* Right side - Image */}
            <div>
              <img 
                src="./assets/News/services-1-1.jpg"
                alt="CISCO CCNA Engineer"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=CISCO+CCNA';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#0570c6' }}>
            AI Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Text */}
            <div>
              <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                At Better Direct, our <strong style={{ color: '#0570c6' }}>AI Solution Team</strong> is dedicated to driving innovation and efficiency across the organization by leveraging the latest advancements in artificial intelligence and automation. Our mission is to empower teams with intelligent solutions that reduce manual effort, improve accuracy, and accelerate outcomes. A key focus of our work is supporting the sales team by building AI-driven solutions that simplify the <strong style={{ color: '#0570c6' }}>RFQ (Request for Quote) process</strong>, from intake to response. Our Software Development and AI teams are building a new CRM product for Better Direct, and including features many other CRMs lack. With decades of experience using these products, Better Direct has identified many features to assist not just the sales team but our purchasing team and finance department as well. We are also integrating AI tools that allow sales representatives to shift their focus from administrative tasks to customer engagement, where their impact is greatest. Included in the design is even motivational tools for the teams. In addition, we are enhancing collaboration by creating a seamless flow of information between sales, operations, and customers, ensuring alignment and improving the overall customer experience.
              </p>
            </div>

            {/* Right side - Image */}
            <div>
              <img 
                src="./assets/News/services-2.jpg"
                alt="AI Solutions Team"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=AI+Solutions';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
              {galleryPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                  style={{ width: '300px', height: '200px', marginBottom: '24px' }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-60 rounded-xl"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x180?text=Photo+${index + 1}`;
                    }}
                  />
                  {/* Blue plus sign overlay on hover */}
                  <button
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => openModal(photo)}
                    aria-label="Expand image"
                    style={{ background: 'rgba(0,0,0,0.05)' }}
                  >
                    <span className="bg-blue-600 rounded-full p-2 shadow-lg hover:scale-105 cursor-pointer">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Modal for full image popup */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-300 hover:scale-105"
            onClick={closeModal}
          >
            <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <img
                src={modalImg.src}
                alt={modalImg.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl animate-pop"
                style={{ animation: 'pop 0.3s cubic-bezier(.4,2,.3,1)' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600?text=Photo';
                }}
              />
              <button
                className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-800 transition-colors hover:scale-105 cursor-pointer"
                onClick={closeModal}
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {/* Simple pop animation */}
            <style>{`
              @keyframes pop {
                0% { transform: scale(0.7); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
              }
            `}</style>
          </div>
        )}
      </section>
    </div>
  );
};

export default News;