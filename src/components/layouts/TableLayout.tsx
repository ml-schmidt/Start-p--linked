import { X, Check } from "lucide-react";
import type { TableSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]";

export function TableLayout({ slide }: { slide: TableSlide }) {
  return (
    <div className="px-6 py-8 md:px-10">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {slide.headline}
        </h2>
        <p className="mt-2 text-slate-400">{slide.subtext}</p>
      </div>
      <div className={`${cardClass} mx-auto max-w-3xl`}>
        <div className="grid grid-cols-[auto_1fr_1fr] gap-4 p-6 text-left text-sm md:text-base">
          <div className="col-span-3 flex border-b border-slate-700 pb-3 font-semibold text-slate-300">
            <span className="w-10 shrink-0" />
            <span className="flex-1">Før</span>
            <span className="flex-1">Efter</span>
          </div>
          {slide.rows.map((row, i) => (
            <div
              key={i}
              className="col-span-3 grid grid-cols-[auto_1fr_1fr] gap-4 border-b border-slate-800 py-4 last:border-0"
            >
              <span className="flex w-10 shrink-0 items-start justify-center pt-0.5">
                <X className="h-5 w-5 text-red-400/80" />
              </span>
              <span className="text-slate-400 line-through">{row.before}</span>
              <span className="flex gap-2 text-slate-200">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                {row.after}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
