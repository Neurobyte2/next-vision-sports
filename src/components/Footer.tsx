import Link from "next/link";
import { MessageSquare, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const googleMapsUrl = "https://goo.gl/maps/wNxw5LZ5YNy5KSJf7?g_st=aw";

  return (
    <footer className="bg-[#07080C] border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <span className="text-xl font-black uppercase text-white tracking-wider block mb-3">
              NexVion Sportswear
            </span>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed mb-6">
              Engineering performance and crafting custom excellence. Direct professional sportswear manufacturer based in Sialkot, Pakistan, delivering premium quality globally under nexvionsportswear.com.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/923111879802"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/nexvion_sports/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 border border-gray-700 hover:border-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/catalog" className="hover:text-emerald-400 transition-colors">Digital Catalog</Link></li>
              <li><Link href="/custom-sportswear" className="hover:text-emerald-400 transition-colors">Custom Manufacturing</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Direct</Link></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Headquarters</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>Sialkot, Punjab, Pakistan</span>
              </li>
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-xs transition-colors bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-lg"
                >
                  <span>Open in Google Maps</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:03111879802" className="hover:text-white">03111-879802</a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:abdullahjarral194@gmail.com" className="hover:text-white truncate">abdullahjarral194@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800/80 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} NexVion Sportswear (nexvionsportswear.com). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}