import { SectionTitle } from "@/components/common/SectionTitle";
import { JourneyStep } from "@/components/features/journey/JourneyStep";
import { JOURNEY_STEPS } from "@/lib/constants";

export function JourneySection() {
  return (
    <section
      id="journey"
      className="scroll-mt-20 bg-bg-2 px-12 py-[100px] max-md:px-6 max-md:py-[70px]"
    >
      <SectionTitle align="center">My Learning Journey</SectionTitle>
      <div className="relative mx-auto grid max-w-[1100px] grid-cols-4 gap-5 max-md:grid-cols-1 max-md:gap-10">
        <div className="absolute top-[35px] right-[12%] left-[12%] z-0 h-0.5 bg-purple-light max-md:hidden" />
        {JOURNEY_STEPS.map((step) => (
          <JourneyStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
