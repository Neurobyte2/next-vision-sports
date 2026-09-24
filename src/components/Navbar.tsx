"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/923111879802?text=Hello,%20I%20am%20interested%20in%20your%20sportswear%20products.%20Please%20provide%20more%20information.";
  const googleMapsUrl = "https://goo.gl/maps/wNxw5LZ5YNy5KSJf7?g_st=aw";

  return (
    <header className="sticky top-0 z-50 bg-[#090A0F]/95 backdrop-blur-md border-b border-gray-800 text-white">
      {/* Top Bar for Direct Contact Info & Clickable Location */}
      <div className="bg-emerald-600 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium flex justify-center items-center gap-4 sm:gap-6">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1 cursor-pointer font-semibold truncate"
          title="Click to open headquarters on Google Maps"
        >
          📍 Sialkot, Pakistan (Map)
        </a>
        <a href="tel:+923111879802" className="hover:underline flex items-center gap-1 shrink-0">
          <Phone className="w-3.5 h-3.5" /> 03111-879802
        </a>
        <a href="mailto:abdullahjarral194@gmail.com" className="hover:underline hidden md:inline truncate">
          abdullahjarral194@gmail.com
        </a>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-lg sm:text-2xl font-black tracking-wider uppercase text-white">
            NexVion <span className="text-emerald-500">Sportswear</span>
          </span>
          <span className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest uppercase">Professional Sportswear Manufacturer</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link href="/catalog" className="hover:text-emerald-400 transition-colors">Catalog</Link>
          <Link href="/custom-sportswear" className="hover:text-emerald-400 transition-colors">Custom Sportswear</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-emerald-900/30"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/nexvion_sports/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 bg-gray-900 border border-gray-800 hover:border-emerald-500 rounded-full text-gray-300 hover:text-white transition-colors hidden sm:flex items-center justify-center"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 hover:text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090A0F] border-b border-gray-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-semibold text-base">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-emerald-400 transition-colors py-1.5 border-b border-gray-900"
            >
              Home
            </Link>
            <Link
              href="/catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-emerald-400 transition-colors py-1.5 border-b border-gray-900"
            >
              Catalog
            </Link>
            <Link
              href="/custom-sportswear"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-emerald-400 transition-colors py-1.5 border-b border-gray-900"
            >
              Custom Sportswear
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-emerald-400 transition-colors py-1.5 border-b border-gray-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-emerald-400 transition-colors py-1.5"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}