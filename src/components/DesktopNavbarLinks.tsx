const sections = [
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

export function DesktopNavbarLinks() {

  return (
    <nav className="navbar__links">
      {sections.map((section) => (
        <a className="navbar__link" key={section.id} href={`#${section.id}`}>
          {section.text}
        </a>
      ))}
    </nav>
  );
}
