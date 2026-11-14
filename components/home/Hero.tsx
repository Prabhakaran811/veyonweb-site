"use client";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import * as m from "framer-motion/m";
import { ArrowRight } from "lucide-react";
import { container, ease, fadeUp } from "@/lib/motion";
import Hero3D from "./Hero3D";

const lines = ["Engineering", "Smarter", "Industries."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // subtle parallax

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary text-white">
      <m.div
        aria-hidden style={{ y: bgY }}
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:grid-cols-2 lg:px-8 lg:pb-32">
        <m.div variants={container(0.12, 0.1)} initial="hidden" animate="show">
          <m.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
            IIoT | SCADA | PLC | Control Panels
          </m.p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {lines.map((w) => (
              <span key={w} className="block overflow-hidden pb-1">
                <m.span className="block" variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.8, ease } } }}>
                  {w}
                </m.span>
              </span>
            ))}
          </h1>
          <m.p variants={fadeUp} className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Connecting automation with intelligence for foundries, automotive and process industries across Tamil Nadu.
          </m.p>
          <m.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-lg">
              Request a Quote <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10">
              View Projects
            </Link>
          </m.div>
        </m.div>

        <Hero3D />
      </div>
    </section>
  );
}