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
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

/* ---------- Work gallery ---------- */
export type GalleryItem = { image: string; title: string; deva?: string; category: string };
export const galleryCategories = ["All", "Weddings", "Pre-Wedding", "Portraits", "Editorial", "Details"];

export const gallery: GalleryItem[] = [
  { image: "/images/hero.jpg", title: "Fireworks & Vows", deva: "शुभ मुहूर्त", category: "Weddings" },
  { image: "/images/work-haldi.jpg", title: "Haldi Morning", deva: "हल्दी", category: "Weddings" },
  { image: "/images/marquee-1.jpg", title: "Her Entry", deva: "विदाई", category: "Weddings" },
  { image: "/images/work-prewedding.jpg", title: "Desert Prelude", deva: "प्री-वेडिंग", category: "Pre-Wedding" },
  { image: "/images/work-desert.jpg", title: "Bada Bagh at Golden Hour", deva: "जैसलमेर", category: "Pre-Wedding" },
  { image: "/images/work-portrait.jpg", title: "The Quiet Bride", deva: "दुल्हन", category: "Portraits" },
  { image: "/images/detail-groom.jpg", title: "The Groom", deva: "दूल्हा", category: "Portraits" },
  { image: "/images/work-fashion.jpg", title: "Noir Muse", deva: "फ़ैशन", category: "Editorial" },
  { image: "/images/about.jpg", title: "Behind the Frame", deva: "कहानी", category: "Details" },
  { image: "/images/detail-hands.jpg", title: "Heirloom Hands", deva: "हाथ", category: "Details" },
  { image: "/images/detail-decor.jpg", title: "The Mandap", deva: "मंडप", category: "Details" },
  { image: "/images/detail-jewelry.jpg", title: "Polki & Pearls", deva: "आभूषण", category: "Details" },
  { image: "/images/detail-mehndi1.jpg", title: "Mehndi Stories", deva: "मेहंदी", category: "Details" },
  { image: "/images/detail-mehndi2.jpg", title: "Red & Gold", deva: "चूड़ियाँ", category: "Details" },
  { image: "/images/detail-marigold.jpg", title: "Marigold Dreams", deva: "गेंदा", category: "Details" },
];

/* ---------- Services (full detail) ---------- */
export type ServiceDetail = {
  name: string; deva: string; price: string; tagline: string; image: string; includes: string[];
};
export const serviceDetails: ServiceDetail[] = [
  {
    name: "Royal Weddings", deva: "शादी", price: "from ₹1,50,000",
    tagline: "Multi-day celebrations, shot like cinema.",
    image: "/images/hero.jpg",
    includes: [
      "2 photographers + candid cinematographer",
      "Up to 3 days of full coverage",
      "600+ hand-edited photographs",
      "60-second teaser reel within a week",
      "Premium lay-flat wedding album",
      "Online gallery for family & guests",
    ],
  },
  {
    name: "Pre-Wedding Stories", deva: "प्री-वेडिंग", price: "from ₹65,000",
    tagline: "Your love story, in a place that feels like you.",
    image: "/images/work-prewedding.jpg",
    includes: [
      "Full-day shoot, up to 2 locations",
      "Concept & styling consultation",
      "150+ hand-edited photographs",
      "Cinematic couple teaser",
      "Outfit & mood-board guidance",
      "Travel across Rajasthan included",
    ],
  },
  {
    name: "Fashion & Editorial", deva: "फ़ैशन", price: "from ₹45,000",
    tagline: "Campaigns, lookbooks and magazine stories.",
    image: "/images/work-fashion.jpg",
    includes: [
      "Half or full-day studio/location shoot",
      "Creative direction & mood-boarding",
      "50 professionally retouched selects",
      "Hair, makeup & styling coordination",
      "Same-week delivery of selects",
      "Usage licence for campaigns",
    ],
  },
  {
    name: "Portraits", deva: "पोर्ट्रेट", price: "from ₹25,000",
    tagline: "Bridal, family and personal portraits.",
    image: "/images/work-portrait.jpg",
    includes: [
      "2-hour guided portrait session",
      "1 location of your choice",
      "30 hand-edited portraits",
      "Outfit change & styling tips",
      "Private online gallery",
      "Fine-art print options",
    ],
  },
  {
    name: "Sangeet & Events", deva: "संगीत", price: "from ₹55,000",
    tagline: "Every dhol beat, every dance-off.",
    image: "/images/work-haldi.jpg",
    includes: [
      "Full-event candid coverage",
      "Stage & performance highlights",
      "300+ hand-edited photographs",
      "Same-night social-media selects",
      "Family group portraits",
      "Add-on: sangeet after-movie",
    ],
  },
];

/* ---------- FAQ ---------- */
export const faqs = [
  {
    q: "How far in advance should we book?",
    a: "For the wedding season (October–February), 6–9 months ahead is safest. That said, dates do open up — tell us yours and we'll check right away.",
  },
  {
    q: "Do you travel outside Jaipur?",
    a: "All the time — 28 cities and counting, from Udaipur to Goa to Delhi. Travel within Rajasthan is on us; beyond that it's billed at cost, nothing more.",
  },
  {
    q: "How do we reserve our date?",
    a: "A 50% advance and a simple signed agreement. Your date is locked the moment both are in — we take on a limited number of weddings each season.",
  },
  {
    q: "When do we receive our photos?",
    a: "Sneak peeks within 48 hours (for the Instagram itch), the full edited gallery in 3–4 weeks, and albums in 6–8 weeks.",
  },
  {
    q: "Can we customise a package?",
    a: "Every celebration is different. Tell us what matters most — the people, the rituals, the party — and we'll build the coverage around it.",
  },
  {
    q: "Do you also shoot video?",
    a: "Yes. Candid wedding films, teasers and sangeet after-movies — shot in the same unobtrusive style as our stills.",
  },
];

/* ---------- Detail strip images ---------- */
export const detailStrip = [
  { image: "/images/detail-hands.jpg", label: "Heirloom hands" },
  { image: "/images/detail-decor.jpg", label: "The mandap" },
  { image: "/images/detail-jewelry.jpg", label: "Polki & pearls" },
  { image: "/images/detail-mehndi1.jpg", label: "Mehndi stories" },
  { image: "/images/detail-marigold.jpg", label: "Marigold dreams" },
  { image: "/images/detail-groom.jpg", label: "The groom" },
  { image: "/images/detail-mehndi2.jpg", label: "Red & gold" },
  { image: "/images/marquee-1.jpg", label: "Her entry" },
];
