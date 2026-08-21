import { HeroSection } from "@/components/features/hero/HeroSection";
import { AboutSection } from "@/components/features/about/AboutSection";
import { LearningSection } from "@/components/features/learning/LearningSection";
import { JourneySection } from "@/components/features/journey/JourneySection";
import { ContactSection } from "@/components/features/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LearningSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
