import { Link } from "react-scroll";

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
      <Link
        className="navbar__link"
        key={section.id}
        to={section.id}
        smooth={true}
        duration={500}
      >
        {section.text}
      </Link>
    ))}
  </nav>
  )
}