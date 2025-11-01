import React from 'react';

const SeaPort = () => {
    // Team members data
    const teamMembers = [
        {
            name: 'Rashawn Hugg',
            title: 'Seaport Contract Manager',
            photo: '/src/assets/Contracts/2Git/rashawn.jpg',
            description: 'Rashawn Hugg is Better Direct’s Senior Program Manager. He leads federal contract programs and project management teams, supporting agencies like NGA, DIA, and NSA. Rashawn develops partner relationships for the company as well as professional services initiatives. Rashawn’s goal is to ensure successful project completion for Better Direct’s customers.',
            buttonText: 'Contact Rashawn'
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
                                    If you’re an OEM interested in partnering on an opportunity, contact us.
                                </p>
                            </div>

                            {/* Right side - Logo */}
                            <div className="flex justify-center">
                                <img
                                    src="/src/assets/Contracts/2Git/Seaport.jpg"
                                    alt="SeaPort Logo"
                                    className="w-64 h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x150?text=SeaPort';
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
                                    Power Your IT Needs with Better Direct and the SeaPort Next Generation (SeaPort-NxG) Contract</h2>
                                <p className="text-blue-600 leading-relaxed mb-6">
                                    Searching for a fast, smart, and cost-effective way to support your Navy missions? Better Direct is your premier partner under the U.S. Navy’s SeaPort Next Generation (SeaPort-NxG) contract (N0017825D7129), a Multiple Award Indefinite Delivery/Indefinite Quantity (IDIQ) vehicle. Recently awarded to us, this $4 billion contract delivers engineering, program management, and IT services with unmatched expertise, empowering commands like NAVSEA, NAVWAR, NAVSUP, MSC, NAVFAC, ONR, and the United States Marine Corps (USMC) through January 1, 2029.
                                </p>
                                <h3 className="text-xl font-bold text-blue-600 mb-4">
                                    Why Better Direct Elevates SeaPort-NxG Contract
                                </h3>
                                <p className="text-blue-600 leading-relaxed mb-4">
                                    At Better Direct, we don’t just deliver services—we maximize the SeaPort-NxG contract to meet your needs. Here’s how we make it work for you:
                                </p>

                                <ul className="space-y-4 text-blue-600 mb-6">
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Cost Mastery:</strong> Lock in best-value pricing through SeaPort-NxG’s competitive structure, ensuring cost-efficient solutions across a 10-year ordering period.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Expert Partnership:</strong> Our skilled team, led by seasoned program managers, provides tailored guidance to match your mission with the SeaPort-NxG contract’s core service offerings.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Engineering Services:</strong> Design, development, testing, and integration for shipbuilding, warfare systems, and cybersecurity.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Program Management Services:</strong> Planning, risk management, logistics, and oversight for complex naval projects.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>IT Solutions:</strong> AI/ML, secure infrastructure, and analytics to boost operational readiness.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Incidental Materials:</strong> Incidental Materials:</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Effortless Acquisition:</strong> Streamlined Task Orders (TOs) under this IDIQ contract ensure rapid deployment of resources, with our support keeping projects on track.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Compliance Confidence:</strong> Rest assured with services meeting Federal Acquisition Regulations (FAR), Defense FAR Supplement (DFARS), and DoD security standards, critical for classified operations.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Speed & Scope:</strong> Deliver scalable solutions from rapid prototypes to decade-long sustainment—supporting Navy-wide innovation with precision and flexibility.</div>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-blue-600 mb-4">
                                    SeaPort-NxG Contract: Your Gateway to Mission Success with Better Direct
                                </h3>
                                <p className="text-blue-600 leading-relaxed mb-4">
                                    Spanning January 2, 2019, to January 1, 2029, the SeaPort-NxG contract equips the Department of the Navy (DON) with efficient, long-term procurement. Better Direct enhances this IDIQ with:
                                </p>

                                <ul className="space-y-2 text-blue-600 ml-8 mb-6">
                                    <li>• <strong>Budget-Friendly Value:</strong> Competitive rates for engineering and program management, maximizing your $4 billion ceiling.</li>
                                    <li>• <strong>Scalable Options:</strong> Custom TOs for emerging tech or multi-phase projects.</li>
                                    <li>• <strong>Rapid Deployment:</strong> Proven expertise driving high-impact initiatives like AI-driven systems and secure IT.</li>
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
                                                className="w-full h-full object-contain"
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
                                        src="/src/assets/Contracts/2Git/anthony.jpg"
                                        alt="Anthony Hernandez"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/80x80?text=AH';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                                    Let’s Optimize Your Mission—Contact Us Today!
                                </h2>
                                <p className="text-blue-600 leading-relaxed">
                                    Team up with Better Direct to leverage the full power of the SeaPort-NxG contract. Reach our dedicated expert, Anthony Hernandez, by email anthony@betterdirect.com or by phone at 480.921.3858 Ext 121.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeaPort;