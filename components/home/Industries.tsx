import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industries } from "@/data/services";
import { Item, Reveal, Stagger } from "@/components/ui/Reveal";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Bento layout on desktop: first industry is the large featured tile,
// the last one spans two columns. Reorder data/services.ts to change it.
const spans = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-secondary sm:text-sm">
              <span className="h-0.5 w-8 bg-accent" /> Industries
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">Industries We Serve</h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Automation and software shaped around the way each industry works.
            </p>
          </div>
          <Link href="/industries" className="group inline-flex items-center gap-2 font-semibold text-primary">
            View all industries
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(190px,auto)]" gap={0.1}>
          {industries.map(({ title, desc, icon: Icon }, i) => {
            const featured = i === 0;
            return (
              <Item key={title} className={`h-full ${spans[i] ?? ""}`}>
                <Link
                  href={`/industries#${slug(title)}`}
                  className={`group relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:p-8 ${
                    featured
                      ? "border-transparent bg-primary text-white hover:shadow-primary/30"
                      : "border-primary/10 bg-background text-primary hover:border-accent hover:bg-white hover:shadow-primary/10"
                  }`}
                >
                  {/* large watermark icon */}
                  <Icon
                    aria-hidden
                    strokeWidth={1}
                    className={`pointer-events-none absolute -bottom-6 -right-6 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 ${
                      featured ? "text-white/[0.07]" : "text-primary/[0.06]"
                    } ${featured ? "h-64 w-64" : "h-36 w-36"}`}
                  />
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative flex items-start justify-between">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover:-translate-y-1 ${
                        featured ? "bg-accent text-primary" : "bg-primary text-accent group-hover:bg-accent group-hover:text-primary"
                      }`}
                    >
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <span className={`text-xs font-semibold tracking-widest ${featured ? "text-white/50" : "text-primary/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-auto pt-8">
                    <h3 className={`font-bold ${featured ? "text-2xl sm:text-4xl" : "text-xl"}`}>{title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed sm:text-base ${featured ? "max-w-sm text-white/80" : "text-slate-600"}`}>
                      {desc}
                    </p>
                    <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${featured ? "text-accent" : "text-secondary"}`}>
                      Explore
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}