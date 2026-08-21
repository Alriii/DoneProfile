import { cn } from "@/lib/cn";

type SectionTitleProps = {
  children: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  children,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "relative mb-12 font-hand text-[52px] font-normal leading-tight text-fg max-md:mb-9 max-md:text-[38px]",
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
      <span
        className={cn(
          "mt-2 block h-1 w-[60px] rounded-sm bg-purple",
          align === "center" && "mx-auto",
        )}
      />
    </h2>
  );
}
