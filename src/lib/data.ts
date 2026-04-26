export interface Service {
  slug: string;
  num: string;
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  heroImage: string;
  includes: string[];
  highlights: string[];
  duration: string;
  groupSize: string;
  priceFrom: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  tag?: string;
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  climate: string;
}

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  flag: string;
  avatar: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

/* ─────────────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────────────── */
export const SERVICES: Service[] = [
  {
    slug: "wildlife-safari",
    num: "01",
    icon: "🦁",
    title: "Wildlife Safari",
    shortDesc: "Track Africa's Big Five across vast golden savanna plains.",
    longDesc:
      "Immerse yourself in the heart of East Africa's most magnificent game reserves. Our wildlife safaris deliver unforgettable game drives where lions, elephants, leopards, buffalos, and rhinos roam freely. Expert guides with decades of field experience ensure every sighting is explained and every moment is remembered.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85",
    includes: [
      "Certified professional guide",
      "4×4 pop-up roof safari vehicle",
      "National park entry fees",
      "Full-board bush lodge accommodation",
      "Airport transfers",
    ],
    highlights: [
      "Big Five game drives at dawn & dusk",
      "Guided night drives (select parks)",
      "Bird-watching sessions",
      "Sundowner with bush cocktails",
      "Photographic safari tips from guides",
    ],
    duration: "1 – 14 days",
    groupSize: "2 – 12 guests",
    priceFrom: "$299/person",
    difficulty: "Easy",
    tag: "Most Popular",
  },
  {
    slug: "gorilla-chimps-trekking",
    num: "02",
    icon: "🦍",
    title: "Gorilla & Chimps Trekking",
    shortDesc: "A face-to-face encounter with mountain gorillas & wild chimps.",
    longDesc:
      "Standing metres from a silverback mountain gorilla in the misty Virunga jungle is one of the most powerful experiences on Earth. Our trekking safaris include permits, expert forest guides, safety briefings, and careful preparation to make your encounter safe, respectful, and utterly unforgettable.",
    image: "https://images.unsplash.com/photo-1605552093758-4665e1ce9d6a?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1605552093758-4665e1ce9d6a?w=1920&q=85",
    includes: [
      "Gorilla / chimp trekking permit",
      "Expert local forest ranger-guide",
      "Safety and etiquette briefing",
      "Park entry fees",
      "Porter service available",
    ],
    highlights: [
      "Mountain gorilla family encounter",
      "Chimpanzee tracking in Kibale",
      "Volcanoes National Park (Rwanda)",
      "Bwindi Impenetrable Forest (Uganda)",
      "Cloud-forest hiking",
    ],
    duration: "1 – 7 days",
    groupSize: "2 – 8 guests",
    priceFrom: "$699/person",
    difficulty: "Moderate",
    tag: "Bucket List",
  },
  {
    slug: "car-rental",
    num: "03",
    icon: "🚙",
    title: "Car Rental",
    shortDesc: "Fully maintained 4×4 safari vehicles — with or without a driver.",
    longDesc:
      "Explore East Africa on your own schedule with our fleet of well-maintained Land Cruisers, Land Rovers, and saloon cars. Whether you prefer a professional driver-guide or self-drive freedom, we match you to the right vehicle. All fleet is GPS-equipped, insured, and road-ready for any terrain.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=85",
    includes: [
      "GPS navigation device",
      "Comprehensive insurance cover",
      "24/7 roadside emergency support",
      "Airport pick-up / drop-off",
      "Child seats on request",
    ],
    highlights: [
      "Toyota Land Cruiser 4×4 fleet",
      "Self-drive or with driver-guide",
      "Cross-border permits available",
      "Camping gear rental option",
      "Fuel assistance & route planning",
    ],
    duration: "Daily / Weekly",
    groupSize: "1 – 9 persons",
    priceFrom: "$80/day",
    difficulty: "Easy",
    tag: "Flexible",
  },
  {
    slug: "agro-tourism",
    num: "04",
    icon: "🌾",
    title: "Agro Tourism",
    shortDesc: "Tea estates, coffee farms, and lush plantations — farm to table.",
    longDesc:
      "Discover East Africa's agricultural richness on an immersive agro-tourism experience. Walk through Rwanda's hillside tea terraces, pick coffee cherries with local farmers, visit a honey harvest, and explore organic farms with passionate growers. A perfect blend of nature, culture, and sustainable farming.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=85",
    includes: [
      "Expert farm guide",
      "Tea & coffee tasting session",
      "Fresh produce farm lunch",
      "Processing plant walkthrough",
      "Cultural interaction with farmers",
    ],
    highlights: [
      "Tea estate walk on Rwanda's hills",
      "Coffee cherry picking experience",
      "Honey harvesting & bee-keeping",
      "Organic vegetable farm tour",
      "Fresh produce village market",
    ],
    duration: "1 – 3 days",
    groupSize: "2 – 20 guests",
    priceFrom: "$89/person",
    difficulty: "Easy",
    tag: "Family Friendly",
  },
  {
    slug: "cultural-historical-tours",
    num: "05",
    icon: "🏛️",
    title: "Cultural & Historical Tours",
    shortDesc: "Kingdoms, traditions, and living history across East Africa.",
    longDesc:
      "East Africa's cultural tapestry is as rich as its wildlife. Our tours take you to traditional villages, ancient kingdom palaces, significant memorials, craft workshops, and vibrant dance ceremonies — offering a deep, respectful window into the people and history that shape this remarkable region.",
    image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=1920&q=85",
    includes: [
      "Certified cultural guide",
      "Museum & site entry fees",
      "Traditional village visit",
      "Authentic local meal",
      "Handcraft souvenir",
    ],
    highlights: [
      "Ancient kingdom heritage sites",
      "Traditional village daily life",
      "Craft & pottery workshops",
      "Dance & drumming ceremonies",
      "Elder storytelling sessions",
    ],
    duration: "1 – 5 days",
    groupSize: "2 – 15 guests",
    priceFrom: "$120/person",
    difficulty: "Easy",
    tag: "Cultural",
  },
  {
    slug: "educational-tours",
    num: "06",
    icon: "📚",
    title: "Educational Tours",
    shortDesc: "Living classrooms across Africa's parks, farms & communities.",
    longDesc:
      "Designed for schools, universities, research groups, and lifelong learners, our educational tours combine hands-on exploration with expert-led learning. From ecology fieldwork in national parks to ethnographic studies in rural villages, every day in the field delivers lessons no classroom can replicate.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=85",
    includes: [
      "Academic guide or field lecturer",
      "Study materials & workbooks",
      "Field research logistics support",
      "Group transport (bus or 4×4s)",
      "Accommodation & meals",
    ],
    highlights: [
      "Ecology field studies in national parks",
      "Conservation & biodiversity workshops",
      "Community development immersion",
      "Cultural exchange programmes",
      "Research data collection support",
    ],
    duration: "2 – 21 days",
    groupSize: "5 – 40 guests",
    priceFrom: "$150/person",
    difficulty: "Easy",
    tag: "Groups",
  },
  {
    slug: "long-short-term-staying",
    num: "07",
    icon: "🏕️",
    title: "Long & Short Term Staying",
    shortDesc: "From weekend bush camps to month-long expedition lodges.",
    longDesc:
      "Whether you are here for a three-day getaway or a month-long research expedition, we arrange accommodation that matches your comfort level, budget, and itinerary. From luxury tented camps with sunrise savanna views to cosy eco-lodges deep in the rainforest — every detail is handled.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=85",
    includes: [
      "Accommodation booking & confirmation",
      "Meals as specified per package",
      "Arrival & departure transfers",
      "Concierge & guest services",
      "Laundry service",
    ],
    highlights: [
      "Luxury tented camps & glamping",
      "Eco-lodges in forest settings",
      "Community guesthouses",
      "Exclusive private bush camps",
      "City boutique hotels",
    ],
    duration: "2 days – 3 months",
    groupSize: "1 – 20 guests",
    priceFrom: "$95/night",
    difficulty: "Easy",
    tag: "Flexible",
  },
  {
    slug: "tourism-new-investors",
    num: "08",
    icon: "💼",
    title: "Tourism & New Investors",
    shortDesc: "Site visits & business travel for East Africa opportunity seekers.",
    longDesc:
      "East Africa's tourism sector is booming. We facilitate tailored investor site visits, business networking tours, and market exploration trips for entrepreneurs and corporations looking to invest in hospitality, eco-tourism, agriculture, real estate, or community development across the region.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=85",
    includes: [
      "Tailored business itinerary",
      "Local expert introductions",
      "Site visit logistics & transport",
      "Interpreter if required",
      "Investment sector briefings",
    ],
    highlights: [
      "Hospitality & lodge site tours",
      "Land & property inspections",
      "Government liaison facilitation",
      "Market feasibility overviews",
      "Investor networking events",
    ],
    duration: "3 – 14 days",
    groupSize: "1 – 10 persons",
    priceFrom: "$350/person",
    difficulty: "Easy",
    tag: "Business",
  },
  {
    slug: "adventure-tours",
    num: "09",
    icon: "🧗",
    title: "Adventure Tours",
    shortDesc: "Volcanoes, kayaking, zip-lines — Africa's wild side unleashed.",
    longDesc:
      "For the thrill-seeker who wants Africa beyond the ordinary. Our adventure tours include volcano summit hikes on Karisimbi and Nyiragongo, kayaking on Lake Kivu, mountain biking through highland villages, zip-lining over forest canopies, and white-water rafting on the Nile. Adrenaline guaranteed.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=85",
    includes: [
      "Professional safety equipment",
      "Certified adventure guide",
      "First aid support on site",
      "Transport to activity locations",
      "Meals on full-day excursions",
    ],
    highlights: [
      "Karisimbi volcano summit hike",
      "Kayaking on Lake Kivu",
      "Forest canopy zip-lining",
      "Mountain biking highland trails",
      "White-water rafting on the Nile",
    ],
    duration: "1 – 10 days",
    groupSize: "2 – 12 guests",
    priceFrom: "$199/person",
    difficulty: "Challenging",
    tag: "Thrill Seekers",
  },
  {
    slug: "road-trip-packages",
    num: "10",
    icon: "🗺️",
    title: "Road Trip Packages",
    shortDesc: "Cross-country routes through Africa's most scenic landscapes.",
    longDesc:
      "Pack your sense of adventure and hit the road across East Africa's most breathtaking routes. From Rwanda's thousand hills to Uganda's crater lakes, Kenya's Rift Valley to Tanzania's Serengeti corridor — our packages include curated stops, reliable vehicles, expert local knowledge, and complete freedom to explore.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=85",
    includes: [
      "4×4 Land Cruiser or campervan",
      "Accommodation along the route",
      "Printed route map & guidebook",
      "Driver-guide option available",
      "Border crossing assistance",
    ],
    highlights: [
      "Rwanda → Uganda cross-border route",
      "Scenic highland mountain roads",
      "National park stopovers",
      "Local food market discoveries",
      "Hidden village & waterfall detours",
    ],
    duration: "3 – 21 days",
    groupSize: "2 – 8 guests",
    priceFrom: "$180/person",
    difficulty: "Moderate",
    tag: "Adventure",
  },
];

