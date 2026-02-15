import { Check } from "lucide-react";
import type { SplitSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]";

export function SplitLayout({ slide }: { slide: SplitSlide }) {
  return (
    <div className="grid min-h-[70vh] grid-cols-1 gap-6 px-6 py-8 md:grid-cols-2 md:gap-8 md:px-10">
      <div className={`${cardClass} flex flex-col justify-center`}>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {slide.leftTitle}
        </h2>
        {slide.bullets.length > 0 && (
          <ul className="mt-6 space-y-3">
            {slide.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-slate-300">
                <span className="mt-1 shrink-0 text-emerald-500">
                  <Check className="h-5 w-5" />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        {slide.quote && (
          <blockquote className="mt-6 border-l-4 border-accent pl-4 text-slate-300 italic">
            {slide.quote}
          </blockquote>
        )}
      </div>
      <div className={`${cardClass} flex items-center justify-center`}>
        {slide.rightImagePlaceholder ? (
          <div className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700 text-slate-500">
            <span className="text-sm">Portrætbillede</span>
            <span className="mt-1 text-xs">(Magnus)</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
