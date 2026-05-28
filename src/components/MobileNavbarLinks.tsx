import { useState } from "react";

const sections = [
  { id: "about", text: "About", href: "#about", external: false },
  { id: "projects", text: "Projects", href: "#projects", external: false },
  { id: "contact", text: "Contact", href: "#contact", external: false },
  { id: "blog", text: "Writing", href: "https://ikorotkaya.github.io/blog/", external: true },
];

export function MobileNavbarLinks() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="mobile-navbar">
      <button
        className="mobile-navbar__menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      {menuOpen && (
        <div className="mobile-navbar__menu-dropdown" role="menu">
          {sections.map((section) => (
            <a
              className="navbar__link"
              onClick={closeMenu}
              key={section.id}
              href={section.href}
              target={section.external ? "_blank" : undefined}
              rel={section.external ? "noopener noreferrer" : undefined}
              role="menuitem"
            >
              {section.text}
              {section.external && (
                <span className="navbar__external-icon" aria-hidden="true">↗</span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
