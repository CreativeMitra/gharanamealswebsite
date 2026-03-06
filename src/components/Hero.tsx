export default function Hero() {
  return (
    <section className="relative px-8 pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-serif text-navy leading-[1.1] mb-6">
            The Comfort of <br />
            Homemade Food, <br />
            Delivered with <br />
            Tradition
          </h1>
          <p className="text-navy/70 text-lg max-w-md mb-10 leading-relaxed">
            Authentic, premium home-style food delivery and catering across
            Delhi NCR. Experience the warmth of traditional recipes crafted
            with love in every bite.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gold text-white px-8 py-3 rounded-sm font-medium hover:bg-gold/90 transition-all shadow-md">
              Explore Our Services
            </button>
            <button className="border border-navy/20 text-navy px-8 py-3 rounded-sm font-medium hover:bg-navy/5 transition-all">
              Corporate Enquiry
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <div className="w-full aspect-[4/3] bg-navy/10 relative">
              {/* This would be the main food image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent"></div>
              <div className="flex items-center justify-center h-full text-navy/30 text-xl italic">
                Food Image Placeholder
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[280px]">
              <div className="h-1 w-12 bg-gold mb-4"></div>
              <h3 className="font-serif text-xl text-navy mb-1">100% Home-Style</h3>
              <p className="text-xs text-navy/60 uppercase tracking-widest font-semibold">
                No preservatives, just love.
              </p>
            </div>
          </div>

          {/* Decorative elements could be added here */}
        </div>
      </div>
    </section>
  );
}
