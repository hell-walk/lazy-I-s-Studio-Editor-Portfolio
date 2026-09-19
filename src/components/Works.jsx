import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { works, POD_REPORT } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/* Same bandwidth rules as lazyistudio.com: posters come from YouTube's CDN,
   full playback is a YouTube iframe, and the only video served from here is
   a short muted loop that does not download until someone dwells 180ms. */

const REDUCED = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const poster = (w) => `https://i.ytimg.com/vi/${w.youtube}/hqdefault.jpg`;
const isVert = (w) => w.aspect === "9/16";
const mime = (u) => (/\.webm($|\?)/i.test(u) ? "video/webm" : /\.mp4($|\?)/i.test(u) ? "video/mp4" : undefined);

const Lede = ({ text, marked }) => {
  const i = marked ? text.indexOf(marked) : -1;
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className='mark'>{marked}</span>
      {text.slice(i + marked.length)}
    </>
  );
};

/* A still with a muted loop behind it. */
const Still = ({ work, className = "" }) => {
  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const timer = useRef(null);
  const video = useRef(null);
  const hasPreview = !!(work.preview && work.preview.length) && !REDUCED;

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (playing) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    } else {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        /* ignore */
      }
    }
  }, [playing, armed]);

  const start = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setArmed(true);
      setPlaying(true);
    }, 180);
  };
  const stop = () => {
    clearTimeout(timer.current);
    setPlaying(false);
  };

  return (
    <div
      className={`still relative overflow-hidden bg-[#1B1915] border border-white/10 ${isVert(work) ? "aspect-[9/16]" : "aspect-video"} ${playing ? "playing" : ""} ${className}`}
      onPointerEnter={(e) => {
        if (!hasPreview || e.pointerType === "touch") return;
        start();
      }}
      onPointerLeave={stop}
      onFocus={hasPreview ? start : undefined}
      onBlur={stop}
    >
      <img src={poster(work)} alt='' loading='lazy' width='480' height='270' className='w-full h-full object-cover transition-transform duration-500 group-hover/row:scale-[1.035]' />
      {armed && (
        <video ref={video} muted loop playsInline preload='none' className='absolute inset-0 w-full h-full object-cover'>
          {work.preview.map((u) => (
            <source key={u} src={u} type={mime(u)} />
          ))}
        </video>
      )}
      {hasPreview && <span className='pvtag'>Preview</span>}
    </div>
  );
};

const Player = ({ work, onClose }) => (
  <div className='mt-6'>
    <div className={`relative bg-black border border-white/10 ${isVert(work) ? "aspect-[9/16] max-w-[420px] mx-auto" : "aspect-video w-full"}`}>
      <iframe
        className='absolute inset-0 w-full h-full'
        src={`https://www.youtube-nocookie.com/embed/${work.youtube}?autoplay=1&rel=0&modestbranding=1`}
        title={work.title}
        allow='accelerometer; autoplay; encrypted-media; picture-in-picture'
        allowFullScreen
      />
    </div>
    <button type='button' onClick={onClose} className='mt-3 text-[11px] font-bold tracking-[0.14em] uppercase text-secondary hover:text-white'>
      Close player
    </button>
  </div>
);

const WorkRow = ({ work, n, open, onToggle }) => (
  <motion.li variants={fadeIn("up", "spring", Math.min(n, 4) * 0.15, 0.75)} className='border-b border-white/10'>
    <div
      role='button'
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      className='group/row grid grid-cols-[38px_1fr] md:grid-cols-[54px_300px_1fr_92px] gap-x-4 md:gap-x-6 py-6 cursor-pointer hover:bg-black-100/60 transition-colors rounded-lg md:px-2 -mx-0 md:-mx-2'
    >
      <span className='text-secondary font-semibold text-[26px] text-center pt-1 tabular-nums'>{n + 1}</span>

      <div className='col-start-2 md:col-start-auto'>
        <Still work={work} className={isVert(work) ? "w-[124px]" : "w-full"} />
      </div>

      <div className='col-start-2 md:col-start-auto mt-3 md:mt-0'>
        <h3 className='text-white font-semibold text-[20px] leading-[1.16] tracking-tight group-hover/row:underline underline-offset-4 decoration-secondary'>
          {work.title}
        </h3>
        <p className='mt-2 text-secondary text-[15.5px] max-w-[64ch] leading-[26px]'>
          <Lede text={work.lede} marked={work.marked} />
        </p>
        <p className='mt-2 text-[12px] text-white-100/70'>
          {work.ref} · {work.format} · {work.year}
        </p>
        <p className='mt-1 text-[12px] text-white-100/70'>{work.role}</p>
        <span className='mt-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-[#915EFF]'>
          <svg viewBox='0 0 24 24' width='12' height='12' fill='currentColor' aria-hidden='true'>
            <path d='M7 4l14 8-14 8z' />
          </svg>
          {open ? "Now playing" : "Watch now"}
        </span>
      </div>

      <span className='col-start-2 md:col-start-auto md:text-right text-white font-semibold text-[16px] tabular-nums pt-1'>{work.duration}</span>
    </div>

    {open && <Player work={work} onClose={onToggle} />}
  </motion.li>
);

const Works = () => {
  const [open, setOpen] = useState(null);
  const rows = works.slice().sort((a, b) => String(b.added).localeCompare(String(a.added)));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Archival work for{" "}
          <a href={POD_REPORT} target='_blank' rel='noopener noreferrer' className='text-white underline underline-offset-4 decoration-[#915EFF]'>
            The Pod Report
          </a>{" "}
          and others
        </p>
        <h2 className={styles.sectionHeadText}>All work.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Everything, in the order it was made, newest first. Hover a still to see a
        few seconds of it. Press a row and the full piece streams from YouTube.
      </motion.p>

      <ul className='mt-12 list-none border-t border-white/10'>
        {rows.map((w, n) => (
          <WorkRow key={w.slug} work={w} n={n} open={open === w.slug} onToggle={() => setOpen(open === w.slug ? null : w.slug)} />
        ))}
      </ul>
    </>
  );
};

export default SectionWrapper(Works, "work");
