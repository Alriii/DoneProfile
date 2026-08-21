import { cn } from "@/lib/cn";

type TimelineNodeProps = {
  number: string;
  className?: string;
};

export function TimelineNode({ number, className }: TimelineNodeProps) {
  return (
    <div
      className={cn(
        "flex size-[70px] shrink-0 items-center justify-center rounded-full border-[3px] border-purple-light bg-[#351078] text-lg font-bold text-purple-light shadow-[0_0_0_6px_rgba(179,102,255,0.12),0_0_25px_rgba(179,102,255,0.35)]",
        className,
      )}
    >
      {number}
    </div>
  );
}
