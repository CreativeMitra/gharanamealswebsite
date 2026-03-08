import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  CheckCircle,
  ShieldCheck,
  Truck,
  Globe,
  Building2,
  Users,
  Scale,
  MapPin,
  ArrowRight,
  PackageCheck,
  Zap
} from 'lucide-react';

export default function FoodDistributionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Food Distribution Logistics"
            fill
            className="object-cover"
            priority
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
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-4">LOGISTICS & SCALE</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-8">Fueling Large Scale Impact</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gharana Meals specializes in the complex logistics of high-volume food distribution. Whether it's daily institutional feeding, NGO partnerships, or emergency relief efforts, we provide the infrastructure and expertise to deliver nutritious meals where they are needed most.
          </p>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-cream/30 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-16">Our Distribution Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Scale className="text-gold w-8 h-8" />,
                title: "Massive Scalability",
                desc: "Capacity to produce and distribute thousands of meals daily without compromising on quality or safety."
              },
              {
                icon: <Truck className="text-gold w-8 h-8" />,
                title: "Cold-Chain & Logistics",
                desc: "Optimized delivery networks and specialized transport to ensure food arrives fresh and safe."
              },
              {
                icon: <ShieldCheck className="text-gold w-8 h-8" />,
                title: "Certified Safety",
                desc: "Strict adherence to FSSAI standards and international hygiene protocols for large-scale production."
              },
              {
                icon: <Zap className="text-gold w-8 h-8" />,
                title: "Rapid Response",
                desc: "Ability to mobilize resources quickly for emergency food requirements or sudden large-scale needs."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="mb-6 bg-cream p-4 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-navy">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Models */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">Tailored Distribution Models</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We understand that every organization has unique needs. Our distribution models are flexible and designed for maximum efficiency.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Direct-to-Recipient",
                  desc: "Individual meal delivery for dispersed beneficiary groups or staff."
                },
                {
                  title: "Bulk Hub Delivery",
                  desc: "Consolidated delivery to central collection or distribution points."
                },
                {
                  title: "On-Site Management",
                  desc: "Full-service management of on-site kitchens or distribution centers."
                }
              ].map((model, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <PackageCheck className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">{model.title}</h4>
                    <p className="text-gray-600">{model.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Bulk Food Packing"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-navy/5 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 border-y border-gray-100 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center font-serif text-3xl mb-12">Sectors We Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, label: "NGOs & NON-PROFITS" },
              { icon: <Building2 className="w-8 h-8" />, label: "GOVERNMENT ENTITIES" },
              { icon: <Users className="w-8 h-8" />, label: "LABOR COLONIES" },
              { icon: <Heart className="w-8 h-8" />, label: "HEALTHCARE CENTERS" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 text-white/50 hover:text-gold transition-colors">
                {item.icon}
                <span className="text-xs font-bold tracking-widest uppercase text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="py-24 px-4 bg-cream/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-navy mb-8">Trusted by Impact-Driven Organizations</h2>
          <p className="text-gray-600 mb-12">
            We partner with organizations that demand excellence and reliability in their food logistics. Our transparency and reporting standards make us a preferred partner for CSR initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {/* Logo Placeholders */}
            <div className="text-2xl font-bold font-serif">PARTNER LOGO</div>
            <div className="text-2xl font-bold font-serif">PARTNER LOGO</div>
            <div className="text-2xl font-bold font-serif">PARTNER LOGO</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl bg-navy text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy/80" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Scale Your Impact with Reliable Nutrition</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Discuss your distribution requirements with our logistics experts. We are ready to help you reach more people with quality food.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-gold text-white px-10 py-4 rounded-md font-bold hover:bg-gold/90 transition-all w-full md:w-auto">
                Discuss Partnership
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-navy transition-all w-full md:w-auto">
                Get Logistics Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
