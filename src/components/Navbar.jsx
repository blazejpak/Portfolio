import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { CgMenu } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

import Logo from "../UI/Logo";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const menuOutsideHandle = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", menuOutsideHandle);

    return () => {
      document.removeEventListener("mousedown", menuOutsideHandle);
    };
  }, []);

  const activeHandler = (e) => {
    e.preventDefault();

    setActive((currState) => !currState);
  };

  return (
    <header>
      <nav className="navbar">
        <Logo color="#33323d" />
        <Link className="navbar_toggle" onClick={activeHandler}>
          {!active ? <CgMenu size={32} /> : <RxCross1 size={32} />}
        </Link>
        <AnimatePresence>
          {active && (
            <motion.div
              ref={menuRef}
              variants={{
                open: {
                  x: 0,
                },
                closed: {
                  x: "100vw",
                },
              }}
              key="navbar_menu"
              className="navbar_menu"
              initial="closed"
              animate="open"
              transition={{
                duration: 0.3,
              }}
              exit="closed"
            >
              <ul>
                <li>
                  <Link
                    to="/"
                    className={`navbar_link ${
                      location.pathname === "/" ? "navbar_link--active" : ""
                    }`}
                  >
                    HOME
                  </Link>
                </li>

                <li>
                  <Link
                    to="/portfolio"
                    className={`navbar_link ${
                      location.pathname === "/portfolio"
                        ? "navbar_link--active"
                        : ""
                    }`}
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`navbar_link ${
                      location.pathname === "/contact"
                        ? "navbar_link--active"
                        : ""
                    }`}
                  >
                    CONTACT ME
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="navbar_links">
          <ul>
            <li>
              <Link
                to="/"
                className={`navbar_link ${
                  location.pathname === "/" ? "navbar_link--active" : ""
                }`}
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                to="/portfolio"
                className={`navbar_link ${
                  location.pathname === "/portfolio"
                    ? "navbar_link--active"
                    : ""
                }`}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`navbar_link ${
                  location.pathname === "/contact" ? "navbar_link--active" : ""
                }`}
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
