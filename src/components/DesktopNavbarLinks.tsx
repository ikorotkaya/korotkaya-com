const sections = [
  { id: "about", text: "About", href: "#about", external: false },
  { id: "projects", text: "Projects", href: "#projects", external: false },
  { id: "contact", text: "Contact", href: "#contact", external: false },
  {
    id: "blog",
    text: "Writing",
    href: "https://ikorotkaya.github.io/blog/",
    external: true,
  },
];

export function DesktopNavbarLinks() {
  return (
    <nav className="navbar__links">
      {sections.map((section) => (
        <a
          className="navbar__link"
          key={section.id}
          href={section.href}
          target={section.external ? "_blank" : undefined}
          rel={section.external ? "noopener noreferrer" : undefined}
        >
          {section.text}
          {section.external && (
            <span className="navbar__external-icon" aria-hidden="true">
              ↗
            </span>
          )}
        </a>
      ))}
    </nav>
  );
}
