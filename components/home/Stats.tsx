import { stats } from "@/data/stats";
import Counter from "@/components/ui/Counter";
import { Item, Reveal, Stagger } from "@/components/ui/Reveal";

export default function Stats() {
  if (!stats.length) return null;
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
            <span className="h-0.5 w-8 bg-accent" /> VEYON in numbers <span className="h-0.5 w-8 bg-accent" />
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted by industries to deliver</h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-3" gap={0.12}>
          {stats.map(({ value, suffix, label, icon: Icon }) => (
            <Item key={label} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent hover:bg-white/10">
                <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                {Icon && (
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-500 group-hover:scale-105">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                )}
                <p className="mt-5 text-5xl font-bold text-accent sm:text-6xl">
                  <Counter value={value} suffix={suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/75">{label}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}