export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  registrationLink: string;
  isPastEvent: boolean;
  description: string;
  about: string;
  eventType: 'investor-date' | 'conference' | 'networking' | 'board-meeting';
  city: string;
  attendees: string[];
  investmentFocus?: string;
  stage?: string;
  industry?: string;
}

export const events: Event[] = [
  {
    id: 'jito-jiif-mumbai',
    title: 'A Date with JITO JIIF',
    date: '2025-03-20',
    time: '4:00 PM - 6:00 PM',
    location: 'Mumbai, Maharashtra',
    image: '/Events/A Date with JITO JIIF  Mumbai  TheBuildersClub.png',
    registrationLink: '#', // Add registration link if available
    isPastEvent: true,
    eventType: 'investor-date',
    city: 'Mumbai',
    about: '4-5 founders get an opportunity to meet JITO at their office over coffee and conversations.',
    description: `JITO invests an avg. Cheque size of $500K - 1.5mn across industries. Negative list is as startup dealing into alcohol, non veg, leather products, animal cruelty.`,
    investmentFocus: 'Sector Agnostic',
    stage: 'Revenue positive',
    attendees: ['Utsav Singla', 'Dhiraj Jain', '3 others'],
  },
  {
    id: 'leo-capital-bangalore',
    title: 'A Date with Leo Capital',
    date: '2025-03-12',
    time: '4:00 PM - 6:00 PM',
    location: 'Bengaluru, Karnataka',
    image: '/Events/A Date with Leo Capital  Bangalore  TheBuildersClub.png',
    registrationLink: '#',
    isPastEvent: true,
    eventType: 'investor-date',
    city: 'Bangalore',
    about: '4-5 founders get an opportunity to meet Leo Capital at their office over coffee and conversations.',
    description: 'Leo Capital invests an avg. Cheque size of $1-3mn in B2B Enterprise Tech.',
    industry: 'B2B Enterprise Tech',
    stage: 'ARR > $100K',
    attendees: ['Mayank', 'Debarya', '10 others'],
  },
  {
    id: 'ideaspring-capital-bangalore',
    title: 'A Date with Ideaspring Capital',
    date: '2025-02-12',
    time: '4:00 PM - 6:00 PM',
    location: 'Bengaluru, Karnataka',
    image: '/Events/A Date with Ideaspring Capital  Bangalore  TheBuildersClub.png',
    registrationLink: '#',
    isPastEvent: true,
    eventType: 'investor-date',
    city: 'Bangalore',
    about: '4-5 founders get an opportunity to meet Ideaspring Capital at their office over coffee and conversations.',
    description: 'Ideaspring Capital invests an avg. Cheque size of Rs. 8-12Cr. in B2B tech & Enterprise Software.',
    industry: 'B2B Tech & Enterprise Software',
    stage: 'MVP with early traction',
    attendees: ['Pradeep Sharma', 'Parinita Hendre', '12 others'],
  },
  {
    id: 'tiecon-mumbai',
    title: 'TiEcon Mumbai 2025 + The Builders Club Mixer at TiECon',
    date: '2025-03-12',
    time: '8:00 AM - 9:30 PM',
    location: 'Jio World Convention Centre, Mumbai',
    image: '/Events/TiEcon Mumbai 2025 + The Builders Club Mixer at TiECon.png',
    registrationLink: '#',
    isPastEvent: true,
    eventType: 'conference',
    city: 'Mumbai',
    about: 'TiECon Mumbai is India\'s Leading Entrepreneurial Leadership Summit',
    description: `With over 120 unicorns, 600+ soonicorns, and mature SME companies, startups in India have reached a critical inflection point. This sector now employs 60 lakh people directly and 7x indirectly, having raised $200+ billion in external funding.`,
    attendees: ['12+ attendees'],
  },
  {
    id: 'builders-circle-house-party',
    title: 'The Builders Circle House Party by TBC',
    date: '2025-01-24',
    time: '7:00 PM - 11:00 PM',
    location: 'Bengaluru, Karnataka',
    image: '/Events/The Builders Circle House Party by TBC.png',
    registrationLink: '#',
    isPastEvent: true,
    eventType: 'networking',
    city: 'Bangalore',
    about: 'A bimonthly gathering of Circle Members, CXO advisors, Investment partners and all other partners',
    description: 'This is an informal gathering where The Builders Circle Members get to meet the CXO advisors in person and build long term relationships with each other.',
    attendees: ['Lijo Mathew', 'Dharmpal Chaudhary', '4 others'],
  },
  {
    id: 'board-room-meeting-bangalore',
    title: 'The Builders Circle Board Room Meeting',
    date: '2025-01-11',
    time: '11:00 AM - 3:00 PM',
    location: 'Bengaluru, Karnataka',
    image: '/Events/The Builders Circle Board Room Meeting  Bangalore.png',
    registrationLink: '#',
    isPastEvent: true,
    eventType: 'board-meeting',
    city: 'Bangalore',
    about: 'Monthly board room meeting for circle members',
    description: 'An opportunity for the circle members to track their goals, exchange business referrals and ask for help from each other.',
    attendees: ['6+ attendees'],
  },
];

export const getEventById = (id: string) => {
  return events.find(event => event.id === id);
};

export const getUpcomingEvents = () => {
  // For testing, return all events regardless of date
  return [...events];
  
  // For production, use this instead:
  // const today = new Date();
  // return events.filter(event => new Date(event.date) >= today);
};

export const getPastEvents = () => {
  const today = new Date();
  return events.filter(event => new Date(event.date) < today);
};
