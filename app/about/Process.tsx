import { Item, Reveal, Stagger } from "@/components/ui/Reveal";

const steps = [
  { title: "Understand", text: "We study your process, your machines and the problem you want solved." },
  { title: "Design", text: "We plan the control, software and data architecture around that problem." },
  { title: "Build", text: "We program, wire and develop the solution, and test it before it reaches your floor." },
  { title: "Deploy", text: "We commission it with your team and make sure it works in real production." },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-secondary sm:text-sm">
          <span className="h-0.5 w-8 bg-accent" /> How we work
        </p>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">From problem to production</h2>
      </Reveal>
      <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" gap={0.12}>
        {steps.map((s, i) => (
          <Item key={s.title} className="relative border-t-2 border-primary/15 pt-6">
            <span aria-hidden className="absolute -top-0.5 left-0 h-0.5 w-12 bg-accent" />
            <span className="text-5xl font-black text-primary/10">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-xl font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}