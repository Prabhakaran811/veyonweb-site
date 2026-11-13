import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Cpu, Gauge, Wifi, X } from "lucide-react";
import { Item, Reveal, Stagger } from "@/components/ui/Reveal";

// Our #1 focus: shown first and styled differently from the rest.
const core = [
  { step: "01", tag: "Control", title: "PLC", desc: "Reliable PLC programming and HMI that keep every machine running as designed.", href: "/services/plc-automation", icon: Cpu },
  { step: "02", tag: "Supervise", title: "SCADA", desc: "Real-time plant views, alarms and reports in one place.", href: "/services/scada-systems", icon: Gauge },
  { step: "03", tag: "Connect", title: "IIoT", desc: "Machine data turned into live dashboards and analytics, wherever you are.", href: "/services/iiot-solutions", icon: Wifi },
];

const cases = [
  { problem: "Machines stop and nobody knows why.", solution: "Live machine monitoring and downtime analysis show every stoppage as it happens." },
  { problem: "Production data lives on paper and spreadsheets.", solution: "MES and custom software turn shop-floor records into reliable, searchable data." },
  { problem: "Machines, PLCs and business software don't talk to each other.", solution: "Industrial communication and integration connect them into one working system." },
  { problem: "Off-the-shelf tools never fit your process.", solution: "We build software and automation around how your plant really works." },
];

export default function WhyVeyon() {
  return (
    <section className="relative overflow-hidden bg-white text-primary">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#123c2d_1px,transparent_1px),linear-gradient(90deg,#123c2d_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Header */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-secondary sm:text-sm">
              <span className="h-0.5 w-8 bg-accent" /> Why VEYON
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              We sell solutions, not products.
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              We start with the problem on your shop floor or in your business, then engineer the automation and software
              that solves it, instead of pushing a catalogue item and hoping it fits.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Tell us your problem
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Core focus panel */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-2xl shadow-primary/20 sm:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-secondary blur-3xl" />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Our core focus
                </span>
                <h3 className="mt-4 text-3xl font-bold sm:text-5xl">
                  PLC<span className="text-accent">.</span> SCADA<span className="text-accent">.</span> IIoT<span className="text-accent">.</span>
                </h3>
              </div>
              <p className="max-w-sm text-sm text-white/75 sm:text-base">
                Control the machine, supervise the plant, connect the data. One engineering team across all three.
              </p>
            </div>

            <Stagger className="relative mt-8 grid gap-4 md:grid-cols-3" gap={0.12}>
              {core.map(({ step, tag, title, desc, href, icon: Icon }) => (
                <Item key={title} className="h-full">
                  <Link
                    href={href}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-500 group-hover:scale-105">
                        <Icon size={24} strokeWidth={1.8} />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        {step} · {tag}
                      </span>
                    </div>
                    <h4 className="mt-6 text-2xl font-bold">{title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{desc}</p>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-accent">
                      Explore {title}
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Item>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Problem -> solution */}
        <Stagger className="mt-8 grid gap-4 md:grid-cols-2" gap={0.1}>
          {cases.map((c) => (
            <Item key={c.problem} className="h-full">
              <div className="h-full rounded-xl border border-primary/10 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md sm:p-6">
                <p className="flex items-start gap-3 text-slate-500">
                  <X size={18} className="mt-1 shrink-0 text-red-500" />
                  <span>{c.problem}</span>
                </p>
                <p className="mt-3 flex items-start gap-3 font-medium">
                  <Check size={18} className="mt-1 shrink-0 text-secondary" />
                  <span>{c.solution}</span>
                </p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}