import React, { useState } from "react";
import { MotionConfig, motion } from "motion/react";

export const Example = ({ isOpen, onToggle }) => {
  return (
    <div className="">
      <AnimatedHamburgerButton isOpen={isOpen} onToggle={onToggle} />
    </div>
  );
};

const AnimatedHamburgerButton = ({ isOpen, onToggle }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={() => onToggle(!isOpen)}
        className="relative h-15 w-15 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className={`absolute h-1 w-8 transition-colors ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={`absolute h-1 w-7 transition-colors ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          style={{ left: "50%", x: "-70%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={`absolute h-1 w-5 transition-colors ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          style={{
            x: "-145%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
      width: ["40px", "40px", "40px"],
      x: ["-50%", "-50%", "-50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
      width: ["40px", "40px", "40px"],
      x: ["-50%", "-50%", "-50%"],
    },
  },
  middle: {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      bottom: ["35%", "50%", "50%"],
      width: ["20px", "20px", "40px"],
      left: ["calc(50% + 10px)", "50%", "50%"],
      x: ["-145%", "-50%", "-50%"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      width: ["40px", "20px", "20px"],
      left: ["50%", "50%", "calc(50% + 10px)"],
      x: ["-50%", "-145%", "-145%"],
    },
  },
};
