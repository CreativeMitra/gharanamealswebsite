import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  PackageCheck,
  Globe,
  Building2,
  Users,
  MapPin
} from "lucide-react";

export default function FoodDistributionPage() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">

        <div className="absolute inset-0 z-0">

          <div className="absolute inset-0 bg-black/60 z-10" />

          <Image
            src="/food-distribution-hero.jpg"
            alt="Food Distribution"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
          />

        </div>

        <div className="relative z-20 text-center max-w-4xl px-4">

          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Scalable Food Distribution & Logistics
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
            Reliable large-scale meal solutions for institutions, NGOs, and relief efforts across Delhi NCR.
          </p>

          <Link
            href="/contact"
            className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
          >
            Request Quote
          </Link>

        </div>

      </section>


      {/* INTRO */}
      <section className="py-20 px-4">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-4">
            LOGISTICS & SCALE
          </span>

          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-8">
            Fueling Large Scale Impact
          </h2>

          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Gharana Meals specializes in high-volume meal distribution for
            institutions, NGOs, and social initiatives. Our logistics network
            ensures meals reach communities safely and efficiently.
          </p>

        </div>

      </section>


      {/* DISTRIBUTION MODELS */}
      <section className="py-24 px-4">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

          <div className="md:w-1/2">

            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">
              Tailored Distribution Models
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Flexible distribution systems designed for organizations of
              every scale.
            </p>

            <div className="space-y-6">

              {[
                {
                  title: "Direct-to-Recipient",
                  desc: "Individual meal delivery for beneficiaries."
                },
                {
                  title: "Bulk Hub Delivery",
                  desc: "Centralized delivery to distribution centers."
                },
                {
                  title: "On-Site Management",
                  desc: "Managed kitchen and distribution operations."
                }
              ].map((model, idx) => (

                <div key={idx} className="flex gap-4">

                  <PackageCheck className="text-gold w-6 h-6 mt-1" />

                  <div>
                    <h4 className="font-bold text-navy text-lg">
                      {model.title}
                    </h4>

                    <p className="text-gray-600">
                      {model.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>


          <div className="md:w-1/2 relative">

            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">

              <Image
                src="/food-distribution-pack.jpg"
                alt="Bulk Food Packing"
                fill
                quality={80}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* SECTORS */}
      <section className="py-16 border-y border-gray-100 bg-navy text-white">

        <div className="max-w-7xl mx-auto px-4">

          <h3 className="text-center font-serif text-3xl mb-12">
            Sectors We Support
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              { icon: <Globe className="w-8 h-8" />, label: "NGOs & NON-PROFITS" },
              { icon: <Building2 className="w-8 h-8" />, label: "GOVERNMENT ENTITIES" },
              { icon: <Users className="w-8 h-8" />, label: "LABOR COLONIES" },
              { icon: <Heart className="w-8 h-8" />, label: "HEALTHCARE CENTERS" }
            ].map((item, idx) => (

              <div
                key={idx}
                className="flex flex-col items-center gap-4 text-white/50 hover:text-gold transition-colors"
              >

                {item.icon}

                <span className="text-xs font-bold tracking-widest uppercase text-center">
                  {item.label}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* TRUST SECTION */}
      <section className="py-24 px-4 bg-cream/20">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-serif text-navy mb-8">
            Trusted by Impact-Driven Organizations
          </h2>

          <p className="text-gray-600">
            We partner with organizations that demand reliability and
            transparency in food distribution logistics.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="py-20 px-4">

        <div className="max-w-7xl mx-auto rounded-3xl bg-navy text-white p-12 md:p-20 text-center">

          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Scale Your Impact with Reliable Nutrition
          </h2>

          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Discuss your distribution requirements with our logistics experts.
          </p>

          <Link
            href="/contact"
            className="bg-gold text-white px-10 py-4 rounded-md font-bold hover:bg-gold/90 transition-all inline-block"
          >
            Request Quote
          </Link>

        </div>

      </section>

    </div>
  );
}