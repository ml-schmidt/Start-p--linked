"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { ProfilBannerSlide } from "@/data/slides";

export function ProfilBannerLayout({ slide }: { slide: ProfilBannerSlide }) {
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
      <p className="mt-8 font-semibold text-white">
        IDÉER TIL PÆDAGOGIK-STUDERENDE:
      </p>
      <ul className="mt-2 space-y-1 text-slate-300">
        {slide.ideerItems.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
      <p className="mt-8 font-semibold text-white">RESSOURCER:</p>
      <ul className="mt-2 space-y-1 text-slate-300">
        {slide.ressourcerItems.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-lg border border-accent-orange/50 bg-accent-orange/10 px-4 py-3 text-slate-200">
        {slide.actionBox}
      </div>
    </motion.div>
  );
}
