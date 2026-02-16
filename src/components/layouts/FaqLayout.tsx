"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { FaqSlide } from "@/data/slides";

const borderColor = {
  blue: "border-l-4 border-l-accent-blue/60",
  teal: "border-l-4 border-l-accent-teal/60",
  orange: "border-l-4 border-l-accent-orange/60",
  purple: "border-l-4 border-l-accent-purple/60",
};

export function FaqLayout({ slide }: { slide: FaqSlide }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.div
      className="px-[80px] py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CategoryLabel>{slide.category}</CategoryLabel>
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        {slide.headline}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {slide.questions.map((q, i) => (
          <motion.div
            key={i}
            className={`cursor-pointer rounded-xl border border-slate-800 bg-navy-light/40 p-5 transition-colors ${borderColor[q.borderColor]}`}
            onMouseEnter={() => setExpanded(i)}
            onMouseLeave={() => setExpanded(null)}
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: expanded === i ? 1.02 : 1,
              boxShadow:
                expanded === i
                  ? "0 0 24px -4px rgba(125, 211, 252, 0.25)"
                  : "0 0 0 0 transparent",
            }}
            transition={{
              opacity: { delay: 0.05 * i, duration: 0.3 },
              scale: { duration: 0.2 },
              boxShadow: { duration: 0.2 },
            }}
          >
            <h3 className="text-sm font-bold text-white md:text-base">Q: {q.question}</h3>
            <p
              className={`mt-2 text-xs text-slate-400 transition-all duration-200 md:text-sm ${
                expanded === i ? "line-clamp-none" : "line-clamp-2"
              }`}
            >
              A: {q.answer}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="mt-8 text-center text-xs text-slate-500"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Hold over et kort for at se hele svaret
      </motion.p>
    </motion.div>
  );
}
