import React from "react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    features: [
      "1 Page Portfolio",
      "Mobile-Responsive Layout",
      "Basic Animations",
      "Delivery in 7 Days",
    ],
    tag: "For Beginners",
    tagColor: "bg-[#915EFF]",
    buttonColor: "bg-[#915EFF]",
  },
  {
    name: "Professional",
    price: "₹10,999",
    features: [
      "Multi-page Website (3–5 pages)",
      "Lottie + Scroll Animations",
      "Contact Form & Backend",
      "Optimized for SEO & Speed",
      "Delivery in 14 Days",
    ],
    tag: "Best Value",
    tagColor: "bg-[#915EFF]",
    buttonColor: "bg-[#915EFF]",
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹20,999",
    features: [
      "Fully Custom Business/Portfolio Site",
      "3D Models, Lottie, Video Animations",
      "Contact + Admin Panel + Email",
      "Premium UI/UX + Domain Support",
      "Delivery in 14-20 Days",
    ],
    tag: "For Enterprises",
    tagColor: "bg-[#915EFF]",
    buttonColor: "bg-[#915EFF]",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="text-white bg-[#0B0F19] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-lg text-white-100 mb-12">
          Get a stunning, animated, and fully responsive portfolio or business website that stands out.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-xl ${
                plan.highlight ? "bg-[#2A204D] border border-[#915EFF]" : "bg-[#111827]"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full text-white ${plan.tagColor}`}
                >
                  {plan.tag}
                </span>
              </div>

              <h4 className="text-4xl font-bold mb-6 text-white">{plan.price}</h4>

              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-green-400">
                    <span className="mr-2">✔</span>
                    <span className="text-white-100">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact">
                <button
                  className={`w-full text-white font-medium py-3 rounded-lg ${plan.buttonColor} hover:opacity-90`}
                >
                  Get Started
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