/* ─────────────────────────────────────────────────────
   DESTINATIONS
───────────────────────────────────────────────────── */
export const DESTINATIONS: Destination[] = [
  {
    slug: "rwanda",
    name: "Rwanda",
    region: "Central Africa",
    description:
      "The Land of a Thousand Hills — home to mountain gorillas, stunning lake scenery, and one of Africa's safest and most well-organised tourism destinations.",
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80",
    highlights: ["Volcanoes National Park – Gorillas", "Akagera National Park", "Lake Kivu & Rubavu", "Nyungwe Forest Reserve", "Kigali City"],
    bestTime: "June – September",
    climate: "Tropical highland, pleasantly mild year-round",
  },
  {
    slug: "uganda",
    name: "Uganda",
    region: "East Africa",
    description:
      "The Pearl of Africa — chimpanzees, Bwindi gorillas, source of the Nile, Murchison Falls, and breathtaking crater lakes in one extraordinary country.",
    image: "https://images.unsplash.com/photo-1574068469019-9b3b1f9cbf23?w=900&q=80",
    highlights: ["Bwindi Impenetrable Forest", "Murchison Falls National Park", "Queen Elizabeth NP", "Kibale Chimp Sanctuary", "Source of the Nile"],
    bestTime: "June – August / Dec – Feb",
    climate: "Equatorial, warm and humid",
  },
  {
    slug: "kenya",
    name: "Kenya",
    region: "East Africa",
    description:
      "Home to the legendary Maasai Mara, Kenya offers the world's greatest wildlife spectacle — the Great Migration — alongside pristine beaches and warrior culture.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=80",
    highlights: ["Maasai Mara – Great Migration", "Amboseli & Kilimanjaro views", "Lake Nakuru flamingos", "Samburu National Reserve", "Diani Beach"],
    bestTime: "July – October",
    climate: "Varied: savanna, highland, tropical coast",
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    region: "East Africa",
    description:
      "Serengeti, Ngorongoro Crater, Kilimanjaro, and Zanzibar — Tanzania is the definitive African safari destination, legendary for its scale and biodiversity.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80",
    highlights: ["Serengeti National Park", "Ngorongoro Crater", "Mount Kilimanjaro", "Selous Game Reserve", "Zanzibar Archipelago"],
    bestTime: "June – October",
    climate: "Semi-arid savanna north, tropical coast",
  },
  {
    slug: "congo",
    name: "DR Congo",
    region: "Central Africa",
    description:
      "Off the beaten path — Virunga National Park, lowland gorillas, the active Nyiragongo volcano, and a truly wild frontier safari experience like nowhere else.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80",
    highlights: ["Virunga National Park", "Nyiragongo Volcano hike", "Lowland gorilla tracking", "Okapi Wildlife Reserve", "Congo River"],
    bestTime: "June – September",
    climate: "Equatorial, hot and humid",
  },
  {
    slug: "ethiopia",
    name: "Ethiopia",
    region: "Horn of Africa",
    description:
      "Ancient civilisations, unique endemic wildlife, the raw Danakil Depression, and Lalibela's rock churches make Ethiopia a truly extraordinary destination.",
    image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=900&q=80",
    highlights: ["Simien Mountains National Park", "Danakil Depression", "Lalibela rock-hewn churches", "Omo Valley tribes", "Bale Mountains"],
    bestTime: "October – February",
    climate: "Varied: highland, desert, tropical",
  },
];

