import type { GridSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-[0_0_30px_-8px_rgba(59,130,246,0.1)]";

export function GridLayout({ slide }: { slide: GridSlide }) {
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
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {slide.cards.map((card, i) => (
          <div key={i} className={cardClass}>
            <h3 className="text-lg font-semibold text-accent">{card.title}</h3>
            <p className="mt-3 text-slate-400">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
