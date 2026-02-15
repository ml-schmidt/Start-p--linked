"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { RoiSlide } from "@/data/slides";

const accentBorder = {
  blue: "border-l-accent-blue",
  teal: "border-l-accent-teal",
  orange: "border-l-accent-orange",
};

const accentBg = {
  blue: "bg-accent-blue/10",
  teal: "bg-accent-teal/10",
  orange: "bg-accent-orange/10",
};

const accentGlow = {
  blue: "hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
  teal: "hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]",
  orange: "hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]",
};

export function RoiLayout({ slide }: { slide: RoiSlide }) {
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
        {slide.cards.map((card, i) => (
          <motion.div
            key={i}
            className={`rounded-xl border border-l-4 border-slate-700/80 p-6 transition-all duration-300 ${accentBorder[card.accent]} ${accentBg[card.accent]} ${accentGlow[card.accent]} hover:scale-[1.02] cursor-default`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.35, ease: "easeOut" }}
          >
            <span className="text-3xl">{card.icon}</span>
            <h3 className="mt-4 text-xl font-bold text-white">{card.title}</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
