import Hero from "@/components/home/Hero";
import WhyVeyon from "@/components/home/WhyVeyon";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import CTA from "@/components/home/CTA";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyVeyon />
      <Services />
      <Stats />
      <Industries />
      <SectionDivider />
      <CTA />
    </>
  );
}