"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { ProfilOverskriftSlide } from "@/data/slides";

export function ProfilOverskriftLayout({
  slide,
}: {
  slide: ProfilOverskriftSlide;
}) {
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
      <p className="mt-6 text-slate-300">{slide.introText}</p>
      <div className="mt-8 space-y-3">
        <p className="text-slate-400">{slide.badExample}</p>
        <p className="text-slate-200">{slide.betterExample}</p>
        <p className="text-accent-teal font-medium">{slide.bestExample}</p>
      </div>
      <p className="mt-8 font-semibold text-white">NØGLEN:</p>
      <ul className="mt-2 space-y-1 text-slate-300">
        {slide.keyBullets.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-accent-teal">-</span> {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-lg border border-accent-blue/50 bg-accent-blue/10 px-4 py-3 text-slate-200">
        {slide.tipBox}
      </div>
      {slide.actionBox && (
        <div className="mt-6 rounded-xl border-2 border-accent-teal bg-accent-teal/15 px-5 py-4 text-slate-100 font-medium">
          {slide.actionBox}
        </div>
      )}
    </motion.div>
  );
}
