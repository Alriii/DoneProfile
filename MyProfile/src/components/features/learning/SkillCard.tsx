import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type SkillCardProps = {
  name: string;
  label: string;
  icon: ReactNode;
  iconClassName: string;
  barClassName: string;
};

export function SkillCard({
  name,
  label,
  icon,
  iconClassName,
  barClassName,
}: SkillCardProps) {
  return (
    <Card className="relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden px-4 py-7 text-center max-sm:min-h-40">
      <span className={cn("absolute inset-x-0 top-0 h-[3px] opacity-60", barClassName)} />
      <div
        className={cn(
          "mb-3.5 flex h-[60px] items-center justify-center text-5xl max-sm:h-[50px] max-sm:text-4xl",
          iconClassName,
        )}
      >
        {icon}
      </div>
      <h3 className="mb-1.5 text-base font-semibold text-fg">{name}</h3>
      <p className="text-[13px] text-muted">{label}</p>
    </Card>
  );
}
