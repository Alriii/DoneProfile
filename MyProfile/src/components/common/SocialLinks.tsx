import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconLink } from "@/components/ui/IconLink";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";

const icons = {
  GitHub: <FaGithub />,
  Email: <FaEnvelope />,
  LinkedIn: <FaLinkedin />,
  Facebook: <FaFacebook />,
};

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map((link) => (
        <IconLink key={link.label} href={link.href} label={link.label}>
          {icons[link.label]}
        </IconLink>
      ))}
    </div>
  );
}
