"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { ease } from "@/lib/motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const solid = scrolled || open || pathname !== "/"; // transparent only over the home hero

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        solid ? "bg-primary/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${solid ? "h-16" : "h-20"}`}>
        <Link href="/" className="text-xl font-bold tracking-wide">
          VEYON<span className="text-accent"> IIoT</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="group relative py-1 text-sm">
              {l.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link href="/contact" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-lg">
            Get a Quote
          </Link>
        </nav>

        <button className="rounded p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            key="mobile"
            className="overflow-hidden border-t border-white/10 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            aria-label="Mobile"
          >
            <div className="px-4 pb-5">
              {navLinks.map((l, i) => (
                <m.div key={l.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i, duration: 0.3 }}>
                  <Link href={l.href} className="block border-b border-white/10 py-3">{l.label}</Link>
                </m.div>
              ))}
              <Link href="/contact" className="mt-4 block rounded-md bg-accent py-3 text-center font-semibold text-primary">Get a Quote</Link>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}