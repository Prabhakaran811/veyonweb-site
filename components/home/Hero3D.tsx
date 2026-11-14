"use client";
import * as m from "framer-motion/m";
import { useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Cpu, Gauge, Wifi } from "lucide-react";
import { ease } from "@/lib/motion";

// Three glass "layers" stacked in 3D: control (PLC), supervise (SCADA), connect (IIoT).
const layers = [
  { z: 0, icon: Cpu, name: "PLC", tag: "Control" },
  { z: 90, icon: Gauge, name: "SCADA", tag: "Supervise" },
  { z: 180, icon: Wifi, name: "IIoT", tag: "Connect" },
];
const beams = [
  { x: "24%", y: "24%", delay: 0 },
  { x: "76%", y: "76%", delay: 1.1 },
  { x: "76%", y: "24%", delay: 2.2 },
];

const BASE_X = 55; // tilt of the scene (degrees)
const BASE_Z = -35;

export default function Hero3D() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 70, damping: 18 });
  const sy = useSpring(py, { stiffness: 70, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [BASE_X + 8, BASE_X - 8]);
  const rotateZ = useTransform(sx, [-0.5, 0.5], [BASE_Z - 10, BASE_Z + 10]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { px.set(0); py.set(0); };

  return (
    <m.div
      className="relative mx-auto aspect-square w-full max-w-md [perspective:1400px] lg:max-w-none"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease }}
      aria-hidden
    >
      <m.div className="absolute inset-0 [transform-style:preserve-3d]" style={{ rotateX, rotateZ }}>
        {/* floor glow + slowly turning ring */}
        <div className="absolute" style={{ inset: "8%", transform: "translateZ(-45px)", background: "radial-gradient(circle, rgba(242,201,76,.22), transparent 65%)" }} />
        <m.div
          className="absolute rounded-full border border-dashed border-accent/40"
          style={{ inset: "4%", z: -40 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* vertical data beams with travelling pulses */}
        {beams.map((b) => (
          <div
            key={b.x + b.y}
            className="absolute w-0.5 origin-top bg-gradient-to-b from-accent/70 to-accent/5"
            style={{ left: b.x, top: b.y, height: 180, transform: "rotateX(90deg)" }}
          >
            <m.span
              className="absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_3px_rgba(242,201,76,0.6)]"
              animate={{ y: [0, 172], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, delay: b.delay, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ))}

        {/* glass layers */}
        {layers.map(({ z, icon: Icon, name, tag }, i) => (
          <m.div
            key={name}
            className={`absolute rounded-2xl border ${i === 2 ? "border-accent/60" : "border-white/25"} [transform-style:preserve-3d]`}
            style={{
              left: "22%", top: "22%", width: "56%", height: "56%", z,
              background: "linear-gradient(135deg, rgba(30,90,64,.88), rgba(18,60,45,.62))",
              boxShadow: i === 2 ? "0 0 40px rgba(242,201,76,.18)" : "0 10px 30px rgba(0,0,0,.25)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, z: [z, z + 10, z] }}
            transition={{ opacity: { duration: 0.8, delay: 0.5 + i * 0.2 }, z: { duration: 6 + i * 1.5, repeat: Infinity, ease: "easeInOut" } }}
          >
            <div aria-hidden className="absolute inset-0 rounded-2xl opacity-20 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
            <Icon aria-hidden strokeWidth={1} className="absolute inset-0 m-auto h-1/3 w-1/3 text-accent/35" />
            {/* label that stays facing the viewer */}
            <div className="absolute left-full top-1/2 -ml-2 -mt-4" style={{ transform: `translateZ(30px) rotateZ(${-BASE_Z}deg) rotateX(-${BASE_X}deg)`, transformOrigin: "left center" }}>
              <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-accent/40 bg-primary/90 px-3 py-1.5 text-xs font-semibold text-white">
                <Icon size={14} className="text-accent" /> {name}
                <span className="hidden text-white/55 sm:inline">· {tag}</span>
              </span>
            </div>
          </m.div>
        ))}

        {/* small spinning cube above the stack */}
        <div className="absolute" style={{ right: "16%", top: "14%", transform: "translateZ(250px)" }}>
          <div className="cube"><i /><i /><i /><i /><i /><i /></div>
        </div>
      </m.div>
    </m.div>
  );
}