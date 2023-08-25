import { Link } from "react-scroll";

export function Navbar() {
  return (
    <div className="app__navbar">
      <div className="navbar__logo">Irina Korotkaya</div>
      <nav className="navbar__links">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* <a className="navbar__link" href="#about">
          About
        </a>
        <a className="navbar__link" href="#projects">
          Skills
        </a>
        <a className="navbar__link" href="#projects">
          Projects
        </a>
        <a className="navbar__link" href="#contact">
          Contact
        </a> */}
    </div>
  );
}
