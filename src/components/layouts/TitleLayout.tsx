import type { TitleSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]";

export function TitleLayout({ slide }: { slide: TitleSlide }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6">
      <div className={`${cardClass} max-w-2xl w-full text-center`}>
        {slide.badge && (
          <span className="mb-4 inline-block rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm text-slate-300">
            {slide.badge}
          </span>
        )}
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {slide.title}
        </h1>
        <p className="mt-4 text-lg text-slate-400 md:text-xl">{slide.subtitle}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-lg font-semibold">
            ML
          </div>
          <div className="text-left">
            <p className="font-semibold text-white">{slide.speaker}</p>
            {slide.speakerRole && (
              <p className="text-sm text-slate-400">{slide.speakerRole}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
