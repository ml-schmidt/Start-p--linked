"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { ErfaringSlide } from "@/data/slides";

export function ErfaringLayout({ slide }: { slide: ErfaringSlide }) {
  return (
    <motion.div
      className="px-[80px] py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CategoryLabel>{slide.category}</CategoryLabel>
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        {slide.headline}
      </h2>
      <p className="mt-2 text-slate-400">{slide.subheadline}</p>
      <div className="mt-10 overflow-hidden rounded-xl border border-slate-700">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 border-b border-slate-700 bg-slate-800/40 px-6 py-4 text-sm font-semibold">
          <span className="text-slate-400">{slide.leftColumnHeader}</span>
          <span className="text-slate-500">→</span>
          <span className="text-category-blue">{slide.rightColumnHeader}</span>
        </div>
        {slide.rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto_1fr] gap-4 border-b border-slate-800 px-6 py-4 last:border-0 items-center"
          >
            <motion.span
              className="text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: i * 0.1 }}
            >
              {row.academic}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.2 + i * 0.15,
                ease: "easeOut",
              }}
              className="flex justify-center"
            >
              <ArrowRight className="h-5 w-5 text-accent-blue" />
            </motion.div>
            <motion.span
              className="text-white font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.35 + i * 0.15,
              }}
            >
              {row.business}
            </motion.span>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-accent-blue/50 bg-accent-blue/10 px-4 py-3 text-sm text-slate-200">
        {slide.tipBox}
      </div>
      {slide.magnusExample && (
        <div className="mt-4 rounded-lg border border-accent-teal/50 bg-accent-teal/10 px-4 py-3 text-sm text-slate-200">
          {slide.magnusExample}
        </div>
      )}
    </motion.div>
  );
}
