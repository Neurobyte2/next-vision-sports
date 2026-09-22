import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  showExploreButton?: boolean;
}

export default function ProductCard({ product, showExploreButton = true }: ProductCardProps) {
  const whatsappMsg = encodeURIComponent(
    `Hello, I am interested in this design/product: ${product.name} (${product.category} - ${product.subcategory || "Standard"}). Please provide more information.`
  );
  const whatsappUrl = `https://wa.me/923111879802?text=${whatsappMsg}`;

  return (
    <div className="group bg-[#12141C] border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden bg-gray-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-emerald-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
          {product.category}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-xs text-emerald-400 font-semibold tracking-widest uppercase block mb-1">
            {product.subcategory || "Professional Sportswear"}
          </span>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
          {showExploreButton ? (
            <Link
              href={`/catalog`}
              className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              Explore Catalog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
              Direct Inquiry
            </span>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-emerald-900/30"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Inquire WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}