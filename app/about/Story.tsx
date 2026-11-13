import { Cpu, Gauge, Wifi, Code2 } from "lucide-react";
import { Item, Reveal, Stagger } from "@/components/ui/Reveal";

const focus = [
  { icon: Cpu, title: "PLC", text: "Control the machine" },
  { icon: Gauge, title: "SCADA", text: "Supervise the plant" },
  { icon: Wifi, title: "IIoT", text: "Connect the data" },
  { icon: Code2, title: "Software", text: "Custom apps, MES, ERP and integration" },
];

export default function Story() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <Reveal>
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-secondary sm:text-sm">
          <span className="h-0.5 w-8 bg-accent" /> Who we are
        </p>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">An automation partner, not a product seller.</h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          <p>
            VEYON Automation &amp; IIoT is an industrial automation company based in Coimbatore, Tamil Nadu. We design PLC, SCADA and IIoT
            systems and build custom software for manufacturing industries, from foundries and automotive suppliers to process industries and SME factories.
          </p>
          <p>
            In 4 years we have delivered 50+ projects for 10+ clients. Every one began the same way: we listened to the problem first,
            then engineered a solution around the way that plant or business actually works.
          </p>
        </div>
      </Reveal>

      {/* Replace this panel with a real photo of your team or a plant if you have one */}
      <Stagger className="grid gap-4 sm:grid-cols-2" gap={0.1}>
        {focus.map(({ icon: Icon, title, text }) => (
          <Item key={title} className="h-full">
            <div className="group h-full rounded-2xl border border-primary/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-primary">
                <Icon size={24} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </div>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}