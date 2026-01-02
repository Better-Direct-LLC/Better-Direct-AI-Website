import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Editable CC email list
const ccEmailsRaw = [
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
const ccEmails = Array.from(new Set(ccEmailsRaw));
// Generate mailto link with CC
const mailtoLink = `mailto:info@betterdirect.com?cc=${encodeURIComponent(ccEmails.filter(email => email !== 'info@betterdirect.com').join(','))}&subject=${encodeURIComponent('Event Notification Request')}`;

const eventData = [
  {
    key: 'stars',
    title: 'Stars & Stripes DAP – Key West, FL',
    date: 'Nov 4–7, 2025',
    summary: 'Met with TD SYNNEX SVP Eddie Franklin, reviewed FY26 budgets, CMMC 2.0 rollout, and SEWP future. Explored DLT growth and Cisco strategy.',
    tags: ['TD SYNNEX', 'CMMC 2.0', 'SEWP', 'Federal Budget'],
    img: './assets/Events/Florida/Image4.jpg',
    images: [
      './assets/Events/Florida/Image1.jpg',
      './assets/Events/Florida/Image2.jpg',
      './assets/Events/Florida/Image3.jpg',
      './assets/Events/Florida/Image4.jpg',
    ],
    details: [
      'Met Eddie Franklin (SVP, TD SYNNEX) – discussed FY26 DLT growth',
      'CMMC 2.0 rollout begins Nov 10, 2025',
      'SEWP likely to remain standalone',
      'FY26 Defense IT: $66.1B total',
      'TD SYNNEX launching managed CMMC facility',
    ],
  },
  {
    key: 'technet',
    title: 'TechNet Indo-Pacific – Hawaii',
    date: 'Oct 27–30, 2025',
    summary: 'Showcased HP & Getac rugged solutions to Army, Navy, Air Force. Strong interest in AI servers and FAA SAVES LOAs.',
    tags: ['HUBZone', 'Getac S510', 'Dell AI', 'FAA SAVES'],
    img: './assets/Events/Hawaii/img6.jpg',
    images: [
      './assets/Events/Hawaii/img1.jpg',
      './assets/Events/Hawaii/img2.jpg',
      './assets/Events/Hawaii/img3.jpg',
      './assets/Events/Hawaii/img4.jpg',
      './assets/Events/Hawaii/img5.jpg',
      './assets/Events/Hawaii/img6.jpg',
    ],
    details: [
      'Only 2 resellers present – high visibility',
      'Getac S410 EOL 2026 → S510 launch',
      'Dell Pro MAX AI: $4,000 MSRP',
      'Follow-up LOAs: Tanium, Zscaler, Panasonic',
      'Prime booth traffic driven by Marcos',
    ],
  },
  {
    key: 'azbases',
    title: 'AZ Bases Tour – Ft. Huachuca, Davis-Monthan, Luke AFB',
    date: 'Oct 21–23, 2025',
    summary: 'Only AZ-based HUBZone/SDVOSB. Promoted AI dev team and Getac rugged devices. Gained lifecycle refresh insights.',
    tags: ['HUBZone', 'Getac', 'AI Solutions'],
    img: './assets/Events/LukeAFB/Image14.jpg',
    images: [
      './assets/Events/Davis/Image1.jpg',
      './assets/Events/Davis/Image2.jpg',
      './assets/Events/Davis/Image3.jpg',
      './assets/Events/Davis/Image4.jpg',
      './assets/Events/Huachuca/Image5.jpg',
      './assets/Events/Huachuca/Image6.jpg',
      './assets/Events/Huachuca/Image7.jpg',
      './assets/Events/Huachuca/Image8.jpg',
      './assets/Events/Huachuca/Image9.jpg',
      './assets/Events/Huachuca/Image10.jpg',
      './assets/Events/Huachuca/Image11.jpg',
      './assets/Events/Huachuca/Image12.jpg',
      './assets/Events/LukeAFB/Image13.jpg',
      './assets/Events/LukeAFB/Image14.jpg',
      './assets/Events/LukeAFB/Image15.jpg',
      './assets/Events/LukeAFB/Image16.jpg',
      './assets/Events/LukeAFB/Image17.jpg',
    ],
    details: [
      'Only AZ-based HUBZone/SDVOSB reseller',
      'Introduced AI Development Team',
      'Strong interest in Getac rugged devices',
      'Gained lifecycle refresh timelines from IT engineers',
    ],
  },
  {
    key: 'gtc',
    title: 'NVIDIA GTC – Washington, DC',
    date: 'Oct 27–29, 2025',
    summary: 'Jensen Huang keynote on AI factories, Grace Blackwell, tokenization, and humanoid robots. Federal procurement cycle too slow.',
    tags: ['NVIDIA', 'AI Supercomputers', 'Quantum + AI'],
    img: './assets/Events/GTC/img1.jpg',
    images: [
      './assets/Events/GTC/img1.jpg',
      './assets/Events/GTC/img2.jpg',
      './assets/Events/GTC/img3.jpg',
      './assets/Events/GTC/img4.jpg',
    ],
    details: [
      'Jensen Huang: AI Factories, Grace Blackwell, Tokenization',
      'Gov procurement cycle: "50 AI dog years old"',
      '7 AI Supercomputers planned with DoE',
      'Humanoids next $T market after GPUs',
      'Urgent need for US energy investment',
    ],
  },
];

const futureEvents = [
  {
    key: 'Tech Expo-Fort Meade',
    title: 'Tech Expo – Fort Meade, MD',
    date: 'Feb 3, 2026',
    summary: 'The Tech Expo at Fort Meade connects Department of Defense personnel with industry leaders to explore emerging technologies, network on mission-critical solutions, and foster innovation through live demos and collaborative discussions. This free, on-base event provides hands-on opportunities to address key challenges in cybersecurity, IT, and defense tech.',
    tags: ['Tech Expo', 'Fort Meade', 'DOD', 'cybersecurity', 'IT innovation', 'defense technology', 'networking', 'mission solutions'],
    img: '',
    images: [
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Tech Expo-Fort Belvoir',
    title: 'Tech Expo – Fort Belvoir, VA',
    date: 'Feb 4, 2026',
    summary: 'Held on base, the Fort Belvoir Tech Expo brings together government agencies and industry experts to showcase cutting-edge defense innovations, enabling collaboration on procurement needs and technology integrations for enhanced operational efficiency. Attendees can engage in guided tours, live demonstrations, and strategic networking sessions at this complimentary event.',
    tags: ['Tech Expo', 'Fort Belvoir', 'DOD', 'defense innovation', 'procurement', 'technology showcase', 'government collaboration', 'live demos'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Better Direct AI',
    title: 'Better Direct AI – Sales Kick Off 2026',
    date: 'March 5-7, 2026',
    summary: 'Better Direct\'s AI Sales Kick Off 2026 gathers sales teams for interactive sessions on AI-driven strategies, resilience in sales, and practical tools for pitching advanced IT solutions, emphasizing hands-on training to boost performance in a competitive market. This two-day event in Tempe focuses on emotional intelligence, negotiation tactics, and emerging tech trends for revenue growth.',
    tags: ['AI sales', 'kick off', 'Tempe AZ', 'IT solutions', 'sales training', 'negotiation', 'emotional intelligence', 'revenue strategies'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Wright-Patterson AFB Tech Expo',
    title: 'Wright-Patterson AFB Tech Expo – Dayton, OH',
    date: 'March 18, 2026',
    summary: 'The Wright-Patterson AFB Tech Expo unites Air Force personnel with industry innovators to evaluate emerging technologies for aerospace and defense missions, featuring hands-on exhibits and expert networking to drive collaborative problem-solving. Free and on-site, it highlights advancements in AI, cybersecurity, and mission systems for enhanced base operations.',
    tags: ['Tech Expo', 'Wright-Patterson AFB', 'Air Force', 'aerospace tech', 'cybersecurity', 'mission innovation', 'industry networking'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Tech Summit',
    title: 'Tech Summit at Fort Huachuca – Sierra Vista, AZ',
    date: 'March 24, 2026',
    summary: 'The Tech Summit at Fort Huachuca facilitates Army leaders and tech providers in discussing mission requirements, with live demos of AI-enhanced cybersecurity and emerging tools to innovate operational capabilities. This open, no-cost event promotes education, collaboration, and hands-on exploration of solutions tailored to Army needs.',
    tags: ['Tech Summit', 'Fort Huachuca', 'Army', 'AI cybersecurity', 'emerging tech', 'collaboration', 'live demos', 'mission solutions'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Red White & You',
    title: 'Red White & You- TD SYNNEX– TBD',
    date: 'TBD',
    summary: 'TD SYNNEX\'s Red White & You conference empowers public sector resellers with insights into IT modernization, hybrid work solutions, and national security tech, through executive keynotes, vendor partnerships, and networking to capitalize on U.S. government IT opportunities. Typically held late May, this event drives business growth via hands-on sessions and new collaborations.',
    tags: ['Red White & You', 'TD SYNNEX', 'public sector', 'IT modernization', 'government IT', 'reseller conference', 'networking', 'security tech'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Wright-Patterson',
    title: 'Wright-Patterson AFB Tech Expo– Dayton, OH',
    date: 'Sept 16, 2026',
    summary: 'This fall edition of the Wright-Patterson AFB Tech Expo targets year-end spending by connecting Air Force teams with exhibitors on advanced aerospace tech, cybersecurity, and logistics solutions through interactive booths and leader-led tours. As a premier on-base gathering since 1995, it attracts diverse DoD attendees for strategic tech adoption.',
    tags: ['Tech Expo', 'Wright-Patterson AFB', 'Air Force', 'aerospace', 'cybersecurity', 'year-end procurement', 'DoD networking'],
    img: '',
    images: [
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'TechNet Indo-Pacific',
    title: 'TechNet Indo-Pacific – Hawaii',
    date: 'Oct 27-29, 2026',
    summary: 'TechNet Indo-Pacific, the region\'s premier defense tech event, assembles military leaders, AFCEA members, and innovators for sessions on secure edge communications, AI, and Indo-Pacific security challenges, featuring exhibits and global networking. Co-sponsored by AFCEA, this three-day conference in Honolulu advances joint Army-Air Force strategies.',
    tags: ['TechNet Indo-Pacific', 'Hawaii', 'AFCEA', 'defense tech', 'AI security', 'edge comms', 'military networking', 'Indo-Pacific strategy'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Innovation Day at Fort Huachuca',
    title: 'Innovation Day at Fort Huachuca – Sierra Vista, AZ',
    date: 'Nov 3, 2026',
    summary: 'Innovation Day at Fort Huachuca bridges Army missions with industry demos of cutting-edge tech like AI and adaptive infrastructures, encouraging open dialogue on challenges and future requirements. This free event emphasizes education, partnerships, and practical integrations to enhance cybersecurity and operational resilience.',
    tags: ['Innovation Day', 'Fort Huachuca', 'Army', 'emerging tech', 'AI integration', 'cybersecurity', 'industry partnerships', 'mission education'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Davis-Monthan AFB Tech Expo',
    title: 'Davis-Monthan AFB Tech Expo – Tucson, AZ',
    date: 'Nov 4, 2026',
    summary: 'The Davis-Monthan AFB Tech Expo offers Air Force aviators and support staff direct access to innovative IT and defense solutions via hands-on exhibits, focusing on mission enhancement through tech collaborations. Open to all base personnel, it includes networking with experts on cybersecurity, logistics, and aerial operations advancements.',
    tags: ['Tech Expo', 'Davis-Monthan AFB', 'Air Force', 'defense IT', 'cybersecurity', 'hands-on demos', 'aerial tech', 'base networking'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'Luke AFB Tech Expo',
    title: 'Luke AFB Tech Expo – Glendale, AZ',
    date: 'Nov 5, 2026',
    summary: 'At Luke AFB Tech Expo, fighter pilot training personnel connect with vendors on secure networks, Wi-Fi advancements, and mission-critical tech, promoting innovation in training simulations and base security. This complimentary on-site event features live training sessions and strategic discussions for Air Force excellence.',
    tags: ['Tech Expo', 'Luke AFB', 'Air Force', 'secure networks', 'training tech', 'Wi-Fi innovation', 'mission security', 'fighter pilot support'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  },
  {
    key: 'RIO RANCHO- HP',
    title: 'RIO RANCHO- HP',
    date: 'Mid Nov, 2026',
    summary: 'HP\'s Rio Rancho event highlights advancements in high-performance computing and edge-to-cloud solutions, targeting tech professionals for insights into AI, data management, and sustainable innovations from their New Mexico campus. This mid-November gathering fosters partnerships and demos for government and enterprise applications.',
    tags: ['HP event', 'Rio Rancho', 'high-performance computing', 'AI edge', 'cloud solutions', 'tech innovation', 'demos', 'partnerships'],
    img: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    details: [
    ],
  }


];

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: './assets/Events/Hawaii/img1.jpg',
    title: 'Federal IT Conference 2024',
    description: 'AI and cybersecurity presentations'
  },
  {
    id: 2,
    src: './assets/Events/Hawaii/img4.jpg',
    title: 'Defense Tech Summit',
    description: 'Mission-critical technology solutions'
  },
  {
    id: 3,
    src: './assets/Events/Hawaii/img5.jpg',
    title: 'Government Innovation Forum',
    description: 'Digital transformation initiatives'
  },
  {
    id: 4,
    src: './assets/Events/Davis/Image1.jpg',
    title: 'HUBZone Tech Expo',
    description: 'Small business technology showcase'
  },
  {
    id: 5,
    src: './assets/Events/Huachuca/Image12.jpg',
    title: 'Cloud Infrastructure Summit',
    description: 'Enterprise cloud solutions'
  },
  {
    id: 6,
    src: './assets/Events/LukeAFB/Image14.jpg',
    title: 'Cybersecurity Workshop',
    description: 'CMMC 2.0 compliance training'
  },
  {
    id: 7,
    src: './assets/Events/GTC/img1.jpg',
    title: 'HUBZone Tech Expo',
    description: 'Small business technology showcase'
  },
  {
    id: 8,
    src: './assets/Events/GTC/img2.jpg',
    title: 'Cloud Infrastructure Summit',
    description: 'Enterprise cloud solutions'
  },
  {
    id: 9,
    src: './assets/Events/GTC/img3.jpg',
    title: 'Cybersecurity Workshop',
    description: 'CMMC 2.0 compliance training'
  },
  {
    id: 10,
    src: './assets/Events/Florida/Image1.jpg',
    title: 'HUBZone Tech Expo',
    description: 'Small business technology showcase'
  },
  {
    id: 11,
    src: './assets/Events/Florida/Image3.jpg',
    title: 'Cloud Infrastructure Summit',
    description: 'Enterprise cloud solutions'
  },
  {
    id: 12,
    src: './assets/Events/Florida/Image2.jpg',
    title: 'Cybersecurity Workshop',
    description: 'CMMC 2.0 compliance training'
  }
];

export default function Events() {
  const [lightbox, setLightbox] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [futureEventsIndex, setFutureEventsIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const futureEventsPerPage = isMobile ? 1 : 4;
  const galleryItemsPerPage = isMobile ? 1 : 3;
  const [countdown, setCountdown] = useState({
    days: '--',
    hours: '--',
    mins: '--',
    secs: '--'
  });
  const [nextEvent, setNextEvent] = useState(null);

  // Parse date string to Date object (handles various formats)
  const parseEventDate = (dateStr) => {
    // Handle "TBD" or empty dates
    if (!dateStr || dateStr === 'TBD' || dateStr.includes('Mid Nov')) return null;
    
    // Try to parse different date formats
    // Format: "Feb 3, 2026" or "March 5-7, 2026" or "Oct 27-29, 2026"
    const match = dateStr.match(/([A-Za-z]+)\s+(\d+)(?:-\d+)?,?\s+(\d{4})/);
    if (match) {
      const [, month, day, year] = match;
      return new Date(`${month} ${day}, ${year} 09:00:00`);
    }
    
    return null;
  };

  // Find the next upcoming event
  const findNextEvent = () => {
    const now = new Date();
    
    // Filter and sort events by date
    const upcomingEvents = futureEvents
      .map(event => ({
        ...event,
        parsedDate: parseEventDate(event.date)
      }))
      .filter(event => event.parsedDate && event.parsedDate > now)
      .sort((a, b) => a.parsedDate - b.parsedDate);
    
    return upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  };

  // Countdown functionality
  useEffect(() => {
    const updateCountdown = () => {
      const next = findNextEvent();
      setNextEvent(next);
      
      if (!next || !next.parsedDate) {
        setCountdown({ days: 'TBD', hours: '', mins: '', secs: '' });
        return;
      }

      const now = new Date();
      const diff = next.parsedDate - now;

      if (diff <= 0) {
        setCountdown({ days: 'Live!', hours: '', mins: '', secs: '' });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({
        days: d,
        hours: h,
        mins: m,
        secs: s
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle form submission and mailto
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailtoLink;
  };

  // Smooth scroll to upcoming events section
  const scrollToUpcomingEvents = () => {
    const element = document.getElementById('reach-out');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Gallery navigation functions
  const nextGallerySlide = () => {
    const totalImages = galleryImages.length;
    const imagesPerView = galleryItemsPerPage;
    const maxStartIndex = Math.max(0, totalImages - imagesPerView);

    setCurrentGalleryIndex(prev => {
      if (prev >= maxStartIndex) {
        return 0; // Reset to beginning
      } else {
        const nextIndex = prev + imagesPerView;
        return nextIndex > maxStartIndex ? maxStartIndex : nextIndex;
      }
    });
  };

  const prevGallerySlide = () => {
    const totalImages = galleryImages.length;
    const imagesPerView = galleryItemsPerPage;
    const maxStartIndex = Math.max(0, totalImages - imagesPerView);

    setCurrentGalleryIndex(prev => {
      if (prev <= 0) {
        return maxStartIndex; // Go to last possible start position
      } else {
        return Math.max(0, prev - imagesPerView);
      }
    });
  };

  const nextFutureEvents = () => {
    setFutureEventsIndex(prev => {
      const total = futureEvents.length;
      const next = prev + futureEventsPerPage;
      return next >= total ? 0 : next;
    });
  };

  const prevFutureEvents = () => {
    setFutureEventsIndex(prev => {
      const total = futureEvents.length;
      const prevIdx = prev - futureEventsPerPage;
      return prevIdx < 0 ? Math.max(0, total - futureEventsPerPage) : prevIdx;
    });
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Hero + Sales Kick-Off Combined Section */}
      <section className="w-full" style={{ background: 'linear-gradient(135deg, #1161ad 0%, #0570c6 100%)' }}>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 md:py-16 px-2 md:px-4 max-w-6xl mx-auto">
        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white md:text-left md:items-start max-w-2xl w-full md:mr-20">
          <h1 className="text-5xl font-bold mb-4">Federal IT Events & Insights</h1>
          <p className="text-xl mb-8 max-w-xl">Stay ahead with Better Direct — HUBZone & SDVOSB-certified leader in mission-ready technology solutions.</p>
          {/* Countdown Timer */}
          <div className="mt-8 mb-6 w-full overflow-x-auto">
            <p className="mb-4 text-lg">
              {nextEvent ? `Next Event: ${nextEvent.title}` : 'Next Event Countdown'}
            </p>
            <div className="flex justify-center md:justify-start gap-3 font-mono font-bold w-full min-w-[320px]">
              <div className="bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-2xl min-w-20 text-center" style={{ background: '#0570c6' }}>
                <span className="block text-4xl text-white">{countdown.days}</span>
                <small className="text-sm opacity-80">Days</small>
              </div>
              <div className="bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-2xl min-w-20 text-center" style={{ background: '#0570c6' }}>
                <span className="block text-4xl text-white">{countdown.hours}</span>
                <small className="text-sm opacity-80">Hours</small>
              </div>
              <div className="bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-2xl min-w-20 text-center" style={{ background: '#0570c6' }}>
                <span className="block text-4xl text-white">{countdown.mins}</span>
                <small className="text-sm opacity-80">Min</small>
              </div>
              <div className="bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-2xl min-w-20 text-center" style={{ background: '#0570c6' }}>
                <span className="block text-4xl text-white">{countdown.secs}</span>
                <small className="text-sm opacity-80">Sec</small>
              </div>
            </div>
          </div>
          <button
            onClick={scrollToUpcomingEvents}
            className="group relative px-8 py-4 border-2 font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:border-transparent cursor-pointer hover:scale-105 bg-white"
            style={{ color: '#1161ad', borderColor: '#0570c6' }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#0570c6';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#1161ad';
            }}
          >
            <span className="relative inline-flex items-center gap-2">
              Know Our Next Event
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                ↓
              </span>
            </span>
          </button>
        </div>
        {/* Sales Kick-Off */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-end max-w-2xl w-full">
          <a
            href="https://join-us-for-sales-kick-o-7cy6wzw.gamma.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group cursor-pointer w-full"
          >
            <div className="relative bg-black rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-3xl overflow-hidden w-full">
              {/* Decorative blur circles in background */}
              <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
              <div className="relative">
                {/* RSVP Badge */}
                <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-white text-black mb-6">
                  RSVP
                </div>
                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8 text-center md:text-left">
                  Better Direct AI –<br />Sales Kick-Off 2026
                </h2>
                {/* Event Details - Two Column Layout */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-0">
                  {/* Left side - Event Info */}
                  <div className="space-y-3 text-white/90">
                    <div className="flex items-center gap-2 text-sm md:text-base">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>March 5-7, 2026</span>
                      <span className="mx-1">|</span>
                      <span>RSVP</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base">

                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>TD SYNNEX Office</span>
                    </div>
                  </div>
                  {/* Right side - Download Button */}
                  <div className="flex items-center gap-2 text-white group-hover:text-blue-300 transition-colors">
                    <span className="text-sm md:text-base font-medium whitespace-nowrap">→ Download Flyer</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12 relative">
            Past Events & Key Takeaways
            <span className="block w-20 h-1 mx-auto mt-4" style={{ background: '#1161ad' }}></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {eventData.map(event => (
              <div key={event.key} className="event-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-2" onClick={() => {
                setCurrentImageIndex(0);
                setLightbox(event);
              }}>
                <div
                  className="event-img h-52 bg-gray-200"
                  style={{
                    backgroundImage: `url('${event.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    imageRendering: 'crisp-edges',
                  }}
                ></div>
                <div className="event-content p-6">
                  <div className="event-date text-sm mb-2" style={{ color: '#6c757d' }}>{event.date}</div>
                  <h3 className="event-title text-xl font-bold mb-2" style={{ color: '#1161ad' }}>{event.title}</h3>
                  <p className="event-summary text-base mb-4" style={{ color: '#6c757d' }}>{event.summary}</p>
                  <div className="event-tags flex flex-wrap gap-2 text-xs">
                    {event.tags.map(tag => (
                      <span key={tag} className="tag px-2 py-1 rounded-full" style={{ background: '#e9ecef', color: '#1161ad' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="reach-out">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12 relative">
            Upcoming Events
            <span className="block w-20 h-1 mx-auto mt-4" style={{ background: '#1161ad' }}></span>
          </h2>
          <div className="relative max-w-7xl mx-auto">
            {/* Left Arrow */}
            <button
              onClick={() => {
                setFutureEventsIndex(prev => {
                  const total = futureEvents.length;
                  const prevIdx = prev - futureEventsPerPage;
                  return prevIdx < 0 ? Math.max(0, total - futureEventsPerPage) : prevIdx;
                });
              }}
              className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #1161ad 0%, #0570c6 100%)',
                color: 'white'
              }}
              aria-label="Previous events"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform duration-200 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Carousel Grid */}
            <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
              {futureEvents.slice(futureEventsIndex, futureEventsIndex + futureEventsPerPage).map(event => (
                <div key={event.key} className="event-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-2" onClick={() => {
                  // setCurrentImageIndex(0);
                  // setLightbox(event);
                }}>
                  <div
                    className="event-img h-52 bg-gray-200"
                    style={{
                      backgroundImage: `url('${event.img}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      imageRendering: 'crisp-edges',
                    }}
                  ></div>
                  <div className="event-content p-6">
                    <div className="event-date text-sm mb-2" style={{ color: '#6c757d' }}>{event.date}</div>
                    <h3 className="event-title text-xl font-bold mb-2" style={{ color: '#1161ad' }}>{event.title}</h3>
                    <p className="event-summary text-base mb-4" style={{ color: '#6c757d' }}>{event.summary}</p>
                    <div className="event-tags flex flex-wrap gap-2 text-xs">
                      {event.tags.map(tag => (
                        <span key={tag} className="tag px-2 py-1 rounded-full" style={{ background: '#e9ecef', color: '#1161ad' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => {
                setFutureEventsIndex(prev => {
                  const total = futureEvents.length;
                  const next = prev + futureEventsPerPage;
                  return next >= total ? 0 : next;
                });
              }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #1161ad 0%, #0570c6 100%)',
                color: 'white'
              }}
              aria-label="Next events"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform duration-200 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: Math.ceil(futureEvents.length / futureEventsPerPage) }).map((_, index) => {
                const isActive = Math.floor(futureEventsIndex / futureEventsPerPage) === index;
                return (
                  <button
                    key={index}
                    onClick={() => setFutureEventsIndex(index * futureEventsPerPage)}
                    className={`transition-all duration-300 rounded-full ${isActive ? 'w-8 h-3' : 'w-3 h-3 hover:scale-125'
                      }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, #1161ad 0%, #0570c6 100%)'
                        : '#e2e8f0'
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-8" onClick={() => setLightbox(null)}>
          <div className="bg-white rounded-2xl overflow-hidden relative max-w-lg w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
              style={{
                background: 'linear-gradient(135deg, rgba(17, 97, 173, 0.9) 0%, rgba(5, 112, 198, 0.9) 100%)',
                boxShadow: '0 4px 20px rgba(17, 97, 173, 0.4)'
              }}
              onClick={() => setLightbox(null)}
            >
              <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={lightbox.images ? lightbox.images[currentImageIndex] : lightbox.img}
                  alt={lightbox.title}
                  className="w-full h-full transition-all duration-700 ease-in-out transform hover:scale-105"
                  style={{
                    objectFit: 'contain',
                    imageRendering: 'crisp-edges',
                    background: '#111',
                  }}
                />

                {/* Premium Navigation Arrows */}
                {lightbox.images && lightbox.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(17, 97, 173, 0.9) 0%, rgba(5, 112, 198, 0.9) 100%)',
                        boxShadow: '0 8px 32px rgba(17, 97, 173, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                      onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? lightbox.images.length - 1 : currentImageIndex - 1)}
                    >
                      <svg className="w-7 h-7 text-white transform transition-transform group-hover:-translate-x-1 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(17, 97, 173, 0.9) 0%, rgba(5, 112, 198, 0.9) 100%)',
                        boxShadow: '0 8px 32px rgba(17, 97, 173, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                      onClick={() => setCurrentImageIndex(currentImageIndex === lightbox.images.length - 1 ? 0 : currentImageIndex + 1)}
                    >
                      <svg className="w-7 h-7 text-white transform transition-transform group-hover:translate-x-1 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Enhanced Image Counter */}
                {lightbox.images && lightbox.images.length > 1 && (
                  <div
                    className="absolute top-6 left-6 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(17, 97, 173, 0.8) 0%, rgba(5, 112, 198, 0.8) 100%)',
                      boxShadow: '0 4px 20px rgba(17, 97, 173, 0.3)'
                    }}
                  >
                    <span className="font-bold">{currentImageIndex + 1}</span>
                    <span className="opacity-80 mx-1">/</span>
                    <span className="opacity-80">{lightbox.images.length}</span>
                  </div>
                )}

                {/* Progress Bar */}
                {lightbox.images && lightbox.images.length > 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20">
                    <div
                      className="h-full transition-all duration-700 ease-out"
                      style={{
                        width: `${((currentImageIndex + 1) / lightbox.images.length) * 100}%`,
                        background: 'linear-gradient(90deg, #1161ad 0%, #0570c6 100%)',
                        boxShadow: '0 0 10px rgba(17, 97, 173, 0.6)'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#1161ad' }}>{lightbox.title}</h3>
              <ul className="list-disc pl-6 text-base" style={{ color: '#333' }}>
                {lightbox.details.map((detail, idx) => (
                  <li key={idx} className="mb-1">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f9 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1161ad', letterSpacing: '-0.02em' }}>Event Gallery</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-16 rounded-full" style={{ background: '#0570c6' }}></div>
              <div className="h-2 w-8 rounded-full mx-3" style={{ background: '#1161ad' }}></div>
              <div className="h-1 w-16 rounded-full" style={{ background: '#0570c6' }}></div>
            </div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#6c757d' }}>
              Experience the energy and innovation of federal IT leadership through our comprehensive event gallery,
              showcasing cutting-edge technology solutions and meaningful connections.
            </p>
          </div>

          <div className="relative max-w-[90rem] mx-auto">
            {/* Gallery Container */}
            <div
              className="overflow-hidden rounded-3xl p-12"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                boxShadow: '0 25px 80px rgba(17, 97, 173, 0.15), 0 0 0 1px rgba(17, 97, 173, 0.05)'
              }}
            >
              <div className={`grid gap-10 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'}`}>
                {galleryImages.slice(currentGalleryIndex, currentGalleryIndex + galleryItemsPerPage).map((image, index) => (
                  <div key={image.id} className="relative group overflow-hidden rounded-2xl">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
                        style={{
                          imageRendering: '-webkit-optimize-contrast',
                          backfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                          filter: 'brightness(1.02) contrast(1.05) saturate(1.1)',
                          WebkitBackfaceVisibility: 'hidden',
                          WebkitTransform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Elegant Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                          {/* Decorative Line */}
                          <div className="w-12 h-1 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                            style={{ background: '#0570c6' }}></div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Navigation Arrows */}
            <button
              onClick={prevGallerySlide}
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group shadow-2xl cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #1161ad 0%, #0570c6 100%)',
                color: 'white'
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(17, 97, 173, 0.4)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              <svg className="w-8 h-8 transform group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextGallerySlide}
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #1161ad 0%, #0570c6 100%)',
                color: 'white'
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(17, 97, 173, 0.4)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              <svg className="w-8 h-8 transform group-hover:translate-x-0.5 transition-transform duration-200 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Elegant Progress Indicators */}
            <div className="flex justify-center mt-12 space-x-4">
              {Array.from({ length: Math.ceil(galleryImages.length / galleryItemsPerPage) }).map((_, index) => {
                const startIndex = index * galleryItemsPerPage;
                const isActive = Math.floor(currentGalleryIndex / galleryItemsPerPage) === index;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      const maxStartIndex = Math.max(0, galleryImages.length - 3);
                      const targetIndex = Math.min(startIndex, maxStartIndex);
                      setCurrentGalleryIndex(targetIndex);
                    }}
                    className={`relative transition-all duration-400 hover:scale-125 ${isActive
                      ? 'w-12 h-4'
                      : 'w-4 h-4 hover:w-8'
                      } rounded-full overflow-hidden`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, #1161ad 0%, #0570c6 100%)'
                        : '#e2e8f0'
                    }}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
                          animation: 'shimmer 2s infinite'
                        }}></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Add shimmer animation */}
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </section>

      {/* Reach Out Section */}
      <section className="py-16" style={{ background: '#f8f9fa' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Know Our Next Marketing Event?</h2>
          <span className="block w-20 h-1 mx-auto mt-4" style={{ background: '#1161ad' }}></span>
          <br />

          <p className="max-w-xl mx-auto mb-8" style={{ color: '#6c757d' }}>Be the first to know about upcoming federal IT conferences, partner summits, and exclusive OEM briefings.</p>
          <form className="max-w-md mx-auto text-left" onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 border rounded-lg" style={{ borderColor: '#dee2e6' }} required />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 border rounded-lg" style={{ borderColor: '#dee2e6' }} required />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="agency" className="block mb-2 font-semibold">Agency / Company</label>
              <input type="text" id="agency" className="w-full px-4 py-3 border rounded-lg" style={{ borderColor: '#dee2e6' }} />
            </div>
            <button type="submit" className="btn w-full py-3 rounded-full font-semibold transition hover:scale-105 cursor-pointer" style={{ background: '#1161ad', color: 'white' }}>Notify Me of Next Event</button>
          </form>
        </div>
      </section>
    </div>
  );
}