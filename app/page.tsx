import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhatICanBuildSection } from "@/components/sections/WhatICanBuildSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhatICanBuildSection />
      <StatsSection />
      <HowIWorkSection />
      <ExperienceSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
