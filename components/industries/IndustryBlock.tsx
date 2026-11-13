import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import type { Item } from "@/data/services";
import type { IndustryDetail } from "@/data/industry-details";
import { Reveal } from "@/components/ui/Reveal";

type Props = { item: Omit<Item, "href">; detail: IndustryDetail; index: number };

export default function IndustryBlock({ item, detail, index }: Props) {
  const Icon = item.icon;
  const flip = index % 2 === 1;
  return (
    <Reveal>
      <article id={detail.id} className="scroll-mt-36 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
        {/* Visual panel */}
        <div className={`relative min-w-0 overflow-hidden rounded-3xl bg-primary p-7 text-white shadow-2xl shadow-primary/20 sm:p-10 lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
          <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-accent/25 blur-3xl" />
          <Icon aria-hidden strokeWidth={1} className="pointer-events-none absolute -bottom-12 -right-12 h-72 w-72 text-white/[0.06]" />
          <div className="relative flex h-full min-h-[260px] flex-col">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon size={28} strokeWidth={1.8} />
              </span>
              <span className="text-5xl font-black text-white/10">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="mt-auto pt-10">
              <h2 className="break-words text-3xl font-bold sm:text-4xl">{item.title}</h2>
              <p className="mt-2 max-w-sm text-white/80 sm:text-lg">{item.desc}</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="min-w-0 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500"><X size={14} /> Common challenges</p>
              <ul className="mt-4 space-y-3">
                {detail.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" /> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary"><Check size={14} /> How VEYON helps</p>
              <ul className="mt-4 space-y-3">
                {detail.help.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm font-medium text-primary">
                    <Check size={16} className="mt-0.5 shrink-0 text-secondary" /> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t border-primary/10 pt-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Systems we typically use</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {detail.services.map((s) => (
                <Link key={s.label} href={s.href} className="rounded-full border border-primary/15 px-4 py-1.5 text-sm text-primary transition-all duration-300 hover:border-accent hover:bg-accent">
                  {s.label}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 font-semibold text-primary">
              Talk about {item.title.toLowerCase()}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}