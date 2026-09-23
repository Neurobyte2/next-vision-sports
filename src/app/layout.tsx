import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexVion Sportswear | Professional Sportswear Manufacturer in Sialkot, Pakistan",
  description: "Engineering performance and crafting custom athletic excellence. Browse our professional sportswear catalog at nexvionsportswear.com and connect directly for custom team orders.",
  keywords: ["sportswear manufacturer", "custom jerseys", "soccer wear", "Sialkot sports factory", "NexVion Sportswear"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#090A0F] text-gray-100 antialiased selection:bg-emerald-500 selection:text-white`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}