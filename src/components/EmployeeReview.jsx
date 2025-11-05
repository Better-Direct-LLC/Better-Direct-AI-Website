import React, { useRef, useEffect, useState } from 'react';

const EmployeeReview = () => {
    // Employee testimonials data
    const testimonials = [
        {
            title: 'Great job with endless opportunities',
            role: 'Program Manager',
            quote: 'The company culture is incredibly supportive and inclusive, fostering a sense of belonging that makes coming to work a joy. Mentorship and professional development are top-notch, with genuine investment in your growth. Leadership trusts employees to take ownership and innovate, fostering a dynamic and collaborative environment.'
        },
        {
            title: 'Fast-paced and supportive',
            role: 'Sales Associate',
            quote: 'Working as a Sales Associate at Better Direct offers numerous opportunities to build strong product knowledge and develop valuable customer service and relationship skills. The fast-paced environment keeps each day engaging, while the supportive team is always willing to help new hires learn and succeed. Employees gain exposure to many aspects of sales, from quoting to order processing, which provides a well-rounded understanding of the business. This role truly rewards those who are self-driven. You get out what you put in. There are also opportunities to travel as part of building vendor relationships, and the casual dress code creates a comfortable atmosphere. Plus, the frequent catered snacks and food make the workplace even more enjoyable.'
        },
        {
            title: 'Where Training Meets Opportunity',
            role: 'Contract Manager',
            quote: 'Better Direct offers diverse opportunities to grow your wealth and knowledge. As a new hire, you will undergo comprehensive training to become a skilled federal reseller, with our continuously evolving training classes designed to optimize your learning experience. Our office fosters a friendly and supportive environment, where the management team is ready and available to address any questions you have. Better Direct also offers a variety of engaging events, including visits to secure bases, conferences, an annual year-end celebration, team-building activities, and healthy teams competing.'
        }
    ];

    // Animation state for fade-in
    const [visible, setVisible] = useState(Array(testimonials.length).fill(false));
    const reviewRefs = useRef([]);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number(entry.target.getAttribute('data-index'));
                        setVisible((prev) => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );
        reviewRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return () => {
            reviewRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="min-h-screen relative">
            {/* Background Image */}
            <img 
                src="./assets/Success/1.jpg"
                alt="Office Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/1920x1080/4F46E5/FFFFFF?text=Office+Background';
                }}
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-opacity-20 z-10"></div>

            {/* Content */}
            <div className="relative z-20">
                {/* Header Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow-2xl p-8 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "#0570c6" }}>
                                What Our Employees Say
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-8 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                ref={el => reviewRefs.current[index] = el}
                                data-index={index}
                                className={`bg-white rounded-lg shadow-xl p-8 transition-all duration-700 ease-out ${visible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ willChange: 'opacity, transform' }}
                            >
                                <h2 className="text-2xl font-bold mb-2" style={{ color: "#0570c6" }}>
                                    {testimonial.title}
                                </h2>
                                <p className="font-medium mb-4" style={{ color: "#0570c6" }}>
                                    {testimonial.role}
                                </p>
                                <div className="border-l-4 pl-6" style={{ borderColor: "#0570c6" }}>
                                    <p className="leading-relaxed italic" style={{ color: "#0570c6" }}>
                                        {testimonial.quote}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EmployeeReview;