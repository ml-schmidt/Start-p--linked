"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { ProfilBilledeSlide } from "@/data/slides";

export function ProfilBilledeLayout({ slide }: { slide: ProfilBilledeSlide }) {
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
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-accent-teal/40 bg-accent-teal/5 p-6">
          <p className="mb-4 font-semibold text-accent-teal">Do&apos;s:</p>
          <ul className="space-y-2">
            {slide.doItems.map((item, i) => (
              <li key={i} className="flex gap-2 text-slate-200">
                <Check className="h-5 w-5 shrink-0 text-accent-teal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-accent-orange/40 bg-accent-orange/5 p-6">
          <p className="mb-4 font-semibold text-accent-orange">Don&apos;ts:</p>
          <ul className="space-y-2">
            {slide.dontItems.map((item, i) => (
              <li key={i} className="flex gap-2 text-slate-200">
                <X className="h-5 w-5 shrink-0 text-accent-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-accent-blue/50 bg-accent-blue/10 px-4 py-3 text-slate-200">
        {slide.actionBox}
      </div>
    </motion.div>
  );
}
