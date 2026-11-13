"use client";
import * as m from "framer-motion/m";
import { ease } from "@/lib/motion";

// Re-mounts on every navigation: smooth page entrance / loading transition.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
      {children}
    </m.div>
  );
}