import React, { useState } from "react";

const sections = [
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

export function MobileNavbarLinks() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar__menu-icon" onClick={toggleMenu}>
        <img src="/images/menu.webp" alt="menu-icon" />
      </div>
      {menuOpen && (
        <div className="mobile-navbar__menu-dropdown">
          {sections.map((section) => (
            <a
              className="navbar__link"
              onClick={closeMenu}
              key={section.id}
              href={`#${section.id}`}
            >
              {section.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
