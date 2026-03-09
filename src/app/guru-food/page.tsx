import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  CheckCircle,
  HandHeart,
  Moon,
  Sunrise,
  Users,
  Sparkles,
  ShieldCheck,
  UtensilsCrossed,
  Clock
} from "lucide-react";

export default function GuruFoodPage() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">

        <div className="absolute inset-0 z-0">

          <div className="absolute inset-0 bg-black/50 z-10" />

          <Image
            src="/guru-hero.jpg"
            alt="Sacred Meals and Seva"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
          />

        </div>

        <div className="relative z-20 text-center max-w-4xl px-4">

          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Sacred Meals & Seva Service
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
            Dedicated catering for spiritual gatherings, Langars, and community
            food distribution with purity and devotion.
          </p>

          <Link
            href="/contact"
            className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
          >
            Inquire for Seva
          </Link>

        </div>
      </section>


      {/* Intro */}
      <section className="py-20 px-4">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-4">
            DEVOTION & PURITY
          </span>

          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-8">
            Serving with Gratitude
          </h2>

          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our Guru Food service supports religious events, Langars,
            spiritual retreats, and community service gatherings.
          </p>

        </div>

      </section>


      {/* Purity Standards */}
      <section className="py-20 bg-accent/30 px-4">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-16">
            Our Commitment to Purity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              {
                icon: <Sparkles className="text-gold w-8 h-8" />,
                title: "Satvik Preparation",
                desc: "Prepared following traditional spiritual guidelines."
              },
              {
                icon: <HandHeart className="text-gold w-8 h-8" />,
                title: "Selfless Service",
                desc: "Serving with humility and devotion."
              },
              {
                icon: <ShieldCheck className="text-gold w-8 h-8" />,
                title: "Pristine Hygiene",
                desc: "Dedicated kitchens ensuring complete purity."
              },
              {
                icon: <Heart className="text-gold w-8 h-8" />,
                title: "Community Spirit",
                desc: "Supporting large-scale community feeding."
              }
            ].map((item, idx) => (

              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center"
              >

                <div className="mb-6 bg-accent p-4 rounded-full">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-navy">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Seva Offerings */}
      <section className="py-24 px-4">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">

          <div className="md:w-1/2">

            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">
              Traditional Seva Offerings
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Specialized menus designed for spiritual gatherings and charity feeding.
            </p>

            <ul className="space-y-6">

              {[
                { title: "Bhandara & Langar", desc: "Community meals served at scale." },
                { title: "Prasad Distribution", desc: "Sanctified offerings for devotees." },
                { title: "Satsang Catering", desc: "Light and nourishing meals." },
                { title: "Charity Feeding", desc: "Meals for underprivileged communities." }
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
                src="/guru-seva.jpg"
                alt="Community Seva Meal"
                fill
                quality={80}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* Timings */}
      <section className="py-16 bg-navy text-white px-4">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

          <div className="text-center md:text-left">

            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              Round-the-Clock Seva Support
            </h3>

            <p className="text-white/60">
              We support early morning prayers and late night spiritual vigils.
            </p>

          </div>

          <div className="flex gap-8">

            <div className="flex flex-col items-center">
              <Sunrise className="w-10 h-10 text-gold mb-2" />
              <span className="text-xs uppercase">Amrit Vela</span>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 text-gold mb-2" />
              <span className="text-xs uppercase">Day Seva</span>
            </div>

            <div className="flex flex-col items-center">
              <Moon className="w-10 h-10 text-gold mb-2" />
              <span className="text-xs uppercase">Night Vigils</span>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-20 px-4">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">
            Let's Serve the Community Together
          </h2>

          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Partner with us to organize your next Seva or spiritual gathering.
          </p>

          <Link
            href="/contact"
            className="bg-gold text-white px-10 py-4 rounded-md font-bold hover:bg-gold/90 transition-all"
          >
            Inquire Now
          </Link>

        </div>

      </section>

    </div>
  );
}