/* ─────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────── */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "James Morrison",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "Absolutely incredible from start to finish. Our guide knew every animal by name and behaviour. We saw lions, elephants, a leopard — and then gorillas! Wildlife Friendly Safari made our dream trip a reality.",
    service: "Wildlife Safari + Gorilla Trekking",
    date: "March 2026",
  },
  {
    id: 2,
    name: "Sophie Laurent",
    country: "France",
    flag: "🇫🇷",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "The gorilla trekking was beyond words. Standing metres from a silverback in the misty jungle — it changed my life forever. The whole trip was perfectly organised from arrival to departure.",
    service: "Gorilla & Chimps Trekking",
    date: "February 2026",
  },
  {
    id: 3,
    name: "David Kim",
    country: "United States",
    flag: "🇺🇸",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "We came as investors to explore opportunities and left completely inspired. The team's local knowledge and connections were invaluable. Exceptional professionalism throughout our 10-day visit.",
    service: "Tourism & New Investors Tour",
    date: "January 2026",
  },
  {
    id: 4,
    name: "Amara Osei",
    country: "Ghana",
    flag: "🇬🇭",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    rating: 5,
    text: "The cultural tour exceeded every expectation. Learning about Rwanda's ancient kingdoms and sitting with village elders was deeply moving. Already planning my adventure tour for next year.",
    service: "Cultural & Historical Tours",
    date: "December 2025",
  },
];

