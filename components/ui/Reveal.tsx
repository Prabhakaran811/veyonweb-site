"use client";
import * as m from "framer-motion/m";
import { container, fadeUp } from "@/lib/motion";

const viewport = { once: true, margin: "-80px" } as const;

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <m.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
      {children}
    </m.div>
  );
}

export function Stagger({ children, className, gap = 0.1 }: { children: React.ReactNode; className?: string; gap?: number }) {
  return (
    <m.div className={className} variants={container(gap)} initial="hidden" whileInView="show" viewport={viewport}>
      {children}
    </m.div>
  );
}

export function Item({ children, className }: { children: React.ReactNode; className?: string }) {
  return <m.div className={className} variants={fadeUp}>{children}</m.div>;
}