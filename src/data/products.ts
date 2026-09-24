import { Product } from "@/types";

// Active categories that have real image folders and products
export const categories = [
  "Football / Soccer Wear",
  "Basketball Wear",
  "Baseball / Softball Wear",
  "Sports Caps & Headwear",
  "Embroidery Patches",
  "Sports Shorts",
  "Tracksuits",
  "Hoodies & Sweatshirts",
  "Compression Tops",
  "Hockey Wear",
  "Bags & Team Gear",
  "Headwear & Beanies",
  "Footwear & Shoes",
  "Polo T-Shirts",
  "Crop Tops",
  "Sweatshirts",
  "Tank Tops",
  "Outerwear & Jackets",
  "Boxing & Combat Wear",
  "Tennis Wear",
  "Custom Showcase",
  "Custom Sportswear",
];

// Additional services offered on request
export const otherServices = [
  "Ice Hockey Wear",
  "Rugby Wear",
  "Cricket Wear",
  "Volleyball Wear",
  "Running & Athletics",
  "Gym & Fitness Wear",
  "Cycling Wear",
  "Tennis & Padel",
  "Boxing & Combat Sports",
  "Outdoor / Performance Wear",
  "Team & Casual Sportswear",
  "Sports Accessories",
];

export const products: Product[] = [
  // --- FOOTBALL: SOCCER JERSEYS (a.jpeg to z.jpeg) ---
  ...Array.from({ length: 26 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-fb-jersey-${letter}`,
      name: `Professional Match Soccer Jersey (${letter.toUpperCase()})`,
      category: "Football / Soccer Wear",
      subcategory: "Soccer Jerseys",
      image: `/images/football-jerseys/${letter}.jpeg`,
      description: "High-performance breathable fabric engineered for professional soccer matches. Custom team crest and sublimation options available.",
      featured: i < 2,
    };
  }),

  // --- FOOTBALL: FULL KITS / UNIFORMS (a.jpeg to w.jpeg) ---
  ...Array.from({ length: 23 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-fb-uniform-${letter}`,
      name: `Elite Football Full Kit & Uniform (${letter.toUpperCase()})`,
      category: "Football / Soccer Wear",
      subcategory: "Full Kits",
      image: `/images/football-uniforms/${letter}.jpeg`,
      description: "Complete matching jersey and shorts set built with professional-grade moisture-wicking athletic mesh.",
      featured: i === 0,
    };
  }),

  // --- FOOTBALL: JACKETS (a.jpeg to r.jpeg) ---
  ...Array.from({ length: 18 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-fb-jacket-${letter}`,
      name: `Professional Football Training Jacket (${letter.toUpperCase()})`,
      category: "Football / Soccer Wear",
      subcategory: "Football Jackets",
      image: `/images/football-jackets/${letter}.jpeg`,
      description: "Weather-resistant professional training jacket designed for optimal warmth and mobility on the pitch.",
      featured: false,
    };
  }),

  // --- FOOTBALL: TRACKSUITS (a.jpeg to g.jpeg) ---
  ...Array.from({ length: 7 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-fb-tracksuit-${letter}`,
      name: `Football Presentation Tracksuit (${letter.toUpperCase()})`,
      category: "Football / Soccer Wear",
      subcategory: "Football Tracksuits",
      image: `/images/football-tracksuits/${letter}.jpeg`,
      description: "Elite football warm-up tracksuit built for travel and pre-match sessions.",
      featured: false,
    };
  }),

  // --- BASKETBALL WEAR (a.jpeg to n.jpeg) ---
  ...Array.from({ length: 14 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-bb-${letter}`,
      name: `Championship Basketball Uniform Set (${letter.toUpperCase()})`,
      category: "Basketball Wear",
      subcategory: "Basketball Sets",
      image: `/images/basketball/${letter}.jpeg`,
      description: "Reversible lightweight mesh basketball uniform designed for maximum mobility and durability on court.",
      featured: i === 0,
    };
  }),

  // --- BASEBALL WEAR (a.jpeg to q.jpeg) ---
  ...Array.from({ length: 17 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-baseball-${letter}`,
      name: `Pro Team Baseball Jersey & Uniform (${letter.toUpperCase()})`,
      category: "Baseball / Softball Wear",
      subcategory: "Baseball Jerseys",
      image: `/images/baseball/${letter}.jpeg`,
      description: "Traditional button-down or pullover baseball jersey crafted with durable, breathable double-knit fabric.",
      featured: i === 0,
    };
  }),

  // --- SOFTBALL WEAR (a.jpeg to f.jpeg) ---
  ...Array.from({ length: 6 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-softball-${letter}`,
      name: `Elite Softball Uniform Set (${letter.toUpperCase()})`,
      category: "Baseball / Softball Wear",
      subcategory: "Softball Uniforms",
      image: `/images/softball/${letter}.jpeg`,
      description: "Ergonomically tailored softball uniform designed for full range of motion and comfort during play.",
      featured: false,
    };
  }),

  // --- SPORTS CAPS & HEADWEAR (a.jpeg to n.jpeg) ---
  ...Array.from({ length: 14 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-caps-${letter}`,
      name: `Custom Athletic Sports Cap (${letter.toUpperCase()})`,
      category: "Sports Caps & Headwear",
      subcategory: "Sports Caps",
      image: `/images/caps/${letter}.jpeg`,
      description: "Structured athletic cap featuring moisture-wicking sweatbands and custom 3D embroidery branding.",
      featured: i === 0,
    };
  }),

  // --- EMBROIDERY PATCHES (a.jpeg to i.jpeg) ---
  ...Array.from({ length: 9 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-patches-${letter}`,
      name: `Custom Precision Embroidery Patch (${letter.toUpperCase()})`,
      category: "Embroidery Patches",
      subcategory: "Embroidery Patches",
      image: `/images/embroiderypatches/${letter}.jpeg`,
      description: "High-density custom woven and embroidered team crests and badges with iron-on or stitch backing.",
      featured: i === 0,
    };
  }),

  // --- SPORTS SHORTS (a.jpeg to r.jpeg) ---
  ...Array.from({ length: 18 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-shorts-${letter}`,
      name: `Performance Athletic Training Shorts (${letter.toUpperCase()})`,
      category: "Sports Shorts",
      subcategory: "Sports Shorts",
      image: `/images/shorts/${letter}.jpeg`,
      description: "Lightweight, breathable multi-sport shorts with deep pockets and secure elastic waistbands.",
      featured: i === 0,
    };
  }),

  // --- TRACKSUITS (a.jpeg to g.jpeg) ---
  ...Array.from({ length: 7 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-tracksuits-${letter}`,
      name: `Elite Team Presentation Tracksuit (${letter.toUpperCase()})`,
      category: "Tracksuits",
      subcategory: "Tracksuits",
      image: `/images/tracksuits/${letter}.jpeg`,
      description: "Premium fleece-lined or lightweight polyester tracksuit engineered for travel, training, and warm-ups.",
      featured: i === 0,
    };
  }),

  // --- HOODIES & SWEATSHIRTS (a.jpeg to e.jpeg) ---
  ...Array.from({ length: 5 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-hoodies-${letter}`,
      name: `Custom Team Hoodie & Sweatshirt (${letter.toUpperCase()})`,
      category: "Hoodies & Sweatshirts",
      subcategory: "Hoodies",
      image: `/images/hoodies/${letter}.jpeg`,
      description: "Heavyweight cotton-blend custom team hoodie with lined hood and kangaroo pocket.",
      featured: i === 0,
    };
  }),

  // --- COMPRESSION TOPS (a.jpeg to f.jpeg) ---
  ...Array.from({ length: 6 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-compression-${letter}`,
      name: `Pro Athletic Compression Base Layer (${letter.toUpperCase()})`,
      category: "Compression Tops",
      subcategory: "Compression Tops",
      image: `/images/compression-tops/${letter}.jpeg`,
      description: "High-stretch moisture-wicking compression shirt designed to support muscle recovery and thermal regulation.",
      featured: false,
    };
  }),

  // --- HOCKEY JERSEYS (a.jpeg to i.jpeg) ---
  ...Array.from({ length: 9 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-hockey-${letter}`,
      name: `Professional Ice Hockey Jersey (${letter.toUpperCase()})`,
      category: "Hockey Wear",
      subcategory: "Hockey Jerseys",
      image: `/images/hockeyjerseys/${letter}.jpeg`,
      description: "Heavy-duty reinforced tackle twill hockey jersey built with ultra-durable athletic mesh.",
      featured: false,
    };
  }),

  // --- TEAM BAGS (a.jpeg to m.jpeg) ---
  ...Array.from({ length: 13 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-teambags-${letter}`,
      name: `Heavy-Duty Custom Team Sports Bag (${letter.toUpperCase()})`,
      category: "Bags & Team Gear",
      subcategory: "Team Bags",
      image: `/images/teambags/${letter}.jpeg`,
      description: "Spacious waterproof equipment bag with custom embroidered team logos and separate shoe compartments.",
      featured: false,
    };
  }),

  // --- GENERAL BAGS (a.jpeg to n.jpeg) ---
  ...Array.from({ length: 14 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-bags-${letter}`,
      name: `Athletic Backpack & Duffel (${letter.toUpperCase()})`,
      category: "Bags & Team Gear",
      subcategory: "Bags",
      image: `/images/bags/${letter}.jpeg`,
      description: "Multi-purpose durable athletic backpack and duffel designed for daily training gear and travel.",
      featured: false,
    };
  }),

  // --- BEANIES (a.jpeg to n.jpeg) ---
  ...Array.from({ length: 14 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-beanies-${letter}`,
      name: `Custom Embroidered Winter Beanie (${letter.toUpperCase()})`,
      category: "Headwear & Beanies",
      subcategory: "Beanies",
      image: `/images/beanies/${letter}.jpeg`,
      description: "Soft stretch-knit acrylic winter beanie featuring high-density embroidered team branding.",
      featured: false,
    };
  }),

  // --- SHOES (a.jpeg to k.jpeg) ---
  ...Array.from({ length: 11 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-shoes-${letter}`,
      name: `Professional Athletic Footwear & Trainers (${letter.toUpperCase()})`,
      category: "Footwear & Shoes",
      subcategory: "Shoes",
      image: `/images/shoes/${letter}.jpeg`,
      description: "Ergonomic high-traction athletic footwear designed for court grip, running, and multi-sport agility.",
      featured: false,
    };
  }),

  // --- POLO T-SHIRTS (a.jpeg to f.jpeg) ---
  ...Array.from({ length: 6 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-polo-${letter}`,
      name: `Custom Team Presentation Polo (${letter.toUpperCase()})`,
      category: "Polo T-Shirts",
      subcategory: "Polo Shirts",
      image: `/images/polo-t-shirts/${letter}.jpeg`,
      description: "Breathable cotton-poly blend staff and team polo shirt with custom collar embroidery.",
      featured: false,
    };
  }),

  // --- CROP TOPS (a.jpeg to y.jpeg) ---
  ...Array.from({ length: 25 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-croptop-${letter}`,
      name: `Athletic Fitness Crop Top (${letter.toUpperCase()})`,
      category: "Crop Tops",
      subcategory: "Crop Tops",
      image: `/images/crop-tops/${letter}.jpeg`,
      description: "High-support flexible athletic crop top designed for training, cheer, and fitness sessions.",
      featured: false,
    };
  }),

  // --- SWEATSHIRTS (a.jpeg to g.jpeg) ---
  ...Array.from({ length: 7 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-sweatshirt-${letter}`,
      name: `Classic Team Crewneck Sweatshirt (${letter.toUpperCase()})`,
      category: "Sweatshirts",
      subcategory: "Sweatshirts",
      image: `/images/sweatshirts/${letter}.jpeg`,
      description: "Cozy fleece-lined crewneck sweatshirt engineered for pre-game warmth and casual team wear.",
      featured: false,
    };
  }),

  // --- TANK TOPS (a.jpeg to k.jpeg) ---
  ...Array.from({ length: 11 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-tanktop-${letter}`,
      name: `Training Mesh Tank Top (${letter.toUpperCase()})`,
      category: "Tank Tops",
      subcategory: "Tank Tops",
      image: `/images/tanktops/${letter}.jpeg`,
      description: "Lightweight sleeveless athletic tank top optimized for maximum upper-body airflow and flexibility.",
      featured: false,
    };
  }),

  // --- LEATHER JACKETS (a.jpeg to i.jpeg) ---
  ...Array.from({ length: 9 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-leather-${letter}`,
      name: `Premium Custom Varsity Leather Jacket (${letter.toUpperCase()})`,
      category: "Outerwear & Jackets",
      subcategory: "Leather Jackets",
      image: `/images/leatherjackets/${letter}.jpeg`,
      description: "Traditional wool body with genuine leather sleeves and custom chenille patch embroidery options.",
      featured: false,
    };
  }),

  // --- CUSTOM DESIGN (Single picture named a.jpeg) ---
  {
    id: `ns-custom-design-a`,
    name: `Custom Bespoke Design Concept (A)`,
    category: "Custom Showcase",
    subcategory: "Custom Design",
    image: `/images/custom-design/a.jpeg`,
    description: "Sample showcase of specialized custom sublimation and bespoke cut-and-sew engineering by NexVion Sportswear.",
    featured: true,
  },

  // --- BOXING GLOVES (a.jpeg to o.jpeg -> 15 items) ---
  ...Array.from({ length: 15 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-boxing-${letter}`,
      name: `Professional Leather Boxing & Combat Gloves (${letter.toUpperCase()})`,
      category: "Boxing & Combat Wear",
      subcategory: "Boxing Gloves",
      image: `/images/boxing-gloves/${letter}.jpeg`,
      description: "Ergonomic multi-layer foam padding boxing gloves crafted with durable genuine leather for maximum wrist support.",
      featured: false,
    };
  }),

  // --- TENNIS JERSEYS (a.jpeg to k.jpeg) ---
  ...Array.from({ length: 11 }, (_, i) => {
    const letter = String.fromCharCode(97 + i);
    return {
      id: `ns-tennis-${letter}`,
      name: `Pro Court Tennis & Padel Jersey (${letter.toUpperCase()})`,
      category: "Tennis Wear",
      subcategory: "Tennis Jerseys",
      image: `/images/tensi-jerseys/${letter}.jpeg`, // Matches folder name `tensi-jerseys`
      description: "Lightweight, breathable stretch-knit tennis and padel jersey designed for agile court movement.",
      featured: false,
    };
  }),
];