"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { OutreachSlide } from "@/data/slides";

export function OutreachLayout({ slide }: { slide: OutreachSlide }) {
  const isNatural = slide.goodExamples != null && slide.goodExamples.length > 0;

  if (isNatural) {
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
        {slide.introLine && (
          <p className="mt-10 text-lg text-white font-medium">
            {slide.introLine}
          </p>
        )}
        {slide.goodExamples != null && slide.goodExamples.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 flex items-center gap-2 text-accent-teal font-semibold">
              <Check className="h-5 w-5" />
              GOD TILGANG:
            </p>
            <ul className="space-y-2 text-slate-200">
              {slide.goodExamples.map((ex, i) => (
                <li key={i} className="pl-7 italic">
                  {i === 1 && (
                    <span className="block pl-0 text-sm text-slate-400 not-italic mb-2">eller</span>
                  )}
                  &ldquo;{ex}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        )}
        {slide.avoidBullets != null && slide.avoidBullets.length > 0 && (
          <div className="mt-10">
            <p className="mb-3 flex items-center gap-2 text-accent-orange font-semibold">
              <X className="h-5 w-5" />
              UNDGÅ:
            </p>
            <ul className="space-y-1 text-slate-400">
              {slide.avoidBullets.map((b, i) => (
                <li key={i} className="pl-7">• {b}</li>
              ))}
            </ul>
          </div>
        )}
        {slide.tipBox && (
          <div className="mt-10 rounded-lg border border-accent-teal/50 bg-accent-teal/10 px-4 py-3 text-slate-200">
            {slide.tipBox}
          </div>
        )}
      </motion.div>
    );
  }

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
      <div className="mt-10 max-w-2xl">
        <div className="rounded-2xl border border-slate-600 bg-slate-800/80 shadow-lg overflow-hidden">
          <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800/90 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-accent-blue" title="Læst" />
            <span className="text-xs text-slate-500">LinkedIn-besked</span>
            <span className="ml-auto text-xs text-slate-500">Nu</span>
          </div>
          <div className="p-5">
            <div className="rounded-2xl rounded-tl-sm border border-slate-600 bg-slate-700/50 p-4 shadow-inner">
              <div className="space-y-1 font-mono text-sm text-slate-200 whitespace-pre-wrap">
                {(slide.messageLines ?? []).map((line, i) => (
                  <div key={i}>{line || " "}</div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <div className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-2 text-slate-400">
                <span className="text-xs">Send</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-lg font-semibold text-white">
          Hvorfor virker det?
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-slate-300">
          {(slide.whyPoints ?? []).map((point, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-accent-teal" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
