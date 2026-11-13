import type { Metadata } from "next";
import AboutHero from "@/app/about/AboutHero";
import Story from "@/app/about/Story";
import Values from "@/app/about/Values";
import Process from "@/app/about/Process";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About VEYON | Industrial Automation Company in Coimbatore",
  description:
    "VEYON Automation & IIoT designs PLC, SCADA and IIoT systems and custom software for manufacturing industries in Coimbatore and across Tamil Nadu.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Stats />
      <Values />
      <Process />
      <CTA />
    </>
  );
}