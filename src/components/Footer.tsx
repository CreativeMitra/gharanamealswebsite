import { Facebook, Mail, Phone, MapPin, Share2 } from "lucide-react";

export default function Footer() {
  const services = [
    "Corporate Tiffins",
    "Bulk Meal Solutions",
    "Student PG Plans",
    "Event Catering",
    "Guruji Prashad",
  ];

  const presence = ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"];

  return (
    <footer className="bg-[#1e2a4a] text-white/70 pt-24 pb-12 px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10">
        {/* Brand Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="text-gold text-2xl font-serif">🔱</div>
            <div className="text-white text-xl font-serif font-bold tracking-tight">Gharana Meals</div>
          </div>
          <p className="text-sm leading-relaxed max-w-[280px]">
            Bringing traditional Indian flavors and the warmth of home-style
            cooking to Delhi NCR&apos;s homes and offices.
          </p>
          <div className="flex gap-4">
            <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Facebook size={18} fill="currentColor" stroke="none" />
            </button>
            <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <h3 className="text-gold uppercase tracking-widest text-xs font-bold">
            Services
          </h3>
          <ul className="space-y-4 text-sm font-medium">
            {services.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Presence Section */}
        <div className="space-y-8">
          <h3 className="text-gold uppercase tracking-widest text-xs font-bold">
            Presence
          </h3>
          <ul className="space-y-4 text-sm font-medium">
            {presence.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-8">
          <h3 className="text-gold uppercase tracking-widest text-xs font-bold">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-4">
              <Phone size={18} className="text-gold" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={18} className="text-gold" />
              <a href="mailto:hello@gharanameals.com" className="hover:text-white">
                hello@gharanameals.com
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <span>Sector 45, Gurgaon, Haryana</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between text-[10px] md:text-xs tracking-wide font-medium uppercase text-white/30 gap-6">
        <p>© 2024 Gharana Meals. All rights reserved. Designed with tradition.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
