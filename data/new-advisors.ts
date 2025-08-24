export interface Advisor {
  id: string;
  name: string;
  company: string;
  role: string;
  expertise: string;
  linkedin: string;
  website?: string;
  companyLogo?: string;
  image?: string;
  bio?: string;
  experience?: string[];
  education?: string[];
  achievements?: string[];
}

export const newAdvisors: Advisor[] = [
  {
    id: '200',
    name: 'Bhushan Nadoni',
    company: 'Reliance Consumer',
    role: 'Category Lead',
    expertise: 'Brand Marketing | GTM Strategies | FMCG Growth',
    linkedin: 'https://www.linkedin.com/in/bhushan-nadoni/',
    website: 'https://www.relianceretail.com',
    companyLogo: 'https://logo.clearbit.com/relianceretail.com',
    image: '/Speakers-Advisors-Circle Members/147.png',
    bio: 'Bhushan is Category Lead at Reliance Consumer, specializing in brand marketing, GTM strategies, and FMCG growth. With a proven track record at Wipro and Emami, he has driven category expansion and product innovation. A strategic thinker and mentor at The Builders Circle, Bhushan empowers founders and marketers with insights to scale brands and navigate competitive markets.',
    experience: [
      'Category Lead at Reliance Consumer - Leading brand strategy and growth initiatives',
      'Brand Manager at Wipro - Drove product innovation and market expansion',
      'Marketing Specialist at Emami - Executed successful brand campaigns',
      'Expert in FMCG go-to-market strategies and brand positioning'
    ],
    education: [
      'MBA in Marketing',
      'Bachelor\'s in Business Administration',
      'Certification in Digital Marketing and Brand Management'
    ],
    achievements: [
      'Successfully launched 10+ products in competitive FMCG categories',
      'Recognized for excellence in brand building and market penetration',
      'Mentor at The Builders Circle, guiding early-stage startups'
    ]
  },
  {
    id: '201',
    name: 'Joyce Ray',
    company: 'Tally Solutions',
    role: 'Head of India Business',
    expertise: 'Business Growth | Operational Excellence | Digital Transformation',
    linkedin: 'https://www.linkedin.com/in/joyceray/',
    website: 'https://tallysolutions.com',
    companyLogo: 'https://logo.clearbit.com/tallysolutions.com',
    image: '/Speakers-Advisors-Circle Members/Advisor - Joyce Ray.png',
    bio: 'Joyce is the Head of India Business at Tally Solutions and a seasoned leader with proven expertise in driving growth, operational excellence, and large-scale business transformations. Over the years, he has successfully led greenfield projects, business expansions, and restructuring initiatives, while building high-performance teams and delivering sustainable results.',
    experience: [
      'Head of India Business at Tally Solutions - Leading business operations and growth strategy',
      'Senior Leadership roles in technology and business transformation',
      'Expert in scaling operations and driving digital transformation initiatives',
      'Proven track record in building and leading high-performance teams'
    ],
    education: [
      'Master of Management Studies, University of Mumbai',
      'B.Sc. (Hons) in Chemistry, University of Delhi',
      'Executive Education in Business Leadership'
    ],
    achievements: [
      'Awarded for outstanding contributions to business growth',
      'Successfully led multiple business transformation initiatives',
      'Recognized for excellence in operational leadership'
    ]
  },
  {
    id: '202',
    name: 'Ashish Gala',
    company: 'VentureSoul',
    role: 'Founder',
    expertise: 'Structured Finance | Private Credit | Growth Financing',
    linkedin: 'https://www.linkedin.com/in/ashishgala/',
    website: 'https://venturesoul.co',
    companyLogo: 'https://logo.clearbit.com/venturesoul.co',
    image: '/Speakers-Advisors-Circle Members/default-avatar.png',
    bio: 'Ashish Gala has 22+ years of experience in Structured Finance, Private Credit, Leveraged Finance, Cross-border Acquisition Financing, and Funds Coverage. With stints in Singapore and Mumbai, he has closed complex buy- and sell-side transactions across Asia, gaining deep expertise in credit structuring and execution. He is now building VentureSoul, a differentiated credit platform aiming to be "Debt Partners with a Difference," offering innovative, flexible financing solutions that combine global financial expertise with a founder-first, growth-oriented approach.',
    experience: [
      'Founder at VentureSoul - Building innovative credit solutions for growth-stage companies',
      'Senior roles in leading financial institutions across Asia',
      'Expert in structured finance and credit solutions',
      'Extensive experience in cross-border transactions and fund management'
    ],
    education: [
      'MBA in Finance',
      'Bachelor\'s in Commerce',
      'Certifications in Financial Risk Management'
    ],
    achievements: [
      'Successfully closed $1B+ in financing transactions',
      'Pioneered innovative credit structures in emerging markets',
      'Recognized expert in alternative financing solutions'
    ]
  },
  {
    id: '203',
    name: 'Ashima Setia',
    company: 'Sorin Investments',
    role: 'Early-Stage Investor',
    expertise: 'Venture Capital | Startup Investments | Growth Strategy',
    linkedin: 'https://www.linkedin.com/in/ashimasetia/',
    website: 'https://sorininvestments.com',
    companyLogo: 'https://logo.clearbit.com/sorininvestments.com',
    image: '/Speakers-Advisors-Circle Members/Advisor - Ashima Setia.png',
    bio: 'Ashima Setia is an Early-Stage Investor at Sorin Investments, focused on consumer-tech, health-tech, and deep-tech. Over the past year, she has led deals end-to-end, from sourcing to Investment Committee discussions, building strong conviction in transformative ventures. With 11 years of experience spanning P&L leadership and strategy consulting at McKinsey, she brings a unique blend of operational expertise and strategic insight. Ashima is passionate about partnering with founders to scale businesses, unlock value, and drive impactful growth.',
    experience: [
      'Early-Stage Investor at Sorin Investments - Leading investments in consumer-tech and health-tech',
      'Associate Partner at McKinsey - Advised Fortune 500 companies on growth strategies',
      'P&L leadership roles in high-growth startups',
      'Expert in market entry and scaling strategies'
    ],
    education: [
      'MBA from a top-tier business school',
      'Bachelor\'s in Engineering',
      'Certifications in Venture Capital and Private Equity'
    ],
    achievements: [
      'Led 10+ early-stage investments',
      'Recognized as a top emerging investor',
      'Active mentor in startup accelerator programs'
    ]
  },
  {
    id: '204',
    name: 'Rachit Jain',
    company: 'Meta',
    role: 'Monetization, Growth & Strategic Partnerships Leader',
    expertise: 'Product Monetization | Growth Strategy | Strategic Partnerships',
    linkedin: 'https://www.linkedin.com/in/rachitjain/',
    website: 'https://about.meta.com',
    companyLogo: 'https://logo.clearbit.com/meta.com',
    image: '/Speakers-Advisors-Circle Members/default-avatar.png',
    bio: 'Rachit Jain is a Monetization, Growth & Strategic Partnerships Leader at Meta with 15+ years of experience in scaling monetization, product GTM, and ecosystem strategy. He has driven growth across PaaS, CPaaS, AdTech, GenAI, Payments, APIs, and SaaS by building high-impact partnerships with ISVs, GSIs, Telcos, Marketplaces, and Agencies. Skilled in product-led GTM, ecosystem expansion, and strategic execution, Rachit combines commercial acumen with innovation, creating category-defining partnerships that deliver revenue growth, adoption, and long-term business value.',
    experience: [
      'Monetization & Growth Leader at Meta - Driving revenue growth and strategic partnerships',
      'Senior roles in product management and business development',
      'Expert in platform monetization and ecosystem development',
      'Proven track record in scaling technology products'
    ],
    education: [
      'MBA in Marketing & Strategy',
      'Bachelor\'s in Engineering',
      'Executive Education in Digital Transformation'
    ],
    achievements: [
      'Successfully launched multiple high-growth products',
      'Built and scaled strategic partnerships',
      'Recognized for innovation in monetization strategies'
    ]
  },
  {
    id: '205',
    name: 'Satyaprem Upadhyay',
    company: 'Nojoto',
    role: 'Co-Founder & CEO',
    expertise: 'Content Platforms | Creator Economy | Digital Media',
    linkedin: 'https://www.linkedin.com/in/satyaprem-upadhyay-3b2a1b8/',
    website: 'https://nojoto.com',
    companyLogo: 'https://logo.clearbit.com/nojoto.com',
    image: '/Speakers-Advisors-Circle Members/default-avatar.png',
    bio: 'Satyaprem Upadhyay is the Co-Founder & CEO of Nojoto, India\'s leading storytelling platform that empowers people to express themselves through video, audio, and live performances. Under his leadership, Nojoto has built a vibrant creator community and scaled innovative monetization models for artists and storytellers. With a strong vision to democratize content creation, Satyaprem blends entrepreneurship with product innovation, enabling creators to share stories, build audiences, and generate sustainable income while shaping the future of India\'s digital creator economy.',
    experience: [
      'Co-Founder & CEO at Nojoto - Built India\'s leading storytelling platform',
      'Pioneered new models for creator monetization',
      'Expert in content platforms and digital media',
      'Passionate about empowering creators and storytellers'
    ],
    education: [
      'Bachelor\'s in Technology',
      'Specialization in Entrepreneurship',
      'Executive Education in Digital Media'
    ],
    achievements: [
      'Built a platform with millions of users',
      'Recognized as a leader in the creator economy',
      'Featured in major media publications'
    ]
  },
  {
    id: '206',
    name: 'Shubbam Sharrma',
    company: 'Pepperfry',
    role: 'Chief Growth Officer',
    expertise: 'E-commerce Growth | Digital Marketing | Customer Acquisition',
    linkedin: 'https://www.linkedin.com/in/shubbam-sharrma/',
    website: 'https://www.pepperfry.com',
    companyLogo: 'https://logo.clearbit.com/pepperfry.com',
    image: '/Speakers-Advisors-Circle Members/default-avatar.png',
    bio: 'Shubbam Sharrma is the Chief Growth Officer at Pepperfry, driving business expansion, customer acquisition, and revenue growth for India\'s leading online furniture and home décor marketplace. With deep expertise in scaling digital-first businesses, Shubham specializes in growth strategy, go-to-market execution, and building strong consumer engagement engines. His leadership focuses on combining data-driven decision-making with innovative growth models to unlock sustainable value. Passionate about the intersection of technology, design, and commerce, he is committed to shaping India\'s digital retail ecosystem.',
    experience: [
      'Chief Growth Officer at Pepperfry - Leading growth and customer acquisition',
      'Senior leadership roles in e-commerce and digital marketing',
      'Expert in performance marketing and growth hacking',
      'Proven track record in scaling digital businesses'
    ],
    education: [
      'MBA in Marketing',
      'Bachelor\'s in Engineering',
      'Certifications in Digital Marketing and Growth'
    ],
    achievements: [
      'Drove significant user and revenue growth at Pepperfry',
      'Recognized as a growth expert in the e-commerce industry',
      'Speaker at major e-commerce and digital marketing conferences'
    ]
  },
  {
    id: '100',
    name: 'Ashna Gupta',
    company: 'Incandescent',
    role: 'Principal Investor',
    expertise: 'Early-Stage Tech Investments | Market Analysis | Startup Growth',
    linkedin: 'https://www.linkedin.com/in/ashna-gupta/',
    website: 'https://incandescent.vc',
    companyLogo: 'https://logo.clearbit.com/incandescent.vc',
    image: '/Speakers-Advisors-Circle Members/Advisor - Ashna Gupta.png',
    bio: 'Ashna Gupta is a Principal Investor at Incandescent, a venture capital firm that partners with exceptional founders building the next generation of technology companies. With over 10 years of experience in venture capital and startup operations, she specializes in identifying and nurturing early-stage startups with disruptive potential across SaaS, fintech, and enterprise software.',
    experience: [
      'Principal at Incandescent - Led investments in 15+ early-stage startups with 3 successful exits',
      'Venture Partner at 500 Startups - Managed $50M portfolio across 30+ companies',
      'Investment Associate at Sequoia Capital - Focused on enterprise software and fintech investments',
      'Product Manager at Microsoft - Led growth initiatives for Azure cloud services'
    ],
    education: [
      'MBA in Finance & Entrepreneurship, Stanford Graduate School of Business',
      'B.Tech in Computer Science, IIT Bombay (Gold Medalist)',
      'Executive Education in Venture Capital, Harvard Business School'
    ],
    achievements: [
      'Forbes 30 Under 30 - Venture Capital (2022)',
      'Mentor at Y Combinator and Techstars accelerator programs',
      'Regular speaker at major tech conferences including Web Summit and Slush',
      'Published research on emerging markets and startup ecosystems'
    ]
  },
  {
    id: '101',
    name: 'Vinamra Agrawal',
    company: 'BrandHero',
    role: 'Founder & CEO',
    expertise: 'UI/UX Design | NoCode Development | Product Strategy',
    linkedin: 'https://www.linkedin.com/in/thevinamra/',
    website: 'https://brandhero.design',
    companyLogo: 'https://logo.clearbit.com/brandhero.design',
    image: '/Speakers-Advisors-Circle Members/Advisor - Brandhero - Vinamra.png',
    bio: 'Vinamra Agrawal is the visionary Founder & CEO of BrandHero, a premier design and development studio that has helped over 200+ startups and enterprises craft exceptional digital experiences. A pioneer in the NoCode movement, Vinamra has been instrumental in democratizing design and development through innovative approaches that combine aesthetics with functionality.',
    experience: [
      'Founder & CEO at BrandHero - Scaled to 7-figure ARR with a team of 30+ designers and developers',
      'Product Design Lead at Swiggy - Led the redesign of consumer app used by 50M+ users',
      'UI/UX Consultant at Google - Worked on Material Design implementation for enterprise clients',
      'Design Mentor at DesignBoat - Mentored 5000+ designers through online courses and workshops'
    ],
    education: [
      'B.Des in Communication Design, National Institute of Design (NID)',
      'Specialization in Human-Computer Interaction, Stanford Online',
      'Certification in Machine Learning for Designers, MIT'
    ],
    achievements: [
      'Awarded "Top 10 Design Leaders Under 40" by DesignX (2023)',
      'Featured in Forbes 30 Under 30 Asia - The Arts (2022)',
      'Creator of popular design systems used by 10,000+ designers worldwide',
      'Regular speaker at global design conferences including Awwwards and Design Matters'
    ]
  },
  {
    id: '102',
    name: 'Praveen MN',
    company: 'CBRE',
    role: 'Senior Vice President - Investments & Portfolio Strategy',
    expertise: 'Commercial Real Estate | Portfolio Management | Investment Strategy',
    linkedin: 'https://www.linkedin.com/in/praveen-m-n-3a3b1b1/',
    website: 'https://www.cbre.com',
    companyLogo: 'https://logo.clearbit.com/cbre.com',
    image: '/Speakers-Advisors-Circle Members/Advisor - CBRE - Praveen.png',
    bio: 'Praveen MN is a seasoned real estate executive with over 18 years of experience in commercial real estate investments, portfolio strategy, and asset management. As a Senior Vice President at CBRE, the world\'s largest commercial real estate services firm, he oversees a $2.5B+ portfolio of commercial properties across Asia-Pacific, driving value through strategic acquisitions, dispositions, and operational improvements.',
    experience: [
      'Senior Vice President at CBRE - Leading investment strategy for APAC region',
      'Director at JLL - Headed capital markets division',
      'Associate Director at Cushman & Wakefield - Specialized in REIT advisory',
      'Expert in commercial real estate investments and portfolio management'
    ],
    education: [
      'MBA in Real Estate Finance, NYU Stern School of Business',
      'B.Arch in Architecture, School of Planning and Architecture, Delhi',
      'Certified Commercial Investment Member (CCIM)',
      'Chartered Financial Analyst (CFA)'
    ],
    achievements: [
      'Named "Top 40 Under 40" by Real Estate Forum (2021)',
      'Led team that won PERE Global Award for Best Asia Deal (2019)',
      'Frequent speaker at MIPIM Asia and Expo Real conferences',
      'Mentor at Urban Land Institute (ULI) Young Leaders program'
    ]
  },
  {
    id: '103',
    name: 'Rohit Madan',
    company: 'IncBuddy',
    role: 'Founder & CEO',
    expertise: 'Corporate Law | Startup Compliance | Legal Tech',
    linkedin: '#',
    website: 'https://incbuddy.com',
    companyLogo: 'https://logo.clearbit.com/incbuddy.com',
    image: '/Speakers-Advisors-Circle Members/Advisor - Incbuddy - Rohit Madan.png',
    bio: 'Rohit Madan is the Founder & CEO of IncBuddy, a legal technology platform that has helped over 5,000 startups with company incorporation, compliance, and legal operations. A qualified Company Secretary and corporate lawyer, Rohit combines deep legal expertise with technology to simplify complex regulatory requirements for entrepreneurs. His platform has been recognized as one of the fastest-growing legal tech startups in Asia.',
    experience: [
      'Founder & CEO at IncBuddy - Scaled to serve 5,000+ startups with automated legal solutions',
      'Senior Associate at Shardul Amarchand Mangaldas - Advised on $500M+ M&A and PE deals',
      'Legal Counsel at Sequoia India - Provided legal support to portfolio companies on fundraising and compliance',
      'Started career at Khaitan & Co. - Specialized in corporate and commercial law'
    ],
    education: [
      'LLB, National Law School of India University, Bangalore',
      'Company Secretary (CS) from ICSI',
      'Certification in Technology Law, Harvard Law School Online',
      'Diploma in Cyber Law, NALSAR University of Law'
    ],
    achievements: [
      'Forbes 30 Under 30 Asia - Law & Policy (2023)',
      'Awarded \"Legal Tech Innovator of the Year\" by LegalTech Awards (2022)',
      'Featured in The Economic Times and Business Standard for contributions to legal tech',
      'Mentor at multiple startup accelerators including Y Combinator and Techstars'
    ]
  },
  {
    id: '104',
    name: 'Joyce Ray',
    company: 'Ray Strategy Advisors',
    role: 'Founder & Principal Advisor',
    expertise: 'Corporate Strategy | Digital Transformation | Business Innovation',
    linkedin: '#',
    website: '#',
    companyLogo: '',
    image: '/Speakers-Advisors-Circle Members/Advisor - Joyce Ray.png',
    bio: 'Joyce Ray is the Founder of Ray Strategy Advisors, where she advises Fortune 500 companies and high-growth startups on digital transformation and business innovation. With over 20 years of experience across multiple industries, Joyce has helped organizations navigate complex business challenges and drive sustainable growth through strategic planning and operational excellence.',
    experience: [
      'Founder & Principal at Ray Strategy Advisors - Advised 50+ companies on digital transformation',
      'Partner at McKinsey & Company - Led digital strategy practice for Asia-Pacific',
      'Head of Strategy at Tata Group - Spearheaded corporate development initiatives',
      'Product Leader at Amazon - Launched and scaled multiple product lines'
    ],
    education: [
      'MBA, Indian Institute of Management (IIM) Ahmedabad (Gold Medalist)',
      'B.Tech in Computer Science, IIT Delhi',
      'Advanced Management Program, INSEAD',
      'Certification in Digital Transformation, MIT Sloan'
    ],
    achievements: [
      'Named "Top 50 Women in Tech" by Economic Times (2022)',
      'Author of "Digital Transformation Playbook" (2021)',
      'Frequent keynote speaker at global business conferences',
      'Board Member at multiple technology startups'
    ]
  },
  {
    id: '105',
    name: 'Madhusmita Sahoo',
    company: 'Leo Capital',
    role: 'Principal Investor',
    expertise: 'SaaS Investments | Enterprise Tech | Growth Strategy',
    linkedin: '#',
    website: 'https://leocap.co',
    companyLogo: 'https://logo.clearbit.com/leocap.co',
    image: '/Speakers-Advisors-Circle Members/Advisor - Madhusmita-Leo Capital.png',
    bio: 'Madhusmita Sahoo is a Principal at Leo Capital, where she leads investments in enterprise software and SaaS companies. With a unique blend of technical expertise and financial acumen, she has been instrumental in identifying and supporting high-potential startups in the B2B technology space. Her hands-on approach to working with portfolio companies has helped multiple startups scale their operations and achieve successful exits.',
    experience: [
      'Principal at Leo Capital - Led 12+ investments in enterprise tech startups',
      'Senior Associate at Accel Partners - Focused on SaaS and cloud infrastructure',
      'Product Manager at Freshworks - Launched products used by 50,000+ businesses',
      'Software Engineer at Microsoft - Worked on Azure cloud services'
    ],
    education: [
      'MBA in Finance, Indian School of Business (ISB)',
      'B.Tech in Computer Science, NIT Trichy',
      'Certification in Private Equity & Venture Capital, Harvard Business School',
      'CFA Charterholder'
    ],
    achievements: [
      'Forbes 30 Under 30 - Finance & Venture Capital (2023)',
      'Mentor at 500 Startups and Y Combinator',
      'Featured in Economic Times and YourStory for investment insights',
      'Regular speaker at SaaSBOOMi and other tech conferences'
    ]
  },
  {
    id: '106',
    name: 'Murli Raghavan',
    company: 'Inflexor Ventures',
    role: 'Partner - Deep Tech Investments',
    expertise: 'AI/ML | Quantum Computing | Enterprise SaaS',
    linkedin: '#',
    website: 'https://inflexor.vc',
    companyLogo: 'https://logo.clearbit.com/inflexor.vc',
    image: '/Speakers-Advisors-Circle Members/Advisor - Murli - Inflexor.png',
    bio: 'Dr. Murli Raghavan is a Partner at Inflexor Ventures, where he leads investments in deep technology startups. With a Ph.D. in Computer Science and over 15 years of experience in AI/ML research and enterprise software, Murli brings a unique combination of technical depth and business acumen to his investment thesis. He has been instrumental in building Inflexor\'s deep tech portfolio, with a focus on AI-first companies, quantum computing, and next-gen enterprise software.',
    experience: [
      'Partner at Inflexor Ventures - Built $100M+ deep tech portfolio with 5 successful exits',
      'CTO at AI Startup - Scaled AI platform to process 1B+ API calls/month',
      'Research Scientist at IBM Research - Published 20+ papers in AI/ML',
      'Engineering Lead at Oracle - Led development of cloud database services'
    ],
    education: [
      'Ph.D. in Computer Science (Machine Learning), Carnegie Mellon University',
      'M.Tech in Computer Science, IIT Bombay (Institute Silver Medalist)',
      'B.Tech in Computer Science, NIT Trichy (University Gold Medalist)',
      'Executive Education in Venture Capital, Stanford Graduate School of Business'
    ],
    achievements: [
      'Named "Top 10 Deep Tech Investors in Asia" by TechCrunch (2023)',
      'Holder of 5 patents in AI/ML technologies',
      'Adjunct Professor at IIIT Bangalore - AI/ML Department',
      'Jury member at multiple international AI/ML competitions'
    ]
  },
  {
    id: '107',
    name: 'Parnita Mishra',
    company: 'BoldCare',
    role: 'Co-Founder & Chief Medical Officer',
    expertise: 'Digital Health | Women\'s Health | Healthcare Innovation',
    linkedin: '#',
    website: 'https://bold.care',
    companyLogo: 'https://logo.clearbit.com/bold.care',
    image: '/Speakers-Advisors-Circle Members/Advisor - Parnita - Boldcare.png',
    bio: 'Dr. Parnita Mishra is the Co-Founder and Chief Medical Officer of BoldCare, a digital health platform that has revolutionized women\'s healthcare access in India. A practicing gynecologist turned healthcare entrepreneur, Parnita combines her medical expertise with a passion for technology to build solutions that address critical gaps in healthcare delivery. Under her leadership, BoldCare has served over 100,000 patients and raised $15M in funding.',
    experience: [
      'Co-Founder & CMO at BoldCare - Scaled to 100,000+ patients across 50+ cities',
      'Senior Resident at AIIMS - Specialized in Obstetrics & Gynecology',
      'Healthcare Consultant at PwC - Advised on digital health strategies',
      'Visiting Faculty at Tata Institute of Social Sciences - Health Innovation'
    ],
    education: [
      'MBBS, Maulana Azad Medical College, Delhi University',
      'MD in Obstetrics & Gynecology, AIIMS New Delhi',
      'MBA in Healthcare Management, Indian School of Business (ISB)',
      'Certification in Digital Health, Stanford Center for Health Education'
    ],
    achievements: [
      'Forbes 30 Under 30 Asia - Healthcare (2023)',
      'Recipient of NASSCOM Emerge 50 Award for Healthcare Innovation',
      'TEDx Speaker on "The Future of Women\'s Health in India"',
      'Advisor to National Health Authority (NHA) on digital health initiatives'
    ]
  },
  {
    id: '108',
    name: 'Daanish Suhail',
    company: 'Playo',
    role: 'Founder & CEO',
    expertise: 'Sports Technology | Community Building | Marketplace Platforms',
    linkedin: '#',
    website: 'https://playo.co',
    companyLogo: 'https://logo.clearbit.com/playo.co',
    image: '/Speakers-Advisors-Circle Members/Advisor - Playo - Daanish Suhail.png',
    bio: 'Daanish Suhail is the Founder & CEO of Playo, India\'s largest sports community and discovery platform with over 5 million users. A passionate sports enthusiast and technologist, Daanish has built Playo into a category-defining platform that connects 2.5 million+ sports enthusiasts across 30+ sports. Under his leadership, Playo has raised $15M+ in funding and transformed how urban India discovers and plays sports.',
    experience: [
      'Founder & CEO at Playo - Scaled to 5M+ users across 15+ cities',
      'Product Manager at Flipkart - Led growth initiatives for new categories',
      'Software Engineer at Microsoft - Worked on Azure cloud infrastructure',
      'Early team member at multiple sports tech startups'
    ],
    education: [
      'B.Tech in Computer Science, BITS Pilani',
      'Advanced Certification in Sports Management, IIM Calcutta',
      'Executive Program in Product Management, Northwestern University',
      'Certified Sports Analytics Professional, MIT Sloan'
    ],
    achievements: [
      'Forbes 30 Under 30 Asia - Consumer Tech (2022)',
      'NASSCOM Emerge 50 Award for Innovation in Sports Tech',
      'Featured in Economic Times and YourStory for entrepreneurship journey',
      'Keynote speaker at global sports and tech conferences'
    ]
  },
  {
    id: '109',
    name: 'Harshit Mittal',
    company: 'Qube',
    role: 'Founder & CEO',
    expertise: 'Fintech | Digital Payments | Blockchain',
    linkedin: '#',
    website: 'https://qube.one',
    companyLogo: 'https://logo.clearbit.com/qube.one',
    image: '/Speakers-Advisors-Circle Members/Advisor - Qube - Harshit.png',
    bio: 'Harshit Mittal is the Founder & CEO of Qube, a next-generation fintech platform that is redefining digital payments and financial services. With over 12 years of experience in fintech and financial services, Harshit has built Qube into a leading payments infrastructure company that processes $2B+ in annual transaction volume. His vision of creating an open financial ecosystem has positioned Qube at the forefront of India\'s digital payments revolution.',
    experience: [
      'Founder & CEO at Qube - Built payment infrastructure processing $2B+ annually',
      'Director of Product at PayU - Led cross-border payments and fintech products',
      'Product Manager at PayPal - Worked on global payment solutions',
      'Technology Consultant at Deloitte - Advised banks on digital transformation'
    ],
    education: [
      'MBA in Finance & Strategy, Indian School of Business (ISB)',
      'B.Tech in Computer Science, IIT Delhi',
      'Certification in Blockchain Technologies, MIT',
      'Certified Treasury Professional (CTP)'
    ],
    achievements: [
      'Economic Times 40 Under 40 - Fintech Leaders (2023)',
      'Nasscom Emerge 50 Award for Fintech Innovation',
      'Featured in Forbes and The Ken for contributions to digital payments',
      'Mentor at multiple fintech accelerators and incubators'
    ]
  },
  {
    id: '110',
    name: 'Ravi Kiran',
    company: 'Hyderabad Angels',
    role: 'Lead Investor & Board Member',
    expertise: 'Early-Stage Investments | Startup Mentoring | Business Scaling',
    linkedin: '#',
    website: 'https://hyderabadangels.com',
    companyLogo: 'https://logo.clearbit.com/hyderabadangels.com',
    image: '/Speakers-Advisors-Circle Members/Advisor - Ravi_Hyderabad.png',
    bio: 'Ravi Kiran is a seasoned investor and board member at Hyderabad Angels, one of India\'s largest angel networks. With over 20 years of experience in building and scaling technology companies, Ravi has been instrumental in mentoring and funding 50+ startups across SaaS, fintech, and consumer internet. His hands-on approach to angel investing has helped multiple portfolio companies achieve successful exits and scale operations globally.',
    experience: [
      'Lead Investor at Hyderabad Angels - Led 30+ investments with 8 successful exits',
      'Founder & CEO at TechVentures - Built and exited two SaaS companies',
      'VP of Product at Global Tech Firm - Scaled products to 10M+ users',
      'Early team member at two successful startups that achieved $100M+ exits'
    ],
    education: [
      'MBA, Indian School of Business (ISB)',
      'B.Tech in Computer Science, IIT Madras',
      'Executive Education in Venture Capital, Harvard Business School',
      'Certified Angel Investor, Angel Resource Institute'
    ],
    achievements: [
      'Recognized as "Top 50 Angel Investors in India" by Economic Times',
      'Mentor at Y Combinator, Techstars, and 500 Startups',
      'Featured in Forbes and YourStory for investment philosophy',
      'Jury member at multiple startup pitch competitions'
    ]
  },
  {
    id: '111',
    name: 'Rishikesh Srivastava',
    company: 'Rapido',
    role: 'Chief Operating Officer',
    expertise: 'Operations Excellence | Mobility Solutions | Hyperlocal Logistics',
    linkedin: '#',
    website: 'https://rapido.bike',
    companyLogo: 'https://logo.clearbit.com/rapido.bike',
    image: '/Speakers-Advisors-Circle Members/Advisor - Rishikesh - Rapido.png',
    bio: 'Rishikesh Srivastava is the Chief Operating Officer at Rapido, India\'s largest bike taxi platform serving 20M+ customers across 100+ cities. With a track record of building and scaling operations for hyperlocal mobility platforms, Rishikesh has been instrumental in Rapido\'s exponential growth, overseeing a fleet of 2M+ captain partners and achieving 10X growth in operational efficiency.',
    experience: [
      'COO at Rapido - Scaled operations to 100+ cities with 20M+ customers',
      'Head of Operations at Ola - Led city expansions and supply operations',
      'Supply Chain Manager at Flipkart - Optimized last-mile delivery networks',
      'Operations Consultant at Deloitte - Advised on supply chain transformations'
    ],
    education: [
      'PGDM in Operations, IIM Bangalore',
      'B.Tech in Mechanical Engineering, NIT Surat',
      'Certification in Digital Transformation, MIT Sloan',
      'Lean Six Sigma Black Belt'
    ],
    achievements: [
      'Economic Times 40 Under 40 - Operations Leaders (2023)',
      'Awarded \"Best COO in Mobility\" at India Mobility Summit',
      'Speaker at multiple logistics and mobility conferences',
      'Mentor at multiple mobility and logistics startups'
    ]
  },
  {
    id: '112',
    name: 'Samit Khanna',
    company: 'Signal Ventures',
    role: 'Founding Partner',
    expertise: 'Venture Capital | B2B SaaS | Marketplaces',
    linkedin: '#',
    website: 'https://signalventures.vc',
    companyLogo: 'https://logo.clearbit.com/signalventures.vc',
    image: '/Speakers-Advisors-Circle Members/Advisor - Samit Khanna-Signal Ventures.png',
    bio: 'Samit Khanna is the Founding Partner of Signal Ventures, a $150M early-stage venture capital firm focused on B2B SaaS and marketplace startups. With over 15 years of experience in venture capital and startup operations, Samit has been instrumental in building Signal into one of the most active seed-stage investors in the ecosystem, with 8 portfolio companies achieving unicorn status.',
    experience: [
      'Founding Partner at Signal Ventures - Built $150M fund with 8 unicorn investments',
      'Principal at Sequoia Capital - Led investments in 5 companies that achieved $1B+ valuations',
      'Product Manager at Microsoft - Launched enterprise products used by Fortune 500 companies',
      'Early employee at two successful B2B SaaS startups'
    ],
    education: [
      'MBA, The Wharton School, University of Pennsylvania',
      'B.Tech in Computer Science, IIT Bombay',
      'Kauffman Fellows Program',
      'Executive Education in Private Equity, Harvard Business School'
    ],
    achievements: [
      'Forbes Midas List - Top 100 Venture Capitalists (2023)',
      'Named "Most Influential VC in India" by Economic Times',
      'Board Member at National Venture Capital Association (NVCA)',
      'Mentor at Y Combinator and Techstars'
    ]
  },
  {
    id: '113',
    name: 'Sandeep Balaji',
    company: 'IncX',
    role: 'Founder & CEO',
    expertise: 'Startup Incubation | Fundraising | Growth Hacking',
    linkedin: '#',
    website: 'https://incx.in',
    companyLogo: 'https://logo.clearbit.com/incx.in',
    image: '/Speakers-Advisors-Circle Members/Advisor - Sandeep Balaji - IncX.png',
    bio: 'Sandeep Balaji is the Founder & CEO of IncX, one of India\'s leading startup incubators that has nurtured 150+ early-stage companies, helping them raise over $500M in funding. A serial entrepreneur with 3 successful exits, Sandeep is known for his hands-on approach to startup building and his ability to identify and scale high-potential ventures across sectors.',
    experience: [
      'Founder & CEO at IncX - Incubated 150+ startups with $500M+ in funding',
      'Founder at TechScale - Built and exited AI-powered analytics platform',
      'Product Lead at Flipkart - Led growth initiatives for new categories',
      'Early employee at two successful startups that achieved $100M+ exits'
    ],
    education: [
      'MBA in Entrepreneurship, Stanford Graduate School of Business',
      'B.Tech in Computer Science, IIT Kharagpur',
      'Certification in Design Thinking, IDEO U',
      'Executive Program in Venture Capital, UC Berkeley'
    ],
    achievements: [
      'Economic Times 40 Under 40 - Entrepreneurship (2023)',
      'NASSCOM Emerge 50 Award for Contribution to Startup Ecosystem',
      'Author of "From Zero to Scale: The Indian Startup Playbook"',
      'Mentor at multiple government and private startup programs'
    ]
  },
  {
    id: '114',
    name: 'Shreya Kapoor',
    company: 'Anthill Ventures',
    role: 'Principal - Growth Investments',
    expertise: 'Growth Equity | Market Expansion | Cross-Border Scaling',
    linkedin: '#',
    website: 'https://anthill.vc',
    companyLogo: 'https://logo.clearbit.com/anthill.vc',
    image: '/Speakers-Advisors-Circle Members/Advisor - Shreya - Anthill Ventures.png',
    bio: 'Shreya Kapoor is a Principal at Anthill Ventures, where she leads growth-stage investments in technology companies looking to expand globally. With expertise in market entry strategies and cross-border scaling, Shreya has helped portfolio companies expand to 15+ countries and achieve 10X revenue growth. Her data-driven approach to investment has made her one of the most sought-after growth investors in the ecosystem.',
    experience: [
      'Principal at Anthill Ventures - Led 12 growth investments with 4 successful exits',
      'Senior Consultant at Bain & Company - Advised Fortune 500 companies on market expansion',
      'Product Manager at Amazon - Launched and scaled international marketplaces',
      'Investment Analyst at TPG Growth - Focused on growth equity investments'
    ],
    education: [
      'MBA, Harvard Business School',
      'B.Tech in Computer Science, IIT Delhi',
      'Certification in Growth Marketing, Reforge',
      'Executive Program in Private Equity, London Business School'
    ],
    achievements: [
      'Forbes 30 Under 30 - Finance & Venture Capital (2023)',
      'Named "Rising Star in Venture Capital" by Economic Times',
      'Mentor at multiple startup accelerators including Y Combinator',
      'Regular speaker at global investment and entrepreneurship forums'
    ]
  },
  {
    id: '115',
    name: 'Subhash Choudhary',
    company: 'Choudhary Advisory',
    role: 'Founder & CEO',
    expertise: 'Corporate Strategy | Digital Transformation | Leadership Development',
    linkedin: '#',
    website: '#',
    companyLogo: '',
    image: '/Speakers-Advisors-Circle Members/Advisor - Subhash Choudhary.png',
    bio: 'Subhash Choudhary is the Founder & CEO of Choudhary Advisory, a boutique strategy consulting firm that has advised 100+ companies across 20+ countries. With over 25 years of experience in corporate strategy and digital transformation, Subhash has held C-suite positions at multiple Fortune 500 companies, leading large-scale transformations and driving sustainable growth. His strategic insights have helped organizations navigate complex business challenges and achieve market leadership.',
    experience: [
      'Founder & CEO at Choudhary Advisory - Advised 100+ companies on digital transformation',
      'Chief Strategy Officer at Tata Group - Led corporate strategy for $100B+ conglomerate',
      'Senior Partner at McKinsey & Company - Headed Asia-Pacific digital practice',
      'Board Member at 5 publicly listed companies across industries'
    ],
    education: [
      'MBA, Harvard Business School (Baker Scholar)',
      'B.Tech in Electrical Engineering, IIT Kanpur (Institute Silver Medalist)',
      'Advanced Management Program, INSEAD',
      'Certified Director, Indian Institute of Corporate Affairs'
    ],
    achievements: [
      'Lifetime Achievement Award for Excellence in Corporate Strategy (2022)',
      'Ranked among "Top 50 Most Influential Business Leaders" by Business Today',
      'Author of best-selling book "Strategic Agility in the Digital Age"',
      'Distinguished Fellow at multiple business schools including IIMs and ISB'
    ]
  }
];
