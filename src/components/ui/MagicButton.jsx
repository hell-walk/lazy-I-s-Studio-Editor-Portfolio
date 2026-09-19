/* Ported from the developer portfolio's components/MagicButton.tsx
   (Aceternity "border magic" button). */
import React from "react";

const MagicButton = ({ title, icon, position = "left", handleClick, otherClasses = "", type = "button" }) => {
  return (
    <button
      type={type}
      className='relative inline-flex h-12 w-full md:w-auto md:min-w-[15rem] overflow-hidden rounded-lg p-[1px] focus:outline-none'
      onClick={handleClick}
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#020617] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 whitespace-nowrap ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
