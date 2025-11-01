import React from 'react';

const MAS = () => {
    // Team members data
    const teamMembers = [
        {
            name: 'Kim Lambert',
            title: 'Sales Manager, Deputy SEWP Program Manager',
            photo: './assets/Contracts/2Git/kim.jpg',
            description: 'Kim Lambert is a Sales Manager at Better Direct who leads a dynamic sales team. She works on developing strong partnerships with distributors and manufacturers, and she assists her team in helping customers grow. Her goal is for clients to receive fast service and tailored IT solutions, all at a better value. Kim challenges her team to innovate, so the team can deliver beyond expectations.',
            buttonText: 'Contact Kim'
        },
        {
            name: 'Matthew Walz',
            title: 'SEWP Program Manager',
            photo: './assets/Contracts/2Git/matt.jpg',
            description: 'Matthew Walz is the NASA SEWP Program Manager at Better Direct, which is its largest revenue-generating contract. Matt works closely with federal procurement teams to deliver IT solutions to government agencies. He focuses on expanding partnerships with OEMs to ensure he has the best possible solutions for Better Direct’s clients.',
            buttonText: 'Contact Matthew'
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
                                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                                    The Only SDVOSB & HUBZone IT Provider in Arizona
                                </h1>
                                <p className="text-blue-600 leading-relaxed">
                                    If you're an OEM interested in joining our SEWP schedule
                                </p>
                            </div>

                            {/* Right side - Logo */}
                            <div className="flex justify-center">
                                <img
                                    src="./assets/Contracts/2Git/SEWP.png"
                                    alt="SEWP Logo"
                                    className="w-64 h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x150?text=SEWP';
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
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                                    Power Your IT Needs with Better Direct and the Solutions for Enterprise-Wide Procurement (SEWP) V Contract </h2>
                                <p className="text-blue-600 leading-relaxed mb-6">
                                    Searching for a fast, smart, and budget-friendly way to meet your agency’s IT demands? Better Direct is your premier partner under NASA’s Solutions for Enterprise-Wide Procurement (SEWP V) contract, a Government-Wide Acquisition Contract (GWAC). Holding three of the five available contracts Group A (NNG15SD45B), Group B (NNG15SD10B), and Group C (NNG15SD65B), we deliver cutting-edge IT products and services with exceptional value and expertise, tailored to federal agency missions.</p>

                                <h3 className="text-xl font-bold text-blue-600 mb-4">
                                    Why Better Direct Elevates SEWP V Contract
                                </h3>
                                <p className="text-blue-600 leading-relaxed mb-4">
                                    At Better Direct, we don’t just process orders we maximize the SEWP V contract to meet your needs. Here’s how we make it work for you:
                                </p>

                                <ul className="space-y-4 text-blue-600 mb-6">
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Cost Mastery:</strong> Secure competitive pricing through our multi-group SEWP V contracts, ensuring cost-effective solutions for any IT procurement scale.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Expert Partnership:</strong> Our dedicated team, including a Program Manager and Deputy Program Manager, provides tailored guidance to match your needs with the SEWP V contract’s comprehensive offerings.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>IT & Networking:</strong> Desktops, servers, network equipment, storage, and cybersecurity tools.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Software & Cloud:</strong> Enterprise software, cloud solutions, and virtualization tech.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Mobility & Communications:</strong> Telecom devices, video conferencing, and mobile solutions.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Supporting Technology:</strong> Scanners, printers, copiers, shredders, and healthcare IT.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Effortless Acquisition:</strong> Use the SEWP Online Quote Request Tool (QRT) for fast, compliant ordering under the contract, with our support team ensuring seamless fulfillment.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Compliance Confidence:</strong> Rest assured with solutions pre-vetted under the SEWP V contract, meeting Federal Acquisition Regulations (FAR) and agency standards, backed by NASA’s oversight.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Speed & Scope:</strong> Access leading manufacturers and scalable services through the contract, from small purchases to enterprise-wide deployments, delivered with precision and support.</div>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-blue-600 mb-4">
                                    SEWP V Contract: “Looking for a cost-effective solution to meet your agency’s IT needs?”
                                </h3>
                                <p className="text-blue-600 leading-relaxed mb-4">
                                    The SEWP V contract equips federal agencies with efficient, flexible IT acquisition. As a Service-Disabled Veteran-Owned Small Business (SDVOSB) and Certified HUBZone company, Better Direct enhances this GWAC with:
                                </p>

                                <ul className="space-y-2 text-blue-600 ml-8 mb-6">
                                    <li>• <strong>Budget-Friendly Value:</strong> Competitive rates from top-tier vendors, maximizing your funds.</li>
                                    <li>• <strong>Scalable Options:</strong> Contract options for quick buys or large-scale projects.</li>
                                    <li>• <strong>Rapid Deployment:</strong> Streamlined processes, proven by over $40 million in Navy repairs and counting.</li>
                                </ul>

                                <h3 className="text-xl font-bold text-blue-600 mb-4">
                                    Let’s Optimize Your IT—Contact Us Today!
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
                                    <h3 className="text-lg font-bold text-blue-600 mb-2">
                                        {member.name}
                                    </h3>

                                    {/* Title */}
                                    <p className="text-sm font-semibold text-blue-600 mb-3">
                                        {member.title}
                                    </p>

                                    {/* Description */}
                                    <p className="text-blue-600 text-sm leading-relaxed mb-4">
                                        {member.description}
                                    </p>

                                    {/* Contact Button */}
                                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
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
                                        src="./assets/Contracts/2Git/kim.jpg"
                                        alt="Kim Lambert"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/80x80?text=KL';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                                    Contact SEWP Sales
                                </h2>
                                <p className="text-blue-600 leading-relaxed">
                                    For your SEWP sales needs, partner with Better Direct to unlock tailored IT solutions and exceptional service. Our SEWP sales team, led by Kim Lambert, is dedicated to delivering top-notch support, ensuring seamless procurement and compliance for your agency’s mission. Contact us today at (480) 921-3858 (ext – 133) or email kim@betterdirect.com to get started!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MAS;