"use client";
import * as m from "framer-motion/m";
import { ease } from "@/lib/motion";

const nodes = [
  { x: 70, y: 80 }, { x: 330, y: 70 }, { x: 60, y: 300 }, { x: 340, y: 310 }, { x: 200, y: 360 },
];

// Decorative IIoT network: nodes linked to a central hub. Lines draw once;
// nodes drift very slowly (disabled automatically for reduced-motion users).
export default function ConnectivityGraphic() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Connected industrial devices">
      {nodes.map((n, i) => (
        <m.line
          key={i} x1={200} y1={200} x2={n.x} y2={n.y}
          stroke="#F2C94C" strokeOpacity={0.55} strokeWidth={1.5} strokeDasharray="4 6"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.8 + i * 0.15, ease }}
        />
      ))}
      <circle cx={200} cy={200} r={34} fill="#1E5A40" stroke="#F2C94C" strokeWidth={2} />
      <circle cx={200} cy={200} r={10} fill="#F2C94C" />
      {nodes.map((n, i) => (
        <m.g
          key={i}
          initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ opacity: { delay: 1 + i * 0.15, duration: 0.5 }, y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" } }}
        >
          <rect x={n.x - 16} y={n.y - 16} width={32} height={32} rx={8} fill="#123C2D" stroke="#F5F7F2" strokeOpacity={0.5} />
          <circle cx={n.x} cy={n.y} r={5} fill="#F2C94C" />
        </m.g>
      ))}
    </svg>
  );
}