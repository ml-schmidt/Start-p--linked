"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { KredibilitetSlide } from "@/data/slides";

const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function KredibilitetLayout({ slide }: { slide: KredibilitetSlide }) {
  return (
    <motion.div
      className="grid min-h-[70vh] grid-cols-1 gap-12 px-[80px] py-20 md:grid-cols-[60%_1fr]"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <div>
        <CategoryLabel>{slide.category}</CategoryLabel>
        <motion.h2
          className="text-3xl font-bold text-white md:text-4xl"
          variants={item}
        >
          {slide.headline}
        </motion.h2>
        <ul className="mt-8 space-y-3">
          {slide.leftBullets.map((bullet, i) => (
            <motion.li
              key={i}
              className="flex gap-3 text-white"
              variants={item}
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        variants={item}
      >
        <div className="rounded-lg border border-slate-600 bg-navy-light/80 px-6 py-4 text-center text-slate-400">
          {slide.rightBefore}
        </div>
        <ArrowRight className="h-8 w-8 text-accent-blue" />
        <div className="rounded-lg border-2 border-accent-teal bg-accent-teal/10 px-6 py-4 text-center font-semibold text-accent-teal">
          {slide.rightAfter}
        </div>
      </motion.div>
    </motion.div>
  );
}
