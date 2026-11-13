"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { ArrowDown, ArrowRight, Check, X } from "lucide-react";
import { serviceGroups } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import { ease } from "@/lib/motion";

// The group that opens first (and is listed first). Change to "software" to switch back.
const FIRST = "industrial";

const groups = [...serviceGroups]
  .sort((a, b) => (a.id === FIRST ? -1 : b.id === FIRST ? 1 : 0))
  .map((g) => ({
  ...g,
  entries: g.items.flatMap((item) => (serviceDetails[item.title] ? [{ item, detail: serviceDetails[item.title] }] : [])),
}));

export default function ServiceExplorer() {
  const [groupId, setGroupId] = useState(groups[0].id);
  const [activeId, setActiveId] = useState(groups[0].entries[0].detail.id);
  const top = useRef<HTMLDivElement>(null);

  // Cards elsewhere link to /services#<id>: open that service (or group) on load and on hash change.
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      for (const g of groups) {
        if (g.id === id) { setGroupId(g.id); setActiveId(g.entries[0].detail.id); break; }
        if (g.entries.some((e) => e.detail.id === id)) { setGroupId(g.id); setActiveId(id); break; }
      }
      top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const group = groups.find((g) => g.id === groupId)!;
  const index = Math.max(0, group.entries.findIndex((e) => e.detail.id === activeId));
  const { item, detail } = group.entries[index];
  const Icon = item.icon;

  const pickGroup = (id: string) => {
    const g = groups.find((x) => x.id === id)!;
    setGroupId(id);
    setActiveId(g.entries[0].detail.id);
  };
  const pick = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div ref={top} className="scroll-mt-28">
      {/* Group switcher */}
      <div role="tablist" aria-label="Service groups" className="grid w-full grid-cols-2 gap-1 rounded-2xl border border-primary/10 bg-white p-1 shadow-sm sm:inline-flex sm:w-auto sm:rounded-full">
        {groups.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === groupId}
            onClick={() => pickGroup(g.id)}
            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-center text-xs font-semibold leading-tight transition-all duration-300 sm:rounded-full sm:px-6 sm:text-sm ${
              g.id === groupId ? "bg-primary text-white shadow-md" : "text-primary hover:bg-background"
            }`}
          >
            {g.title}
            <span className={`rounded-full px-2 py-0.5 text-xs ${g.id === groupId ? "bg-accent text-primary" : "bg-primary/10"}`}>{g.entries.length}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 max-w-xl text-slate-600 sm:text-lg">{group.blurb}</p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Service list: horizontal scroll on mobile, sticky column on desktop */}
        <div className="min-w-0 lg:col-span-4">
          <div role="tablist" aria-label={group.title} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:sticky lg:top-28 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
            {group.entries.map(({ item: it, detail: d }, i) => {
              const active = d.id === activeId;
              const I = it.icon;
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => pick(d.id)}
                  className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                    active ? "border-transparent bg-primary text-white shadow-lg lg:translate-x-2" : "border-primary/10 bg-white text-primary hover:border-accent"
                  }`}
                >
                  <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${active ? "bg-accent text-primary" : "bg-primary/5 text-secondary group-hover:bg-accent/30"}`}>
                    <I size={18} />
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold lg:whitespace-normal">{it.title}</span>
                  <span className={`ml-auto hidden text-xs font-bold lg:block ${active ? "text-accent" : "text-primary/30"}`}>{String(i + 1).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="min-w-0 lg:col-span-8">
          <AnimatePresence mode="wait">
            <m.div
              key={detail.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
              role="tabpanel"
              className="relative overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-2xl shadow-primary/20 sm:p-10"
            >
              <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <Icon aria-hidden strokeWidth={1} className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 text-white/[0.05]" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon size={28} strokeWidth={1.8} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    {group.title} · {String(index + 1).padStart(2, "0")}/{String(group.entries.length).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-5 break-words text-2xl font-bold sm:text-4xl">{item.title}</h3>

                {/* problem -> VEYON -> solution flow */}
                <div className="mt-8 grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="rounded-2xl border border-red-300/25 bg-red-400/10 p-5">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-200"><X size={14} /> The problem</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{detail.problem}</p>
                  </div>
                  <div className="flex items-center justify-center text-accent">
                    <span className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-bold tracking-widest">
                      VEYON <ArrowRight size={14} className="hidden sm:block" /><ArrowDown size={14} className="sm:hidden" />
                    </span>
                  </div>
                  <div className="rounded-2xl border border-accent/40 bg-accent/10 p-5">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent"><Check size={14} /> Our solution</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{detail.solution}</p>
                  </div>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-white/60">What we deliver</p>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {detail.bullets.map((b, i) => (
                    <m.li
                      key={b}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.35, ease }}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition-colors hover:border-accent/60"
                    >
                      <Check size={16} className="shrink-0 text-accent" /> {b}
                    </m.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-lg">
                    Discuss this service <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  {detail.page && (
                    <Link href={detail.page} className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-semibold transition hover:border-accent hover:text-accent">
                      Full details
                    </Link>
                  )}
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}