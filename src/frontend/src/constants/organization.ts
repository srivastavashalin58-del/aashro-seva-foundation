import type {
  DonationOption,
  GalleryItem,
  ImpactStat,
  NavItem,
  NewsItem,
  Testimonial,
  VolunteerRole,
} from "@/types";

export const ORG = {
  name: "Aashro Seva Foundation",
  nameGujarati: "આશ્રો સેવા ફાઉન્ડેશન",
  facilityName:
    "Aashro Foundation — Swargiya Jamnaben Zaverbhai Patel Vruddhashram",
  facilityNameGujarati: "સ્વ. જમનાબેન ઝવેરભાઈ પટેલ વૃદ્ધાશ્રમ",
  tagline: "Serving Humanity with Care and Compassion",
  subTagline:
    "Together we can bring dignity, support, and hope to people who need it most.",
  phone: "+91 90672 14745",
  email: "info@aashroseva.org",
  address: {
    line1: "Dabhoi-Karjan Road",
    line2: "Kayavarohan, Taluka Dabhoi",
    line3: "District Vadodara, Gujarat — 391220",
    country: "India",
  },
  registration: "Registered Public Charitable Trust under Gujarat Jurisdiction",
  taxExemption: "12AB Income Tax Exemption — Ahmedabad ITAT Verified",
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Old Age Home", href: "/old-age-home" },
  { label: "Leadership", href: "/leadership" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const IMPACT_STATS: ImpactStat[] = [
  { icon: "👴", value: "500+", label: "People Supported" },
  { icon: "🏠", value: "80+", label: "Elderly Residents Helped" },
  { icon: "🤝", value: "200+", label: "Volunteers" },
  { icon: "🌱", value: "15+", label: "Community Programs" },
  { icon: "✅", value: "25+", label: "Projects Completed" },
];

export const DONATION_OPTIONS: DonationOption[] = [
  {
    id: "tithi-bhojan",
    title: "Sponsor Meals (Tithi Bhojan)",
    amount: "₹1,100",
    description:
      "Provide a full day's nutritious meals for all elderly residents.",
    icon: "🍽️",
  },
  {
    id: "medicines",
    title: "Donate Medicines",
    amount: "₹500+",
    description: "Support medical care and regular health check-ups.",
    icon: "💊",
  },
  {
    id: "clothes",
    title: "Donate Clothes",
    amount: "In-kind",
    description: "Provide warm clothing and seasonal essentials.",
    icon: "👕",
  },
  {
    id: "financial",
    title: "Financial Support",
    amount: "₹501+",
    description:
      "Direct contribution towards ashram operations and development.",
    icon: "💰",
  },
  {
    id: "community",
    title: "Community Sponsorship",
    amount: "₹5,100+",
    description: "Sponsor an event, program, or community initiative.",
    icon: "🌍",
  },
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    title: "Companion Volunteer",
    description:
      "Spend meaningful time with elderly residents — listen, converse, play games, and bring joy.",
    icon: "💬",
    commitment: "Weekends / 4 hrs",
  },
  {
    title: "Ashram Support",
    description:
      "Help with daily activities including meals, hygiene support, and general care.",
    icon: "🏡",
    commitment: "Flexible",
  },
  {
    title: "Community Programs",
    description:
      "Assist in organizing community events, health camps, and awareness programs.",
    icon: "📣",
    commitment: "Event-based",
  },
  {
    title: "Rural Aid Volunteer",
    description:
      "Participate in grassroots rural outreach activities and aid distribution drives.",
    icon: "🌾",
    commitment: "Monthly trips",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ramila Ben Patel",
    role: "Elderly Resident",
    quote:
      "This ashram gave me a family when I had none. Every day I wake up feeling cared for and respected. The staff treat us like their own elders.",
    image: undefined,
  },
  {
    id: 2,
    name: "Suresh Desai",
    role: "Regular Volunteer",
    quote:
      "Volunteering here has been the most fulfilling thing I've done. Seeing the smiles on the elders' faces when we visit makes everything worth it.",
    image: undefined,
  },
  {
    id: 3,
    name: "Dr. Meena Shah",
    role: "Medical Volunteer",
    quote:
      "The foundation's dedication to dignified elder care is truly remarkable. The facilities may be modest, but the love and care they provide is immeasurable.",
    image: undefined,
  },
  {
    id: 4,
    name: "Jayantibhai Modi",
    role: "Community Donor",
    quote:
      "I started supporting Aashro Seva after witnessing their ground-level work in Kayavarohan. Every rupee donated truly makes a difference in someone's life.",
    image: undefined,
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Foundation Celebrates 5 Years of Compassionate Service",
    date: "March 15, 2026",
    category: "Milestone",
    excerpt:
      "Aashro Seva Foundation marks 5 years of dedicated service to the elderly and marginalized communities of Vadodara district.",
    image: "/assets/generated/community-meal.dim_800x500.jpg",
  },
  {
    id: 2,
    title: "New Wing Construction Reaches Halfway Mark",
    date: "February 20, 2026",
    category: "Construction Update",
    excerpt:
      "The new residential wing of Jamnaben Zaverbhai Patel Vruddhashram is now 50% complete, set to accommodate 30 more elderly residents.",
    image: "/assets/generated/old-age-home-construction.dim_800x500.jpg",
  },
  {
    id: 3,
    title: "Annual Health Camp Serves 200+ Elderly Residents",
    date: "January 10, 2026",
    category: "Health Initiative",
    excerpt:
      "With support from local doctors and medical volunteers, the foundation organized a comprehensive health camp benefiting over 200 elderly community members.",
    image: undefined,
  },
  {
    id: 4,
    title: "12AB Tax Exemption Status Successfully Obtained",
    date: "December 5, 2025",
    category: "Legal Milestone",
    excerpt:
      "The Ahmedabad Income Tax Appellate Tribunal upheld the foundation's 12AB registration, strengthening its legal standing as a verified non-profit.",
    image: undefined,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/assets/generated/hero-elder-care.dim_1600x900.jpg",
    alt: "Caring volunteer with elderly resident",
    category: "Care",
    caption: "Daily care and companionship",
  },
  {
    id: 2,
    src: "/assets/generated/community-meal.dim_800x500.jpg",
    alt: "Community meal service",
    category: "Events",
    caption: "Tithi Bhojan community meal",
  },
  {
    id: 3,
    src: "/assets/generated/old-age-home-construction.dim_800x500.jpg",
    alt: "Old age home construction progress",
    category: "Construction",
    caption: "New wing under development",
  },
  {
    id: 4,
    src: "/assets/generated/community-meal.dim_800x500.jpg",
    alt: "Elderly residents gathering",
    category: "Community",
    caption: "Community celebration",
  },
  {
    id: 5,
    src: "/assets/generated/hero-elder-care.dim_1600x900.jpg",
    alt: "Volunteer program",
    category: "Volunteers",
    caption: "Volunteer engagement program",
  },
  {
    id: 6,
    src: "/assets/generated/old-age-home-construction.dim_800x500.jpg",
    alt: "Rural outreach program",
    category: "Outreach",
    caption: "Rural community outreach",
  },
];
