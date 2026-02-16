"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { IntroSlide } from "@/data/slides";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function IntroLayout({ slide }: { slide: IntroSlide }) {
  return (
    <motion.div
      className="flex min-h-[70vh] flex-col items-center justify-center px-[80px] py-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="mb-4 self-center" variants={item}>
        <CategoryLabel>{slide.category}</CategoryLabel>
      </motion.div>
      <motion.h1
        className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        variants={item}
      >
        {slide.headline}
      </motion.h1>
      <motion.p
        className="mt-3 text-xl text-accent-teal font-medium"
        variants={item}
      >
        {slide.subtitle}
      </motion.p>
      <motion.p className="mt-2 text-center text-lg text-slate-400" variants={item}>
        {slide.tagline}
      </motion.p>
      {slide.authorLine && (
        <motion.p className="mt-6 text-sm text-slate-500" variants={item}>
          {slide.authorLine}
        </motion.p>
      )}
      {slide.showProfileImage && (
        <motion.div
          className="mt-10 h-24 w-24 rounded-full border-2 border-slate-600 bg-navy-light flex items-center justify-center text-2xl font-bold text-slate-400"
          variants={item}
        >
          ML
        </motion.div>
      )}
    </motion.div>
  );
}
