import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">

      {/* Header */}
      <section className="bg-cream/50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
            Get in Touch
          </h1>
          <p className="text-navy/70 text-lg md:text-xl leading-relaxed">
            Experience authentic home-style catering across Delhi NCR. We're here to
            serve your corporate, event, and daily meal needs.
          </p>
        </div>
      </section>


      {/* Main Content */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-12">

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center rounded-lg text-gold border border-gold/10">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Phone</h3>
                  <p className="text-navy/70">+91 80762 77214</p>
                  <p className="text-navy/70">+91 77828 28212</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center rounded-lg text-gold border border-gold/10">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Email</h3>
                  <p className="text-navy/70">mealsgharana@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center rounded-lg text-gold border border-gold/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Address</h3>
                  <p className="text-navy/70">
                    New Delhi, India
                  </p>
                </div>
              </div>

            </div>


            {/* WhatsApp Support */}
            <div className="bg-white border border-gold/20 rounded-xl p-6 shadow-sm">

              <span className="text-[12px] font-bold text-gold uppercase tracking-wider mb-4 block">
                Direct Support
              </span>

              <a
                href="https://wa.me/917782828212"
                target="_blank"
                className="w-full border-2 border-gold rounded-lg py-3 flex items-center justify-center gap-2 text-gold font-bold hover:bg-gold hover:text-white transition-all"
              >
                <MessageCircle size={20} className="fill-current" />
                WhatsApp Us Now
              </a>

            </div>


            {/* Cities */}
            <div>
              <h3 className="text-lg font-bold text-navy mb-4">Cities We Serve</h3>

              <div className="flex flex-wrap gap-3">
                {["Delhi", "Gurgaon", "Noida", "Ghaziabad"].map((city) => (
                  <span
                    key={city}
                    className="bg-cream px-4 py-2 rounded-full text-navy/70 text-sm font-medium border border-gold/10"
                  >
                    {city}
                  </span>
                ))}
              </div>

            </div>

          </div>


          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 h-fit">

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-8">
              Request a Service
            </h2>

            <form
              action="https://formsubmit.co/mealsgharana@gmail.com"
              method="POST"
              className="space-y-6"
            >

              {/* FormSubmit settings */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Request - Gharana Meals" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full bg-cream/30 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-cream/30 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                  />
                </div>

              </div>


              <div className="space-y-2">

                <label className="text-sm font-bold text-navy">Service Type</label>

                <select
                  name="service"
                  required
                  className="w-full bg-cream/30 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                >
                  <option>Select a service</option>
                  <option>Corporate Tiffin</option>
                  <option>PG Meals</option>
                  <option>Guru Food</option>
                  <option>Gathering Meals</option>
                  <option>Food Distribution</option>
                </select>

              </div>


              <div className="space-y-2">

                <label className="text-sm font-bold text-navy">Message</label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-cream/30 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold resize-none"
                />

              </div>


              <button
                type="submit"
                className="w-full bg-gold text-white font-bold py-4 rounded-lg shadow-lg shadow-gold/20 hover:bg-gold-dark transition-all uppercase tracking-widest"
              >
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}