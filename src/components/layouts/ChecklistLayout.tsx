import { Check, QrCode } from "lucide-react";
import type { ChecklistSlide } from "@/data/slides";

const cardClass =
  "bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]";

export function ChecklistLayout({ slide }: { slide: ChecklistSlide }) {
  return (
    <div className="px-6 py-8 md:px-10">
      <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
        {slide.headline}
      </h2>
      <div className="mx-auto flex max-w-3xl flex-col gap-8 md:flex-row md:items-start md:justify-center">
        <div className={cardClass}>
          <ul className="space-y-4">
            {slide.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-300">
                <span className="mt-0.5 shrink-0 text-success">
                  <Check className="h-5 w-5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-6 inline-block rounded-lg bg-accent px-5 py-2.5 font-semibold text-white transition hover:bg-accent/90"
          >
            {slide.cta}
          </a>
        </div>
        {slide.qrPlaceholder && (
          <div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="flex h-40 w-40 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-500">
              <QrCode className="h-16 w-16" />
            </div>
            <p className="mt-3 text-sm text-slate-400">QR til profil</p>
          </div>
        )}
      </div>
    </div>
  );
}
