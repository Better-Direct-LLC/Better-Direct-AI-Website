import React from 'react';

const Certifications = () => {
  return (
    <div className="min-h-screen bg-blue-600">
      {/* ISO-9001 Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left side - Text */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                  ISO-9001: 2015 Certified
                </h1>
                <p className="text-blue-600 leading-relaxed">
                  ISO 9001:2015 promotes the adoption of a process approach when developing, implementing, and improving the effectiveness of a quality management system, to enhance customer satisfaction by meeting customer requirements. Understanding and managing interrelated processes as a system contribute to the organization's effectiveness and efficiency in achieving its intended results. This approach enables the organization to control the interrelationships and interdependencies among the processes of the system, so that the overall performance of the organization can be enhanced. The process approach involves the systematic definition and management of processes and their interactions, so as to achieve the intended results in accordance with the quality policy and strategic direction of the organization. Management of the processes and the system as a whole can be achieved using the Plan Do Check Act cycle with an overall focus on risk-based thinking aimed at taking advantage of opportunities and preventing undesirable results.  Better Direct's Quality Management System is third-party certified by DEKRA.
                </p>
              </div>

              {/* Right side - Image */}
              <div className="flex-1 flex justify-center items-center min-h-[300px]">
                <img 
                  src="./assets/Certifications/certi-1.png"
                  alt="ISO 9001 DEKRA Certified"
                  className="w-full h-full max-w-full max-h-[400px] object-contain rounded-lg "
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=ISO+9001+Certified';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO-20243 Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left side - Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                  ISO-20243 Certified
                </h2>
                <p className="text-blue-600 leading-relaxed">
                  ISO 20243 is aimed at enhancing the integrity of Commercial-Off-The-Shelf (COTS) Information and Communication Technology (ICT) products and helping customers to manage sourcing risk. A commitment by technology providers, large and small, suppliers of hardware and software components, and integrators to adopt this Standard is a commitment to using specific methodologies to assure the integrity of their hardware or software Information and Communication Technology.  The Standard was prepared by The Open Group and was adopted by the ISO, so it is also as O-TTPS (Open Trusted Technology Provider Standard).  Better Direct's self-certification of this Standard is registered at:  <a href="#" className="text-blue-700 underline hover:text-blue-800">Link</a>
                </p>
              </div>

              {/* Right side - Image */}
              <div className="flex justify-center items-start">
                <img 
                  src="./assets/Certifications/certi-2.png"
                  alt="ISO 20243 Open Group Certified"
                  className="w-full max-w-md h-auto"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=ISO+20243+Certified';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;