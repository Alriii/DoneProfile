import { FaArrowUp } from "react-icons/fa";
import { cn } from "@/lib/cn";

type BackToTopProps = {
  className?: string;
};

export function BackToTop({ className }: BackToTopProps) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed right-8 bottom-8 z-50 flex size-11 items-center justify-center rounded-full border border-purple/35 bg-[#19142a]/90 text-lg text-purple-light transition-all duration-300 hover:-translate-y-0.5 hover:border-purple hover:bg-purple hover:text-white",
        className,
      )}
    >
      <FaArrowUp />
    </button>
  );
}
