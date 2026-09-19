import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description }) => (
  <Tilt options={{ max: 20, scale: 1, speed: 450 }} className='w-full h-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className='w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-7 px-7 h-full min-h-[260px] flex flex-col gap-3'>
        <span className='text-[#915EFF] font-bold text-[12px] tracking-[0.2em] uppercase'>
          0{index + 1}
        </span>
        <h3 className='text-white text-[21px] font-bold leading-tight'>{title}</h3>
        <p className='text-secondary text-[14.5px] leading-[25px]'>{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-secondary text-[17px] leading-[30px] flex flex-col gap-5'
      >
          <p>
            Hi, I'm Aniket. I run Lazy I's Studio and I make documentaries that
            tell stories nobody can capture.
          </p>
          <p>
            Most of my best work happens before anything touches a timeline.
            Stories that look perfectly fine on paper can sometimes still perform
            poorly when released, usually because somewhere in the middle your
            viewers simply stop caring. Finding those weak points is the part of
            the job I care most about.
          </p>
          <p>
            Then I put the story in the order your viewers need, not the order it
            happened in.
          </p>
          <p>
            By the time I open the timeline the film is already built. What is
            left is making it land.
          </p>
      </motion.div>

      <div className='mt-16 grid sm:grid-cols-2 xl:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
