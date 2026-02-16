"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { ConnectionsSlide } from "@/data/slides";

export function ConnectionsLayout({ slide }: { slide: ConnectionsSlide }) {
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
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="text-5xl font-bold text-accent-blue md:text-6xl">
            {slide.leftStat}
          </div>
          <ul className="mt-6 space-y-2 text-slate-300">
            {slide.leftBullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent-teal">•</span> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-700 bg-navy-light/60 p-6">
          <h3 className="text-lg font-bold text-white">{slide.rightTitle}</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            {slide.rightBullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent-teal">•</span> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-accent-orange/50 bg-accent-orange/10 px-4 py-3 text-sm text-slate-200">
        {slide.bottomTip}
      </div>
      {slide.goerDetNuExercise && (
        <div className="mt-8 rounded-xl border-2 border-amber-400/80 bg-amber-500/15 px-5 py-5 text-slate-100">
          <p className="mb-4 font-bold text-amber-200">
            {slide.goerDetNuExercise.title}
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-200">
            {slide.goerDetNuExercise.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 font-semibold text-amber-200">
            {slide.goerDetNuExercise.frequency}
          </p>
          {slide.goerDetNuExercise.messageExample && (
            <p className="mt-3 text-sm text-slate-300 italic">
              {slide.goerDetNuExercise.messageExample}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}
