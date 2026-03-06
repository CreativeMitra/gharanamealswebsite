import { Briefcase, Users, GraduationCap, PartyPopper, UtensilsCrossed, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Corporate Tiffin",
    description: "Nutritious and balanced office lunches designed for the working professional.",
    icon: <Briefcase className="text-gold" />,
  },
  {
    title: "Bulk Meals",
    description: "High-volume meal solutions for institutions, NGOs, and large organizations.",
    icon: <Users className="text-gold" />,
  },
  {
    title: "PG Meal Plans",
    description: "Daily comfort and nutrition for students staying away from home.",
    icon: <GraduationCap className="text-gold" />,
  },
  {
    title: "Event Catering",
    description: "Tailored menus for weddings, birthdays, and memorable corporate events.",
    icon: <PartyPopper className="text-gold" />,
  },
  {
    title: "Guruji Prashad",
    description: "Dedicated service for Langar, Seva meals, and spiritual gatherings.",
    icon: <UtensilsCrossed className="text-gold" />,
  },
];

export default function Services() {
  return (
    <section className="px-8 py-24 bg-cream/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
            Our Specialized Services
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="mb-6 p-3 bg-cream inline-block rounded-xl group-hover:bg-gold/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-navy mb-4">
                {service.title}
              </h3>
              <p className="text-navy/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          <div className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-serif text-navy mb-4">
              Customized Plan?
            </h3>
            <p className="text-navy/60 mb-6">
              Talk to us for bespoke catering needs.
            </p>
            <button className="flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all">
              Contact Sales <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
