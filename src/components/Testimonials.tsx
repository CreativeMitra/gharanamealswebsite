import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="px-8 py-32 bg-navy text-white text-center relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 left-0 w-96 h-96 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <div className="flex justify-center text-gold mb-4 opacity-50">
          <Quote size={64} fill="currentColor" stroke="none" />
        </div>

        <blockquote className="text-3xl md:text-4xl font-serif italic leading-relaxed">
          &quot;Gharana Meals has been providing our office with lunches for
          over a year. The taste is consistently excellent, and it truly feels
          like food from my own mother&apos;s kitchen.&quot;
        </blockquote>

        <div className="space-y-2">
          <h4 className="text-xl font-serif text-gold">Rajesh Malhotra</h4>
          <p className="text-sm text-white/50 tracking-widest uppercase font-medium">
            Director, Tech Solutions India
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 pt-8">
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-gold shadow-sm shadow-gold/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </div>
    </section>
  );
}
