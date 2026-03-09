"use client";

import Link from "next/link";
import { ChevronDown, UtensilsCrossed, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "Corporate Tiffin", href: "/corporate" },
    { name: "Guru Food & Seva", href: "/guru-food" },
    { name: "Gathering Meals", href: "/catering" },
    { name: "Food Distribution", href: "/food-distribution" },
  ];

  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white sticky top-0 z-50 border-b border-gray-50 shadow-sm">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <UtensilsCrossed className="text-gold" size={24} />
        <div className="text-navy text-xl font-serif font-bold tracking-tight">
          Gharana Meals
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-navy/80">
        
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>

        <Link href="/about" className="hover:text-gold transition-colors">
          About
        </Link>

        {/* Services Dropdown */}
        <div
          className="relative flex items-center gap-1 cursor-pointer hover:text-gold transition-colors py-2"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
        >
          Services
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              isServicesOpen ? "rotate-180" : ""
            }`}
          />

          {isServicesOpen && (
            <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-100 shadow-xl rounded-b-md overflow-hidden py-2">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-5 py-2.5 text-sm text-navy/80 hover:bg-gold/10 hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServicesOpen(false);
                  }}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/contact" className="hover:text-gold transition-colors">
          Contact
        </Link>

      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <Link
          href="/contact"
          className="hidden sm:block bg-gold text-white px-6 py-2.5 rounded-md font-semibold hover:bg-gold-dark transition-colors text-[14px] shadow-sm"
        >
          Request Service
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy hover:bg-cream rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl lg:hidden">

          <nav className="flex flex-col p-6 gap-4">

            <Link
              href="/"
              className="text-lg font-medium text-navy py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-lg font-medium text-navy py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <div className="flex flex-col gap-2">
              <div className="text-lg font-medium text-navy py-2">
                Services
              </div>

              <div className="pl-4 flex flex-col gap-3 border-l-2 border-gold/20 ml-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="text-navy/70 hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="text-lg font-medium text-navy py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="sm:hidden mt-4 bg-gold text-white w-full py-4 rounded-md font-bold text-lg text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Service
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}