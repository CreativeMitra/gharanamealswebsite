import { Utensils, Clock, Leaf, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: <Utensils size={32} strokeWidth={1.5} />,
    title: "Authentic Recipes",
    description: "Generational family secrets",
  },
  {
    icon: <Clock size={32} strokeWidth={1.5} />,
    title: "Fresh Daily",
    description: "Cooked every morning",
  },
  {
    icon: <Leaf size={32} strokeWidth={1.5} />,
    title: "Premium Ingredients",
    description: "Locally sourced produce",
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "Hygienic Kitchen",
    description: "Strict quality standards",
  },
  {
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: "Timely Delivery",
    description: "Reliable Delhi NCR logistics",
  },
];

export default function Features() {
  return (
    <section className="px-8 py-32 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12 lg:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center flex-1 min-w-[180px]">
            <div className="mb-6 p-4 bg-cream text-gold rounded-full">
              {feature.icon}
            </div>
            <h4 className="font-serif text-lg text-navy mb-2">{feature.title}</h4>
            <p className="text-sm text-navy/50 leading-tight">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
