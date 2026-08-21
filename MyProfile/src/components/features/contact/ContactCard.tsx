import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

type ContactCardProps = {
  platform: string;
  href: string;
  icon: ReactNode;
};

export function ContactCard({ platform, href, icon }: ContactCardProps) {
  return (
    <Card href={href} className="flex items-center gap-3.5 px-5 py-[18px] text-left no-underline">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-purple/20 text-xl text-purple-light">
        {icon}
      </div>
      <span className="text-sm font-semibold text-fg">{platform}</span>
    </Card>
  );
}
