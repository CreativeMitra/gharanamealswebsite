import { UtensilsCrossed, Globe, Share2, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="text-gold" size={28} />
              <div className="text-2xl font-serif font-bold tracking-tight">Gharana Meals</div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Bringing the soul of Indian kitchens to your doorstep. Authentic,
              hygienic, and prepared with love.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <Globe size={20} className="cursor-pointer hover:text-gold transition-colors" />
              <Share2 size={20} className="cursor-pointer hover:text-gold transition-colors" />
              <ThumbsUp size={20} className="cursor-pointer hover:text-gold transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-gold uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link href="/corporate" className="hover:text-gold transition-colors">Corporate Plans</Link></li>
              <li><Link href="/#menu" className="hover:text-gold transition-colors">Special Menus</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="font-bold text-gold uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="#" className="hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-gold uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Get updates on new menus and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-navy-light/20 border border-white/10 rounded-l-md px-4 py-2.5 w-full focus:outline-none focus:ring-1 focus:ring-gold text-sm"
              />
              <button className="bg-gold text-white px-4 py-2.5 rounded-r-md text-sm font-bold hover:bg-gold/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            © 2026 Gharana Meals. All rights reserved. Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
