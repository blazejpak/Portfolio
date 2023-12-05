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
          <Link to="/" className="footer_link" aria-label="Home Link">
            HOME
          </Link>
        </li>

        <li>
          <Link
            aria-label="Portfolio Link"
            to="/portfolio"
            className="footer_link"
            preventScrollReset={true}
          >
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="/contact" className="footer_link" aria-label="Contact Link">
            CONTACT ME
          </Link>
        </li>
      </ul>

      <div className="footer_external">
        <GitHub fill="#fff" />

        <div className="footer_external--fem">
          <Fem />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
