import React, { useState } from 'react';

const Services = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [expandedFaq, setExpandedFaq] = useState(null);

    // Service cards data
    const services = [
        {
            title: 'Installation',
            description: 'Our Installation Services ensure that your IT hardware and software are deployed correctly, efficiently, and with minimal disruption to your operations. From initial setup to full system integration, we handle every aspect of the installation process with precision and attention to detail, ensuring your technology is up and running smoothly from day one.'
        },
        {
            title: 'Project Management',
            description: 'Our Project Management Services ensure that IT initiatives are delivered on time, within scope, and on budget. From planning to execution, we oversee every phase of your project with a custom roadmap of your project, a structured approach, clear communication, and a focus on aligning technology solutions with your business objectives.'
        },
        {
            title: 'Consulting',
            description: 'Our Consulting Services are designed to help businesses make informed technology decisions aligned with their goals. We provide expert guidance on IT strategy, system architecture, process optimization, and emerging technologies ensuring every solution is tailored to deliver maximum value and long-term success.'
        },
        {
            title: 'Customized Design',
            description: 'Our Customized System Design services focus on creating tailored IT solutions that align with each client\'s unique requirements, workflows, and goals. We work closely with you to design and architect systems that integrate seamlessly with your existing infrastructure ensuring scalability, performance, and long-term efficiency.'
        },
        {
            title: 'Implementation',
            description: 'Our Implementation Services provide end-to-end support for deploying new IT systems, ensuring a smooth and efficient transition from planning to full operation. We handle configuration, customization, integration, and testing working closely with your team to minimize disruption and ensure the solution is fully aligned with your business processes.'
        }
    ];

    // Video carousel data
    const videos = [
        { id: 1, thumbnail: './assets/Services/joe.png', title: 'Joe', youtubeUrl: 'https://www.youtube.com/embed/nWddftjCXD0' },
        { id: 2, thumbnail: './assets/Services/rashawn.png', title: 'Rashawn Hugg', youtubeUrl: 'https://www.youtube.com/embed/W8buP_sxQl8' },
        { id: 3, thumbnail: './assets/Services/anthony.png', title: 'Anthony Hernandez', youtubeUrl: 'https://www.youtube.com/embed/ekB2n8ZM4u4' },
        { id: 4, thumbnail: './assets/Services/mckenna.jpg', title: 'McKenna Mulligan', youtubeUrl: 'https://www.youtube.com/embed/gOQocJ0WMzQ' },
    ];

    const [playerOpen, setPlayerOpen] = useState(false);

    // Team members data
    const teamMembers = [
        {
            name: 'Rashawn Hugg',
            photo: './assets/Services/display/rashawn.jpg',
            description: 'Rashawn Hugg is Better Direct\'s Senior Program Manager. He leads federal contract programs and project management teams, supporting agencies like NGA, DIA, and NSA. Rashawn develops partner relationships for the company as well as professional services initiatives. Rashawn\'s goal is to ensure successful project completion for Better Direct\'s customers.',
            buttonText: 'Contact Rashawn',
            link: 'mailto:rashawn.hugg@betterdirect.com'
        },
        {
            name: 'Anthony Hernandez',
            photo: './assets/Services/display/anthony.jpg',
            description: 'Anthony Hernandez is the Project Manager at Better Direct. In this role, he leads the company\'s services team and handles installations, repairs, and custom manufacturing projects. Years ago he started in data entry at Better Direct, and has grown with the company to manage house accounts and high-value contracts. He meets Better Direct\'s high standards as he delivers excellent customer service.',
            buttonText: 'Contact Anthony',
            link: 'mailto:anthony@betterdirect.com'
        },
        {
            name: 'McKenna Mulligan',
            photo: './assets/Services/display/mckenna.jpg',
            description: 'McKenna Mulligan is a Project Manager at Better Direct, where she specializes in technology solutions and software implementations for government clients. Starting her career at the company as a Federal Sales Executive, she developed expertise in federal procurement and agency partnerships that now guide her project leadership. McKenna combines this government sector knowledge with her custom software development background to deliver impactful IT solutions across federal, state, and local agencies. She\'s focused on expanding the services department\'s impact while strengthening Better Direct\'s Tempe community roots as a HUBZone-certified, Service-Disabled Veteran-Owned IT VAR.',
            buttonText: 'Contact McKenna',
            link: 'mailto:mckenna.mulligan@betterdirect.com'
        }
    ];

    // FAQ data
    const faqs = [
        {
            question: 'What types of IT installations do you offer?',
            answer: 'We provide professional installation services for a wide range of IT hardware and software, including servers, networking equipment, storage systems, enterprise software, and cloud-based platforms.'
        },
        {
            question: 'What areas do your IT consulting services cover?',
            answer: 'Our consulting services cover IT strategy, infrastructure planning, software selection, cybersecurity, digital transformation, AI readiness, and more—tailored to your business goals.'
        },
        {
            question: 'What project management methodologies do you use?',
            answer: 'We use a flexible approach, including Agile, Waterfall, or hybrid methodologies—depending on the project’s complexity and your preferred workflow.'
        },
        {
            question: 'What does a customized system design involve?',
            answer: 'We assess your current environment and requirements to design a fully tailored solution—whether it’s a network architecture, server configuration, or integrated software ecosystem.'
        },
        {
            question: 'What’s included in your implementation services?',
            answer: 'Our implementation services include system configuration, customization, data migration, integration with existing tools, user testing, and go-live support.'
        },
        {
            question: 'What types of AI solutions do you offer?',
            answer: 'We provide custom AI solutions such as predictive analytics, process automation, natural language processing (NLP), and machine learning integration, all tailored to your business needs.'
        },
        {
            question: 'How is your project management approach customized?',
            answer: 'We tailor our project plans, communication cadence, reporting, and management style to match your organizational structure, project goals, and internal resources.'
        },
        {
            question: 'Will the installation disrupt our daily operations?',
            answer: 'We strive to minimize downtime by planning installations during off-peak hours or scheduled maintenance windows, and we work closely with your team to ensure a smooth transition.'
        },
        {
            question: 'How do you ensure your recommendations are right for my business?',
            answer: 'We start with a deep understanding of your business needs, operations, and goals, then develop custom recommendations backed by industry best practices and real-world experience.'
        },
        {
            question: 'Can you manage projects that involve third-party vendors?',
            answer: 'Absolutely. We frequently coordinate with third-party vendors and internal stakeholders to ensure smooth collaboration and accountability across all project participants.'
        },
        {
            question: 'Can you design a system that integrates with our existing infrastructure?',
            answer: 'Yes, we specialize in creating custom solutions that integrate seamlessly with your current hardware, software, and cloud environments.'
        },
        {
            question: 'Do you provide training or post-implementation support?',
            answer: 'Yes, we offer training sessions for your staff and ongoing support to ensure your team is confident and your systems are performing as expected.'
        },
        {
            question: 'Do I need a lot of data or technical expertise to start using AI?',
            answer: 'Not necessarily. We’ll guide you through the entire process—from identifying use cases to developing and deploying AI solutions—regardless of your current technical setup.'
        },
        {
            question: 'Do you provide ongoing reporting and status updates?',
            answer: 'Yes, we provide regular updates, milestone tracking, and detailed reporting to ensure full visibility and accountability throughout the project lifecycle.'
        }
    ];

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
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
                                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0570c6' }} >
                                    Services
                                </h1>
                                <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                                    As a small business doing big things, we provide not only top-tier IT hardware and software solutions, but also a full range of professional services to support organizations through every stage of their technology needs. Our offerings include expert installation, configuration, and customization, along with tailored implementation services to ensure seamless integration. We specialize in custom project management and consulting, delivering strategic guidance and hands-on support for complex IT initiatives. Additionally, we offer customized AI solutions designed to meet specific business goals, helping clients harness the power of intelligent automation and data-driven innovation.
                                </p>
                            </div>

                            {/* Right side - Image */}
                            <div>
                                <img
                                    src="./assets/Services/services-1-2.jpg"
                                    alt="Services"
                                    className="w-full h-auto rounded-lg shadow-xl"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/600x400?text=Services';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Left side description */}
                    <div className="mb-12 flex justify-center items-center">
                        <p className="leading-relaxed max-w-md text-center" style={{ color: '#0570c6' }}>
                            <strong>Combine Better Direct's Services with your hardware and software purchases</strong>
                            <br /><br />
                            When you hire the expertise of Better Direct's services team together with your hardware and software, you ensure consistency to your system. Check out our many services here today.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-bold mb-4" style={{ color: '#0570c6' }}>
                                    {service.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Services Team Section */}
            <section className="py-16" style={{ background: '#1161ad' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left side - Video Carousel */}
                            <div className="relative">
                                {/* Main Video */}
                                <div className="mb-4">
                                    <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                                        {/* Left Arrow */}
                                        <button
                                            onClick={prevVideo}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all z-10"
                                            aria-label="Previous video"
                                            style={{ zIndex: 2 , background: '#1161ad'  }}
                                        >
                                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7" /></svg>
                                        </button>
                                        {/* Main Video/Thumbnail or Player */}
                                        {playerOpen ? (
                                            <iframe
                                                src={videos[currentVideo].youtubeUrl}
                                                title={videos[currentVideo].title}
                                                className="absolute inset-0 w-full h-full rounded-lg"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <>
                                                <img
                                                    src={videos[currentVideo].thumbnail}
                                                    alt={videos[currentVideo].title}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/640x360?text=Video';
                                                    }}
                                                />
                                                {/* Play button overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <button className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
                                                        onClick={() => setPlayerOpen(true)}
                                                        aria-label="Play video"
                                                    >
                                                        <svg className="w-8 h-8 ml-1" style={{ color: '#0570c6' }} viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                        {/* Right Arrow */}
                                        <button
                                            onClick={nextVideo}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white rounded-full shadow hover:bg-blue-700 transition-all z-10"
                                            aria-label="Next video"
                                            style={{ zIndex: 2 , background: '#1161ad'  }}
                                        >
                                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                        {/* Close button for player */}
                                        {playerOpen && (
                                            <button
                                                className="absolute top-2 right-2 text-white rounded-full p-2 shadow-lg hover:bg-blue-800 transition-colors"
                                                style={{ background: '#1161ad' }}
                                                onClick={() => setPlayerOpen(false)}
                                                aria-label="Close player"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18" />
                                                    <line x1="6" y1="6" x2="18" y2="18" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Thumbnail Navigation */}
                                <div className="grid grid-cols-3 gap-2">
                                    {videos.slice(0, 3).map((video, index) => (
                                        <button
                                            key={video.id}
                                            onClick={() => setCurrentVideo(index)}
                                            className={`relative rounded overflow-hidden ${currentVideo === index ? 'ring-4 ring-blue-600' : ''}`}
                                        >
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-20 object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/200x120?text=Video';
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right side - Text */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#0570c6' }}>
                                    Meet our Services Team
                                </h2>
                                <div className="w-16 h-1" style={{ background: '#0570c6' }}></div>
                                <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                                    Our Services Team can assist you with your project, beginning with custom project design and ending with implementation of your new software or installation of your hardware – from servers to computer stations and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Services Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left side - Text */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0570c6' }}>
                                AI SERVICES
                            </h2>
                            <div className="w-16 h-1 mb-6" style={{ background: '#1161ad' }}></div>
                            <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                                Our AI Services are designed to help businesses harness the power of artificial intelligence to drive smarter decision-making, improve efficiency, and unlock new opportunities. We offer customized AI solutions tailored to your specific needs—ranging from predictive analytics and process automation to intelligent data analysis and machine learning integration. Whether you're exploring AI for the first time or scaling existing capabilities, we provide the strategic guidance, development, and implementation support needed to turn your AI vision into reality.
                            </p>
                        </div>

                        {/* Right side - Image */}
                        <div>
                            <img
                                src="./assets/Services/services-2.jpg"
                                alt="AI Services"
                                className="w-full h-auto rounded-lg shadow-xl"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/600x400?text=AI+Services';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Customized Project Management Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left side - Image */}
                        <div>
                            <img
                                src="./assets/Services/services-3.jpg"
                                alt="Customized Project Management"
                                className="w-full h-auto rounded-lg shadow-xl"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/600x400?text=Project+Management';
                                }}
                            />
                        </div>

                        {/* Right side - Text */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0570c6' }}>
                                CUSTOMIZED PROJECT MANAGEMENT
                            </h2>
                            <div className="w-16 h-1 mb-6" style={{ background: '#1161ad' }}></div>
                            <p className="leading-relaxed" style={{ color: '#0570c6' }}>
                                Our Customized Project Management services are tailored to fit the unique needs, goals, and complexity of each client's initiative. We adapt our methodologies to align with your organization's workflows, timelines, and resource requirements whether it's a small-scale deployment or a large, multi-phase IT project. With a focus on clear communication, risk mitigation, and results-driven execution, we ensure that every project is managed efficiently and delivered with precision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-16" style={{ background: '#1161ad' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="text-center">
                                    {/* Photo with US flag background */}
                                    <div className="mb-4 relative">
                                        <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-800 via-red-600 to-blue-800 rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-center"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(member.name);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#0570c6' }}>
                                        {member.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#0570c6' }}>
                                        {member.description}
                                    </p>

                                    {/* Contact Button */}
                                    <button
                                    onClick={() => window.location.href = member.link}
                                    className="px-6 py-2" style={{ background: '#1161ad', color: '#ffffff' }}>
                                        {member.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

                    {/* FAQ Section */}
                    <section className="py-16 bg-gray-100">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-medium" style={{ color: '#0570c6' }}>{faq.question}</span>
                                            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 ml-4">
                                                {expandedFaq === index ? (
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                        <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                            </div>
                                        </button>
                                        {expandedFaq === index && (
                                            <div className="px-6 pb-4">
                                                <p className="" style={{ color: '#0570c6' }}>{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

            {/* Get in Touch Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left side - Contact Form */}
                        <div className="text-white rounded-lg p-8" style={{ background: '#1161ad' }}>
                            <h2 className="text-3xl font-bold mb-4">
                                Get in Touch With Us
                            </h2>
                            <p className="mb-6">
                                Have questions or need support? We're here to help. Whether you're looking to learn more about our services, explore partnership opportunities, or just say hello, our team is ready to connect. Reach out today we'd love to hear from you.
                            </p>

                            <form className="space-y-4" onSubmit={e => {
                                e.preventDefault();
                                const firstName = e.target[0].value;
                                const lastName = e.target[1].value;
                                const email = e.target[2].value;
                                const subject = encodeURIComponent(`Contact from ${firstName} ${lastName}`);
                                const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}`);
                                window.location.href = `mailto:info@betterdirect.com?subject=${subject}&body=${body}`;
                            }}>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 bg-white rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-3 bg-white rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-white rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 border-2 border-white text-white font-medium rounded transition-all duration-300 hover:bg-[#0570c6] hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0570c6] cursor-pointer"
                                >
                                    Email Us
                                </button>
                            </form>
                        </div>

                        {/* Right side - Social Media */}
                        <div className="flex items-center justify-center">
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/betterdirectllc/" className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/betterdirect" className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                <a href="https://www.instagram.com/betterdirectllc/?bpref=instagram" className="w-12 h-12 bg-pink-600 rounded flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="https://x.com/BetterDirect?bpref=twitter" className="w-12 h-12 bg-black rounded flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="https://www.pinterest.com/betterdirectllc/?eq=better%20direc&etslf=9902?bpref=pinterest" className="w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white hover:bg-red-700 transition-colors" aria-label="Pinterest">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.14 2.53 7.67 6.13 9.09-.08-.77-.15-1.95.03-2.79.16-.7 1.04-4.47 1.04-4.47s-.26-.53-.26-1.31c0-1.23.71-2.15 1.6-2.15.75 0 1.12.56 1.12 1.23 0 .75-.48 1.87-.73 2.91-.21.89.44 1.62 1.31 1.62 1.57 0 2.78-1.66 2.78-4.05 0-2.12-1.53-3.6-3.71-3.6-2.53 0-4.01 1.89-4.01 3.85 0 .76.29 1.58.65 2.02.07.09.08.17.06.26-.07.29-.22.89-.25 1.01-.04.17-.13.21-.3.13-1.13-.52-1.84-2.14-1.84-3.45 0-2.8 2.04-5.38 5.89-5.38 3.09 0 5.5 2.2 5.5 5.13 0 3.08-1.94 5.56-4.63 5.56-1.01 0-1.96-.53-2.29-1.13l-.62 2.36c-.18.7-.54 1.58-.8 2.12.6.18 1.24.28 1.91.28 5.5 0 9.96-4.46 9.96-9.96s-4.46-9.96-9.96-9.96z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;