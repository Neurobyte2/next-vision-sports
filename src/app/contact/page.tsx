import { Phone, Mail, MapPin, MessageSquare, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/923111879802?text=Hello,%20I%20would%20like%20to%20get%20in%20touch%20regarding%20NexVion%20Sportswear%20manufacturing.";
  const googleMapsUrl = "https://goo.gl/maps/wNxw5LZ5YNy5KSJf7?g_st=aw";

  return (
    <div className="min-h-screen bg-[#090A0F] text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">Direct Communication</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">
            Contact NexVion Sportswear
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We operate as a direct B2B manufacturer and showcase catalog at <span className="text-emerald-400 font-medium">nexvionsportswear.com</span>. Contact us instantly through any of the channels below for inquiries, custom orders, and catalogs.
          </p>
        </div>

        {/* CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* WhatsApp / Phone */}
          <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2">Phone & WhatsApp</h3>
              <p className="text-gray-400 text-sm mb-6">
                Available for direct calls and instant WhatsApp messaging.
              </p>
              <div className="space-y-3 mb-8">
                <a href="tel:+923111879802" className="text-lg font-bold text-white hover:text-emerald-400 transition-colors block">
                  +92 311 1879802
                </a>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Open WhatsApp Chat
            </a>
          </div>

          {/* Email / Instagram / Address */}
          <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2">Email & Socials</h3>
              <p className="text-gray-400 text-sm mb-6">
                Send us your detailed inquiries or visit our official Instagram page.
              </p>
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <a href="mailto:abdullahjarral194@gmail.com" className="hover:text-white transition-colors truncate">
                    abdullahjarral194@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-4 h-4 fill-emerald-500 shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a href="https://www.instagram.com/nexvion_sports/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Instagram Showcase (@nexvion_sports)
                  </a>
                </div>
              </div>
            </div>
            <a
              href="mailto:abdullahjarral194@gmail.com"
              className="bg-gray-800 hover:bg-gray-700 text-white w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              Send Email Inquiry
            </a>
          </div>

        </div>

        {/* HEADQUARTERS LOCATION CARD */}
        <div className="bg-[#12141C] border border-gray-800 p-8 rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">Manufacturing Facility</h3>
              <p className="text-gray-400 text-sm">Sialkot, Punjab, Pakistan</p>
            </div>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 px-6 py-3 rounded-xl text-xs font-semibold transition-all shrink-0"
          >
            <span>Open Location in Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}