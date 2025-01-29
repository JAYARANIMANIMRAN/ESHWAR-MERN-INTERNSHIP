import React from "react";
import "./Header.css";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop - 70, 
        behavior: "smooth",
      });
    } else {
      console.error(`Section with id "${id}" not found.`);
    }
  };

  return (
    <header className="header">
      <h1 className="logo">
        Jayarani <span>Manimaran</span>
      </h1>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("education");
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
