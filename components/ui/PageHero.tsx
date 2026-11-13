import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

// Reusable inner-page header (breadcrumb, title with accent word, subtitle).
export default function PageHero({ crumb, title, accent, text }: { crumb: string; title: string; accent?: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <Reveal className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
          <Link href="/" className="hover:text-accent">Home</Link> <span className="mx-2">/</span> <span className="text-white">{crumb}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {title} {accent && <span className="text-accent">{accent}</span>}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">{text}</p>
      </Reveal>
    </section>
  );
}