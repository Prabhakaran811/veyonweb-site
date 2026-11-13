import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact VEYON | Industrial Automation Company in Coimbatore",
  description:
    "Contact VEYON Automation & IIoT in Coimbatore, Tamil Nadu for PLC, SCADA, IIoT, control panel and custom software projects. Request a quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Have a problem on your floor?"
        accent="Let's talk."
        text="Tell us what is slowing you down. Our engineers will help you find the right solution."
      />
      <section className="relative overflow-x-clip">
        <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <Reveal className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-5 lg:gap-8 lg:px-8">
          <div className="min-w-0 lg:col-span-2"><ContactInfo /></div>
          <div className="min-w-0 lg:col-span-3"><ContactForm /></div>
        </Reveal>
      </section>
    </>
  );
}