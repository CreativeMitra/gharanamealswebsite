"use client";

import Link from "next/link";
import { Moon, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="text-gold text-2xl font-serif">🔱</div>
        <div className="text-navy text-xl font-serif font-bold tracking-tight">Gharana Meals</div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy/80">
        <div className="flex items-center gap-1 cursor-pointer hover:text-navy transition-colors">
          Services <ChevronDown size={14} />
        </div>
        <Link href="#about" className="hover:text-navy transition-colors">About</Link>
        <Link href="#contact" className="hover:text-navy transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-6">
        <button className="text-navy cursor-pointer">
          <Moon size={20} fill="currentColor" />
        </button>
        <button className="bg-gold text-white px-6 py-2 rounded-sm font-medium hover:bg-gold/90 transition-colors text-sm">
          Request Service
        </button>
      </div>
    </header>
  );
}
