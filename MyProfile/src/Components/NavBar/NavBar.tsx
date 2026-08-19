import { useState } from "react";
import { ImSun } from "react-icons/im";
import { IoMoon } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import "./NavBar.css";

function NavBar() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    setDarkMode((previous) => !previous);
    document.body.classList.toggle("light-mode");
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-my">My</span>
        <span className="logo-portfolio">Portfolio</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#learning">Learning</a>
        </li>
        <li>
          <a href="#journey">Journey</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-actions">
        <button className="cv-button" type="button">
          <FiDownload /> Download my CV
        </button>
        <button
          className="theme-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          type="button"
        >
          {darkMode ? <ImSun /> : <IoMoon />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
