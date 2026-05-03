import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { AutomationDemoSection } from "@/components/sections/AutomationDemoSection";
import { WorkflowGallerySection } from "@/components/sections/WorkflowGallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <ServicesSection />
      <TechStackSection />
      <AutomationDemoSection />
      <WorkflowGallerySection />
      <ContactSection />
    </>
  );
}
