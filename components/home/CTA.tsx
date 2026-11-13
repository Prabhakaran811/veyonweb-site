import Link from "next/link";
import { ArrowRight, Cpu, MapPin, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  { icon: Target, text: "We start with your problem" },
  { icon: Cpu, text: "PLC · SCADA · IIoT expertise" },
  { icon: MapPin, text: "Coimbatore, Tamil Nadu" },
];

export default function CTA() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-8 text-white shadow-2xl shadow-primary/25 sm:p-12 lg:p-16">
        {/* grid texture + glows */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px]"
        />
        <div aria-hidden className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        {/* concentric rings, decorative */}
        <div aria-hidden className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative flex h-[26rem] w-[26rem] items-center justify-center rounded-full border border-white/10">
            <div className="flex h-72 w-72 items-center justify-center rounded-full border border-white/15">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border border-accent/40">
                <span className="h-5 w-5 rounded-full bg-accent shadow-[0_0_30px_8px_rgba(242,201,76,0.35)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
            <span className="h-0.5 w-8 bg-accent" /> Let&apos;s work together
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Planning an automation project?
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Tell us what is slowing your plant or business down. Our engineers will help you find the right solution.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Request a Quote
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-3.5 font-semibold transition hover:border-accent hover:bg-white/10"
            >
              View Our Projects
            </Link>
          </div>

          <ul className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon size={16} className="text-accent" /> {text}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}