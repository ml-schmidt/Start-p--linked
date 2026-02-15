import type { BentoSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_30px_-8px_rgba(59,130,246,0.08)]";

export function BentoLayout({ slide }: { slide: BentoSlide }) {
  return (
    <div className="px-6 py-8 md:px-10">
      <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
        {slide.headline}
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {slide.items.map((item, i) => (
          <div
            key={i}
            className={cardClass}
            style={{
              gridColumn: slide.items.length === 5 && i === 0 ? "1 / -1" : undefined,
            }}
          >
            <h3 className="text-base font-semibold text-accent">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
