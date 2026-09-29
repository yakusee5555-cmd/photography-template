export const studio = {
  name: "Kahani Studios",
  deva: "कहानी",
  tagline: "Stories in every frame.",
  city: "Jaipur",
  state: "Rajasthan",
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  email: "hello@kahanistudios.in",
  instagram: "@kahani.studios",
  instagramHref: "https://instagram.com/",
  address: "14, Johari Bazaar, Pink City, Jaipur 302003",
  hours: "Mon–Sat · 10am–7pm",
};

export const marqueeItems = [
  "Royal Weddings",
  "शादी",
  "Pre-Wedding Stories",
  "Fashion Editorials",
  "फ़ैशन",
  "Portraits",
  "Sangeet & Events",
  "पोर्ट्रेट",
];

export interface Project {
  title: string;
  deva: string;
  category: string;
  location: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "A Royal Udaipur Wedding",
    deva: "शाही शादी",
    category: "Wedding",
    location: "Udaipur",
    year: "2025",
    image: "/images/work-wedding.jpg",
  },
  {
    title: "Jaipur Pre-Wedding Diaries",
    deva: "प्री-वेडिंग",
    category: "Pre-Wedding",
    location: "Jaipur",
    year: "2025",
    image: "/images/work-prewedding.jpg",
  },
  {
    title: "Noor — Fashion Editorial",
    deva: "नूर",
    category: "Fashion",
    location: "Mumbai",
    year: "2024",
    image: "/images/work-fashion.jpg",
  },
  {
    title: "Bada Bagh at Golden Hour",
    deva: "जैसलमेर",
    category: "Portrait",
    location: "Jaisalmer",
    year: "2024",
    image: "/images/work-desert.jpg",
  },
  {
    title: "Haldi Mornings",
    deva: "हल्दी",
    category: "Wedding",
    location: "Jodhpur",
    year: "2025",
    image: "/images/work-haldi.jpg",
  },
  {
    title: "Her, Unposed",
    deva: "अंदाज़",
    category: "Portrait",
    location: "Delhi",
    year: "2024",
    image: "/images/work-portrait.jpg",
  },
];

export interface Service {
  num: string;
  title: string;
  deva: string;
  desc: string;
  price: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Royal Weddings",
    deva: "शादी",
    desc: "Two cinematographers, one photographer, and a crew that melts into your baraat. Full-day coverage from haldi to vidaai — every ritual, every tear, every dance-off.",
    price: "from ₹1,50,000",
  },
  {
    num: "02",
    title: "Pre-Wedding Stories",
    deva: "कहानी",
    desc: "Concept shoots across Rajasthan's palaces, deserts and old-city lanes. We scout, style and direct — you just show up in love.",
    price: "from ₹65,000",
  },
  {
    num: "03",
    title: "Fashion & Editorial",
    deva: "फ़ैशन",
    desc: "Campaigns, lookbooks and magazine editorials with a distinctly Indian eye — from bridal couture to streetwear in the Pink City.",
    price: "from ₹45,000",
  },
  {
    num: "04",
    title: "Portraits",
    deva: "पोर्ट्रेट",
    desc: "Slow, deliberate portrait sessions in natural light. No stiff poses — just you, unposed and unforgettable.",
    price: "from ₹25,000",
  },
  {
    num: "05",
    title: "Sangeet & Events",
    deva: "संगीत",
    desc: "High-energy coverage of sangeets, receptions and celebrations. We shoot the chaos beautifully.",
    price: "from ₹55,000",
  },
];

export const stats = [
  { value: "400+", label: "Weddings told" },
  { value: "12", label: "Years behind the lens" },
  { value: "28", label: "Cities travelled" },
  { value: "40+", label: "Awards & features" },
];

export const testimonials = [
  {
    quote:
      "They didn't just photograph our wedding — they narrated it. Every time we open the album, my mother cries again.",
    name: "Ananya & Vikram Sharma",
    detail: "Udaipur Wedding, 2025",
  },
  {
    quote:
      "The pre-wedding shoot felt like a film we were starring in. Jaipur has never looked this romantic — not even in the movies.",
    name: "Meera & Arjun Rathore",
    detail: "Pre-Wedding, Jaipur 2025",
  },
  {
    quote:
      "Working with Kahani on our couture editorial was effortless. They see light the way poets see words.",
    name: "Designer Label — Noor",
    detail: "Fashion Editorial, Mumbai 2024",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];
