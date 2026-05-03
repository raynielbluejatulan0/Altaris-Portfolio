import { HeroSection } from "@/components/sections/HeroSection";
import { WhatICanBuildSection } from "@/components/sections/WhatICanBuildSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatICanBuildSection />
      <HowIWorkSection />
      <ExperienceSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
