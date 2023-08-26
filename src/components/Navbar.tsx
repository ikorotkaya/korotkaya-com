import { Link } from "react-scroll";
import { Logo } from "./Logo";

const sections = [
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

export function Navbar() {
  return (
    <div className="app__navbar">
      <Logo />
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
    </div>
  );
}
