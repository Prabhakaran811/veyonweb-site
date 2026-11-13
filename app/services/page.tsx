import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceExplorer from "@/components/services/ServiceRow";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services | PLC, SCADA, IIoT & Software Development in Coimbatore | VEYON",
  description:
    "Industrial IoT, MES, PLC and SCADA automation, control panels, custom software, ERP and mobile apps for manufacturing industries in Tamil Nadu.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Solutions for the problems that"
        accent="slow your plant down."
        text="Pick a service to see the problem it solves and what we deliver."
      />
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <ServiceExplorer />
        </div>
      </section>
      <CTA />
    </>
  );
}