import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ContactCard } from "@/components/features/contact/ContactCard";
import { SOCIAL_LINKS } from "@/lib/constants";

const icons = {
  Email: <FaEnvelope />,
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Facebook: <FaFacebook />,
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex scroll-mt-20 flex-col items-center bg-bg px-12 pt-[100px] pb-[60px] text-center max-md:px-6 max-md:pt-[70px] max-md:pb-12"
    >
      <SectionTitle align="center" className="mb-5">
        Let's Connect
      </SectionTitle>
      <p className="mb-9 max-w-[560px] text-[15px] leading-relaxed text-muted">
        I'm always open to connecting with fellow developers, mentors, and
        anyone interested in web development. Feel free to reach out!
      </p>
      <Button
        href="mailto:kennethimperial2005@gmail.com"
        className="mb-12 px-10 py-3.5 max-md:w-full max-md:max-w-[320px]"
      >
        <FaEnvelope /> Send Me a Message
      </Button>
      <div className="grid w-full max-w-[1100px] grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {SOCIAL_LINKS.map((link) => (
          <ContactCard
            key={link.label}
            platform={link.label}
            href={link.href}
            icon={icons[link.label]}
          />
        ))}
      </div>
    </section>
  );
}
