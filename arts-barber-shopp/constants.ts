import { BusinessInfo, Review, Service } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Art's Barber Shop",
  address: "531 E 600 S",
  cityStateZip: "St. George, UT 84770",
  phone: "(435) 628-8307",
  rating: 4.9,
  reviewCount: 37,
  description: "A longtime barber shop staple in St. George where patrons praise the haircuts. We offer a classic experience with a modern touch, ensuring you leave looking and feeling your best.",
  highlights: ["Good for kids", "Restroom available", "Walk-ins Welcome"],
  hours: [
    { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
    { day: "Thursday", time: "9:00 AM – 6:00 PM" },
    { day: "Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
    { day: "Monday", time: "Closed" },
  ],
  locationEmbedUrl: "",
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Classic Haircut",
    description: "A precision cut tailored to your style, finished with a hot lather neck shave.",
    priceRange: "$25 - $35",
    duration: "30 min"
  },
  {
    id: 2,
    title: "Kids Cut",
    description: "Patient and friendly service for the little ones. Perfect for all ages.",
    priceRange: "$20",
    duration: "20 min"
  },
  {
    id: 3,
    title: "Beard Trim & Sculpt",
    description: "Keep your facial hair looking sharp with a professional trim and lineup.",
    priceRange: "$15 - $25",
    duration: "15 min"
  },
  {
    id: 4,
    title: "Hot Towel Shave",
    description: "The ultimate relaxation. Hot towels, essential oils, and a straight razor finish.",
    priceRange: "$30",
    duration: "30 min"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Happy Customer's Wife",
    rating: 5,
    text: "My husband was thrilled with his hair cut. He looks ten years younger!",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    author: "Local Patron",
    rating: 5,
    text: "Great guy and awesome work. The attention to detail is unmatched in town.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    author: "Regular Visitor",
    rating: 5,
    text: "Great haircut, great conversation. It feels like visiting an old friend every time.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/800/600?random=10",
  "https://picsum.photos/800/600?random=11",
  "https://picsum.photos/800/600?random=12",
  "https://picsum.photos/800/600?random=13",
  "https://picsum.photos/800/600?random=14",
  "https://picsum.photos/800/600?random=15",
];