import { SectionTitle } from "@/components/common/SectionTitle";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-bg-2 px-12 py-[100px] max-md:px-6 max-md:py-[70px]"
    >
      <div className="pointer-events-none absolute top-1/2 left-[-10%] size-[500px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-[60px] max-md:grid-cols-1 max-md:gap-10">
        <div>
          <SectionTitle className="max-md:mx-auto max-md:text-center">
            About Me
          </SectionTitle>
          <div className="space-y-5 text-[15px] leading-[1.8] text-muted">
            <p>
              I'm Kenneth, an aspiring web developer with a passion for creating
              clean, modern, and user-friendly websites.
            </p>
            <p>
              I enjoy learning how things work and turning ideas into real,
              functional projects. Right now, I'm focused on strengthening my
              skills in front-end development and exploring new technologies.
            </p>
            <p>
              My goal is to become a skilled developer and build projects that
              make an impact.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/About.png"
            alt="Desktop setup with galaxy wallpaper"
            className="w-full max-w-[520px] rounded-xl object-cover shadow-[0_0_40px_rgba(147,51,234,0.2),0_20px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
