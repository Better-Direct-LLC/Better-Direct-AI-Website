import React from 'react';

const ITES = () => {
    // Team members data
    const teamMembers = [
        {
            name: 'Mark Evans',
            title: 'Founder & President',
            photo: './assets/Contracts/2Git/mark.jpg',
            description: 'Mark Evans, a two-tour combat veteran and IT expert, founded Better Direct, growing it into a HUBZone-certified, Service-Disabled Veteran-Owned IT VAR with 45+ employees. With deep expertise in enterprise IT solutions, hardware procurement, and technology strategy, he leads with innovation, customer success, and community impact, guiding his team to deliver cutting-edge IT solutions.',
            buttonText: 'Contact Mark',
            email: 'mark@betterdirect.com'
        },
        {
            name: 'KaTo Wong',
            title: 'Sales Manager, ITES-4H Contract Manager',
            photo: './assets/Contracts/2Git/kato.jpg',
            description: 'Kato Wong is a Better Direct Sales Manager. Since 2018, he has overseen the ITES-4H contract for the company. He focuses on building long-term relationships with his customers so he can better understand their operational requirements and align IT solutions to their needs.',
            buttonText: 'Contact KaTo',
            email: 'kato@betterdirect.com'
        },
        {
            name: 'Diana Zhong',
            title: 'Director of Operations and Finance, ITES-4H Contract Manager',
            photo: './assets/Contracts/2Git/diana.jpg',
            description: 'Diana Zhong is the Manager of Operations and Finance at Better Direct. In her Operations role, she aligns the departments with strategic goals and watches over the government projects so they run seamlessly. On the financial side, Diana optimizes the profitability of the company by making sure it runs efficiently, and by mitigating its financial risk. She also has the role of co-manager of the ITES-4H contract.',
            buttonText: 'Contact Diana',
            email: 'diana@betterdirect.com'
        }
    ];

    // ========== EDITABLE CC CONFIGURATION ==========
    // Add or remove emails here as needed
    const additionalCCEmails = [
        'info@betterdirect.com',
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
            <section className="py-16" style={{ background: '#1161ad' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left side - Text */}
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0570c6' }}>
                                    The Only SDVOSB & HUBZone IT Provider in Arizona
                                </h1>
                                <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                                    If you're an OEM interested in joining our ITES schedule
                                </p>
                            </div>

                            {/* Right side - Logo */}
                            <div className="flex justify-center">
                                <img
                                    src="./assets/Contracts/2Git/ITES.png"
                                    alt="ITES Logo"
                                    className="w-64 h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x150?text=ITES';
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
                                    Power Your IT Needs with Better Direct and the ITES-4H Contract</h2>
                                <p className="leading-relaxed mb-6" style={{ color: '#0570c6' }}>
                                    Looking for a reliable, efficient, and cost-effective way to fulfill your agency’s IT hardware requirements? Better Direct is your trusted partner under the Information Technology Enterprise Solutions 4 Hardware (ITES-4H) contract, a strategic procurement vehicle within the Army’s Computer Hardware Enterprise Software and Solutions (CHESS) program (Contract #W52P1J-23-D-0005). We provide commercial off-the-shelf (COTS) IT hardware with exceptional value and expertise, customized for the U.S. Army, Department of Defense (DoD), and all federal agency missions.
                                </p>
                                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
                                    Why Better Direct Elevates ITES-4H Contract
                                </h3>
                                <p className="leading-relaxed mb-4" style={{ color: '#0570c6' }}>
                                    At Better Direct, we go beyond order fulfillment we optimize the ITES-4H contract to deliver tailored solutions. Here’s what sets us apart:
                                </p>

                                <ul className="space-y-4 mb-6" style={{ color: '#0570c6' }}>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Cost Efficiency:</strong> Benefit from fee-free pricing through ITES-4H, maximizing your budget with competitive rates on every purchase.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Expert Guidance:</strong> Our dedicated team offers personalized support to align your needs with the ITES-4H contract’s extensive hardware portfolio:
                                            <ul className="mt-2 ml-4 space-y-1 text-sm">
                                                <li>• <strong>Desktops & Notebooks:</strong> High-performance PCs, notebooks, and workstations.</li>
                                                <li>• <strong>Mobile Devices:</strong> Tablets and ruggedized solutions for mobile productivity.</li>
                                                <li>• <strong>Servers: </strong> Scalable, high-performance servers for data centers and enterprise applications.</li>
                                                <li>• <strong>Printers & Monitors:</strong> Advanced output devices and displays.</li>
                                                <li>• <strong>Accessories & Enhancements:</strong> Peripherals, warranties, server components, and upgrades.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Seamless Procurement:</strong> Order effortlessly through the CHESS IT e-mart, with our team ensuring fast, smooth delivery.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Regulatory Compliance:</strong> Trust in COTS solutions that adhere to Federal Acquisition Regulations (FAR) and DoD standards, backed by CHESS oversight.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Scalability & Speed:</strong> Access hardware solutions for projects of any size—from small upgrades to enterprise deployments delivered with precision and speed.</div>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
                                    ITES-4H Contract: “Need tailored IT solutions for your agency’s mission?”
                                </h3>
                                <p className="leading-relaxed mb-4" style={{ color: '#0570c6' }}>
                                    The ITES-4H contract, managed under CHESS, empowers the U.S. Army, DoD, and federal agencies with streamlined IT hardware procurement. As a Service-Disabled Veteran-Owned Small Business (SDVOSB) and Certified HUBZone vendor, Better Direct stands out among ITES-4H awardees by delivering:
                                </p>

                                <ul className="space-y-2 ml-8 mb-6" style={{ color: '#0570c6' }}>
                                    <li>• <strong>Unmatched Value:</strong> Zero-fee pricing and bulk purchasing power for cost-effective solutions.</li>
                                    <li>• <strong>Flexible Solutions:</strong> Hardware options for any scale, supported by strategic industry partnerships.</li>
                                    <li>• <strong>Rapid Deployment:</strong> Proven processes for quick deployment, ensuring mission success.</li>
                                </ul>

                                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
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
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                                <img
                                                    src={member.photo}
                                                    alt={member.name}
                                                    className="max-h-44 max-w-full object-contain rounded-lg shadow"
                                                    style={{ background: 'linear-gradient(to right, #1e3a8a, #b91c1c, #1e3a8a)' }}
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(member.name);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-lg font-bold mb-2" style={{ color: '#0570c6' }}>
                                        {member.name}
                                    </h3>

                                    {/* Title */}
                                    <p className="text-sm font-semibold mb-3" style={{ color: '#0570c6' }}>
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

            {/* Warranty & Telephone Support Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0570c6' }}>
                            Warranty & Telephone Support
                        </h2>
                        <p className="leading-relaxed mb-6" style={{ color: '#0570c6' }}>
                            For your ITES-4H needs, partner with Better Direct to access seamless IT solutions and dedicated support. Our team is committed to providing expert guidance, ensuring smooth procurement, regulatory compliance, and reliable post-sales service for your agency's mission.
                        </p>
                        <div className="space-y-2" style={{ color: '#0570c6' }}>
                            <p>
                                <strong>Phone:</strong> <a href="tel:4809213858" className="underline hover:text-blue-800" style={{ color: '#0570c6' }}>480-921-3858</a> Ext 12
                            </p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:ites-4h.warranty@betterdirect.com" className="underline hover:text-blue-800" style={{ color: '#0570c6' }}>ites-4h.warranty@betterdirect.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact ITES Sales Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0570c6' }}>
                            Contact ITES Sales
                        </h2>
                        <p className="leading-relaxed mb-6" style={{ color: '#0570c6' }}>
                            For your post-sales IT needs, rely on Better Direct's dedicated team to ensure seamless support and ongoing success. Our representatives provide expert assistance with warranty, troubleshooting, and service follow-ups to help your agency maintain mission-critical IT operations efficiently.
                        </p>
                        <div className="space-y-3" style={{ color: '#0570c6' }}>
                            <p>
                                <strong>Chase Cai –</strong> <a href="tel:4809213858" className="underline hover:text-blue-800" style={{ color: '#0570c6' }}>480-921-3858</a> Ext 320 | <a onClick={() => window.location.href = generateMailtoLink('chase@betterdirect.com')} className="underline cursor-pointer" style={{ color: '#0570c6' }}>chase@betterdirect.com</a>
                            </p>
                            <p>
                                <strong>Diana Zhong –</strong> <a href="tel:4809213858" className="underline hover:text-blue-800" style={{ color: '#0570c6' }}>480-921-3858</a> Ext 275 | <a onClick={() => window.location.href = generateMailtoLink('diana@betterdirect.com')} className="underline cursor-pointer" style={{ color: '#0570c6' }}>diana@betterdirect.com</a>
                            </p>
                        </div>
                        <p className="font-medium" style={{ color: '#0570c6' }}>
                            Contact us today to get the support you need.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ITES;