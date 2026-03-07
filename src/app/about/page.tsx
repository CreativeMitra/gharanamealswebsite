import { Utensils, Leaf, Users, CheckCircle, GraduationCap, PartyPopper, Heart, Building, Briefcase, MapPin, Flag } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
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
            <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
               {/* Using a placeholder-like image pattern since actual assets are external */}
               <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                  <div className="text-navy/20 font-serif text-3xl italic">Indian Traditional Thali Image</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where the Idea Began */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Where the Idea Began</h2>
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

      {/* Our Philosophy */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream/40">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Our Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gold/5 space-y-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cream flex items-center justify-center rounded-2xl mx-auto text-gold">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">Authentic Home Cooking</h3>
              <p className="text-navy/60 leading-relaxed">
                Recipes passed down through generations, prepared with the same love as a family meal.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gold/5 space-y-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cream flex items-center justify-center rounded-2xl mx-auto text-gold">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">Fresh Preparation</h3>
              <p className="text-navy/60 leading-relaxed">
                No preservatives, no frozen shortcuts. Every meal is cooked fresh daily using seasonal produce.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gold/5 space-y-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cream flex items-center justify-center rounded-2xl mx-auto text-gold">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy">Food That Brings Together</h3>
              <p className="text-navy/60 leading-relaxed">
                Beyond nutrition, we believe a good meal is the foundation of community and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-8">What Makes Us Different</h2>

            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0 text-gold">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Consistent Quality</h3>
                  <p className="text-navy/60 leading-relaxed">Rigorous quality checks ensure that every bite tastes as good as the first time you tried us.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0 text-gold">
                  <Utensils size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Balanced Recipes</h3>
                  <p className="text-navy/60 leading-relaxed">Dietician-approved meal plans that balance taste with health and nutrition.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0 text-gold">
                  <Flag size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Unwavering Reliability</h3>
                  <p className="text-navy/60 leading-relaxed">Timely deliveries that respect your schedule, every single day of the week.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
             <div className="relative w-full max-w-lg aspect-square rounded-full overflow-hidden border-[12px] border-cream shadow-xl">
                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                   <div className="text-navy/20 font-serif text-2xl italic text-center p-8">Healthy Fresh Ingredients Image</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream/20">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Who We Serve</h2>
            <p className="text-navy/50 italic">Tailored culinary experiences for every walk of life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Corporate", icon: <Building size={20} /> },
              { label: "Professionals", icon: <Briefcase size={20} /> },
              { label: "Students", icon: <GraduationCap size={20} /> },
              { label: "Celebrations", icon: <PartyPopper size={20} /> },
              { label: "Spiritual", icon: <Heart size={20} /> },
              { label: "Community", icon: <Users size={20} /> }
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-xl border-b-4 border-gold shadow-sm flex items-center gap-4 group hover:bg-gold hover:text-white transition-all cursor-default">
                <div className="text-gold group-hover:text-white transition-colors">{item.icon}</div>
                <span className="font-bold text-navy group-hover:text-white transition-colors">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Kitchen Standards */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg bg-slate-100 flex items-center justify-center border border-gray-100">
             <div className="text-navy/20 font-serif text-2xl italic">Modern Clean Kitchen Image</div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Our Kitchen Standards</h2>
            <p className="text-navy/60 leading-relaxed text-lg">
              We maintain the highest levels of hygiene and safety. Our kitchen is a temple where we honor food. From sourcing organic vegetables to maintaining a sterile environment, we ensure that every box delivered is safe and sanitary.
            </p>
            <div className="space-y-4">
               {[
                 "Daily Sanitization Protocols",
                 "Fresh Local Sourcing",
                 "Temperature Controlled Kitchens"
               ].map((check) => (
                 <div key={check} className="flex items-center gap-3 text-navy/80 font-medium">
                    <CheckCircle size={18} className="text-gold" />
                    <span>{check}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream/40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 bg-gold flex items-center justify-center rounded-2xl mx-auto text-white shadow-lg rotate-12 mb-4">
             <Flag size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Our Mission</h2>
          <p className="text-2xl md:text-3xl font-serif italic text-navy/70 leading-relaxed">
            "To make the luxury of home-cooked tradition accessible to everyone, ensuring no one has to compromise on their health or heritage because of a busy schedule."
          </p>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Cities We Serve</h2>
            <p className="text-gold font-bold text-sm tracking-widest uppercase">Expanding rapidly across NCR</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {["Delhi", "Gurgaon", "Noida", "Ghaziabad"].map((city) => (
              <div key={city} className="bg-cream/30 p-10 rounded-2xl flex flex-col items-center gap-4 group hover:bg-gold transition-all cursor-default text-center">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold group-hover:text-gold shadow-sm">
                    <MapPin size={24} />
                 </div>
                 <span className="text-xl font-bold text-navy group-hover:text-white transition-colors">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">Ready to taste the tradition?</h2>
          <p className="text-navy/60 text-lg">
            Join thousands of happy families and professionals who have made Gharana Meals a part of their daily life. Delicious, healthy, and just like home.
          </p>
          <button className="bg-gold text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-gold-dark transition-all shadow-xl shadow-gold/20">
            Explore Our Services
          </button>
        </div>
      </section>
    </div>
  );
}
