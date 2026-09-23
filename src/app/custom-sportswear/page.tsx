import Link from "next/link";
import { MessageSquare, ShieldCheck, Zap, Scissors, Layers } from "lucide-react";

export default function CustomSportswearPage() {
  const whatsappUrl = "https://wa.me/923111879802?text=Hello,%20I%20would%20like%20to%20discuss%20a%20custom%20sportswear%20manufacturing%20project.";

  return (
    <div className="min-h-screen bg-[#090A0F] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">B2B Manufacturing Solutions</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">
            Custom Sportswear Engineering
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            As direct manufacturers based in Sialkot, Pakistan, <strong className="text-white">NexVion Sportswear</strong> offers end-to-end custom production tailored for brands, clubs, and academies worldwide.
          </p>
        </div>

        {/* CUSTOMIZATION METHODS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/25 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Sublimation Printing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vibrant, permanent full-color digital printing embedded directly into performance polyester fibers. Colors never fade, crack, or peel.
            </p>
          </div>

          <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/25 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Precision Cut & Sew</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom athletic panel stitching built to exact anatomical sizing charts, ensuring maximum comfort and ergonomic fit during professional matches.
            </p>
          </div>

          <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/25 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Embroidery & Patches</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-density crest embroidery, woven club badges, 3D puff embroidery caps, and durable DTF heat-seal branding options.
            </p>
          </div>

        </div>

        {/* STEP BY STEP MANUFACTURING PROCESS */}
        <div className="bg-[#12141C] border border-gray-800 rounded-3xl p-8 sm:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
              How Custom Orders Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#090A0F] border border-gray-800 p-6 rounded-2xl">
              <span className="text-emerald-400 font-black text-lg block mb-2">01</span>
              <h4 className="text-white font-bold uppercase text-sm mb-2">Submit Specs</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Send us your team design mockups, logos, color codes, and size breakdowns via WhatsApp or email.</p>
            </div>
            <div className="bg-[#090A0F] border border-gray-800 p-6 rounded-2xl">
              <span className="text-emerald-400 font-black text-lg block mb-2">02</span>
              <h4 className="text-white font-bold uppercase text-sm mb-2">Sample / Mockup</h4>
              <p className="text-gray-400 text-xs leading-relaxed">We review technical specifications, confirm fabric choices, and prepare digital previews or pre-production samples.</p>
            </div>
            <div className="bg-[#090A0F] border border-gray-800 p-6 rounded-2xl">
              <span className="text-emerald-400 font-black text-lg block mb-2">03</span>
              <h4 className="text-white font-bold uppercase text-sm mb-2">Bulk Production</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Manufacturing begins in our Sialkot facility with strict quality control checks at every stitching and printing stage.</p>
            </div>
            <div className="bg-[#090A0F] border border-gray-800 p-6 rounded-2xl">
              <span className="text-emerald-400 font-black text-lg block mb-2">04</span>
              <h4 className="text-white font-bold uppercase text-sm mb-2">Global Dispatch</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Secure bulk packaging and expedited international courier delivery directly to your club or warehouse doorstep.</p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center bg-gradient-to-r from-emerald-950/40 via-gray-900 to-gray-900 border border-emerald-900/40 rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 text-white">
            Start Your Custom Production Run Today
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8">
            Speak directly with our production experts in Sialkot to discuss custom team quotas, samples, and competitive pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Start WhatsApp Discussion
            </a>
            <Link
              href="/catalog"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
            >
              View Ready Catalog
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}