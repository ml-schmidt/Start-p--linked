"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { ProfilSlide } from "@/data/slides";

const tintStripe = {
  blue: "border-l-4 border-l-accent-blue",
  teal: "border-l-4 border-l-accent-teal",
  orange: "border-l-4 border-l-accent-orange",
};

const tintBorder = {
  blue: "border-accent-blue/50",
  teal: "border-accent-teal/50",
  orange: "border-accent-orange/50",
};

const tintBg = {
  blue: "bg-accent-blue/5",
  teal: "bg-accent-teal/5",
  orange: "bg-accent-orange/5",
};

export function ProfilLayout({ slide }: { slide: ProfilSlide }) {
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
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {slide.columns.map((col, i) => (
          <motion.div
            key={i}
            className={`rounded-xl border p-6 ${tintStripe[col.tint]} ${tintBorder[col.tint]} ${tintBg[col.tint]}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.4, ease: "easeOut" }}
          >
            <span className="text-3xl">{col.icon}</span>
            <h3 className="mt-4 text-lg font-bold text-white">{col.title}</h3>
            {col.subtitle && (
              <p className="mt-1 text-sm text-slate-400">{col.subtitle}</p>
            )}
            <ul className="mt-4 space-y-2">
              {col.bullets.map((b, j) => (
                <li key={j} className="text-sm text-slate-300">• {b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
