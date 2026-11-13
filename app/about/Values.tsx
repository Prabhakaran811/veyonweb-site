import { Target, Wrench, MessageSquare, ShieldCheck } from "lucide-react";
import { Item, Reveal, Stagger } from "@/components/ui/Reveal";

const values = [
  { icon: Target, title: "Problem first", text: "We understand what is slowing you down before we propose anything." },
  { icon: Wrench, title: "Built around your process", text: "Automation and software shaped to how your plant really runs, not the other way round." },
  { icon: MessageSquare, title: "Clear communication", text: "Plain answers, honest timelines and no jargon for its own sake." },
  { icon: ShieldCheck, title: "Reliable engineering", text: "Systems designed to keep running on the shop floor, day after day." },
];

export default function Values() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-secondary sm:text-sm">
            <span className="h-0.5 w-8 bg-accent" /> What guides us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">How we think about every project</h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {values.map(({ icon: Icon, title, text }) => (
            <Item key={title} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-primary hover:shadow-2xl">
                <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                <Icon size={28} strokeWidth={1.6} className="text-secondary transition-colors duration-500 group-hover:text-accent" />
                <h3 className="mt-5 text-lg font-semibold text-primary transition-colors duration-500 group-hover:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-white/80">{text}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}