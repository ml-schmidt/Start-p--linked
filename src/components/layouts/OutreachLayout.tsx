"use client";

import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { OutreachSlide } from "@/data/slides";

export function OutreachLayout({ slide }: { slide: OutreachSlide }) {
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
                {slide.messageLines.map((line, i) => (
                  <div key={i}>{line || " "}</div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <div className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-2 text-slate-400">
                <Send className="h-4 w-4" />
                <span className="text-xs">Send</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-lg font-semibold text-white">
          Hvorfor virker det?
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-slate-300">
          {slide.whyPoints.map((point, i) => (
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
