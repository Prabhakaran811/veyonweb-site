"use client";
import * as m from "framer-motion/m";
import { ease } from "@/lib/motion";

export default function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-hidden>
      <m.div
        className="h-px origin-left bg-gradient-to-r from-accent via-secondary/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
      />
    </div>
  );
}