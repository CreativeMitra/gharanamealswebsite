import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  CheckCircle,
  ShieldCheck,
  Truck,
  Building2,
  Rocket,
  Users,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';

export default function CorporatePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Corporate Catering"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Corporate Tiffin Service for Offices in Delhi NCR
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
            Elevate your office lunch experience with nutritious, home-style meals designed specifically for workplace productivity.
          </p>
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
          >
            Request Corporate Quote
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-4">PREMIUM CATERING</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-8">Food That Powers Productivity</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gharana Meals provides consistent, high-quality catering solutions tailored for the modern workforce. We bring the comfort of home-cooked food to your office desk, ensuring your team stays energized without the heavy afternoon slump of typical takeout.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/30 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-16">Why Leading Organizations Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="text-gold w-8 h-8" />,
                title: "Healthy Employees",
                desc: "Nutritious meals that keep your team energized and focused throughout the working day."
              },
              {
                icon: <CheckCircle className="text-gold w-8 h-8" />,
                title: "Convenient Solution",
                desc: "Seamless ordering and delivery process that saves time and reduces HR administrative hassle."
              },
              {
                icon: <ShieldCheck className="text-gold w-8 h-8" />,
                title: "Consistent Quality",
                desc: "Traditional recipes prepared with premium ingredients and strict industrial hygiene standards."
              },
              {
                icon: <Truck className="text-gold w-8 h-8" />,
                title: "Reliable Delivery",
                desc: "Timely delivery across Delhi NCR to ensure lunch is served exactly on schedule every time."
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

      {/* Inside Our Thali */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">What's Inside Our Thali</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Every meal is a balanced symphony of flavors and nutrients. Our rotating corporate menu ensures your team never gets bored while receiving optimal nourishment.
            </p>
            <ul className="space-y-4">
              {[
                "Seasonal Sabzi & Protein-Rich Dal",
                "Fresh Whole Wheat Rotis & Steamed Rice",
                "Crisp Garden Salad & Hand-Churned Raita",
                "Weekly Special Gourmet Surprises"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Inside Our Thali"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-navy/5 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Diverse Workspaces */}
      <section className="py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-navy font-bold text-2xl mb-12">Perfect For Diverse Workspaces</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Building2 className="w-8 h-8" />, label: "CORPORATE OFFICES" },
              { icon: <Rocket className="w-8 h-8" />, label: "STARTUPS" },
              { icon: <Users className="w-8 h-8" />, label: "CO-WORKING SPACES" },
              { icon: <GraduationCap className="w-8 h-8" />, label: "INSTITUTIONS" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 text-gray-400 hover:text-navy transition-colors">
                {item.icon}
                <span className="text-xs font-bold tracking-widest uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Locations */}
      <section className="py-24 bg-navy text-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Serving across Delhi NCR</h2>
            <p className="text-white/70 mb-10 text-lg">
              We've optimized our logistics to ensure your meals arrive piping hot regardless of your location in the capital region.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Delhi', 'Gurgaon', 'Noida', 'Ghaziabad'].map((city) => (
                <div key={city} className="bg-white/10 p-4 rounded flex items-center gap-3 border border-white/10">
                  <MapPin className="text-gold w-5 h-5" />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center flex-col gap-4">
            <MapPin className="w-12 h-12 text-white/30" />
            <span className="text-white/30 font-serif text-xl italic">Interactive Service Map</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-navy mb-4">Choose Your Plan</h2>
            <p className="text-gray-500">Flexible options tailored to your office requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Daily Trial */}
            <div className="border border-gray-200 p-8 rounded-xl flex flex-col h-full">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">INDIVIDUAL</span>
              <h3 className="text-2xl font-serif text-navy mb-4">Daily Trial</h3>
              <p className="text-gray-500 mb-8 text-sm">Perfect for teams wanting to taste our menu first.</p>
              <div className="mt-auto">
                <Link href="/contact" className="block text-center border border-navy text-navy py-3 rounded hover:bg-navy hover:text-white transition-colors">
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Weekly Pass */}
            <div className="border border-gray-200 p-8 rounded-xl flex flex-col h-full">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">SHORT-TERM</span>
              <h3 className="text-2xl font-serif text-navy mb-4">Weekly Pass</h3>
              <p className="text-gray-500 mb-8 text-sm">Standard 5-day office week meal coverage.</p>
              <div className="mt-auto">
                <Link href="/contact" className="block text-center border border-navy text-navy py-3 rounded hover:bg-navy hover:text-white transition-colors">
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Monthly Subscription */}
            <div className="border-2 border-gold p-8 rounded-xl flex flex-col h-full relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-tighter">
                MOST POPULAR
              </div>
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">PREFERRED</span>
              <h3 className="text-2xl font-serif text-navy mb-4">Monthly Subscription</h3>
              <p className="text-gray-500 mb-8 text-sm">Best value for established office meal programs.</p>
              <div className="mt-auto">
                <Link href="/contact" className="block text-center bg-gold text-white py-3 rounded hover:bg-gold/90 transition-colors">
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Custom Bulk */}
            <div className="border border-gray-200 p-8 rounded-xl flex flex-col h-full">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">TAILORED</span>
              <h3 className="text-2xl font-serif text-navy mb-4">Custom Bulk</h3>
              <p className="text-gray-500 mb-8 text-sm">For large events or specific dietary needs.</p>
              <div className="mt-auto">
                <Link href="/contact" className="block text-center border border-navy text-navy py-3 rounded hover:bg-navy hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-gold/80 to-gold text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Ready to transform your office lunch?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join over 50+ offices in Delhi NCR that trust Gharana Meals for their daily nourishment. Get a personalized quote within 24 hours.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-navy text-white px-10 py-4 rounded-md font-bold hover:bg-navy/90 transition-all w-full md:w-auto">
                Request Corporate Quote
              </Link>
              <Link href="/menu" className="border-2 border-white text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-gold transition-all w-full md:w-auto">
                View Sample Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
