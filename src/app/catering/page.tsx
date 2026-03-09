import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Cake,
  UtensilsCrossed,
  Sparkles,
  CheckCircle2,
  Coffee,
  Heart
} from "lucide-react";

export default function GatheringPage() {

  const events = [
    { title: "Birthday Parties", icon: <Cake className="w-6 h-6 text-gold" /> },
    { title: "Festival Celebrations", icon: <Sparkles className="w-6 h-6 text-gold" /> },
    { title: "Family Gatherings", icon: <Users className="w-6 h-6 text-gold" /> },
    { title: "Kitty Parties", icon: <Coffee className="w-6 h-6 text-gold" /> },
    { title: "Private Events", icon: <Heart className="w-6 h-6 text-gold" /> }
  ];

  return (
    <div className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2">

            <h1 className="text-4xl md:text-6xl font-serif text-navy mb-6 leading-tight">
              Homestyle Meals for Celebrations and Gatherings
            </h1>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Experience the warmth of traditional flavors served with modern elegance. From intimate birthdays to festive grand celebrations.
            </p>

            <Link
              href="/contact"
              className="bg-gold text-white px-8 py-4 rounded-md font-bold hover:bg-gold/90 transition-all shadow-lg shadow-gold/20 inline-block"
            >
              Book Meals
            </Link>

          </div>


          <div className="md:w-1/2">

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">

              <Image
                src="/gathering-hero.jpg"
                alt="Gathering Meal Setup"
                fill
                priority
                quality={80}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* QUOTE */}
      <section className="bg-cream/20 py-20 px-4 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-serif text-navy mb-4">
            Food is at the heart of every celebration.
          </h2>

          <div className="w-20 h-1 bg-gold mx-auto mb-10" />

          <p className="text-gray-600 text-lg leading-relaxed italic">
            Combining traditional recipes with elegant presentation, we bring the warmth of home-style meals to your special occasions.
          </p>

        </div>

      </section>


      {/* EVENTS */}
      <section className="py-24 px-4 max-w-7xl mx-auto">

        <div className="mb-16">

          <h2 className="text-4xl font-serif text-navy mb-2">
            Events We Serve
          </h2>

          <p className="text-gray-500">
            Tailored meal experiences for every milestone
          </p>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {events.map((event, idx) => (

            <div
              key={idx}
              className="bg-cream/10 border border-gray-100 p-8 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-shadow group"
            >

              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-gold group-hover:text-white transition-colors">
                {event.icon}
              </div>

              <h3 className="font-serif text-navy text-lg">
                {event.title}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="bg-navy py-20 px-4 text-center text-white">

        <h2 className="text-3xl font-serif mb-6">
          Planning an event soon?
        </h2>

        <p className="text-white/70 mb-10 max-w-xl mx-auto">
          Let us take care of the meals while you focus on creating memories with your guests.
        </p>

        <Link
          href="/contact"
          className="bg-white text-navy px-10 py-4 rounded-md font-bold hover:bg-cream transition-colors inline-block"
        >
          Contact Our Team
        </Link>

      </section>

    </div>
  );
}