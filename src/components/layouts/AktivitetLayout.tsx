"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { AktivitetSlide } from "@/data/slides";

export function AktivitetLayout({ slide }: { slide: AktivitetSlide }) {
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
      <div className="mt-10 rounded-xl border border-accent-teal/40 bg-accent-teal/5 px-6 py-5 text-center">
        <p className="text-xl font-semibold text-white md:text-2xl">
          {slide.formulaText}
        </p>
      </div>
      {slide.magnusQuote && (
        <div className="mt-8 rounded-xl border border-accent-orange/40 bg-accent-orange/10 px-5 py-4 text-slate-200 italic">
          &ldquo;{slide.magnusQuote}&rdquo;
        </div>
      )}
      {slide.actionSteps != null && slide.actionSteps.length > 0 ? (
        <div className="mt-12 rounded-xl border border-accent-teal/40 bg-accent-teal/5 p-6">
          <h3 className="text-lg font-bold text-white">
            {slide.actionTitle ?? "Start her i dag:"}
          </h3>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-slate-200">
            {slide.actionSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          {slide.actionCta && (
            <p className="mt-6 font-medium text-accent-teal">
              {slide.actionCta}
            </p>
          )}
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-white">{slide.leftTitle}</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              {slide.leftBullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{slide.rightTitle}</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              {slide.rightBullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {slide.goerDetNu && (
        <div className="mt-8 rounded-xl border-2 border-accent-teal bg-accent-teal/15 px-5 py-4 text-slate-100 font-medium">
          {slide.goerDetNu}
        </div>
      )}
    </motion.div>
  );
}
