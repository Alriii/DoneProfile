import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { IoMoon } from "react-icons/io5";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function toggleTheme() {
    setDarkMode((previous) => !previous);
    document.documentElement.classList.toggle("light-mode");
    document.body.classList.toggle("light-mode");
  }

  function goToSection(hash: string) {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
      return;
    }

    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-fg/10 bg-bg/80 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between px-12 max-lg:px-6">
        <NavLink to="/" className="flex items-baseline gap-1.5 no-underline">
          <span className="font-hand text-[32px] leading-none text-purple-light">
            My
          </span>
          <span className="text-xl font-semibold text-fg">Portfolio</span>
        </NavLink>

        <ul className="flex list-none items-center gap-9 p-0 max-lg:gap-5 max-md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={`/#${link.hash}`}
                onClick={(event) => {
                  event.preventDefault();
                  goToSection(link.hash);
                }}
                className={() =>
                  cn(
                    "relative pb-1 text-[15px] font-medium text-fg no-underline transition-colors duration-300 hover:text-purple-light",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-purple-light after:transition-transform after:duration-300 hover:after:scale-x-100",
                    (location.hash === `#${link.hash}` ||
                      (link.hash === "home" &&
                        location.pathname === "/" &&
                        !location.hash) ||
                      location.pathname === link.path) &&
                      "text-purple-light after:scale-x-100",
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="border-none bg-transparent p-0 text-[22px] text-fg transition-colors duration-300 hover:text-purple-light"
          >
            {darkMode ? <ImSun /> : <IoMoon />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="hidden border-none bg-transparent p-0 text-2xl text-fg max-md:block"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <ul className="hidden list-none flex-col gap-4 px-6 pb-6 max-md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={`/#${link.hash}`}
                onClick={(event) => {
                  event.preventDefault();
                  goToSection(link.hash);
                }}
                className="text-[15px] font-medium text-fg no-underline"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
