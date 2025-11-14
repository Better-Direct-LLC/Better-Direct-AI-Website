import React from 'react';

const MAS = () => {
    // Team members data
    const teamMembers = [
        {
            name: 'Rachel Mock',
            title: 'GSA & 2GIT Program Manager',
            photo: './assets/Contracts/2Git/rachel.png',
            description: 'Rachel Mock, Better Direct\'s GSA and 2GIT Program Manager, oversees the GSA Advantage storefront, vendor relations, and marketing. With over 10 years of experience, she delivers exceptional customer service and crafts efficient IT solutions for complex challenges.',
            buttonText: 'Contact Rachel',
            email: 'rachel.mock@betterdirect.com'
        },
        {
            name: 'Thien Duc Phung',
            title: 'GSA & 2GIT Contract Manager',
            photo: './assets/Contracts/2Git/Thien.jpg',
            description: 'Thien Duc Phung manages GSA and 2GIT contracts at Better Direct, ensuring current product listings, government compliance, and strong client relationships. Starting as a GSA Admin in 2022, he now leads catalog growth, bid responses, and revenue initiatives, working closely with the fulfillment team to address customer inquiries.',
            buttonText: 'Contact Thien',
            email: 'thien@betterdirect.com'
        },
        {
            name: 'Devika N',
            title: 'Assistant GSA & 2GIT Program Manager',
            photo: './assets/Contracts/2Git/devika.jpg',
            description: 'Works as Assistant Program Manager at Better Direct, supporting GSA and 2GIT operations, including GSA Advantage storefronts, vendor coordination, and federal contract management. With 5+ years of product management experience, Devika specializes in workflow optimization, data-driven strategy, and cross-functional collaboration, leveraging tools like Airtable, Drift, and MySQL to streamline procurement and enhance engagement.',
            buttonText: 'Contact Devika',
            email: 'devika.nhendanmadath@betterdirect.com'
        }
    ];

             // ========== EDITABLE CC CONFIGURATION ==========
    // Add or remove emails here as needed
    const additionalCCEmails = [
        'info@betterdirect.com',
        'mark@betterdirect.com',
        'diana@betterdirect.com',
        'kim@betterdirect.com',
        'kato@betterdirect.com',
        'thien@betterdirect.com',
        'rachel.mock@betterdirect.com',
        'rashawn.hugg@betterdirect.com',
        'devika.nhendanmadath@betterdirect.com',
        'matthew.walz@betterdirect.com',
    ];
    // ================================================

    // Function to generate mailto link with CC
    const generateMailtoLink = (primaryEmail) => {
        // Get all other team member emails except the primary one
        const otherTeamEmails = teamMembers
            .filter(member => member.email === primaryEmail)
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
                                    If you're an OEM interested in joining our GSA schedule
                                </p>
                            </div>

                            {/* Right side - Logo */}
                            <div className="flex justify-center">
                                <img
                                    src="./assets/Contracts/2Git/GSA.jpg"
                                    alt="GSA Logo"
                                    className="w-64 h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x150?text=GSA';
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
                                    Elevate Your IT Procurement with Better Direct and the General Services Administration (GSA) Multiple Award Schedule (MAS) Blanket Purchase Agreement (BPA)       </h2>
                                <p className="leading-relaxed mb-6" style={{ color: '#0570c6' }}>
                                    Looking for a faster, smarter, and more cost-effective way to meet your agency’s IT needs? At Better Direct, we’re more than a vendor; we’re your strategic partner under the General Services Administration (GSA) Multiple Award Schedule (MAS) Contract #GS-35F-0503X. We deliver top-tier IT hardware, software, and services with unmatched value and expertise, providing access to over 400,000 products from 140+ leading OEMs (e.g., Oracle, HP, Dell) and tailored solutions to drive federal, state, and local government missions forward, backed by proven results, including over $40 million in Navy repairs and counting.       </p>

                                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
                                    Why Better Direct Elevates GSA MAS Contract
                                </h3>
                                <p className="leading-relaxed mb-4" style={{ color: '#0570c6' }}>
                                    At Better Direct, we transform the GSA MAS into your strategic advantage. Here’s what sets us apart:
                                </p>

                                <ul className="space-y-4 mb-6" style={{ color: '#0570c6' }}>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Cost Mastery:</strong> Secure competitive MAS pricing, enhanced by Better Direct’s volume discounts and a fixed 0.75% Industrial Funding Fee (IFF). Maximize your budget, whether for a single upgrade or a full-scale rollout.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Expert Partnership:</strong> Our skilled sales team provides personalized advice, helping you find the perfect IT solutions from the General Services Administration (GSA) Multiple Award Schedule (MAS) Special Item Numbers (SINs):</div>
                                    </li>
                                </ul>

                                <ul className="space-y-2 ml-8 mb-6" style={{ color: '#0570c6' }}>
                                    <li>• <strong>IT Hardware (SIN 33411):</strong> Desktops, servers, and more.</li>
                                    <li>• <strong>Furniture & Related Products (SIN 33721):</strong> Office furniture to support your IT setup.</li>
                                    <li>• <strong>IT Professional Services (SIN 54151):</strong> Cybersecurity support and other expert help.</li>
                                    <li>• <strong>IT Security & Compliance Solutions (SIN 334010):</strong> Tools to keep your systems safe and compliant.</li>
                                    <li>• <strong>Office & IT Equipment (SIN 339940):</strong> Printers, scanners, and other essentials.</li>
                                    <li>• <strong>Software Licenses (SIN 511210):</strong> Key applications for your operations.</li>
                                    <li>• <strong>IT Maintenance (SIN 811212):</strong> Services to keep everything running smoothly.</li>
                                </ul>

                                <ul className="space-y-4 mb-6" style={{ color: '#0570c6' }}>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Effortless Acquisition:</strong> Pre-set terms mean you can order seamlessly via GSA Advantage! with our team ensuring quick, reliable delivery every time.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Compliance Confidence:</strong> Rest assured with solutions meeting Federal Acquisition Regulations (FAR), Trade Agreements Act (TAA), and cybersecurity/sustainability standards—keeping your operations secure and dependable.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Broad Solutions, Swift Results:</strong> Access hardware, software, and services from 140+ top OEMs (e.g., Oracle, HP, Dell), delivered fast with comprehensive support to keep you moving forward.</div>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
                                    GSA MAS: Your Gateway to IT Success with Better Direct
                                </h3>
                                <p className="leading-relaxed mb-4" style={{ color: '#0570c6' }}>
                                    Running through July 14, 2026, the GSA MAS equips your agency with efficient IT modernization. Built for clients like the Department of Defense (DoD) and state/local buyers via GSA’s Cooperative Purchasing Program, it provides:</p>

                                <ul className="space-y-2 ml-8 mb-6" style={{ color: '#0570c6' }}>
                                    <li>• <strong>Budget-Friendly Value:</strong> Pre-negotiated rates stretch your funding across diverse needs.</li>
                                    <li>• <strong>Scalable Options:</strong> Handles everything from small buys to complex Blanket Purchase Agreements (BPAs).</li>
                                    <li>• <strong>Rapid Deployment:</strong> Streamlined access gets technology in your hands sooner.</li>
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
                                    <h3 className="text-lg font-bold mb-2" style={{ color: '#0570c6' }}>
                                        {member.name}
                                    </h3>

                                    {/* Title */}
                                    <p className="text-sm font-semibold" style={{ color: '#0570c6' }}>
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

            {/* Contact 2GIT Sales Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-start gap-6">
                            {/* Profile Photo */}
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20  overflow-hidden shadow-lg">
                                    <img
                                        src="./assets/Contracts/2Git/madison.jpg"
                                        alt="Madison Alberts"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/80x80?text=MA';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: '#0570c6' }}>
                                    Contact GSA Sales
                                </h2>
                                <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                                    For your GSA sales needs, partner with Better Direct to unlock tailored IT solutions and exceptional service. Our GSA sales team, led by Madi Alberts, is dedicated to delivering top-notch support, ensuring seamless procurement and compliance for your agency’s mission. Contact us today at{' '}
                                    
                                    <strong><a
                                        href="tel:+14809213858"
                                        className="underline cursor-pointer"
                                        style={{ color: '#0570c6' }}
                                    >
                                        (480) 921-3858 ext.703
                                    </a></strong>
                                    {' '}or{' '}
                                    <strong><a
                                        onClick={() => window.location.href = generateMailtoLink('madison.alberts@betterdirect.com')}
                                        className="underline cursor-pointer"
                                        style={{ color: '#0570c6' }}
                                    >
                                        madison.alberts@betterdirect.com
                                    </a>
                                    </strong>
                                    {' '}to get started!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MAS;