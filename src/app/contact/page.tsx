import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-cream/50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Get in Touch</h1>
          <p className="text-navy/70 text-lg md:text-xl leading-relaxed">
            Experience authentic home-style catering across Delhi NCR. We're here to
            serve your corporate, event, and daily meal needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center rounded-lg flex-shrink-0 text-gold border border-gold/10">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Phone</h3>
                  <p className="text-navy/70">+91 98765 43210</p>
                  <p className="text-navy/70">+91 11 2345 6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center rounded-lg flex-shrink-0 text-gold border border-gold/10">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Email</h3>
                  <p className="text-navy/70">hello@gharanameals.com</p>
                  <p className="text-navy/70">orders@gharanameals.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center rounded-lg flex-shrink-0 text-gold border border-gold/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Address</h3>
                  <p className="text-navy/70 leading-relaxed">
                    B-42, Second Floor, Okhla Phase III<br />
                    New Delhi, 110020, India
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Support WhatsApp Box */}
            <div className="bg-white border border-gold/20 rounded-xl p-6 shadow-sm">
              <span className="text-[12px] font-bold text-gold uppercase tracking-wider mb-4 block">Direct Support</span>
              <button className="w-full border-2 border-gold rounded-lg py-3 flex items-center justify-center gap-2 text-gold font-bold hover:bg-gold hover:text-white transition-all group">
                <MessageCircle size={20} className="fill-current" />
                <span>WhatsApp Us Now</span>
              </button>
            </div>

            {/* Cities We Serve */}
            <div>
              <h3 className="text-lg font-bold text-navy mb-4">Cities We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {["Delhi", "Gurgaon", "Noida", "Ghaziabad"].map((city) => (
                  <span key={city} className="bg-cream px-4 py-2 rounded-full text-navy/70 text-sm font-medium border border-gold/10">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Request a Service Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 h-fit">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-8">Request a Service</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-navy">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full bg-cream/30 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors text-navy placeholder:text-navy/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-navy">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-cream/30 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors text-navy placeholder:text-navy/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-navy">Service Type</label>
                <div className="relative">
                  <select
                    id="service"
                    className="w-full bg-cream/30 border border-gray-200 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-gold transition-colors text-navy"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="corporate">Corporate Tiffin</option>
                    <option value="pg">PG Meal Plans</option>
                    <option value="guru">Guru Food</option>
                    <option value="gathering">Gathering Meals</option>
                    <option value="bulk">Bulk Meals</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-navy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-navy">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-cream/30 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors text-navy placeholder:text-navy/30 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white font-bold py-4 rounded-lg shadow-lg shadow-gold/20 hover:bg-gold-dark transition-all uppercase tracking-widest mt-4"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-24 max-w-7xl mx-auto w-full">
        <div className="w-full h-80 md:h-[450px] bg-cream/30 rounded-3xl border border-gold/10 overflow-hidden relative flex items-center justify-center">
           <div className="absolute inset-0 opacity-40">
              <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50L150 20L200 40L250 10L300 60L350 40L400 80L450 50L500 90L550 70L600 110L650 80L700 130" stroke="#c5a059" strokeWidth="2" strokeDasharray="5 5" />
                <circle cx="200" cy="150" r="100" fill="#c5a059" fillOpacity="0.05" />
                <circle cx="500" cy="250" r="150" fill="#c5a059" fillOpacity="0.05" />
                <path d="M50 350C150 300 250 400 350 320C450 240 550 300 650 220C750 140 850 200 950 120" stroke="#c5a059" strokeWidth="1" strokeOpacity="0.1" />
              </svg>
           </div>
           <div className="text-gold flex flex-col items-center gap-4 z-10">
              <MapPin size={48} className="animate-bounce" />
              <p className="font-serif italic text-navy/50 text-xl">Interactive Map Placeholder</p>
           </div>
        </div>
      </section>
    </div>
  );
}
