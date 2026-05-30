export interface NavItem {
  label: string;
  href: string;
}

export interface ImpactStat {
  icon: string;
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  message: string;
  vision: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

export interface DonationOption {
  id: string;
  title: string;
  amount: string;
  description: string;
  icon: string;
}

export interface VolunteerRole {
  title: string;
  description: string;
  icon: string;
  commitment: string;
}
