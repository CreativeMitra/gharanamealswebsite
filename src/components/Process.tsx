export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Choose Service",
      description: "Select from our range of meal plans or event catering.",
    },
    {
      number: "2",
      title: "Consult & Customise",
      description: "We fine-tune the menu to your dietary preferences.",
    },
    {
      number: "3",
      title: "Fresh Preparation",
      description: "Our chefs cook your meal with love and high-quality spices.",
    },
    {
      number: "4",
      title: "Doorstep Delivery",
      description: "Enjoy hot, nutritious food delivered at your scheduled time.",
    },
  ];

  return (
    <section className="px-8 py-32 bg-cream/30 border-y border-navy/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif italic text-navy mb-4">
            Simple. Transparent. Traditional.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gold/30 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-bold text-lg mb-8 relative z-10 shadow-lg shadow-gold/20">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl text-navy mb-4">{step.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
