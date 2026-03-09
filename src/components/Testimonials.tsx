"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Gharana Meals has been providing our office with lunches for over a year. The taste is consistently excellent, and it truly feels like food from my own mother’s kitchen.",
    name: "Rajesh Malhotra",
    role: "Director, Tech Solutions India",
  },
  {
    quote:
      "We ordered meals for a family function and every guest appreciated the authentic taste. The food truly felt homemade and fresh.",
    name: "Neha Kapoor",
    role: "Paying Guest, Delhi NCR",
  },
  {
    quote:
      "As someone who works long hours, finding healthy homemade meals was difficult. Gharana Meals solved that problem beautifully.",
    name: "Amit Verma",
    role: "Senior Manager, FinEdge Pvt Ltd",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slider (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="px-8 py-32 bg-navy text-white text-center relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 left-0 w-96 h-96 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <div className="flex justify-center text-gold mb-4 opacity-50">
          <Quote size={64} fill="currentColor" stroke="none" />
        </div>

        <blockquote className="text-3xl md:text-4xl font-serif italic leading-relaxed">
          &quot;{testimonial.quote}&quot;
        </blockquote>

        <div className="space-y-2">
          <h4 className="text-xl font-serif text-gold">{testimonial.name}</h4>
          <p className="text-sm text-white/50 tracking-widest uppercase font-medium">
            {testimonial.role}
          </p>
        </div>

        {/* Pagination Dots (manual slider) */}
        <div className="flex justify-center gap-3 pt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === index
                  ? "bg-gold shadow-sm shadow-gold/50"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}