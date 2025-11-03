import React, { useState } from 'react';

const Careers = () => {
    const [expandedJob, setExpandedJob] = useState(null);

    // Job listings data with full descriptions
    const jobListings = [
        {
            title: "Sales Executive",
            color: "bg-cyan-400",
            location: "Better Direct – Tempe, AZ",
            company: "Better Direct LLC – A leading provider of innovative technology solutions serving government and commercial clients nationwide.",
            description: [
                "Job description",
                "",
                "The Inside Sales Executive position is responsible for the full cycle, B2B, sales process in regard to Federal Sales. This includes prospecting new leads, cold calling potential clients, and presenting our products and services to clients. This position is an onsite role at our office located conveniently in Tempe, AZ.",
                "",
                "Our Inside Sales Executives are innovators who are not afraid of overcoming challenges and quickly creating new sales opportunities. We all share a genuine excitement for collaborative success!"
            ],
            responsibilities: [
                "Develop and close new business deals via phone, online collaboration tools, and/or in-person meetings.",
                "Be confident in identifying potential opportunities and build a quote to submit through federal contracts.",
                "Looking for a candidate who is responsible for building positive relationships with clients by providing excellent customer service.",
                "Identify and generate new business by cross-selling additional products.",
                "Demonstrate superior communication skills to maintain relationships with account holders and manage multiple accounts at the same time.",
                "As a federal Sales Account Executive, you must be proactive at dealing with issues and concerns, have attention to detail, and must maintain an active communication line with fellow sales account executives for an efficient and smooth workflow.",
                "Confident in handling executive accounts, prioritizing client satisfaction and sales growth.",
                "Manage and maintain the velocity of all deals through the pipeline.",
                "Persistent follow-up: leverage all gathered intel, provided outreach tools, and strategic approaches to ensure appointments are set, held, and sold.",
                "Achieve and exceed yearly quota goals.",
                "Understanding of data confidentiality principles is compulsory and with this the company will rely on you to have accurate updated data this is easily accessible through the digital database."
            ],
            Requirements: [
                "Demonstrated federal sales skills and a consistent track record of exceeding quota from existing customers and new business.",
                "A natural ability to generate positive relationships with both customers and prospects.",
                "Ability to cold call into a large number of accounts to create a pipeline with qualified opportunities.",
                "Proficiency with standard corporate productivity tools (MS Office, email, etc.) & Microsoft Dynamics proficiency is a plus.",
                "Excellent research abilities.",
                "Coachable, reliable, self-motivated, and able to work independently and as part of a team.",
                "Please complete the form."
            ],
            jobType: "Full-time",
            workLocation: "In person"
        },
        {
            title: "Systems Engineer",
            color: "bg-blue-700",
            location: "Better Direct – Tempe, AZ",
            company: "Better Direct LLC – A leading provider of technology solutions, specializing in enterprise infrastructure and government systems integration.",
            description: [
                "Job description:",
                "",
                "We are seeking a detail-oriented and highly motivated Systems Engineer to join our team. The ideal candidate will have at least 2 years of experience in system design, integration, and troubleshooting. This role involves working closely with cross-functional teams to ensure the smooth operation of IT systems, network infrastructure, and software applications. The Systems Engineer will play a key role in maintaining system performance, security, and reliability."
            ],
            responsibilities: [
                "Design, implement, and maintain IT systems, ensuring high availability and performance.",
                "Analyze, troubleshoot, and resolve system issues related to hardware, software, and networking.",
                "Assist in system integrations, upgrades, and migrations.",
                "Monitor system performance and implement improvements to optimize efficiency.",
                "Develop and maintain system documentation, including network diagrams, standard operating procedures, and technical specifications.",
                "Collaborate with software developers, network engineers, and security teams to enhance system functionality.",
                "Perform regular system maintenance, patches, and updates to ensure security compliance.",
                "Provide technical support and training to end users as needed.",
                "Stay up to date with emerging technologies and industry best practices."
            ],
            requiredQualifications: [
                "Bachelor's degree in Computer Science, Information Technology, or a related field (or equivalent experience).",
                "2+ years of experience in systems engineering, IT support, or related roles.",
                "Strong understanding of operating systems (Windows, Linux) and networking principles (TCP/IP, DNS, DHCP, VPNs).",
                "Active Cisco Certified Network Associate (CCNA) certification.",
                "Experience with cloud platforms such as AWS, Azure, or Google Cloud is a plus.",
                "Familiarity with virtualization technologies (VMware, Hyper-V) and containerization (Docker, Kubernetes) is desirable.",
                "Hands-on experience with system monitoring tools and scripting languages (PowerShell, Python, Bash).",
                "Knowledge of cybersecurity best practices and compliance standards.",
                "Strong troubleshooting, problem-solving, and communication skills.",
                "Ability to work independently and collaboratively in a fast-paced environment."
            ],
            preferredQualifications: [
                "Certifications such as CompTIA Security+, Microsoft Certified: Azure Administrator Associate, or AWS Certified Solutions Architect.",
                "Experience with IT service management (ITSM) tools like ServiceNow or Jira.",
                "Background in automation and configuration management tools (Ansible, Puppet, Terraform)."
            ],
            coreCompetencies: [
                "Systems Architecture and Design: Hands-on experience with physical server environments configured for high availability, infrastructure redundancy, and scalable design is required.",
                "Advanced Networking Fundamentals: While a CCNA provides foundational knowledge, this role demands a deeper, practical understanding of networking concepts that go beyond the certification scope.",
                "Virtualized Infrastructure: Familiarity with cluster-based designs, virtual machines, and storage replication strategies across nodes is crucial—especially in support of disaster recovery planning and failover handling.",
                "Core IT Systems Support: Proficiency in Active Directory administration, logical IT troubleshooting, and systems-level problem solving is expected. The candidate must be capable of identifying root causes and resolving issues independently—not necessarily with advanced methods, but with a clear understanding of underlying systems."
            ],
            jobType: "Full-time",
            workLocation: "In person"
        },
        {
            title: "Program Manager",
            color: "bg-cyan-400",
            location: "Better Direct – Tempe, AZ",
            company: "Better Direct LLC – A leading provider of innovative technology solutions serving government and commercial clients nationwide.",
            description: [
                "Job description:",
                "",
                "We are seeking a highly motivated and experienced Program Manager to oversee and coordinate various projects within our organization. The ideal candidate will possess strong leadership skills and a solid understanding of IT contract, project planning, and program management principles. This role requires a strategic thinker who can effectively manage multiple projects, ensuring they align with organizational goals while maximizing efficiency and effectiveness."
            ],
            responsibilities: [
                "Lead the planning and implementation of program initiatives, ensuring alignment with organizational objectives.",
                "Oversee project portfolio management, prioritizing projects based on strategic importance and resource availability.",
                "Conduct requirements gathering to define project scope and objectives, ensuring stakeholder needs are met.",
                "Supervise project teams, providing guidance and support to ensure successful project execution.",
                "Utilize data analysis skills to assess project performance and identify areas for improvement.",
                "Develop and maintain content management systems to streamline project documentation and communication.",
                "Create process mapping to visualize workflows and enhance operational efficiency.",
                "Facilitate regular meetings with stakeholders to provide updates on project progress and address any concerns."
            ],
            qualifications: [
                "Proven experience in program management or a related field, with a strong understanding of IT infrastructure.",
                "Demonstrated expertise in project planning, including the ability to manage timelines, budgets, and resources effectively.",
                "Strong data analysis skills to interpret complex information and drive informed decision-making.",
                "Familiarity with content management systems is preferred.",
                "Excellent leadership abilities with a track record of supervising diverse teams.",
                "Proficient in requirements gathering techniques to ensure comprehensive understanding of project needs.",
                "Experience in project portfolio management is highly desirable.",
                "Strong process mapping skills to enhance workflow efficiency.",
                "If you are passionate about driving projects to success while fostering a collaborative team environment, we encourage you to apply for this exciting opportunity as a Program Manager."
            ],
            jobType: "Full-time",
            compensation: "Bonus opportunities",
            schedule: [
                "8 hour shift",
                "Monday to Friday"
            ],
            commute: "Tempe, AZ 85288 (Required)",
            relocate: "Tempe, AZ 85288: Relocate before starting work (Required)",
            workLocation: "In person"
        },
        {
            title: "Fiber Optic Technician",
            color: "bg-blue-700",
            location: "Better Direct – Tempe, AZ",
            company: "We are Better Direct, a leader in Value-Added Resell IT services, hardware, and software located in Tempe, AZ. We enjoy serving all 50 states and US Federal offices abroad. We are seeking a skilled and eager Fiber Optic Technician to join our team.",
            description: [
                "Position Summary:",
                "",
                "The Fiber Optic Technician will be responsible for installing, maintaining, troubleshooting, and repairing fiber optic cable systems at government facilities. This position requires working onsite at secure government locations, ensuring reliable high-speed data transmission for mission-critical operations. The technician must adhere to federal regulations, security protocols, and industry best practices while maintaining classified and sensitive network infrastructures."
            ],
            responsibilities: [
                "Install, terminate, splice, and test fiber optic cables in secure government facilities.",
                "Conduct fiber optic testing using Optical Time-Domain Reflectometers (OTDR), light meters, and other specialized equipment.",
                "Troubleshoot and repair fiber optic networks to resolve connectivity and performance issues.",
                "Perform fusion splicing and mechanical splicing for fiber optic cables in compliance with government standards.",
                "Maintain detailed documentation of installations, maintenance, and repairs following federal compliance guidelines.",
                "Read and interpret government network schematics, blueprints, and technical diagrams.",
                "Work closely with government IT and network teams to ensure optimal fiber optic system performance.",
                "Ensure compliance with federal regulations, including NIST, FISMA, and other cybersecurity policies.",
                "Follow all security clearance requirements when accessing restricted areas or handling classified network components.",
                "Operate and maintain fiber optic tools, test equipment, and vehicles as required.",
                "Adhere to OSHA and government-specific safety standards for working in various environments."
            ],
            requiredQualifications: [
                "U.S. Citizenship is required due to government security clearance requirements.",
                "Active Secret or Top Secret security clearance (or ability to obtain clearance).",
                "High school diploma or GED required; Associate's degree or technical certification preferred.",
                "3+ years of experience in fiber optic installation, splicing, and troubleshooting.",
                "In-depth knowledge of fiber optic principles, structured cabling, and networking for government systems.",
                "Experience working in secure or classified environments with restricted access protocols.",
                "Proficiency with OTDR, fusion splicers, power meters, and other fiber optic tools.",
                "Strong troubleshooting skills and ability to work independently or as part of a team.",
                "Strong documentation skills for compliance with government policies.",
                "Ability to work in high-security environments, including underground or aerial installations.",
                "Must be able to lift and carry equipment up to 50 lbs and work in confined spaces.",
                "Valid driver's license and ability to travel to multiple government sites as needed."
            ],
            certificationRequirements: [
                "To be a qualified Fiber Optic Technician in a government environment, industry-recognized certifications are required or preferred, such as:",
                "",
                "Certified Fiber Optic Technician (CFOT) – Fiber Optic Association (FOA) [Required]",
                "Covers fiber optic installation, splicing, and testing fundamentals.",
                "Fiber Optic Installer (FOI) – Electronics Technicians Association (ETA) [Preferred]",
                "Focuses on fiber optic installation best practices for government and enterprise networks.",
                "Fiber Optic Technician (FOT) – Electronics Technicians Association (ETA) [Preferred]",
                "Advanced training in troubleshooting and maintaining government fiber optic networks.",
                "Certified Fiber Optic Specialist (CFOS) – Fiber Optic Association (FOA) [Preferred]",
                "Specialties include CFOS/S (Splicing) and CFOS/T (Testing).",
                "BICSI Installer (INST1/INST2) or RCDD (Registered Communications Distribution Designer) [Preferred]",
                "Highly valuable for working in secure federal installations.",
                "OSHA 30-Hour Construction Safety Certification [Preferred]",
                "Ensures compliance with workplace safety regulations.",
                "Department of Defense (DoD) Information Assurance Certification (e.g., Security+ if working with classified networks) [May Be Required]",
                "Necessary for handling government IT and fiber optic infrastructure."
            ],
            workEnvironment: [
                "Work Environment & Security Considerations:",
                "",
                "Work primarily in government-secured locations, including military bases, federal buildings, and defense contractor sites.",
                "Must comply with all federal security protocols and undergo background checks.",
                "Some assignments may require working in classified or high-security areas.",
                "Ability to work in various environments, including outdoor, underground, and high-elevation areas.",
                "Must be willing to work flexible hours, including nights and weekends, as required by government contracts if required."
            ],
            jobType: "Full-time",
            workLocation: "In person"
        },
        {
            title: "Audio Visual Installation Specialist",
            color: "bg-cyan-400",
            location: "Better Direct – Tempe, AZ",
            clearance: "U.S. Citizen (required)",
            travel: "Required (domestic travel to customer sites as needed)",
            company: "Better Direct, headquartered in Tempe, Arizona, is a trusted IT and technology solutions provider serving government and commercial clients nationwide. We deliver advanced hardware, software, and professional services with a strong commitment to quality, compliance, and customer satisfaction.",
            description: [
                "Position Summary:",
                "",
                "The Audio Visual Installation Specialist will be responsible for the installation, configuration, and support of AV solutions at client sites. This role requires technical expertise in audio-visual systems, strong problem-solving skills, and the ability to travel to customer locations. The ideal candidate is detail-oriented, hands-on, and committed to providing an excellent customer experience."
            ],
            responsibilities: [
                "Set up and configure AV systems including projectors, displays, speakers, radios, and control systems.",
                "Run, terminate, and test AV cabling (HDMI, VGA, Cat6, etc.).",
                "Collaborate with clients to understand and meet custom AV setup requirements.",
                "Provide post-installation support, troubleshooting, and system adjustments.",
                "Ensure installations meet quality standards, safety requirements, and customer expectations.",
                "Maintain accurate documentation of installation work and configurations.",
                "Represent Better Direct professionally during on-site customer engagements."
            ],
            qualifications: [
                "U.S. Citizen (required).",
                "High school diploma or equivalent; technical certifications or trade school training preferred.",
                "2+ years of experience in AV installation, integration, or related field.",
                "Hands-on experience with AV hardware, cabling, and control systems.",
                "Ability to read technical diagrams and follow installation plans.",
                "Strong troubleshooting, communication, and customer service skills.",
                "Ability to travel domestically to customer sites as needed.",
                "Must be able to lift and install equipment (up to 50 lbs) and work in varied physical environments."
            ],
            preferredQualifications: [
                "Industry certifications such as CTS (Certified Technology Specialist), OSHA safety training, or manufacturer-specific AV certifications.",
                "Experience working with government or enterprise clients.",
                "Familiarity with networking basics and AV-over-IP systems."
            ],
            jobType: "Full-time",
            workLocation: "In person"
        },
        {
            title: "Software Developer",
            color: "bg-blue-700",
            location: "Better Direct – Tempe, AZ",
            company: "We are Better Direct, a leader in Value-Added Resell IT services, hardware, and software located in Tempe, AZ. We enjoy serving all 50 states and US Federal offices abroad. We are seeking a skilled and eager Software Developer to join our team.",
            description: [
                "Job description:",
                "",
                "We are Better Direct, a leader in Value-Added Resell IT services, hardware, and software located in Tempe, AZ. We enjoy serving all 50 states and US Federal offices abroad. We are seeking a skilled and eager Software Developer to join our team. The ideal candidate will have a strong background in JavaScript, CSS, and Python, possess excellent problem-solving skills and be willing to work well with a team. Pay is depending on experience. If this sounds like you, we encourage you to apply today!"
            ],
            responsibilities: [
                "Collaborating with management and departments to identify the need to develop high-quality Customer Relationship Management (CRM) software.",
                "Participating in the design and architecture process, contributing ideas and solutions to technical challenges, and ensuring that software designs align with requirements.",
                "Writing and executing unit tests, conducting code reviews, debugging issues, and ensuring that software is robust and free from defects.",
                "Troubleshooting, maintaining, and improving existing software.",
                "Compiling and assessing user feedback to improve software performance."
            ],
            qualifications: [
                "Bachelor's degree in Computer Science, Computer Engineering, or related field.",
                "3+ years of overall software development experience.",
                "Full-stack experience with JavaScript, CSS, and Python.",
                "Strong organizational and time-management skills.",
                "Excellent written and verbal communication skills.",
                "Willingness to learn how to use existing software tools.",
                "Desire to lead and collaborate.",
                "Strong problem-solving skills and ability to research, troubleshoot, and logically determine solutions.",
                "Ability to understand and translate business data into technical designs.",
                "Experience with building and troubleshooting IT system hardware."
            ],
            jobType: "Full-time",
            workLocation: "In person"
        },
        {
            title: "Associate Developer",
            color: "bg-cyan-400",
            location: "Better Direct – Tempe, AZ",
            travel: "Required (domestic travel to customer sites as needed)",
            company: "Better Direct, headquartered in Tempe, Arizona, is a trusted IT and technology solutions provider serving government and commercial clients nationwide. We deliver advanced hardware, software, and professional services with a strong commitment to quality, compliance, and customer satisfaction.",
            description: [
                "Position Summary:",
                "",
                "We are seeking a detail-oriented and eager Associate Software Developer to join our growing development team in Tempe, Arizona. This is an excellent opportunity for an early-career developer with at least 2 years of hands-on experience to build their skills, contribute to real-world projects, and grow within a supportive and collaborative environment.",
                "",
                "You will assist in the development, testing, and maintenance of web and backend applications, while learning from experienced team members and contributing to continuous improvement efforts."
            ],
            responsibilities: [
                "Assist in the design, development, testing, and deployment of software applications.",
                "Support integration of APIs and third-party services.",
                "Collaborate with team members to resolve bugs, optimize performance, and implement new features.",
                "Write clean, maintainable code with guidance from senior developers.",
                "Participate in code reviews and team development processes.",
                "Document code, technical procedures, and user guides as needed.",
                "Learn and apply best practices in software engineering and DevOps workflows."
            ],
            requiredQualifications: [
                "At least 2 years of professional software development experience or equivalent project-based work on MERN Stack.",
                "Mandatory work/ project experience in programming languages such as JavaScript (Node.js, React), Python.",
                "Experience of web development frameworks (e.g., Express.js, Django, FastAPi, Flask).",
                "Understanding of web scraping libraries such as Requests, Selenium and BeautifulSoup.",
                "Basic experience with databases (e.g., MongoDB, and MySQL).",
                "Exposure to RESTful APIs, OAuth and HTTP-based services.",
                "Version control experience, ideally with Git and Github.",
                "Experience in deploying web application either on local server or cloud services (e.g., AWS, Azure, GCP).",
                "Strong desire to learn, improve, and collaborate effectively with others.",
                "Problem-solving mindset and attention to detail."
            ],
            preferredQualifications: [
                "Basic knowledge of Docker or containerized applications.",
                "Knowledge of working with Linux.",
                "Knowledge of working with Tailwind CSS, React Components.",
                "Exposure to CI/CD pipelines and automated testing.",
                "Experience working in an Agile development environment.",
                "Associate's or Bachelor's degree in Computer Science or related field (or equivalent experience)"
            ],
            jobType: "Full-time",
            workLocation: "In person"
        },
        {
            title: "Telecommunications Technician (Contractor / 1099)",
            color: "bg-blue-700",
            location: "Tempe, AZ",
            employmentType: "Contractor / 1099 (as-needed basis; potential for full-time employment)",
            company: "Better Direct LLC – A leading provider of innovative technology solutions, empowering organizations to transform how they manage and deliver critical services in government and commercial sectors.",
            description: [
                "Overview:",
                "",
                "Join Better Direct LLC as a Telecommunications Technician and play a pivotal role in delivering reliable, high-performance telecommunications solutions. This role involves installing, maintaining, and troubleshooting advanced telecommunications systems to ensure seamless connectivity across diverse environments, including government facilities, commercial sites, and enterprise data centers. You'll work with cutting-edge technologies and collaborate with cross-functional teams to support mission-critical infrastructure."
            ],
            responsibilities: [
                "Install, configure, and maintain analog and digital telecommunications systems, including punch-down blocks, cross-connects, and PBX setups for voice and data networks.",
                "Deploy and troubleshoot satellite communications systems, including antenna alignment, signal optimization, and equipment configuration for robust connectivity.",
                "Diagnose and resolve complex telecom signal issues using industry-standard tools to ensure minimal downtime and optimal system performance.",
                "Perform routine maintenance, upgrades, and testing of telecom infrastructure to meet service level agreements (SLAs) and client requirements.",
                "Collaborate with project managers, engineers, and clients to assess system needs, plan installations, and ensure compliance with industry standards (e.g., TIA/EIA).",
                "Document installation processes, maintenance activities, and troubleshooting steps to maintain accurate records for audits and future reference.",
                "Adhere to safety protocols and ensure all work complies with local, state, and federal regulations, including OSHA and FCC standards.",
                "Provide on-site and remote technical support to clients, addressing urgent issues promptly to maintain system uptime."
            ],
            qualifications: [
                "Certifications:",
                "",
                "Basic Telecom Systems certification (e.g., BICSI Technician, ETA, or equivalent) required; advanced certifications (e.g., RCDD) preferred.",
                "Experience: Minimum of 3 years of hands-on experience in legacy and modern telecommunications environments, including VoIP, SIP trunking, and unified communications.",
                "Skills: Proficiency in configuring PBX systems (e.g., Avaya, Cisco, Mitel), troubleshooting signal degradation, and working with copper and fiber optic cabling.",
                "Technical Knowledge: Familiarity with test equipment (e.g., Fluke testers, spectrum analyzers) and industry standards for telecom installations.",
                "Soft Skills: Strong problem-solving abilities, excellent communication skills, and the ability to work independently or in a team under tight deadlines.",
                "Physical Requirements: Ability to lift up to 50 lbs, climb ladders, and work in confined spaces or at heights as needed for installations.",
                "Clearance: Eligibility for Secret or Top Secret clearance is a plus, given work with government clients."
            ],
            additionalInfo: "Why Join Better Direct LLC? At Better Direct LLC, you'll have the opportunity to work on impactful projects that drive technological innovation. We value our contractors' expertise and offer flexible work arrangements, competitive compensation, and the potential for full-time opportunities. Join a dynamic team dedicated to excellence and career growth.",
            jobType: "Contractor / 1099",
            workLocation: "In person"
        },
        {
            title: "Fiber Splicing Technician (Contractor / 1099)",
            color: "bg-cyan-400",
            location: "Tempe, AZ",
            employmentType: "Contractor / 1099 (as-needed basis; potential for full-time employment)",
            company: "Better Direct LLC – A leading provider of technology solutions, enabling organizations to transform and optimize their infrastructure for government and enterprise needs.",
            description: [
                "Overview",
                "",
                "As a Fiber Splicing Technician at Better Direct LLC, you will be at the forefront of building and maintaining high-speed fiber optic networks that power critical infrastructure for enterprise and government clients. This role requires precision, technical expertise, and a commitment to quality in splicing, testing, and troubleshooting fiber optic systems to ensure reliable connectivity and performance."
            ],
            responsibilities: [
                "Perform fusion and mechanical splicing of single-mode and multi-mode fiber optic cables with high precision to meet project specifications.",
                "Conduct end-to-end testing of fiber circuits using OTDR, power meters, and light source testers to verify signal integrity and performance.",
                "Route and install fiber optic cables through conduits, walls, ceilings, and enclosures, ensuring proper cable management and protection.",
                "Troubleshoot and repair fiber optic faults, including attenuation, breaks, and connector issues, to restore network functionality.",
                "Document splicing configurations, test results, and as-built drawings for project records and compliance with client requirements.",
                "Collaborate with project managers and engineers to plan fiber optic deployments and ensure alignment with industry standards (e.g., TIA-568, FOA).",
                "Maintain and calibrate splicing equipment and tools to ensure consistent quality and safety during installations.",
                "Adhere to safety protocols, including proper handling of fiber optic materials and compliance with OSHA and environmental regulations."
            ],
            qualifications: [
                "Certifications: Certified Fiber Optic Technician (CFOT) from FOA or ETA required; Fiber Splicing Certification (e.g., Corning, Sumitomo, or equivalent) preferred.",
                "Experience: Minimum of 2 years of hands-on experience in fiber optic splicing, termination, and testing in enterprise or telecom environments.",
                "Skills: Proficiency in fusion splicing, OTDR testing, and cable management; familiarity with fiber optic infrastructure design and best practices.",
                "Technical Knowledge: Understanding of single-mode and multi-mode fiber characteristics, connector types (e.g., SC, LC, ST), and industry standards.",
                "Soft Skills: Detail-oriented, strong analytical skills, and the ability to work effectively under pressure in fast-paced project environments.",
                "Physical Requirements: Comfortable working in confined spaces, at heights, or outdoors in varying weather conditions; ability to lift up to 50 lbs.",
                "Clearance: Eligibility for Secret or Top Secret clearance is advantageous for government projects."
            ],
            additionalInfo: "Why Join Better Direct LLC? Better Direct LLC offers a dynamic work environment where your skills in fiber optics will contribute to cutting-edge infrastructure projects. Enjoy competitive pay, flexible schedules, and the opportunity to grow into a full-time role with a company committed to technological excellence.",
            jobType: "Contractor / 1099",
            workLocation: "In person"
        },
        {
            title: "Software Architect (Contractor / 1099)",
            color: "bg-blue-700",
            location: "Tempe, AZ",
            employmentType: "Contractor / 1099 (as-needed basis; potential for full-time employment)",
            company: "Better Direct LLC – A leading provider of technology solutions, driving innovation in enterprise and cloud-based applications for government and commercial clients.",
            description: [
                "Overview",
                "",
                "As a Software Architect at Better Direct LLC, you will lead the design and implementation of scalable, secure, and high-performance software systems. This role involves architecting enterprise-grade applications, integrating cloud solutions, and collaborating with development teams to deliver innovative solutions that meet client needs in government and commercial sectors."
            ],
            responsibilities: [
                "Design and document scalable, resilient software architectures for enterprise applications, leveraging cloud platforms (AWS, Azure, GCP) and microservices.",
                "Lead technical discussions with stakeholders to define system requirements, ensuring alignment with business objectives and technical feasibility.",
                "Develop and implement strategies for system integration, API design, and data flow across distributed systems.",
                "Oversee the adoption of modern development practices, including CI/CD pipelines, containerization (Docker, Kubernetes), and DevOps methodologies.",
                "Conduct code reviews and provide technical guidance to development teams to ensure adherence to architectural standards and best practices.",
                "Evaluate and recommend emerging technologies, frameworks, and tools to enhance system performance and scalability.",
                "Mitigate technical risks by identifying potential bottlenecks and implementing solutions to ensure system reliability and security.",
                "Ensure compliance with industry standards (e.g., NIST, ISO) and client-specific requirements for security and performance."
            ],
            qualifications: [
                "Experience: 10+ years in software development, with 3–5 years in a software architecture role designing enterprise or cloud-based systems.",
                "Skills: Expertise in AWS, Azure, or GCP; proficiency in microservices, RESTful APIs, and distributed systems; familiarity with SDLC and Agile methodologies.",
                "Certifications: TOGAF, AWS Certified Solutions Architect – Professional, Azure Solutions Architect Expert, CISSP, or ITIL preferred.",
                "Technical Knowledge: Strong understanding of database design (SQL/NoSQL), containerization, and cybersecurity best practices.",
                "Soft Skills: Exceptional leadership, communication, and problem-solving skills; ability to translate complex technical concepts to non-technical stakeholders.",
                "Clearance: Active or eligible Secret or Top Secret clearance required for government projects."
            ],
            additionalInfo: "Why Join Better Direct LLC? At Better Direct LLC, you'll shape the future of enterprise technology while working on transformative projects. We offer competitive compensation, flexible work arrangements, and the opportunity to transition to a full-time role with a company dedicated to innovation and professional growth.",
            jobType: "Contractor / 1099",
            workLocation: "In person"
        },
        {
            title: "Infrastructure Technician (Contractor / 1099)",
            color: "bg-cyan-400",
            location: "Tempe, AZ",
            employmentType: "Contractor / 1099 (as-needed basis; potential for full-time employment)",
            company: "Better Direct LLC – A leading provider of technology solutions, delivering robust infrastructure for enterprise and government clients.",
            description: [
                "Overview",
                "",
                "As an Infrastructure Technician at Better Direct LLC, you will support the deployment and maintenance of critical IT infrastructure, including low-voltage cabling, data center buildouts, and structured wiring systems. This role is ideal for a detail-oriented professional with expertise in hardware installation and cabling, ensuring reliable and efficient network operations."
            ],
            responsibilities: [
                "Install, configure, and test low-voltage cabling (Cat5e, Cat6, Cat6a) for enterprise network connectivity in data centers and commercial facilities.",
                "Perform rack and stack operations for servers, switches, routers, and UPS units, ensuring proper alignment, grounding, and cable management.",
                "Conduct environmental assessments to optimize airflow, cooling, and power distribution in data center environments.",
                "Troubleshoot and repair cabling and hardware issues to maintain network uptime and performance.",
                "Label and document all cabling and equipment installations to ensure compliance with TIA/EIA standards and client specifications.",
                "Collaborate with network engineers and project managers to plan and execute infrastructure deployments on time and within budget.",
                "Adhere to safety standards, including OSHA regulations, and maintain a clean, organized work environment during installations.",
                "Support post-installation testing and validation using cable testers and other diagnostic tools to ensure system integrity."
            ],
            qualifications: [
                "Certifications: BICSI Installer/Technician, ETA, or equivalent low-voltage certification required; additional certifications (e.g., RCDD) preferred.",
                "Experience: 2+ years of experience in structured cabling, data center buildouts, or IT infrastructure projects.",
                "Skills: Proficiency in installing and terminating twisted-pair and coaxial cabling; familiarity with data center hardware (servers, switches, UPS).",
                "Technical Knowledge: Understanding of TIA/EIA standards, grounding techniques, and data center best practices.",
                "Soft Skills: Strong attention to detail, teamwork, and time management skills; ability to work in fast-paced, high-pressure environments.",
                "Physical Requirements: Ability to lift up to 75 lbs, work at heights, and navigate confined spaces for cabling installations.",
                "Clearance: Eligibility for Secret or Top Secret clearance is a plus for government contracts."
            ],
            additionalInfo: "Why Join Better Direct LLC? Better Direct LLC offers the chance to work on high-impact infrastructure projects with a focus on quality and innovation. Enjoy competitive pay, flexible schedules, and the potential for career advancement in a supportive, growth-oriented environment.",
            jobType: "Contractor / 1099",
            workLocation: "In person"
        },
        {
            title: "Application Developer (Contractor / 1099)",
            color: "bg-blue-700",
            location: "Tempe, AZ (hybrid or remote options available)",
            employmentType: "Contractor / 1099 (as-needed basis; potential for full-time employment)",
            company: "Better Direct LLC – A leading provider of technology solutions, delivering innovative applications for government and enterprise clients.",
            description: [
                "Overview",
                "",
                "As an Application Developer at Better Direct LLC, you will design, develop, and maintain web and software applications that power mission-critical services for government and enterprise clients. This role requires expertise in modern programming languages and Agile methodologies to deliver scalable, user-focused solutions."
            ],
            responsibilities: [
                "Develop and maintain web and software applications using Java, C#, Python, or similar languages, ensuring high performance and reliability.",
                "Collaborate with cross-functional teams to gather requirements, design solutions, and implement features that meet client needs.",
                "Write clean, maintainable, and well-documented code following best practices and coding standards.",
                "Participate in Agile/Scrum ceremonies, including sprint planning, daily stand-ups, and retrospectives, to ensure timely delivery of projects.",
                "Integrate applications with APIs, databases, and third-party services to support seamless functionality.",
                "Conduct unit testing, integration testing, and debugging to ensure software quality and performance.",
                "Stay updated on emerging technologies and frameworks to enhance application functionality and user experience.",
                "Ensure applications comply with security standards (e.g., OWASP) and accessibility requirements (e.g., WCAG)."
            ],
            qualifications: [
                "Experience: 2–8+ years in software development, depending on level (junior, mid, or senior).",
                "Skills: Proficiency in Java, C#, Python, or similar; experience with front-end frameworks (e.g., React, Angular) is a plus; familiarity with Agile/Scrum.",
                "Certifications: AWS Certified Developer, Azure Developer Associate, Oracle Java SE, or CSSLP preferred.",
                "Technical Knowledge: Understanding of RESTful APIs, database management (SQL/NoSQL), and version control systems (e.g., Git).",
                "Soft Skills: Strong problem-solving skills, effective communication, and the ability to work collaboratively in a team environment."
            ],
            jobType: "Contractor / 1099",
            workLocation: "Hybrid or remote options available"
        },
        {
            title: "Scrum Master (Contractor / 1099)",
            color: "bg-cyan-400",
            location: "Tempe, AZ",
            employmentType: "Contractor / 1099 (as-needed basis; potential for full-time employment)",
            company: "Better Direct LLC – A leading provider of technology solutions, fostering collaboration and innovation in software development.",
            description: [
                "Overview",
                "",
                "As a Scrum Master at Better Direct LLC, you will guide Agile teams to deliver high-quality software solutions for government and enterprise clients. This role focuses on facilitating Agile processes, removing impediments, and fostering a collaborative environment to ensure project success and team efficiency."
            ],
            responsibilities: [
                "Facilitate Agile ceremonies, including sprint planning, daily stand-ups, sprint reviews, and retrospectives, to drive team productivity.",
                "Coach team members and stakeholders on Agile principles, Scrum frameworks, and best practices to improve delivery and collaboration.",
                "Work with product owners to prioritize backlogs, refine user stories, and ensure clear, actionable requirements.",
                "Identify and remove impediments that hinder team progress, escalating issues to management when necessary.",
                "Track and report team performance metrics (e.g., velocity, burndown charts) using tools like Jira or Azure DevOps.",
                "Foster a culture of continuous improvement by encouraging feedback, experimentation, and process optimization.",
                "Collaborate with cross-functional teams to align project goals with organizational objectives and client expectations.",
                "Ensure compliance with Agile best practices and client-specific requirements for project delivery."
            ],
            qualifications: [
                "Experience: 2–8+ years in Agile/Scrum delivery, with at least 2 years as a Scrum Master or Agile coach.",
                "Skills: Expertise in Jira, Azure DevOps, or similar tools; strong facilitation and conflict resolution skills; knowledge of scaled Agile frameworks (e.g., SAFe).",
                "Certifications: Certified ScrumMaster (CSM), Professional Scrum Master (PSM), SAFe Scrum Master, or PMI-ACP required.",
                "Technical Knowledge: Familiarity with software development processes and tools; understanding of DevOps practices is a plus.",
                "Soft Skills: Exceptional leadership, communication, and interpersonal skills; ability to manage diverse teams and stakeholders.",
                "Clearance: Eligibility for Secret or Top Secret clearance is required for government projects."
            ],
            additionalInfo: "Why Join Better Direct LLC? Better Direct LLC empowers Scrum Masters to drive impactful projects in a collaborative, innovative environment. Enjoy competitive pay, flexible work arrangements, and the opportunity to grow into a full-time role with a company dedicated to Agile excellence.",
            jobType: "Contractor / 1099",
            workLocation: "In person"
        },
        {
            title: "Software Engineer (Contractor / 1099)",
            color: "bg-blue-700",
            location: "Tempe, AZ",
            employmentType: "Contractor / 1099 (as-needed basis; potential for full-time employment)",
            company: "Better Direct LLC – A leading provider of technology solutions, driving IT modernization and cybersecurity initiatives.",
            description: [
                "Overview",
                "",
                "As a Software Engineer at Better Direct LLC, you will design, develop, and deploy software systems that support IT modernization and cybersecurity initiatives for government and enterprise clients. This role offers the opportunity to work on cutting-edge technologies and contribute to impactful projects in a fast-paced, collaborative environment."
            ],
            responsibilities: [
                "Design and develop software systems using modern programming languages and frameworks, ensuring scalability and performance.",
                "Implement CI/CD pipelines to automate build, test, and deployment processes, leveraging tools like Jenkins, GitLab, or GitHub Actions.",
                "Collaborate with architects, developers, and stakeholders to translate requirements into technical solutions that meet client needs.",
                "Write clean, efficient, and well-documented code, adhering to coding standards and best practices.",
                "Perform unit, integration, and system testing to ensure software reliability and security.",
                "Optimize applications for performance, scalability, and maintainability in cloud environments (AWS, Azure, GCP).",
                "Stay current with industry trends and technologies to recommend improvements and innovations.",
                "Ensure compliance with cybersecurity standards (e.g., NIST, FISMA) and client-specific requirements."
            ],
            qualifications: [
                "Experience: 2–10+ years in software engineering, depending on level (entry, mid, or senior).",
                "Skills: Proficiency in SDLC, Git, CI/CD tools, and cloud development (AWS, Azure, GCP); experience with microservices or containerization is a plus.",
                "Certifications: AWS Certified Solutions Architect, CompTIA Security+, or CISSP preferred (senior level).",
                "Technical Knowledge: Strong understanding of programming languages (e.g., Java, Python, C++), databases, and APIs.",
                "Soft Skills: Analytical mindset, strong communication skills, and the ability to work collaboratively in Agile teams.",
                "Clearance: Active or eligible Secret or Top Secret clearance required for government projects."
            ],
            additionalInfo: "Why Join Better Direct LLC? Better Direct LLC offers a dynamic environment where you can build innovative software solutions that drive impact. Enjoy competitive compensation, flexible work options, and the opportunity for career advancement with a company committed to excellence.",
            jobType: "Contractor / 1099",
            workLocation: "In person"
        },
        {
            title: "Website Designer (Contractor / 1099)",
            color: "bg-cyan-400",
            location: "Tempe, AZ",
            employmentType: "Contractor / 1099 (as-needed basis; potential for full-time employment)",
            company: "Better Direct LLC – A leading provider of technology solutions, creating accessible and innovative digital experiences for government and enterprise clients.",
            description: [
                "Overview",
                "",
                "As a Website Designer at Better Direct LLC, you will create visually compelling, accessible, and responsive websites that meet the needs of government, federal, and enterprise clients. This role combines creativity and technical expertise to deliver user-focused digital experiences that adhere to strict accessibility and compliance standards."
            ],
            responsibilities: [
                "Design and develop responsive, user-centered websites using HTML, CSS, JavaScript, and design tools like Adobe Suite and Figma.",
                "Ensure websites comply with accessibility standards, including WCAG 2.1 and Section 508, to support diverse user needs.",
                "Collaborate with developers, content creators, and stakeholders to translate requirements into intuitive, visually appealing designs.",
                "Create wireframes, prototypes, and high-fidelity mockups to guide development and ensure alignment with client expectations.",
                "Optimize web designs for performance, cross-browser compatibility, and mobile responsiveness.",
                "Conduct usability testing and gather feedback to refine designs and improve user experience.",
                "Maintain brand consistency and adhere to client style guides across all digital assets.",
                "Stay updated on web design trends, tools, and technologies to deliver cutting-edge solutions."
            ],
            qualifications: [
                "Experience: 2–7+ years in web design with a focus on UX/UI; prior experience with government or DoD websites is highly preferred.",
                "Skills: Proficiency in Adobe Suite (Photoshop, Illustrator, XD), Figma, HTML/CSS, and JavaScript; knowledge of CMS platforms (e.g., WordPress, Drupal) is a plus.",
                "Certifications: Section 508 Trusted Tester, Adobe Certified Professional, or CPACC preferred.",
                "Technical Knowledge: Strong understanding of accessibility compliance (WCAG, Section 508), responsive design, and UX/UI best practices.",
                "Soft Skills: Creative problem-solving, strong attention to detail, and excellent communication skills to collaborate with diverse teams.",
                "Clearance: Active or eligible Secret or Top Secret clearance required for federal projects."
            ],
            additionalInfo: "Why Join Better Direct LLC? Better Direct LLC offers a creative and collaborative environment where you can design impactful digital experiences. Enjoy competitive pay, flexible work options, and the opportunity to grow into a full-time role with a company dedicated to innovation and accessibility.",
            jobType: "Contractor / 1099",
            workLocation: "In person"
        }
    ];

    // Team photos
    const teamPhotos = [
        { src: './assets/Careers/team-1.jpg', alt: 'Team Photo 1' },
        { src: './assets/Careers/team-2.jpg', alt: 'Team Photo 2' },
        { src: './assets/Careers/team-3.jpg', alt: 'Team Photo 3' },
        { src: './assets/Careers/team-4.jpg', alt: 'Team Photo 4' }
    ];

    const toggleJob = (index) => {
        setExpandedJob(expandedJob === index ? null : index);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-600 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-2xl px-8 md:px-12 py-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center">
                            Join a Team That Powers Possibility
                        </h1>
                    </div>
                </div>
            </section>

            {/* Job Listings Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
                        Teams & Open Roles
                    </h2>

                    <div className="space-y-4">
                        {jobListings.map((job, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                {/* Job Header - Clickable */}
                                <div className="flex items-center justify-between gap-4">
                                    {/* Job Title Card */}
                                    <button
                                        onClick={() => toggleJob(index)}
                                        className={`${job.color} text-white px-6 py-4 flex-1 flex items-center justify-between hover:opacity-90 transition-opacity`}
                                    >
                                        <span className="font-semibold text-lg text-left">{job.title}</span>
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </button>

                                    {/* Apply Now Button */}
                                    <a
                                        href="https://form.jotform.com/252595661537164"
                                        className="px-6 py-3 mr-4 border-2 border-cyan-400 text-cyan-400 font-medium rounded hover:bg-cyan-400 hover:text-white transition-all duration-300 whitespace-nowrap"
                                    >
                                        Apply Now
                                    </a>
                                </div>

                                {/* Expandable Content */}
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedJob === index ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className={`${job.color} text-white p-8`}>
                                        <h3 className="font-bold text-xl mb-4">Job description:</h3>
                                        {Array.isArray(job.description)
                                            ? job.description?.map((desc, i) => (
                                                <p key={i} className="mb-4 leading-relaxed">{desc}</p>
                                            ))
                                            : <p className="mb-6 leading-relaxed">{job.description}</p>
                                        }

                                        {/* Responsibilities */}
                                        {job.responsibilities && job.responsibilities.length > 0 && (
                                            <>
                                                <h3 className="font-bold text-xl mb-4">Responsibilities</h3>
                                                <ul className="list-disc list-inside space-y-2 mb-6">
                                                    {job.responsibilities.map((resp, i) => (
                                                        <li key={i} className="leading-relaxed">{resp}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                        {job.Requirements && job.Requirements.length > 0 && (
                                            <>
                                                <h3 className="font-bold text-xl mb-4">Requirements</h3>
                                                <ul className="list-disc list-inside space-y-2 mb-6">
                                                    {job.Requirements.map((req, i) => (
                                                        <li key={i} className="leading-relaxed">{req}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Required Qualifications */}
                                        {job.requiredQualifications && job.requiredQualifications.length > 0 && (
                                            <>
                                                <h3 className="font-bold text-xl mb-4">Required Qualifications</h3>
                                                <ul className="list-disc list-inside space-y-2 mb-6">
                                                    {job.requiredQualifications.map((qual, i) => (
                                                        <li key={i} className="leading-relaxed">{qual}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Preferred Qualifications */}
                                        {job.preferredQualifications && job.preferredQualifications.length > 0 && (
                                            <>
                                                <h3 className="font-bold text-xl mb-4">Preferred Qualifications</h3>
                                                <ul className="list-disc list-inside space-y-2 mb-6">
                                                    {job.preferredQualifications.map((qual, i) => (
                                                        <li key={i} className="leading-relaxed">{qual}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Core Competency Requirements */}
                                        {job.coreCompetencies && job.coreCompetencies.length > 0 && (
                                            <>
                                                <h3 className="font-bold text-xl mb-4">Core Competency Requirements</h3>
                                                <ul className="list-disc list-inside space-y-2 mb-6">
                                                    {job.coreCompetencies.map((comp, i) => (
                                                        <li key={i} className="leading-relaxed">{comp}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Qualifications */}
                                        {job.qualifications && job.qualifications.length > 0 && (
                                            <>
                                                <h3 className="font-bold text-xl mb-4">Qualifications</h3>
                                                <ul className="list-disc list-inside space-y-2 mb-6">
                                                    {job.qualifications.map((qual, i) => (
                                                        <li key={i} className="leading-relaxed">{qual}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Certification Requirements */}
                                        {job.certificationRequirements && job.certificationRequirements.length > 0 && (
                                            <>
                                                <h3 className="font-bold text-xl mb-4">Certification Requirements</h3>
                                                <ul className="list-disc list-inside space-y-2 mb-6">
                                                    {job.certificationRequirements.map((cert, i) => (
                                                        <li key={i} className="leading-relaxed">{cert}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Work Environment */}
                                        {job.workEnvironment && job.workEnvironment.length > 0 && (
                                            <>
                                                <h3 className="font-bold text-xl mb-4">Work Environment</h3>
                                                <ul className="list-disc list-inside space-y-2 mb-6">
                                                    {job.workEnvironment.map((env, i) => (
                                                        <li key={i} className="leading-relaxed">{env}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Additional Info */}
                                        {job.additionalInfo && (
                                            <p className="mb-6 leading-relaxed">{job.additionalInfo}</p>
                                        )}

                                        <div className="space-y-4 mt-6">
                                            {job.jobType && <p><strong>Job Type:</strong> {job.jobType}</p>}
                                            {job.compensation && (
                                                <>
                                                    <p className="font-bold">Compensation Package:</p>
                                                    <ul className="list-disc list-inside ml-4">
                                                        <li>{job.compensation}</li>
                                                    </ul>
                                                </>
                                            )}
                                            {job.schedule && job.schedule.length > 0 && (
                                                <>
                                                    <p className="font-bold">Schedule:</p>
                                                    <ul className="list-disc list-inside ml-4">
                                                        {job.schedule.map((sched, i) => (
                                                            <li key={i}>{sched}</li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}
                                            {job.commute && (
                                                <>
                                                    <p className="font-bold">Ability to Commute:</p>
                                                    <ul className="list-disc list-inside ml-4">
                                                        <li>{job.commute}</li>
                                                    </ul>
                                                </>
                                            )}
                                            {job.relocate && (
                                                <>
                                                    <p className="font-bold">Ability to Relocate:</p>
                                                    <ul className="list-disc list-inside ml-4">
                                                        <li>{job.relocate}</li>
                                                    </ul>
                                                </>
                                            )}
                                            {job.workLocation && (
                                                <p><strong>Work Location:</strong> {job.workLocation}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Photos Section */}
            <section className="bg-blue-600 py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-2xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {teamPhotos.map((photo, index) => (
                                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/300x300?text=Team+${index + 1}`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 text-white rounded-lg shadow-2xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Better Direct LLC – We're Hiring!
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed">
                            We're hiring! At Better Direct LLC, we value dedicated and talented professionals who want to make an impact. Please complete the form below.
                        </p>
                        <div className="text-right">
                            <a
                                href="https://form.jotform.com/252595661537164"
                                className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;