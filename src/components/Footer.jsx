import { Link } from "react-router-dom";
import Logo from "../UI/Logo";
import GitHub from "../UI/Github";
import Linkedin from "../UI/Linkedin";
import Fem from "../UI/FrontendMentor";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo color="#fff" />

      <ul className="footer_links">
        <li>
          <Link to="/" className="footer_link">
            HOME
          </Link>
        </li>

        <li>
          <Link to="/portfolio" className="footer_link">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="/contact" className="footer_link">
            CONTACT ME
          </Link>
        </li>
      </ul>

      <div className="footer_external">
        <a href="https://github.com/blazejpak">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fpl.linkedin.com%2F">
          <Linkedin />
        </a>
        <div className="footer_external--fem">
          <a href="https://www.frontendmentor.io/profile/blazejpak">
            <Fem />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
