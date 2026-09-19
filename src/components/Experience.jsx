import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { skills, packages } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/* ---------- rate card ---------- */

const Corner = ({ className }) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className={className} aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
  </svg>
);

const RateCard = ({ index, title, price, terms, description, cta, mailto }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className='group border border-white/[0.2] hover:border-purple/70 transition-colors duration-300 w-full relative rounded-3xl p-8 flex flex-col'
    style={{ background: "rgb(4,7,29)" }}
  >
    <Corner className='absolute h-10 w-10 -top-3 -left-3 text-white opacity-30' />
    <Corner className='absolute h-10 w-10 -bottom-3 -left-3 text-white opacity-30' />
    <Corner className='absolute h-10 w-10 -top-3 -right-3 text-white opacity-30' />
    <Corner className='absolute h-10 w-10 -bottom-3 -right-3 text-white opacity-30' />

    <p className='text-purple font-bold text-[12px] tracking-[0.2em] uppercase'>Package {index + 1}</p>
    <h3 className='mt-3 text-white text-[24px] font-bold leading-tight'>{title}</h3>
    <p className='mt-5 text-white font-black text-[40px] leading-none'>{price}</p>
    <p className='mt-2 text-[11px] uppercase tracking-[0.16em] text-[#C1C2D3]'>{terms}</p>
    <p className='mt-6 text-[14.5px] leading-[25px] text-secondary flex-1'>{description}</p>
    <a
      href={mailto}
      className='mt-8 inline-flex w-fit items-center justify-center rounded-lg bg-white text-black-100 font-bold text-[12px] tracking-[0.08em] uppercase px-5 py-3 hover:bg-purple transition-colors'
    >
      {cta}
    </a>
  </motion.div>
);

/* ---------- the section ---------- */

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>How I work</p>
        <h2 className={styles.sectionHeadText}>The way I work.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Every piece starts with three questions. How hard is this to follow? How
        much does it change what the viewer understands? Is it carrying the
        argument or supporting it? The structure is locked on paper before
        anything is built. Texture comes after function, and nothing moves
        unless it points at something.
      </motion.p>

      <motion.p variants={fadeIn("", "", 0.2, 1)} className={`${styles.sectionSubText} mt-14 text-center`}>
        Four skills
      </motion.p>
      <div className='mt-10 flex flex-col'>
        <VerticalTimeline lineColor='#232631'>
          {skills.map((s, i) => (
            <VerticalTimelineElement
              key={s.title}
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              iconStyle={{ background: "#915EFF", color: "#fff" }}
              icon={<div className='flex justify-center items-center w-full h-full font-bold text-[16px]'>0{i + 1}</div>}
            >
              <h3 className='text-white text-[24px] font-bold'>{s.title}</h3>
              <p className='mt-3 text-white-100 text-[15px] leading-[26px] tracking-wider' style={{ margin: 0, marginTop: 12 }}>
                {s.line}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()} className='mt-24'>
        <p className={styles.sectionSubText}>Three ways in</p>
        <h2 className={styles.sectionHeadText}>Work with me.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Most editing enquiries start with a price and work backwards to the
        work. I would rather do it the other way round. Start with a
        consultation, or take one of two packages, or bring me something that
        fits neither. Packages are fixed price, agreed in writing before anything
        starts, and quoted once I know what the piece needs. Two revision rounds
        are included in every package.
      </motion.p>

      <div className='mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
        {packages.map((pkg, i) => (
          <RateCard key={pkg.title} index={i} {...pkg} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "rates");
