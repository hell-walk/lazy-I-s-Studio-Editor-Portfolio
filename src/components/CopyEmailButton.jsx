/* "Copy my email address", carried over from the developer portfolio's
   BentoGrid tile. Same button, same behaviour, without the Lottie confetti. */
import React, { useState } from "react";

import MagicButton from "./ui/MagicButton";
import { EMAIL } from "../constants";

const CopyIcon = () => (
  <svg viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden='true'>
    <rect x='9' y='9' width='11' height='11' rx='2' />
    <path d='M5 15V6a2 2 0 0 1 2-2h9' />
  </svg>
);

const CopyEmailButton = ({ otherClasses = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done, done);
    } else {
      window.prompt("Copy my email address:", EMAIL);
      done();
    }
  };

  return (
    <MagicButton
      title={copied ? "Email is Copied!" : "Copy my email address"}
      icon={<CopyIcon />}
      position='left'
      handleClick={handleCopy}
      otherClasses={`!bg-[#161A31] ${otherClasses}`}
    />
  );
};

export default CopyEmailButton;
