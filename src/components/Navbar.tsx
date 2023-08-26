import { useState, useEffect } from "react";

import { Logo } from "./Logo";
import { DesktopNavbarLinks } from "./DesktopNavbarLinks";
import { MobileNavbarLinks } from "./MobileNavbarLinks";

export function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app__navbar">
      <Logo />
      {windowWidth < 768 ? <MobileNavbarLinks /> : <DesktopNavbarLinks />}
    </div>
  );
}
