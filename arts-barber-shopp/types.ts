export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  avatar?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  priceRange: string;
  duration?: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  rating: number;
  reviewCount: number;
  description: string;
  highlights: string[];
  hours: { day: string; time: string }[];
  locationEmbedUrl: string; // Placeholder for map logic
}