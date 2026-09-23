import Link from "next/link";
import { ShieldCheck, Globe, Zap, MessageSquare, MapPin, ExternalLink } from "lucide-react";

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/923111879802?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20NexVion%20Sportswear%20manufacturing%20capabilities.";
  const googleMapsUrl = "https://goo.gl/maps/wNxw5LZ5YNy5KSJf7?g_st=aw";

  return (
    <div className="min-h-screen bg-[#090A0F] text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">Company Overview</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">
            About NexVion Sportswear
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Based in <strong className="text-white">Sialkot, Pakistan</strong>, NexVion Sportswear is a dedicated professional sportswear manufacturer and supplier, partnering with global teams, clubs, and brands under <span className="text-emerald-400 font-medium">nexvionsportswear.com</span>.
          </p>
        </div>

        {/* CORE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Craftsmanship</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expertly crafted athletic wear built for maximum durability, breathability, and professional performance on the field or court.
            </p>
          </div>

          <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Custom Manufacturing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialized in sublimation printing, custom team kits, embroidery, screen printing, and DTF branding according to your specifications.
            </p>
          </div>

          <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Global Standards</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Proudly manufacturing in Sialkot and supplying international sports clubs, academies, and private label sportswear brands.
            </p>
          </div>
        </div>

        {/* LOCATION & CTA */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-gray-900 to-gray-900 border border-emerald-900/40 rounded-3xl p-8 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4" /> Sialkot, Pakistan
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 text-white">
            Ready to Discuss Your Team Order?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
            Connect directly with our manufacturing facility in Sialkot or message us via WhatsApp to share your design requirements and get prompt assistance.
          </p>
          
          {/* Interactive Maps Link Button */}
          <div className="mb-8">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs font-semibold bg-emerald-950/60 border border-emerald-500/40 px-4 py-2 rounded-full transition-all"
            >
              <span>View Headquarters on Google Maps</span> <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Connect via WhatsApp
            </a>
            <Link
              href="/catalog"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
            >
              Explore Catalog
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}