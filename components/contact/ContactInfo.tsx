import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";

const steps = [
  { t: "Tell us the problem", d: "Share what is slowing your plant or business down." },
  { t: "We review it", d: "Our engineers look at your situation and the right approach." },
  { t: "We propose a solution", d: "You get a clear plan, built around your process." },
];

export default function ContactInfo() {
  const rows = [
    { icon: MapPin, label: "Location", value: company.location, href: undefined as string | undefined },
    ...(company.email ? [{ icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` }] : []),
    ...(company.phone ? [{ icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` }] : []),
  ];
  return (
    <aside className="relative min-w-0 overflow-hidden rounded-3xl bg-primary p-7 text-white shadow-2xl shadow-primary/20 sm:p-10">
      <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
      <div className="relative">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
          <span className="h-0.5 w-8 bg-accent" /> Get in touch
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let&apos;s solve it together.</h2>
        <p className="mt-3 text-white/80">Send us your problem. We sell solutions, not products, so we start by listening.</p>

        <ul className="mt-8 space-y-5">
          {rows.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary"><Icon size={20} /></span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-white/60">{label}</p>
                {href ? <a href={href} className="break-words font-medium hover:text-accent">{value}</a> : <p className="font-medium">{value}</p>}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">What happens next</p>
          <ol className="mt-5 space-y-5">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/50 text-sm font-bold text-accent">{i + 1}</span>
                <div>
                  <p className="font-semibold">{s.t}</p>
                  <p className="text-sm text-white/70">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </aside>
  );
}