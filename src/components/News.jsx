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
      {/* CISCO CCNA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">
            CISCO CCNA
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            {/* Left side - Text */}
            <div>
              <p className="text-blue-600 leading-relaxed">
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
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">
            AI Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Text */}
            <div>
              <p className="text-blue-600 leading-relaxed">
                At Better Direct, our <strong className="text-blue-700">AI Solution Team</strong> is dedicated to driving innovation and efficiency across the organization by leveraging the latest advancements in artificial intelligence and automation. Our mission is to empower teams with intelligent solutions that reduce manual effort, improve accuracy, and accelerate outcomes. A key focus of our work is supporting the sales team by building AI-driven solutions that simplify the <strong className="text-blue-700">RFQ (Request for Quote) process</strong>, from intake to response. Our Software Development and AI teams are building a new CRM product for Better Direct, and including features many other CRMs lack. With decades of experience using these products, Better Direct has identified many features to assist not just the sales team but our purchasing team and finance department as well. We are also integrating AI tools that allow sales representatives to shift their focus from administrative tasks to customer engagement, where their impact is greatest. Included in the design is even motivational tools for the teams. In addition, we are enhancing collaboration by creating a seamless flow of information between sales, operations, and customers, ensuring alignment and improving the overall customer experience.
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
                    <span className="bg-blue-600 rounded-full p-2 shadow-lg">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-300"
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
                className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-800 transition-colors"
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