import type { CodeBlocksSlide } from "@/data/slides";

export function CodeBlocksLayout({ slide }: { slide: CodeBlocksSlide }) {
  return (
    <div className="px-6 py-8 md:px-10">
      <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
        {slide.headline}
      </h2>
      <div className="mx-auto max-w-3xl space-y-6">
        {slide.templates.map((t, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-[0_0_30px_-8px_rgba(59,130,246,0.08)]"
          >
            <div className="border-b border-slate-800 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300">
              {t.label}
            </div>
            <pre className="whitespace-pre-wrap p-4 text-sm text-slate-300 font-mono">
              {t.code}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
