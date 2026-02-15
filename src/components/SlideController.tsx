"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/data/slides";
import { SlideRenderer } from "./SlideRenderer";

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 24 : -24,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction < 0 ? 24 : -24,
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
    <div className="relative flex min-h-screen flex-col bg-navy">
      <header className="border-b border-slate-800/80 bg-navy/80 px-[80px] py-4 backdrop-blur-sm">
        <p className="text-sm text-slate-400">
          LinkedIn Masterclass
        </p>
      </header>

      <main className="relative flex flex-1 flex-col">
        <button
          type="button"
          onClick={() => go(-1)}
          className="click-zone absolute left-0 top-0 z-10 flex h-full w-20 items-center justify-center text-slate-500 transition hover:bg-slate-800/20 hover:text-slate-300"
          aria-label="Forrige slide"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          className="click-zone absolute right-0 top-0 z-10 flex h-full w-20 items-center justify-center text-slate-500 transition hover:bg-slate-800/20 hover:text-slate-300"
          aria-label="Næste slide"
        >
          <ChevronRight className="h-10 w-10" />
        </button>

        <div className="flex flex-1 items-center justify-center overflow-hidden px-[80px] py-[80px]">
          <AnimatePresence mode="wait" custom={direction}>
            {slide && (
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full max-w-5xl"
              >
                <SlideRenderer slide={slide} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="relative border-t border-slate-800/80 bg-navy/80 px-[80px] py-4 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className="rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              aria-label={`Gå til slide ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all ${
                  i === index
                    ? "h-2 w-8 bg-accent-blue"
                    : "h-2 w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            </button>
          ))}
        </div>
        <p className="absolute bottom-4 right-[80px] text-sm text-slate-500 tabular-nums">
          {slide ? `${slide.id} / ${total}` : ""}
        </p>
      </footer>
    </div>
  );
}
