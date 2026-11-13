import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { serviceGroups } from "@/data/services";
import { Item, Reveal, Stagger } from "@/components/ui/Reveal";

const card =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:bg-primary hover:shadow-2xl hover:shadow-primary/25";

export default function Services() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-secondary sm:text-sm">
            <span className="h-0.5 w-8 bg-accent" /> What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">Our Services</h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">End-to-end automation and software, from panel to cloud.</p>
        </Reveal>

        <div className="mt-12 space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.id} id={group.id}>
              <Reveal className="flex flex-col gap-1 border-b border-primary/15 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="text-xl font-bold text-primary sm:text-2xl">{group.title}</h3>
                <p className="text-sm text-slate-600 sm:text-base">{group.blurb}</p>
              </Reveal>

              <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
                {group.items.map(({ href, title, desc, icon: Icon }, i) => (
                  <Item key={href + title} className="h-full">
                    <Link href={href} className={card}>
                      <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                      <span aria-hidden className="absolute right-5 top-3 select-none text-5xl font-black text-primary/[0.06] transition-colors duration-500 group-hover:text-white/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent shadow-md transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-accent group-hover:text-primary">
                        <Icon size={24} strokeWidth={1.8} />
                      </span>
                      <h4 className="mt-5 text-lg font-semibold text-primary transition-colors duration-500 group-hover:text-white">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-white/80">{desc}</p>
                      <div className="mt-auto flex items-center justify-between pt-6">
                        <span className="text-sm font-semibold text-secondary transition-colors duration-500 group-hover:text-accent">Learn more</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-all duration-500 group-hover:border-accent group-hover:bg-accent">
                          <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </Item>
                ))}

                {/* 5 items fill 3 + 2 columns, so the last group ends with an enquiry card */}
                {group.items.length % 3 === 2 && (
                  <Item className="h-full">
                    <Link href="/contact" className="group flex h-full flex-col justify-center rounded-2xl bg-accent p-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <h4 className="text-lg font-bold">Have a different problem?</h4>
                      <p className="mt-2 text-sm">Tell us what is slowing your plant or business down. We will find the right solution.</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                        Talk to our engineers <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Item>
                )}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}