import React from 'react';
import image1 from '.././assets/community-1.jpeg';
import image2 from '.././assets/community-2.jpeg';
import image3 from '.././assets/community-3.jpg';

const CommunitySection = () => {
  const images = [
    { src: image1, alt: 'Community Event 1' },
    { src: image2, alt: 'Community Event 2' },
    { src: image3, alt: 'Community Event 3' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Keeping the community in mind
        </h2>
        
        <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto">
          Over the last 12 years, since becoming a certified HUBZone in 2010, we've made a difference in our local community. Our goal is in line with the SBA to bring jobs to an area where people live, which brings spending to the area and in turn helps with revitalization in the community. Besides helping our fellow HUBZone community, BetterDirect sponsors employees in the annual PF Chang's Rock and Roll Marathon.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x300?text=Community+${index + 1}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;