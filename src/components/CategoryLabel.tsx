"use client";

import { motion } from "framer-motion";

export function CategoryLabel({ children }: { children: string }) {
  return (
    <div
      className="sticky top-5 z-10 -mx-[80px] mb-3 bg-navy px-[80px] pb-2 pt-0"
      style={{ top: 20 }}
    >
      <motion.span
        className="slide-category block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="relative inline-block">
          {children}
          <motion.span
            className="absolute bottom-0 left-0 h-px bg-category-blue"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
          />
        </span>
      </motion.span>
    </div>
  );
}
