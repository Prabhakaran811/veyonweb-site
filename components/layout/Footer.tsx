import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { serviceGroups, industries } from "@/data/services";
import { stats } from "@/data/stats";
import { company } from "@/data/company";

const linkCls = "inline-block text-sm text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-accent";
const headCls = "text-sm font-semibold uppercase tracking-widest text-white";
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Footer() {
  const [software, industrial] = serviceGroups;
  const companyLinks = [...navLinks.filter((l) => l.href !== "/services/iiot-solutions"), { href: "/contact", label: "Contact" }];

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              VEYON<span className="text-accent"> IIoT</span>
            </Link>
            <p className="mt-3 text-lg font-semibold text-accent">{company.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{company.about}</p>

            {stats.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {stats.map((s) => (
                  <li key={s.label}>
                    <p className="text-2xl font-bold text-white">{s.value}{s.suffix}</p>
                    <p className="text-xs uppercase tracking-wide text-white/60">{s.label}</p>
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-accent" /> {company.location}</li>
              {company.email && (
                <li className="flex items-center gap-2"><Mail size={16} className="shrink-0 text-accent" />
                  <a href={`mailto:${company.email}`} className="hover:text-accent">{company.email}</a>
                </li>
              )}
              {company.phone && (
                <li className="flex items-center gap-2"><Phone size={16} className="shrink-0 text-accent" />
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent">{company.phone}</a>
                </li>
              )}
            </ul>
          </div>

          {/* Software */}
          <nav aria-label={software.title} className="lg:col-span-3">
            <h3 className={headCls}>{software.title}</h3>
            <ul className="mt-5 space-y-3">
              {software.items.map((i) => (
                <li key={i.title}><Link href={i.href} className={linkCls}>{i.title}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Industrial */}
          <nav aria-label={industrial.title} className="lg:col-span-3">
            <h3 className={headCls}>{industrial.title}</h3>
            <ul className="mt-5 space-y-3">
              {industrial.items.map((i) => (
                <li key={i.title}><Link href={i.href} className={linkCls}>{i.title}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <h3 className={headCls}>Company</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Industries strip */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <h3 className={`${headCls} md:w-40`}>Industries</h3>
          <ul className="flex flex-wrap gap-2">
            {industries.map((i) => (
              <li key={i.title}>
                <Link
                  href={`/industries#${slug(i.title)}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-primary"
                >
                  <i.icon size={14} /> {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p className="hidden md:block">IIoT | SCADA | PLC | Control Panel Engineering</p>
          <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-accent hover:text-accent">
            Back to top <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}