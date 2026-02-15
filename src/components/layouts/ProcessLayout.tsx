import { ArrowRight } from "lucide-react";
import type { ProcessSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-[0_0_30px_-8px_rgba(59,130,246,0.1)]";

export function ProcessLayout({ slide }: { slide: ProcessSlide }) {
  return (
    <div className="px-6 py-8 md:px-10">
      <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
        {slide.headline}
      </h2>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
        {slide.steps.map((s, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-4">
            <div className={`${cardClass} w-full text-center`}>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-sm">
                {s.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              {s.description && (
                <p className="mt-2 text-sm text-slate-400">{s.description}</p>
              )}
            </div>
            {i < slide.steps.length - 1 && (
              <ArrowRight className="hidden h-6 w-6 shrink-0 text-slate-600 md:block" />
            )}
          </div>
        ))}
      </div>
      {slide.insight && (
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-slate-700 bg-slate-800/40 p-4 text-center text-slate-300">
          {slide.insight}
        </div>
      )}
    </div>
  );
}
