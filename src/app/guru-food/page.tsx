import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  CheckCircle,
  HandHeart,
  Moon,
  Sunrise,
  Users,
  Sparkles,
  ShieldCheck,
  MapPin,
  UtensilsCrossed,
  Clock
} from 'lucide-react';

export default function GuruFoodPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Sacred Meals and Seva"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Sacred Meals & Seva Service
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
            Dedicated catering for spiritual gatherings, Langars, and philanthropic food distribution with utmost purity and devotion.
          </p>
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
          >
            Inquire for Seva
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-4">DEVOTION & PURITY</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-8">Serving with Gratitude</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Gharana Meals, we understand the spiritual significance of food in gatherings. Our "Guru Food" service is designed for religious events, spiritual retreats, and community service (Seva). We prepare every meal with the highest standards of hygiene and "Satvik" principles.
          </p>
        </div>
      </section>

      {/* Purity Standards */}
      <section className="py-20 bg-accent/30 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-16">Our Commitment to Purity</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="text-gold w-8 h-8" />,
                title: "Satvik Preparation",
                desc: "Meals prepared following traditional spiritual guidelines to maintain purity and positive energy."
              },
              {
                icon: <HandHeart className="text-gold w-8 h-8" />,
                title: "Selfless Service",
                desc: "Our staff is trained to serve with humility and respect, embodying the spirit of Seva."
              },
              {
                icon: <ShieldCheck className="text-gold w-8 h-8" />,
                title: "Pristine Hygiene",
                desc: "Dedicated kitchen areas and utensils for spiritual catering to ensure no cross-contamination."
              },
              {
                icon: <Heart className="text-gold w-8 h-8" />,
                title: "Community Spirit",
                desc: "Pricing models designed to support large-scale community feeding and philanthropic work."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="mb-6 bg-accent p-4 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-navy">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seva Offerings */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">Traditional Seva Offerings</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We offer specialized menus for various spiritual and community needs, ensuring the food complements the sanctity of the occasion.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Bhandara & Langar", desc: "Traditional community kitchen meals served at scale." },
                { title: "Prasad Distribution", desc: "Specially prepared sanctified food for devotees." },
                { title: "Satsang Catering", desc: "Light and nutritious meals for spiritual gatherings." },
                { title: "Charity Feeding", desc: "High-quality, low-cost meals for underprivileged communities." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <UtensilsCrossed className="text-gold w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <Image
            src="https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Traditional Community Meal"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-navy/5 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Special Timings */}
      <section className="py-16 bg-navy text-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Round-the-Clock Seva Support</h3>
            <p className="text-white/60">We support early morning prayers and late night spiritual vigils.</p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <Sunrise className="w-10 h-10 text-gold mb-2" />
              <span className="text-xs uppercase tracking-tighter">Amrit Vela</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 text-gold mb-2" />
              <span className="text-xs uppercase tracking-tighter">Day Seva</span>
            </div>
            <div className="flex flex-col items-center">
              <Moon className="w-10 h-10 text-gold mb-2" />
              <span className="text-xs uppercase tracking-tighter">Night Vigils</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">Let's Serve the Community Together</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Partner with us to organize your next Seva or spiritual gathering. We provide special pricing for charitable initiatives.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="bg-gold text-white px-10 py-4 rounded-md font-bold hover:bg-gold/90 transition-all w-full md:w-auto">
              Inquire Now
            </Link>
            <Link href="/contact" className="border-2 border-navy text-navy px-10 py-4 rounded-md font-bold hover:bg-navy hover:text-white transition-all w-full md:w-auto">
              Discuss Donation Drive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
