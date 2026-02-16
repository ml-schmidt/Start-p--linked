"use client";

import { motion } from "framer-motion";
import { CategoryLabel } from "@/components/CategoryLabel";
import type { OutroSlide } from "@/data/slides";

export function OutroLayout({ slide }: { slide: OutroSlide }) {
  const paragraphs = slide.mainContent?.split("\n\n").filter(Boolean) ?? [];

  return (
    <motion.div
      className="flex min-h-[70vh] flex-col items-center justify-center px-[80px] py-20 text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {slide.category && (
        <div className="mb-4">
          <CategoryLabel>{slide.category}</CategoryLabel>
        </div>
      )}
      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {slide.headline}
      </h2>
      {paragraphs.length > 0 && (
        <div className="mt-8 max-w-xl space-y-4 text-slate-300">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      )}
      {slide.subtext && (
        <p className="mt-8 text-slate-400">{slide.subtext}</p>
      )}
      <div className="mt-8 flex flex-col items-center gap-4">
        {slide.ctaUrl && (
          <a
            href={slide.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white transition hover:bg-accent-blue/90"
          >
            {slide.cta}
          </a>
        )}
        {slide.ctaUrl && (
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(slide.ctaUrl)}`}
            alt="QR kode til LinkedIn profil"
            className="h-[140px] w-[140px] rounded-lg border border-slate-600 bg-white p-1"
            width={140}
            height={140}
          />
        )}
      </div>
      {slide.bottomLine && (
        <p className="mt-8 text-sm text-slate-500">{slide.bottomLine}</p>
      )}
    </motion.div>
  );
}
