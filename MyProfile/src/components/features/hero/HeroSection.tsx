import { FaEnvelope, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/common/SocialLinks";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh scroll-mt-20 items-center overflow-hidden bg-[linear-gradient(to_right,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.75)_45%,rgba(5,5,5,0.35)_100%),url('/Home.jpg')] bg-cover bg-center px-12 pt-[120px] pb-20 max-md:items-start max-md:px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(147,51,234,0.08)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-[560px]">
        <h1 className="mb-3 font-hand text-[72px] font-normal leading-tight text-white max-md:text-5xl">
          Hi! I Am <span className="text-purple-light">Kenneth!</span>
        </h1>
        <p className="mb-6 text-[22px] font-semibold text-white max-md:text-lg">
          <span className="text-purple-light">Aspiring</span> Web Developer
        </p>
        <p className="mb-9 max-w-[480px] text-[15px] leading-relaxed text-muted">
          This is my very first portfolio project. I'm currently learning web
          development using React, and I'm excited to build amazing things in
          the future!
        </p>
        <div className="mb-10 flex flex-wrap gap-4 max-md:flex-col">
          <Button href="#about" variant="primary" className="max-md:max-w-[280px]">
            <FaUser /> About Me
          </Button>
          <Button href="#contact" variant="secondary" className="max-md:max-w-[280px]">
            <FaEnvelope /> Contact Me
          </Button>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
