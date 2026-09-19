/* Footer carried over from lazyistudio.com: same structure and links, with
   the developer portfolio's "start a project together" gradient tile and its
   copy-email button on top. The big wordmark is a static outline. Colours are
   mapped onto this site's dark palette in index.css under "footer.big". */
import React from "react";

import { EMAIL, POD_REPORT } from "../constants";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import CopyEmailButton from "./CopyEmailButton";

const Footer = () => {
  return (
    <footer className='big'>
      <div className='wrap'>
        <div className='relative overflow-hidden rounded-3xl border border-white/[0.1] min-h-[280px] md:min-h-[320px] mt-12 mb-4'>
          <BackgroundGradientAnimation>
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 gap-8'>
              <p className='text-white font-bold text-[26px] sm:text-[34px] md:text-[40px] leading-tight max-w-[14ch]'>
                Do you want to start a project together?
              </p>
              <CopyEmailButton />
            </div>
          </BackgroundGradientAnimation>
        </div>

        <div className='fcols'>
          <div className='fbrand'>
            <p className='wordmark'>
              Lazy I&rsquo;s Studio<span className='dom'>lazyistudio.com</span>
            </p>
            <p>
              Faceless documentary and video essay editing. Long form and short. I
              decide what a story needs before I decide what it should look like.
            </p>
          </div>
          <div>
            <h4>Work</h4>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#rates'>How I work</a></li>
              <li><a href='#work'>All work</a></li>
              <li><a href='#rates'>Work with me</a></li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li>
                <a href={POD_REPORT} target='_blank' rel='noopener noreferrer'>The Pod Report</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>
                <span className='dot' />
                <a href={`mailto:${EMAIL}?subject=Consultation%20enquiry&body=Channel%20link%3A%0AWhat%20I%20want%20to%20get%20out%20of%20it%3A%0ANext%20two%20or%20three%20video%20ideas%3A`}>
                  Book a consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='fmark' aria-hidden='true'>
          <svg viewBox='0 0 900 130' role='presentation'>
            <text className='out' x='450' y='70'>LAZY I&#8217;S STUDIO</text>
          </svg>
        </div>

        <div className='fbot'>
          <p>Lazy I&rsquo;s Studio &middot; Aniket Singh &middot; 2026</p>
          <p>Edit &middot; Motion graphics &middot; Archival &middot; Colour</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
