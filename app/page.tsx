import { HeroSection } from "@/components/sections/HeroSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AutomationDemoSection } from "@/components/sections/AutomationDemoSection";
import { WorkflowGallerySection } from "@/components/sections/WorkflowGallerySection";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FlowSection />
      <AutomationDemoSection />
      <WorkflowGallerySection />
      <ConversionSection />
      <CaseStudiesSection />
      <TechStackSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
