"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/data/slides";
import { SlideRenderer } from "./SlideRenderer";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
  }),
};

export function SlideController() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = slides.length;
  const slide = slides[index];

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => Math.min(total - 1, Math.max(0, i + delta)));
    },
    [total]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go]);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#020617]">
      {/* Top breadcrumb */}
      <header className="border-b border-slate-800/80 bg-slate-950/50 px-6 py-3 text-center backdrop-blur-sm">
        <p className="text-sm text-slate-400">
          Slides &gt; LinkedIn Masterclass
          {slide && ` • ${slide.id} / ${total}`}
        </p>
      </header>

      {/* Main area: click zones + slide */}
      <main className="relative flex flex-1 flex-col">
        {/* Left click zone */}
        <button
          type="button"
          onClick={() => go(-1)}
          className="click-zone absolute left-0 top-0 z-10 h-full w-16 md:w-24 flex items-center justify-center text-slate-500 hover:bg-slate-800/30 hover:text-slate-300 transition"
          aria-label="Forrige slide"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>

        {/* Right click zone */}
        <button
          type="button"
          onClick={() => go(1)}
          className="click-zone absolute right-0 top-0 z-10 h-full w-16 md:w-24 flex items-center justify-center text-slate-500 hover:bg-slate-800/30 hover:text-slate-300 transition"
          aria-label="Næste slide"
        >
          <ChevronRight className="h-10 w-10" />
        </button>

        {/* Slide content */}
        <div className="flex flex-1 items-center justify-center px-16 md:px-28 py-8 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {slide && (
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full max-w-5xl"
              >
                <SlideRenderer slide={slide} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom dots */}
      <footer className="border-t border-slate-800/80 bg-slate-950/50 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className="rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`Gå til slide ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all ${
                  i === index
                    ? "h-2 w-8 bg-accent"
                    : "h-2 w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
