import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Carousel slides data
  const slides = [
    {
      type: 'location',
      image: '/src/assets/Contactus/carousel-1.jpg',
      title: 'Location',
      address: '2425 East University Drive, Tempe, AZ 85288',
      mailing: 'P.O. Box 7430, Tempe, AZ 85281'
    },
    {
      type: 'contact',
      image: '/src/assets/Contactus/carousel-2.jpg',
      title: 'Contact Details',
      phone: '(480) 921-3858 / (866) 921-3858',
      fax: '(366) 458-2636',
      email: 'info@betterdirect.com'
    },
    {
      type: 'hours',
      image: '/src/assets/Contactus/carousel-3.jpg',
      title: 'Office Hours',
      schedule: [
        { day: 'Monday', hours: '5AM – 7PM' },
        { day: 'Tuesday', hours: '5AM – 7PM' },
        { day: 'Wednesday', hours: '5AM – 7PM' },
        { day: 'Thursday', hours: '5AM – 7PM' },
        { day: 'Friday', hours: '5AM – 7PM' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-blue-600">
      {/* Hero Section with Text */}
      <section 
        className="py-16" 
        id="hero-section" 
        data-animate
      >
        <div 
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible['hero-section'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text */}
            <div 
              className={`text-white transition-all duration-1000 delay-200 ${
                isVisible['hero-section'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Connect -Your IT Solutions Start Here
              </h1>
              <p className="text-lg leading-relaxed">
                Whether you're a federal agency, school district, or enterprise, Better Direct is ready to help you. Based in Tempe, our team provides hands-on expertise, responsive support, and a customer-first approach to every engagement. As Arizona's only dual-certified HUBZone / SDVOSB (Service-Disabled Veteran-Owned Small Business) IT integrator, we deliver not only innovative solutions but also unique contracting advantages that strengthen our partners' procurement strategies.
              </p>
            </div>

            {/* Right side - Carousel */}
            <div 
              className={`relative group transition-all duration-1000 delay-400 ${
                isVisible['hero-section'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Carousel Container */}
              <div className="relative bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-cyan-700/60 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-cyan-400/30">
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-blue-500/10 to-purple-600/10 pointer-events-none"></div>
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover transition-all duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/164e63/FFFFFF?text=' + encodeURIComponent(slides[currentSlide].title);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-cyan-200 mb-6 text-center drop-shadow-lg">
                    {slides[currentSlide].title}
                  </h2>

                  {/* Location Content */}
                  {slides[currentSlide].type === 'location' && (
                    <div className="text-center space-y-4">
                      <div>
                        <p className="text-cyan-100 text-lg">
                          We're located at <strong className="text-cyan-300">{slides[currentSlide].address}</strong>
                        </p>
                      </div>
                      <div>
                        <p className="text-cyan-100 text-lg">
                          <strong className="text-cyan-300">Mailing:</strong> {slides[currentSlide].mailing}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Contact Details Content */}
                  {slides[currentSlide].type === 'contact' && (
                    <div className="text-center space-y-4">
                      <div>
                        <p className="text-cyan-100 text-lg">
                          <strong className="text-cyan-300">Call Us at:</strong> <a href="tel:4809213858" className="text-cyan-300 hover:text-cyan-100 underline">{slides[currentSlide].phone}</a>
                        </p>
                      </div>
                      <div>
                        <p className="text-cyan-100 text-lg">
                          <strong className="text-cyan-300">Fax:</strong> {slides[currentSlide].fax}
                        </p>
                      </div>
                      <div>
                        <p className="text-cyan-100 text-lg">
                          <strong className="text-cyan-300">Email:</strong> <a href={`mailto:${slides[currentSlide].email}`} className="text-cyan-300 hover:text-cyan-100 underline">{slides[currentSlide].email}</a>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Office Hours Content */}
                  {slides[currentSlide].type === 'hours' && (
                    <div className="max-w-sm mx-auto">
                      <table className="w-full border-2 border-cyan-400/30">
                        <tbody>
                          {slides[currentSlide].schedule.map((item, index) => (
                            <tr key={index} className="border-b-2 border-cyan-400/20 last:border-b-0">
                              <td className="px-6 py-3 text-center font-semibold text-cyan-100 border-r-2 border-cyan-400/20">
                                {item.day}
                              </td>
                              <td className="px-6 py-3 text-center font-semibold text-cyan-300">
                                {item.hours}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 pb-6">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Hidden by default, animated on hover */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-white/30 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-white transition-transform duration-300 hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 z-10 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-white/30 hover:scale-110"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-white transition-transform duration-300 hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="order-2 md:order-1">
              <img 
                src="/src/assets/Contactus/bd.jpg"
                alt="Better Direct Presentation"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Presentation';
                }}
              />
            </div>

            {/* Right side - Form */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                Your Trusted Partner for Government IT Procurement
              </h2>
              <p className="text-xl text-blue-600 mb-8">
                Fast Quotes. Proven Contracts. Expert Support
              </p>

              <form className="space-y-4">
                {/* Name and Email in a row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                {/* Message textarea */}
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  required
                ></textarea>

                {/* Captcha and Submit */}
                <div className="flex items-center justify-end gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">5 + 1 =</span>
                    <input
                      type="text"
                      className="w-20 px-3 py-2 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white border-2 border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div> {/* End grid */}
        </div> {/* End container */}
      </section>
    </div>
  );
};

export default ContactUs;