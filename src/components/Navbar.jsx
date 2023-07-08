import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <Logo />
        <Link className="navbar_toggle">
          <span className="navbar_toggle--bar"></span>
          <span className="navbar_toggle--bar"></span>
          <span className="navbar_toggle--bar"></span>
        </Link>
        <div className="navbar_links">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT ME</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
