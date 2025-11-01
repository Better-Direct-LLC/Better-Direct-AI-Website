import React from 'react';

const CapabilityStatement = () => (
  <>
    <div className="min-h-screen bg-blue-600 flex items-center justify-center py-16">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Left half: Title and description */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Empowering Innovation Through Veteran-Led, HUBZone-Certified IT Solutions</h1>
        </div>
        {/* Right half: PDF viewer only, no download or label */}
        <div className="flex items-center justify-center w-full h-full">
          <iframe
            src="./assets/Capability/Capabilities.pdf"
            title="Capability Statement PDF"
            className="w-full h-[600px] md:h-[700px] rounded-xl border-none shadow-lg"
            style={{ background: 'transparent' }}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
    {/* Next section: white background, centered card, big header, two paragraphs */}
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-start">Capability Statement – Better Direct</h2>
          <p className="text-lg text-blue-600 mb-6 text-start">
            Better Direct stands as Arizona’s only IT Solutions Integrator and Original Equipment Manufacturer (OEM) certified as a HUBZone, Service-Disabled Veteran-Owned Small Business (SDVOSB), and Small Disadvantaged Business (SDB). Since 2006, we’ve been delivering tailored technology solutions that empower organizations to meet their evolving needs with confidence and efficiency. </p>
          <p className="text-lg text-blue-600 text-start">
           We specialize in comprehensive hardware, software, and service offerings, providing access to over <b className="font-bold text-blue-700">2,000 trusted brands</b> and more than <b className="font-bold text-blue-700">400,000 products</b>. Our deep industry expertise, combined with our commitment to excellence and agility, makes Better Direct a strategic partner for federal, state, and commercial clients seeking scalable, cost-effective IT solutions.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="./assets/Capability/Capabilities.pdf"
            download="Capability_Statement.pdf"
            className="px-10 py-5 text-2xl font-bold rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-blue-400"
          >
            Download our Capability Statement
          </a>
        </div>
      </div>
    </section>
  </>
);

export default CapabilityStatement;
