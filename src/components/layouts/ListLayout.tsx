import { Zap } from "lucide-react";
import type { ListSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-xl p-4 shadow-[0_0_30px_-8px_rgba(59,130,246,0.08)]";

export function ListLayout({ slide }: { slide: ListSlide }) {
  return (
    <div className="px-6 py-8 md:px-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {slide.headline}
        </h2>
        {slide.source && (
          <p className="mt-2 text-sm text-slate-500">{slide.source}</p>
        )}
      </div>
      <div className="mx-auto max-w-2xl space-y-4">
        {slide.items.map((item, i) => (
          <div key={i} className={`${cardClass} flex gap-4`}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
              <Zap className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
