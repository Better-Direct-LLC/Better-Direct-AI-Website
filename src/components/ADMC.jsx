import React from 'react';

const ADMC = () => {
    // Team members data
    const teamMembers = [
        {
            name: 'KaTo Wong',
            title: 'Sales Manager, ADMC-3 Contract Manager',
            photo: './assets/Contracts/2Git/kato.jpg',
            description: 'Kato Wong is a Better Direct Sales Manager. Since 2018, he has overseen the ADMC-3 and Army CHESS contracts for the company. He focuses on building long-term relationships with his customers so he can better understand their operational requirements and align IT solutions to their needs.',
            buttonText: 'Contact KaTo'
        },
        {
            name: 'Diana Zhong',
            title: 'Director of Operations and Finance, ADMC-3 Contract Manager',
            photo: './assets/Contracts/2Git/diana.jpg',
            description: 'Diana Zhong is the Manager of Operations and Finance at Better Direct. In her Operations role, she aligns the departments with strategic goals and watches over the government projects so they run seamlessly. On the financial side, Diana optimizes the profitability of the company by making sure it runs efficiently, and by mitigating its financial risk. She also has the role of co-manager of the Army CHESS ADMC-3 contract.',
            buttonText: 'Contact Diana'
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
                                    If you're an OEM interested in joining our ADMC schedule
                                </p>
                            </div>

                            {/* Right side - Logo */}
                            <div className="flex justify-center">
                                <img
                                    src="./assets/Contracts/2Git/ADMC.png"
                                    alt="ADMC Logo"
                                    className="w-64 h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x150?text=ADMC';
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
                                    Power Your IT Needs with Better Direct and the Army Desktop and Mobile Computing (ADMC) – 3 Contract </h2>
                                <p className="text-blue-600 leading-relaxed mb-6">
                                    Searching for a fast, smart, and budget-friendly way to meet your agency’s IT demands? Better Direct is your premier partner under the Army Desktop and Mobile Computing (ADMC) – 3 contract, a mandatory-use Blanket Purchase Agreement (BPA) within the Computer Hardware Enterprise Software and Solutions (CHESS) program (BPA #W52P1J-20-D-0018). We deliver commercial off-the-shelf (COTS) IT hardware with unmatched value and expertise, tailored to the U.S. Army, Department of Defense (DoD), and all federal agency missions.</p>

                                <h3 className="text-xl font-bold text-blue-600 mb-4">
                                    Why Better Direct Elevates ADMC – 3 Contract
                                </h3>
                                <p className="text-blue-600 leading-relaxed mb-4">
                                    At Better Direct, we don’t just process orders we maximize the ADMC – 3 contract to meet your needs. Here’s how we make it work for you:
                                </p>

                                <ul className="space-y-4 text-blue-600 mb-6">
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Cost Mastery:</strong> Enjoy fee-free pricing through ADMC-3, stretching your budget further with our competitive rates on every order.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Expert Partnership:</strong> Our dedicated team provides tailored guidance to match your needs with the ADMC-3 contract's comprehensive hardware offerings:
                                            <ul className="mt-2 ml-4 space-y-1 text-sm">
                                                <li>• <strong>Desktops & Notebooks:</strong> PCs, laptops, and workstations.</li>
                                                <li>• <strong>Tablets & Mobility:</strong> Mobile devices for on-the-go productivity.</li>
                                                <li>• <strong>Printers & Displays:</strong> Output devices and monitors.</li>
                                                <li>• <strong>Accessories & Upgrades:</strong> Peripherals, warranties, and enhancements.</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Effortless Acquisition:</strong> Order seamlessly via the CHESS IT e-mart, with our support ensuring rapid, hassle-free delivery.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Compliance Confidence:</strong> Rest assured with COTS solutions meeting Federal Acquisition Regulations (FAR) and DoD standards, managed under CHESS oversight.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold">•</span>
                                        <div>
                                            <strong>Speed & Scope:</strong> Access scalable IT hardware—from small upgrades to enterprise solutions—delivered fast with top-tier service.</div>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-blue-600 mb-4">
                                    ADMC-3 Contract: “Searching for customized solutions to meet your agency’s IT demands?”
                                </h3>
                                <p className="text-blue-600 leading-relaxed mb-4">
                                    The ADMC-3 contract, as part of CHESS, equips the U.S. Army, DoD, and all federal agencies with efficient IT procurement. <strong>As the only Service-Disabled Veteran-Owned Small Business (SDVOSB) and Certified HUBZone</strong> vendor among 10 awardees, Better Direct enhances this BPA with:
                                </p>

                                <ul className="space-y-2 text-blue-600 ml-8 mb-6">
                                    <li>• <strong>Budget-Friendly Value:</strong> Zero-fee structure and consolidated buys, driving a 130.25% sales increase in 2023 and 64.3% in 2024.</li>
                                    <li>• <strong>Scalable Options:</strong> Solutions for any purchase size, backed by strategic partnerships.</li>
                                    <li>• <strong>Rapid Deployment:</strong> Streamlined access, proven by exceptional value and mission success.</li>
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
                                        src="./assets/Contracts/2Git/agyness.jpg"
                                        alt="Agness Tsang"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/80x80?text=AT';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                                    Contact ADMC Sales
                                </h2>
                                <p className="text-blue-600 leading-relaxed">
                                    For your ADMC sales needs, partner with Better Direct to unlock tailored IT solutions and exceptional service. Our ITES sales team, led by Agness Tsang, is dedicated to delivering top-notch support, ensuring seamless procurement and compliance for your agency’s mission. Contact us today at (480) 921-3858 (ext – 697) or email agyness.tsang@betterdirect.com to get started!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ADMC;