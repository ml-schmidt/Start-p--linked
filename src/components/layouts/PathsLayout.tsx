import type { PathsSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]";

export function PathsLayout({ slide }: { slide: PathsSlide }) {
  return (
    <div className="px-6 py-8 md:px-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {slide.headline}
        </h2>
        <p className="mt-2 text-slate-400">{slide.context}</p>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-accent">{slide.pathA.title}</h3>
          <p className="mt-2 text-sm font-medium text-slate-300">Mål:</p>
          <p className="text-slate-400">{slide.pathA.goal}</p>
          <p className="mt-3 text-sm font-medium text-slate-300">Handling:</p>
          <p className="text-slate-400">{slide.pathA.action}</p>
        </div>
        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-success">{slide.pathB.title}</h3>
          <p className="mt-2 text-sm font-medium text-slate-300">Mål:</p>
          <p className="text-slate-400">{slide.pathB.goal}</p>
          <p className="mt-3 text-sm font-medium text-slate-300">Handling:</p>
          <p className="text-slate-400">{slide.pathB.action}</p>
        </div>
      </div>
    </div>
  );
}
