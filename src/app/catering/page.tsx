import React from 'react';
import Image from 'next/image';
import {
  Users,
  Calendar,
  Cake,
  UtensilsCrossed,
  Music,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Coffee,
  Heart,
  Gift,
  Clock
} from 'lucide-react';

export default function CateringPage() {
  const events = [
    { title: 'Birthday Parties', icon: <Cake className="w-6 h-6 text-gold" /> },
    { title: 'Festival Celebrations', icon: <Sparkles className="w-6 h-6 text-gold" /> },
    { title: 'Family Gatherings', icon: <Users className="w-6 h-6 text-gold" /> },
    { title: 'Kitty Parties', icon: <Coffee className="w-6 h-6 text-gold" /> },
    { title: 'Private Events', icon: <Heart className="w-6 h-6 text-gold" /> },
  ];

  const packages = [
    {
      name: 'Small Gatherings',
      guests: '20 - 50 Guests',
      features: [
        '3 Appetizers & 4 Main Courses',
        'Choice of 2 Desserts',
        'Buffet Setup Included'
      ],
      icon: <Users className="w-8 h-8 text-gold" />,
      popular: false
    },
    {
      name: 'Medium Events',
      guests: '50 - 150 Guests',
      features: [
        '5 Appetizers & 6 Main Courses',
        'Choice of 3 Desserts & Beverages',
        'Live Station (Snacks) Included',
        'Premium Tableware'
      ],
      icon: <UtensilsCrossed className="w-8 h-8 text-gold" />,
      popular: true
    },
    {
      name: 'Large Gatherings',
      guests: '150+ Guests',
      features: [
        'Customizable Grand Menu',
        'Multiple Live Cooking Stations',
        'Dedicated Event Coordinator'
      ],
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      popular: false
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-serif text-navy mb-6 leading-tight">
              Homestyle Catering for Celebrations and Gatherings
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Experience the warmth of traditional flavors served with modern elegance. From intimate birthdays to festive grand celebrations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gold text-white px-8 py-4 rounded-md font-bold hover:bg-gold/90 transition-all shadow-lg shadow-gold/20">
                Book Catering
              </button>
              <button className="border-2 border-gold text-gold px-8 py-4 rounded-md font-bold hover:bg-gold hover:text-white transition-all">
                View Menu
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Catering Setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-cream/20 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-navy mb-4">Food is at the heart of every celebration.</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-10" />
          <p className="text-gray-600 text-lg leading-relaxed italic">
            "Combining traditional recipes with elegant presentation, we bring the warmth of a home-cooked meal to your special occasions. Our culinary experts ensure every dish reflects the rich heritage of Indian hospitality, meticulously prepared using only the freshest ingredients and authentic spices passed down through generations."
          </p>
        </div>
      </section>

      {/* Events We Cover */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-navy mb-2">Events We Cover</h2>
          <p className="text-gray-500">Tailored culinary experiences for every milestone</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="bg-cream/10 border border-gray-100 p-8 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-gold group-hover:text-white transition-colors">
                {event.icon}
              </div>
              <h3 className="font-serif text-navy text-lg">{event.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Catering Packages */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif text-navy mb-4">Our Catering Packages</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose a plan that fits your event size perfectly. All packages include standard tableware and service staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:scale-[1.02] ${pkg.popular ? 'border-gold shadow-xl scale-[1.05] z-10' : 'border-transparent shadow-sm'}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col items-center text-center mb-8">
                <div className="mb-6">{pkg.icon}</div>
                <h3 className="text-2xl font-serif text-navy mb-1">{pkg.name}</h3>
                <p className="text-gold font-bold">{pkg.guests}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-gold text-white' : 'border-2 border-gold text-gold hover:bg-gold hover:text-white'}`}>
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer-like Call to Action */}
      <section className="bg-navy py-20 px-4 text-center text-white">
        <h2 className="text-3xl font-serif mb-6">Planning an event soon?</h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto">
          Let us take care of the food while you focus on creating memories with your guests.
        </p>
        <button className="bg-white text-navy px-10 py-4 rounded-md font-bold hover:bg-cream transition-colors">
          Contact Our Team
        </button>
      </section>
    </div>
  );
}
