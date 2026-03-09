import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  CheckCircle,
  ShieldCheck,
  Truck,
  Building2,
  Rocket,
  Users,
  GraduationCap,
  MapPin
} from "lucide-react";

export default function CorporatePage() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <Image
            src="/corporate-hero.jpg"
            alt="Corporate Tiffin Service"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl px-4">

          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Corporate Tiffin Service for Offices in Delhi NCR
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
            Nutritious home-style meals designed to keep your team energized and productive.
          </p>

          <Link
            href="/contact"
            className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
          >
            Request Corporate Quote
          </Link>

        </div>
      </section>


      {/* INTRO */}
      <section className="py-20 px-4">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-4">
            PREMIUM CATERING
          </span>

          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-8">
            Food That Powers Productivity
          </h2>

          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Gharana Meals brings the comfort of traditional home cooking to your workplace.
            Our balanced meals ensure your team stays energized throughout the day.
          </p>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-20 bg-accent/30 px-4">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-16">
            Why Leading Organizations Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              {
                icon: <Heart className="text-gold w-8 h-8" />,
                title: "Healthy Employees",
                desc: "Nutritious meals that keep your team energized."
              },
              {
                icon: <CheckCircle className="text-gold w-8 h-8" />,
                title: "Convenient Solution",
                desc: "Easy ordering and reliable service."
              },
              {
                icon: <ShieldCheck className="text-gold w-8 h-8" />,
                title: "Consistent Quality",
                desc: "Premium ingredients and strict hygiene."
              },
              {
                icon: <Truck className="text-gold w-8 h-8" />,
                title: "Reliable Delivery",
                desc: "Timely delivery across Delhi NCR."
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


      {/* THALI SECTION */}
      <section className="py-24 px-4">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

          <div className="md:w-1/2">

            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">
              What's Inside Our Thali
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our rotating menu ensures your team receives balanced nutrition every day.
            </p>

            <ul className="space-y-4">

              {[
                "Seasonal Sabzi & Protein-Rich Dal",
                "Fresh Rotis & Steamed Rice",
                "Garden Salad & Raita",
                "Weekly Special Gourmet Items"
              ].map((text, idx) => (

                <li key={idx} className="flex items-center gap-3">

                  <CheckCircle className="text-gold w-5 h-5" />

                  <span className="text-gray-700 font-medium">
                    {text}
                  </span>

                </li>

              ))}

            </ul>

          </div>


          <div className="md:w-1/2 relative">

            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">

              <Image
                src="/corporate-thali.jpg"
                alt="Corporate Meal Thali"
                fill
                quality={80}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* WORKSPACES */}
      <section className="py-16 border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-4">

          <h3 className="text-center text-navy font-bold text-2xl mb-12">
            Perfect For Diverse Workspaces
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              { icon: <Building2 className="w-8 h-8" />, label: "CORPORATE OFFICES" },
              { icon: <Rocket className="w-8 h-8" />, label: "STARTUPS" },
              { icon: <Users className="w-8 h-8" />, label: "CO-WORKING SPACES" },
              { icon: <GraduationCap className="w-8 h-8" />, label: "INSTITUTIONS" }
            ].map((item, idx) => (

              <div
                key={idx}
                className="flex flex-col items-center gap-4 text-gray-400 hover:text-navy transition-colors"
              >

                {item.icon}

                <span className="text-xs font-bold tracking-widest uppercase">
                  {item.label}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* SERVING CITIES */}
      <section className="py-24 bg-navy text-white px-4">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Serving across Delhi NCR
          </h2>

          <p className="text-white/70 mb-12 text-xl">
            Reliable delivery across the entire NCR region.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {["Delhi", "Gurgaon", "Noida", "Ghaziabad"].map((city) => (

              <div
                key={city}
                className="bg-white/10 p-6 rounded-lg flex flex-col items-center gap-2 border border-white/10"
              >

                <MapPin className="text-gold w-6 h-6" />

                <span className="font-medium text-lg">
                  {city}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-20 px-4">

        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-gold/80 to-gold text-white p-12 md:p-20 text-center">

          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Ready to transform your office lunch?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join offices across Delhi NCR that trust Gharana Meals for daily nourishment.
          </p>

          <Link
            href="/contact"
            className="bg-navy text-white px-10 py-4 rounded-md font-bold hover:bg-navy/90 transition-all inline-block"
          >
            Request Corporate Quote
          </Link>

        </div>

      </section>

    </div>
  );
}