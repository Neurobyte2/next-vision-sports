"use client";

import { useState, useRef } from "react";
import { categories, otherServices, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, MessageSquare, ChevronDown, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSubCategory =
      selectedSubCategory === "All" || p.subcategory === selectedSubCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSubCategory && matchesSearch;
  });

  const whatsappCustomUrl = "https://wa.me/923111879802?text=Hello,%20I%20would%20like%20to%20inquire%20about%20custom%20sportswear%20manufacturing.";

  return (
    <div className="min-h-screen bg-[#090A0F] text-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CATALOG HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">Digital Showroom</span>
          <h1 className="text-2xl sm:text-5xl font-black uppercase tracking-tight mb-3">
            Professional Sportswear Catalog
          </h1>
          <p className="text-gray-400 text-xs sm:text-base leading-relaxed">
            Browse our complete live inventory of sportswear designs, caps, embroidery patches, tracksuits, and custom manufacturing solutions from NexVion Sportswear.
          </p>
        </div>

        {/* SEARCH & STICKY FILTER BAR */}
        <div className="sticky top-16 z-30 bg-[#090A0F]/95 backdrop-blur-md py-3 mb-6 space-y-3">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search designs or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12141C] border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-lg"
            />
          </div>

          {/* CATEGORY SCROLLER WITH DESKTOP ARROWS */}
          <div className="relative flex items-center group">
            {/* Left Scroll Button (Desktop) */}
            <button
              onClick={() => scrollCategories("left")}
              className="hidden md:flex absolute -left-3 z-10 bg-[#12141C]/90 hover:bg-emerald-600 text-white p-2 rounded-full border border-gray-700 shadow-xl transition-all cursor-pointer items-center justify-center backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Category Container */}
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 touch-pan-x [-webkit-overflow-scrolling:touch] scrollbar-none w-full px-1 scroll-smooth"
            >
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedSubCategory("All");
                }}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer active:scale-95 shrink-0 ${
                  selectedCategory === "All"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/40"
                    : "bg-[#12141C] text-gray-300 border border-gray-800 hover:border-gray-600"
                }`}
              >
                All Active Categories
              </button>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubCategory("All");
                  }}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer active:scale-95 shrink-0 ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/40"
                      : "bg-[#12141C] text-gray-300 border border-gray-800 hover:border-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Scroll Button (Desktop) */}
            <button
              onClick={() => scrollCategories("right")}
              className="hidden md:flex absolute -right-3 z-10 bg-[#12141C]/90 hover:bg-emerald-600 text-white p-2 rounded-full border border-gray-700 shadow-xl transition-all cursor-pointer items-center justify-center backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RESULTS COUNT & FILTER STATUS */}
        <div className="mb-6 flex items-center justify-between text-xs text-gray-400 px-1">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-400" />
            <span>Showing category: <strong className="text-white">{selectedCategory}</strong></span>
          </div>
          <span><strong>{filteredProducts.length}</strong> items</span>
        </div>

        {/* FOOTBALL SUB-CATEGORY DROPDOWN */}
        {selectedCategory === "Football / Soccer Wear" && (
          <div className="mb-8 bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">⚽ Football Sub-Categories:</span>
            <div className="relative w-full sm:w-72">
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="w-full bg-[#090A0F] border border-emerald-500/50 rounded-xl px-4 py-2.5 text-xs text-white appearance-none focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="All">All Football Items</option>
                <option value="Soccer Jerseys">Soccer Jerseys (a to z)</option>
                <option value="Full Kits">Full Kits / Uniforms (a to w)</option>
                <option value="Football Jackets">Football Jackets (a to r)</option>
                <option value="Football Tracksuits">Football Tracksuits (a to g)</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
            </div>
          </div>
        )}

        {/* BASEBALL / SOFTBALL SUB-CATEGORY DROPDOWN */}
        {selectedCategory === "Baseball / Softball Wear" && (
          <div className="mb-8 bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">⚾ Baseball & Softball Sub-Categories:</span>
            <div className="relative w-full sm:w-72">
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="w-full bg-[#090A0F] border border-emerald-500/50 rounded-xl px-4 py-2.5 text-xs text-white appearance-none focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="All">All Baseball & Softball Items</option>
                <option value="Baseball Jerseys">Baseball Jerseys (a to q)</option>
                <option value="Softball Uniforms">Softball Uniforms (a to f)</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
            </div>
          </div>
        )}

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showExploreButton={false} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#12141C] border border-gray-800 rounded-3xl p-6 mb-16">
            <h3 className="text-lg font-bold uppercase text-white mb-2">No matching designs found</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 max-w-md mx-auto">
              We manufacture all custom sportswear on request. Contact us directly on WhatsApp to discuss your exact design specifications.
            </p>
            <a
              href={whatsappCustomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4" /> Inquire on WhatsApp
            </a>
          </div>
        )}

        {/* OTHER CUSTOM MANUFACTURING CAPABILITIES SECTION */}
        <div className="bg-[#12141C] border border-gray-800 rounded-3xl p-6 sm:p-12" id="custom-services">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">Additional Capabilities</span>
            <h2 className="text-xl sm:text-3xl font-black uppercase tracking-wide text-white mb-3">
              Other Custom Manufacturing Services
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              In addition to our live catalog above, NexVion Sportswear also manufactures the following sportswear categories on custom client order.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {otherServices.map((service, idx) => (
              <div key={idx} className="bg-[#090A0F] border border-gray-800 p-3 rounded-2xl flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="truncate">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/923111879802?text=Hello,%20I%20would%20like%20to%20inquire%20about%20manufacturing%20custom%20sportswear%20for%20one%20of%20your%20additional%20categories."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-950"
            >
              <MessageSquare className="w-4 h-4" /> Request Custom Quote for Other Sports
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}