import { HeroSection } from "@/components/sections/HeroSection";
import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { AutomationProjectsSection } from "@/components/sections/AutomationProjectsSection";
import { WhatICanBuildSection } from "@/components/sections/WhatICanBuildSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { DemosSection } from "@/components/sections/DemosSection";
import { WorkflowsSection } from "@/components/sections/WorkflowsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <WhatICanBuildSection />
      <AutomationProjectsSection />
      <HowIWorkSection />
      <ExperienceSection />
      <SkillsSection />
      <DemosSection />
      <WorkflowsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
