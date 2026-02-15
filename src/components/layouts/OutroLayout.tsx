"use client";

import { motion } from "framer-motion";
import type { OutroSlide } from "@/data/slides";

export function OutroLayout({ slide }: { slide: OutroSlide }) {
  return (
    <motion.div
      className="flex min-h-[70vh] flex-col items-center justify-center px-[80px] py-20 text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {slide.headline}
      </h2>
      <a
        href={slide.ctaUrl ?? "#"}
        target={slide.ctaUrl ? "_blank" : undefined}
        rel={slide.ctaUrl ? "noopener noreferrer" : undefined}
        className="mt-8 inline-block rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white transition hover:bg-accent-blue/90"
      >
        {slide.cta}
      </a>
      {slide.ctaUrl && (
        <p className="mt-3 text-sm text-slate-500">magnusloev.dk</p>
      )}
    </motion.div>
  );
}
