"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { ProfilIntroSlide } from "@/data/slides";

const emoji = ["1️⃣", "2️⃣", "3️⃣"];

export function ProfilIntroLayout({ slide }: { slide: ProfilIntroSlide }) {
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
      <p className="mt-4 font-semibold text-white">STRUKTUR:</p>
      <ul className="mt-2 space-y-2">
        {slide.structureItems.map((item, i) => (
          <li key={i} className="flex gap-2 text-slate-300">
            <span>{emoji[i] ?? (i + 1) + "️⃣"}</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 font-semibold text-accent-teal">{slide.exampleLabel}</p>
      <p className="mt-2 rounded-lg border border-slate-700 bg-slate-800/60 p-4 text-slate-200 italic">
        {slide.exampleText}
      </p>
      <div className="mt-8 rounded-lg border border-accent-blue/50 bg-accent-blue/10 px-4 py-3 text-slate-200">
        {slide.tipBox}
      </div>
    </motion.div>
  );
}
