import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Synthetic testimonials
const testimonials = [
  {
    testimonial:
      "Their agile-focused approach and modular API framework completely redefined our deployment strategy. Seamless integration with our legacy stack was the cherry on top.",
    name: "Tushar Dhawan",
    designation: "Product Manager",
    company: "NexaSoft",
    image: null,
  },
  {
    testimonial:
      "A visionary product suite. The attention to design cohesion, backend reliability, and component reusability was beyond expectations. Would recommend without hesitation.",
    name: "Geetu Sharma",
    designation: "Creative Head",
    company: "Brandaura",
    image: null,
  },
  {
    testimonial:
      "Their system transformed our workflow. The automated pipelines, documentation clarity, and CI/CD scaffolding made onboarding and scaling a breeze.",
    name: "Harinder Kumar",
    designation: "Operations Lead",
    company: "CodeTrail",
    image: null,
  },
];

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          {image && (
            <img
              src={image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
