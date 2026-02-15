"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { RoadmapSlide } from "@/data/slides";

export function RoadmapLayout({ slide }: { slide: RoadmapSlide }) {
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
      <ul className="mt-12 max-w-2xl space-y-6">
        {slide.items.map((item, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-700/80 text-lg font-bold text-white">
              {item.number}
            </span>
            <span className="text-2xl">{item.emoji}</span>
            <span className="text-lg font-medium text-white">
              {item.title}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
