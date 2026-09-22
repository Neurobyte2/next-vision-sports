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
  "Custom Sportswear",
];

// Additional services offered on request (no current catalog images)
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

  // --- FOOTBALL: FULL KITS / UNIFORMS (a.jpeg to n.jpeg) ---
  ...Array.from({ length: 14 }, (_, i) => {
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

  // --- SPORTS CAPS & HEADWEAR (a.jpeg to g.jpeg) ---
  ...Array.from({ length: 7 }, (_, i) => {
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
      image: `/images/embroiderypatches/${letter}.jpeg`, // Updated folder name here!
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
];