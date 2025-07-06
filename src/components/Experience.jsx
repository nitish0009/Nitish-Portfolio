import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Your custom experience data
const experiences = [
  {
    title: "Founder & CEO",
    company_name: "Glancia AI",
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Built an AI-based styling app that recommends personalized hairstyles and beard styles based on face shape.",
      "Pitched the product to salons, investors, and participated in startup events.",
      "Led end-to-end development, UI/UX design, and marketing strategies.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Business Room AI",
    iconBg: "#232631",
    date: "June 2025 - Present",
    points: [
      "Developed and optimized user interfaces for a business-focused social networking app.",
      "Implemented responsive design and performance enhancements for key components like profile and posts.",
      "Collaborated closely with backend and design teams to ensure seamless UX and fast feature delivery.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <span className='text-white text-[12px] font-semibold text-center leading-tight'>
            {experience.company_name}
          </span>
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
