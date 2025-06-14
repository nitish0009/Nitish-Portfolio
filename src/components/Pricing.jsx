import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

// Custom hook for GSAP scroll animations
const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const Pricing = () => {
  const cardsRef = useRef([]);

  // Animate each card on scroll with staggered delay
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      <style>{`
        /* Running lights animation on border */
        .running-lights {
          pointer-events: none;
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          border: 2px solid transparent;
          background: linear-gradient(90deg,
            #915EFF,
            #00FFFF,
            #915EFF,
            #00FFFF,
            #915EFF);
          background-size: 400% 400%;
          animation: runningLights 4s linear infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          z-index: 10;
        }

        @keyframes runningLights {
          0% { background-position: 0% 0%; }
          100% { background-position: 400% 0%; }
        }
      `}</style>

      <section id="pricing" className="text-white bg-[#0B0F19] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-white-100 mb-12">
            Get a stunning, animated, and fully responsive portfolio or business website that stands out.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <Tilt
                key={index}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#915EFF"
                glarePosition="all"
                scale={1.05}
                transitionSpeed={400}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="rounded-2xl shadow-xl"
              >
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`relative rounded-2xl p-8 flex flex-col justify-between min-h-[430px] ${
                    plan.highlight ? "bg-[#2A204D]" : "bg-[#111827]"
                  } border-2 border-transparent`}
                >
                  <div>
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
                  </div>

                  <a href="#contact">
                    <button
                      className={`w-full text-white font-medium py-3 rounded-lg ${plan.buttonColor} hover:opacity-90`}
                    >
                      Request This Plan
                    </button>
                  </a>

                  <div className="running-lights"></div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
