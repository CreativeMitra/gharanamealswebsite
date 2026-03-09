import { Phone, Mail, MapPin, MessageSquare, ChevronDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-cream/30">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
            Get in Touch
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl">
            Experience authentic home-style catering across Delhi NCR. We're here
            to serve your corporate, event, and daily meal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Information */}
          <div className="space-y-8">

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">Phone</h3>
                <p className="text-navy/70">+91 80762 77214</p>
                <p className="text-navy/70">+91 77828 28212</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">Email</h3>
                <p className="text-navy/70">mealsgharana@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">Address</h3>
                <p className="text-navy/70 max-w-xs">
                  New Delhi, India
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-xl border border-gold/20 shadow-sm mt-12">
              <p className="text-xs uppercase tracking-widest font-bold text-gold mb-4">
                Direct Support
              </p>

              <a
                href="https://wa.me/917782828212"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 border border-gold text-gold py-3 rounded-lg hover:bg-gold/5 transition-colors font-semibold"
              >
                <MessageSquare size={20} fill="currentColor" />
                WhatsApp Us Now
              </a>
            </div>

            {/* Cities */}
            <div className="mt-12">
              <h3 className="font-serif text-2xl text-navy mb-4">
                Cities We Serve
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Delhi", "Gurgaon", "Noida", "Ghaziabad"].map((city) => (
                  <span
                    key={city}
                    className="px-6 py-2 bg-white rounded-full text-navy/70 text-sm font-medium border border-gray-100 shadow-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 h-fit">

            <h3 className="text-3xl font-serif text-navy mb-8">
              Request a Service
            </h3>

            <form
              action="https://formsubmit.co/mealsgharana@gmail.com"
              method="POST"
              className="space-y-6"
            >

              {/* FormSubmit settings */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Service Request - Gharana Meals" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/80">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/80">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

              </div>


              <div className="space-y-2">

                <label className="text-sm font-bold text-navy/80">
                  Service Type
                </label>

                <div className="relative">

                  <select
                    name="service"
                    required
                    className="w-full appearance-none px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold/50 text-navy/70"
                  >
                    <option>Select a service</option>
                    <option>Corporate Tiffin</option>
                    <option>PG Meals</option>
                    <option>Guru Food</option>
                    <option>Gathering Meals</option>
                    <option>Food Distribution</option>
                  </select>

                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/40"
                    size={18}
                  />

                </div>

              </div>


              <div className="space-y-2">

                <label className="text-sm font-bold text-navy/80">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />

              </div>


              <button className="w-full bg-gold text-white py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-gold/90 transition-all shadow-lg shadow-gold/20">
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}