/* ─────────────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────────────── */
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80", alt: "Safari landscape at golden sunset", category: "Landscapes" },
  { id: 2, src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80", alt: "Majestic lion resting on a rock", category: "Wildlife" },
  { id: 3, src: "https://images.unsplash.com/photo-1605552093758-4665e1ce9d6a?w=900&q=80", alt: "Mountain gorilla portrait in the mist", category: "Gorillas" },
  { id: 4, src: "https://images.unsplash.com/photo-1537519646099-335112f03225?w=900&q=80", alt: "Zebra herd at a waterhole", category: "Wildlife" },
  { id: 5, src: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80", alt: "Elephant herd crossing the savanna", category: "Wildlife" },
  { id: 6, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&q=80", alt: "African golden-hour sky over the plains", category: "Landscapes" },
  { id: 7, src: "https://images.unsplash.com/photo-1549366021-9f761d040c87?w=900&q=80", alt: "Giraffe silhouette against blue sky", category: "Wildlife" },
  { id: 8, src: "https://images.unsplash.com/photo-1574068469019-9b3b1f9cbf23?w=900&q=80", alt: "Chimpanzee resting in the forest canopy", category: "Gorillas" },
  { id: 9, src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80", alt: "Safari guide with tourists on a game drive", category: "Experiences" },
  { id: 10, src: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=900&q=80", alt: "Traditional cultural ceremony", category: "Culture" },
  { id: 11, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80", alt: "Scenic road through the green highlands", category: "Landscapes" },
  { id: 12, src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80", alt: "Trekkers ascending a volcano at sunrise", category: "Adventures" },
];

export const GALLERY_CATEGORIES = ["All", "Wildlife", "Gorillas", "Landscapes", "Culture", "Experiences", "Adventures"];

/* ─────────────────────────────────────────────────────
   STATS & TEAM
───────────────────────────────────────────────────── */
export const STATS = [
  { number: "500+", label: "Happy Travellers" },
  { number: "10+", label: "Years Experience" },
  { number: "10", label: "Safari Services" },
  { number: "6", label: "Countries Covered" },
];

export const TEAM: TeamMember[] = [
  {
    name: "Emmanuel Nkurunziza",
    role: "Founder & Lead Guide",
    bio: "15 years leading safaris across East Africa. Certified wildlife guide and passionate conservation advocate.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Marie Claire Uwimana",
    role: "Operations Director",
    bio: "Expert in tourism logistics and guest experience management with over 10 years in the industry.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Patrick Habimana",
    role: "Senior Safari Guide",
    bio: "Gorilla trekking specialist and primate behaviour researcher. Expert in Volcanoes and Bwindi parks.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];
