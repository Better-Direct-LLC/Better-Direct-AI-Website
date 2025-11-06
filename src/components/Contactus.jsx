import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // CAPTCHA state
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2 });
    setCaptchaInput('');
    setCaptchaError('');
  };

  // Initialize CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

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
      image: './assets/Contactus/carousel-1.jpg',
      title: 'Location',
      address: '2425 East University Drive, Tempe, AZ 85288',
      mailing: 'P.O. Box 7430, Tempe, AZ 85281'
    },
    {
      type: 'contact',
      image: './assets/Contactus/carousel-2.jpg',
      title: 'Contact Details',
      phone: '(480) 921-3858 / (866) 921-3858',
      fax: '(366) 458-2636',
      email: 'info@betterdirect.com'
    },
    {
      type: 'hours',
      image: './assets/Contactus/carousel-3.jpg',
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
    <div className="min-h-screen" style={{ background: '#1161ad' }}>
      {/* Hero Section with Text */}
      <section
        className="py-16"
        id="hero-section"
        data-animate
      >
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['hero-section']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text */}
            <div
              className={`text-white transition-all duration-1000 delay-200 ${isVisible['hero-section']
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
              className={`relative group transition-all duration-1000 delay-400 ${isVisible['hero-section']
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
                }`}
            >
              {/* Carousel Container */}
              <div className="relative backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-cyan-400/30">
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
                  <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-lg" style={{ color: "#6cb2ebff" }}>
                    {slides[currentSlide].title}
                  </h2>

                  {/* Location Content */}
                  {slides[currentSlide].type === 'location' && (
                    <div className="text-center space-y-4">
                      <div>
                        <p className="text-lg" style={{ color: "#6cb2ebff" }}>
                          We're located at <strong className="text-cyan-300">{slides[currentSlide].address}</strong>
                        </p>
                      </div>
                      <div>
                        <p className="text-lg" style={{ color: "#6cb2ebff" }}>
                          <strong className="text-cyan-300">Mailing:</strong> {slides[currentSlide].mailing}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Contact Details Content */}
                  {slides[currentSlide].type === 'contact' && (
                    <div className="text-center space-y-4">
                      <div>
                        <p className="text-lg" style={{ color: "#bee3fcff " }}>
                          <strong style={{ color: "#bee3fcff" }}>Call Us at:</strong> <a href="tel:4809213858" className="hover:text-cyan-100 underline">{slides[currentSlide].phone}</a>
                        </p>
                      </div>
                      <div>
                        <p className="text-lg" style={{ color: "#bee3fcff" }}>
                          <strong >Fax:</strong> {slides[currentSlide].fax}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg" style={{ color: "#bee3fcff" }}>
                          <strong >Email:</strong> <a href={`mailto:${slides[currentSlide].email}`} className="hover:text-cyan-100 underline">{slides[currentSlide].email}</a>
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
                              <td className="px-6 py-3 text-center font-semibold border-r-2 border-cyan-400/20" style={{ color: "#bee3fcff" }} >
                                {item.day}
                              </td>
                              <td className="px-6 py-3 text-center font-semibold" style={{ color: "#bee3fcff" }}>
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
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/40'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Hidden by default, animated on hover */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 z-10 hover:bg-white/50 hover:scale-110 hover:scale-105 cursor-pointer"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 z-10 hover:bg-white/50 hover:scale-110 hover:scale-105 cursor-pointer"
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
                src="./assets/Contactus/bd.jpg"
                alt="Better Direct Presentation"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Presentation';
                }}
              />
            </div>

            {/* Right side - Form */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0570c6" }}>
                Your Trusted Partner for Government IT Procurement
              </h2>
              <p className="text-xl mb-8" style={{ color: "#0570c6" }}>
                Fast Quotes. Proven Contracts. Expert Support
              </p>

              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();

                // Validate CAPTCHA
                if (parseInt(captchaInput) !== captcha.answer) {
                  setCaptchaError('Incorrect answer. Please try again.');
                  generateCaptcha();
                  return;
                }

                // Create mailto link
                const subject = encodeURIComponent('Contact Form Submission from ' + formData.name);
                const body = encodeURIComponent(
                  `Name: ${formData.name}\n` +
                  `Message: ${formData.message}`
                );
                const mailtoLink = `mailto:info@betterdirect.com?subject=${subject}&body=${body}`;

                // Open email client
                window.location.href = mailtoLink;

                // Show success message
                setSubmitMessage('Email client opened! Please send the email to complete your message.');

                // Reset form
                setFormData({ name: '', email: '', message: '' });
                generateCaptcha();
              }}>
                {/* Name and Email in a row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                {/* Message textarea */}
                <textarea
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  required
                ></textarea>

                {/* Captcha and Submit */}
                <div className="flex items-center justify-end gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">{captcha.num1} + {captcha.num2} =</span>
                    <input
                      type="text"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value.replace(/[^0-9]/g, ''))}
                      className="w-20 px-3 py-2 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                      inputMode="numeric"
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="ml-2 px-2 py-1 text-xs border rounded hover:bg-cyan-400 hover:text-white transition-all cursor-pointer"
                      title="Generate new question"
                      style={{ color: "#0570c6", borderColor: "#0570c6" }}
                      onMouseEnter={e => {
                      e.target.style.backgroundColor = '#0570c6';
                      e.target.style.color = '#fff';
                      e.target.style.borderColor = '#0570c6';
                    }}
                    onMouseLeave={e => {
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.color = '#0570c6';
                      e.target.style.borderColor = '#0570c6';
                    }}
                  >
                    ↻
                  </button>
                </div>
                <button
                    type="submit"
                    className="px-8 py-3 bg-white border-2 font-bold rounded transition-all duration-300 hover-scale-105 cursor-pointer"
                    style={{ color: "#0570c6", borderColor: "#0570c6" }}
                    onMouseEnter={e => {
                      e.target.style.backgroundColor = '#0570c6';
                      e.target.style.color = '#fff';
                      e.target.style.borderColor = '#0570c6';
                    }}
                    onMouseLeave={e => {
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.color = '#0570c6';
                      e.target.style.borderColor = '#0570c6';
                    }}
                  >
                    SUBMIT
                  </button>
                </div>

                {/* Error and Success Messages */}
                {captchaError && (
                  <div className="text-red-500 font-medium text-right">
                    {captchaError}
                  </div>
                )}
                {submitMessage && (
                  <div className="text-green-600 font-medium text-right">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div> {/* End grid */}
        </div> {/* End container */}
      </section>
    </div>
  );
};

export default ContactUs;