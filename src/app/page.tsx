import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Globe, MessageSquare, Phone } from "lucide-react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);
  const whatsappCustomUrl = "https://wa.me/923111879802?text=Hello,%20I%20would%20like%20to%20discuss%20custom%20sportswear%20manufacturing%20for%20my%20team/brand.";

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#090A0F] via-[#12141C] to-[#090A0F] py-24 sm:py-32 border-b border-gray-800">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-600/10 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" /> Direct Manufacturer from Sialkot, Pakistan
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white max-w-4xl mx-auto leading-none mb-6">
            Engineering Performance, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Crafting Custom Excellence.</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Welcome to <strong className="text-white">NexVion Sportswear</strong>. Explore our professional sportswear catalog and custom manufacturing capabilities designed for global teams, clubs, and brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/catalog"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-2 group"
            >
              Browse Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={whatsappCustomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-900 border border-gray-700 hover:border-emerald-500 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> Custom Inquiry WhatsApp
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-gray-800/80 pt-10">
            <div className="flex items-center justify-center gap-3 text-gray-300 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" /> Premium Athletic Fabrics
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300 text-sm font-medium">
              <Globe className="w-5 h-5 text-emerald-500 shrink-0" /> Global Export Standard
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300 text-sm font-medium">
              <Zap className="w-5 h-5 text-emerald-500 shrink-0" /> Full Custom Sublimation
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DESIGNS SHOWCASE */}
      <section className="py-20 bg-[#07080C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">Digital Showroom</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white mb-4">Featured Sportswear Designs</h2>
            <p className="text-gray-400 text-sm">
              Discover a sample of our high-performance team kits and athletic wear. Contact us directly on WhatsApp for complete catalog access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showExploreButton={true} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 hover:border-emerald-500 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg"
            >
              Browse Complete Catalog <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}