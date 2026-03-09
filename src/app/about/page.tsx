"use client";

import Image from "next/image";
import Link from "next/link";
import { Utensils, Leaf, Users, CheckCircle, GraduationCap, PartyPopper, Heart, Building, Briefcase, MapPin, Flag } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy leading-tight">
              The Story Behind <br />
              <span className="text-gold italic">Gharana Meals</span>
            </h1>

            <div className="w-20 h-1 bg-gold"></div>

            <p className="text-navy/70 text-xl font-serif italic max-w-lg leading-relaxed">
              "Bringing the warmth of traditional home cooking to your modern lifestyle..."
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/thali.jpg"
              alt="Traditional Indian thali"
              fill
              priority
              className="object-cover"
              quality={85}
            />
          </div>

        </div>
      </section>


      {/* Where Idea Began */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
            Where the Idea Began
          </h2>

          <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
            <p>
              Gharana Meals was born out of a simple longing for the comforting taste of 'ghar ka khana'. In the hustle and bustle of city life, we realized that while food is everywhere, the soulful essence of a mother's kitchen is often missing.
            </p>

            <p>
              Our mission is to bridge the gap for busy individuals who crave authentic, home-cooked flavors but lack the time to prepare them. We don't just deliver food; we deliver memories, tradition, and the nourishment your body truly deserves.
            </p>
          </div>

        </div>
      </section>


      {/* Philosophy */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream/40">

        <div className="max-w-7xl mx-auto text-center space-y-16">

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
            Our Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gold/5 space-y-6">
              <div className="w-16 h-16 bg-cream flex items-center justify-center rounded-2xl mx-auto text-gold">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">Authentic Home Cooking</h3>
              <p className="text-navy/60 leading-relaxed">
                Recipes passed down through generations, prepared with the same love as a family meal.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gold/5 space-y-6">
              <div className="w-16 h-16 bg-cream flex items-center justify-center rounded-2xl mx-auto text-gold">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">Fresh Preparation</h3>
              <p className="text-navy/60 leading-relaxed">
                No preservatives, no frozen shortcuts. Every meal is cooked fresh daily.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gold/5 space-y-6">
              <div className="w-16 h-16 bg-cream flex items-center justify-center rounded-2xl mx-auto text-gold">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">Food That Brings Together</h3>
              <p className="text-navy/60 leading-relaxed">
                Good food builds community and brings people together.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* What Makes Us Different */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-10">

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
              What Makes Us Different
            </h2>

            {[
              {
                title: "Consistent Quality",
                text: "Rigorous quality checks ensure that every bite tastes as good as the first time."
              },
              {
                title: "Balanced Recipes",
                text: "Dietician-approved meal plans balancing taste and nutrition."
              },
              {
                title: "Unwavering Reliability",
                text: "Timely deliveries that respect your schedule every day."
              }
            ].map((item) => (

              <div key={item.title} className="flex gap-6 items-start">

                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">
                  <CheckCircle size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-navy/60 leading-relaxed">{item.text}</p>
                </div>

              </div>

            ))}

          </div>


          <div className="relative aspect-square rounded-full overflow-hidden border-[12px] border-cream shadow-xl">

            <Image
              src="/ingredients.jpg"
              alt="Fresh ingredients"
              fill
              className="object-cover"
              quality={85}
            />

          </div>

        </div>

      </section>


      {/* Who We Serve */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream/20">

        <div className="max-w-7xl mx-auto text-center space-y-16">

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
            Who We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              { label: "Corporate", icon: <Building size={20}/> },
              { label: "Professionals", icon: <Briefcase size={20}/> },
              { label: "Paying Guests", icon: <Users size={20}/> },
              { label: "Celebrations", icon: <PartyPopper size={20}/> },
              { label: "Spiritual", icon: <Heart size={20}/> },
              { label: "Community", icon: <Users size={20}/> },
            ].map((item) => (

              <div key={item.label}
                className="bg-white p-6 rounded-xl border-b-4 border-gold shadow-sm flex items-center gap-4">

                <div className="text-gold">{item.icon}</div>
                <span className="font-bold text-navy">{item.label}</span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Kitchen */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg">

            <Image
              src="/kitchen.jpg"
              alt="Clean kitchen"
              fill
              className="object-cover"
              quality={85}
            />

          </div>

          <div className="space-y-6">

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
              Our Kitchen Standards
            </h2>

            <p className="text-navy/60 leading-relaxed text-lg">
              We maintain the highest hygiene standards. Every ingredient is fresh and every meal is prepared with care.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">

        <div className="max-w-4xl mx-auto text-center space-y-10">

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">
            Ready to taste the tradition?
          </h2>

          <p className="text-navy/60 text-lg">
            Join thousands who trust Gharana Meals for authentic home food.
          </p>

          <Link
            href="/#services"
            className="bg-gold text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-gold-dark transition-all shadow-xl shadow-gold/20"
          >
            Explore Our Services
          </Link>

        </div>

      </section>

    </div>
  );
}