"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { MentalSlide } from "@/data/slides";

export function MentalLayout({ slide }: { slide: MentalSlide }) {
  return (
    <motion.div
      className="flex min-h-[70vh] flex-col items-center justify-center px-[80px] py-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <CategoryLabel>{slide.category}</CategoryLabel>
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        {slide.headline}
      </h2>
      <div className="relative mt-12 max-w-2xl">
        <div className="absolute -inset-4 rounded-2xl bg-accent-blue/5 blur-xl" />
        <p className="relative text-2xl font-semibold text-white md:text-3xl leading-relaxed">
          {slide.quoteText}
        </p>
        <p className="relative mt-6 text-slate-400">{slide.subText}</p>
      </div>
    </motion.div>
  );
}
