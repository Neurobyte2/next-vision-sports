"use client";

import { useState } from "react";
import { categories, otherServices, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, MessageSquare, ChevronDown, CheckCircle2 } from "lucide-react";

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <div className="min-h-screen bg-[#090A0F] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CATALOG HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">Digital Showroom</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            Professional Sportswear Catalog
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Browse our complete live inventory of sportswear designs, caps, embroidery patches, tracksuits, and custom manufacturing solutions.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#12141C] p-4 rounded-2xl border border-gray-800">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search designs, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#090A0F] border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 w-full md:w-auto justify-end">
            <Filter className="w-4 h-4 text-emerald-400" />
            <span>Showing <strong>{filteredProducts.length}</strong> available designs</span>
          </div>
        </div>

        {/* CATEGORY FILTER PILLS (Responsive Horizontal Scroll on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin scrollbar-thumb-gray-800">
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedSubCategory("All");
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === "All"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40"
                : "bg-[#12141C] text-gray-400 hover:text-white border border-gray-800"
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
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40"
                  : "bg-[#12141C] text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FOOTBALL SUB-CATEGORY DROPDOWN */}
        {selectedCategory === "Football / Soccer Wear" && (
          <div className="mb-10 bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">⚽ Football Sub-Categories:</span>
            <div className="relative w-full sm:w-72">
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="w-full bg-[#090A0F] border border-emerald-500/50 rounded-xl px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="All">All Football Items</option>
                <option value="Soccer Jerseys">Soccer Jerseys (a to z)</option>
                <option value="Full Kits">Full Kits / Uniforms (a to n)</option>
                <option value="Football Jackets">Football Jackets (a to r)</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
            </div>
          </div>
        )}

        {/* BASEBALL / SOFTBALL SUB-CATEGORY DROPDOWN */}
        {selectedCategory === "Baseball / Softball Wear" && (
          <div className="mb-10 bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">⚾ Baseball & Softball Sub-Categories:</span>
            <div className="relative w-full sm:w-72">
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="w-full bg-[#090A0F] border border-emerald-500/50 rounded-xl px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="All">All Baseball & Softball Items</option>
                <option value="Baseball Jerseys">Baseball Jerseys (a to q)</option>
                <option value="Softball Uniforms">Softball Uniforms (a to f)</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
            </div>
          </div>
        )}

        {/* PRODUCTS GRID (Optimized Responsive Layout: 1 col on mobile, 2 on tablet, 3 on desktop) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showExploreButton={false} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#12141C] border border-gray-800 rounded-3xl p-8 mb-20">
            <h3 className="text-xl font-bold uppercase text-white mb-2">No matching designs found</h3>
            <p className="text-gray-400 text-sm mb-6">
              We manufacture all custom sportswear on request. Contact us directly on WhatsApp to discuss your exact design specifications.
            </p>
            <a
              href={whatsappCustomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4" /> Inquire on WhatsApp
            </a>
          </div>
        )}

        {/* OTHER CUSTOM MANUFACTURING CAPABILITIES SECTION */}
        <div className="bg-[#12141C] border border-gray-800 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase block mb-2">Additional Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white mb-3">
              Other Custom Manufacturing Services
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              In addition to our live catalog above, Next Vision Sports also manufactures the following sportswear categories on custom client order. Contact us via WhatsApp to request custom designs for these sports:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {otherServices.map((service, idx) => (
              <div key={idx} className="bg-[#090A0F] border border-gray-800 p-4 rounded-2xl flex items-center gap-3 text-sm text-gray-300 font-medium">
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
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-950"
            >
              <MessageSquare className="w-4 h-4" /> Request Custom Quote for Other Sports
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}