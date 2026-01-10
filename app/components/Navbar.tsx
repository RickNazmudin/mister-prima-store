// app/components/Navbar.tsx
"use client"; // penting karena kita pakai state untuk mobile menu

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // install dulu: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#produk", label: "Produk" },
    { href: "#manfaat", label: "Manfaat" },
    { href: "#testimoni", label: "Testimoni" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11">
              <Image
                src="/images/logo_MP.png"
                alt="Mister Prima Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mister Prima
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-200 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger Button */}
          <div className="flex items-center gap-4">
            <Link
              href="https://wa.me/6289617257030?text=Saya%20ingin%20pesan"
              target="_blank"
              className="hidden sm:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 px-5 sm:px-7 py-2.5 rounded-full font-semibold text-white text-sm sm:text-base shadow-md shadow-cyan-700/30 hover:shadow-cyan-600/50 hover:scale-105 transition-all duration-300"
            >
              Pesan Sekarang
            </Link>

            {/* Hamburger Button - Mobile Only */}
            <button
              className="md:hidden text-cyan-400 p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-gray-800/50">
          <div className="px-4 py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/628123456789?text=Saya%20ingin%20pesan%20Mister%20Prima"
              target="_blank"
              className="block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 rounded-xl font-semibold text-white text-center shadow-lg shadow-cyan-700/30 hover:shadow-cyan-600/50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
