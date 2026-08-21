import { TimelineNode } from "@/components/ui/TimelineNode";

type JourneyStepProps = {
  number: string;
  title: string;
  description: string;
};

export function JourneyStep({ number, title, description }: JourneyStepProps) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center max-md:flex-row max-md:items-start max-md:gap-5 max-md:text-left">
      <TimelineNode number={number} className="max-md:size-14 max-md:text-base" />
      <div>
        <h3 className="mt-7 mb-2.5 text-[17px] font-semibold text-fg max-md:mt-1">
          {title}
        </h3>
        <p className="m-0 max-w-[220px] text-sm leading-relaxed text-muted max-md:max-w-none">
          {description}
        </p>
      </div>
    </div>
  );
}
