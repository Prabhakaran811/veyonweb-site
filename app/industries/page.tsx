import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import IndustryBlock from "@/components/industries/IndustryBlock";
import CTA from "@/components/home/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/services";
import { industryDetails } from "@/data/industry-details";

export const metadata: Metadata = {
  title: "Industries | Automation for Foundries, Automotive & Process Plants | VEYON",
  description:
    "PLC, SCADA, IIoT and software solutions for foundries, automotive, process industries and SME factories in Coimbatore and across Tamil Nadu.",
};

export default function IndustriesPage() {
  const entries = industries.flatMap((item) => (industryDetails[item.title] ? [{ item, detail: industryDetails[item.title] }] : []));

  return (
    <>
      <PageHero
        crumb="Industries"
        title="Automation shaped around"
        accent="your industry."
        text="Every sector has its own problems. See the ones we solve and how."
      />

      {/* sticky jump bar */}
      <div className="sticky top-16 z-40 border-b border-primary/10 bg-background/90 backdrop-blur">
        <nav aria-label="Industries" className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {entries.map(({ item, detail }) => (
            <a key={detail.id} href={`#${detail.id}`} className="flex shrink-0 items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-accent">
              <item.icon size={16} /> {item.title}
            </a>
          ))}
        </nav>
      </div>

      <section className="relative overflow-x-clip">
        <div aria-hidden className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-32 bottom-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl space-y-10 px-4 py-12 sm:space-y-14 sm:px-6 sm:py-20 lg:px-8">
          {entries.map(({ item, detail }, i) => (
            <IndustryBlock key={detail.id} item={item} detail={detail} index={i} />
          ))}
          <Reveal className="text-center text-slate-600 sm:text-lg">
            Work in a different industry? The same problem-first approach applies.{" "}
            <Link href="/contact" className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">Tell us about it</Link>.
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}