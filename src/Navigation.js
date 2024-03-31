import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation({ projectsRef, contactRef, profileRef }) {
  const [navbar, setNavbar] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  function ChangeBackground() {
    const currentScroll = window.scrollY;
    if (currentScroll > prevScroll) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    setPrevScroll(currentScroll);
  }

  window.addEventListener("scroll", ChangeBackground);

  return (
    <div className="navigation-container">
      <div className={navbar ? "navigation active" : "navigation"}>
        <Link to="/portfolio-app/">
          <button
            onClick={() =>
              profileRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="logo"
          >
            <h2>
              <strong>Davis Tran</strong>
            </h2>
          </button>
        </Link>

        <ul className="nav-links">
          <li>
            <div className="dropdown">
              <button
                onClick={() =>
                  projectsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <strong>Projects</strong>
              </button>

              <div className="content">
                <Link
                  to="/portfolio-app/placeholder1"
                  className="dropdown-link"
                >
                  Placeholder 1
                </Link>
                <Link
                  to="/portfolio-app/placeholder2"
                  className="dropdown-link"
                >
                  Placeholder 2
                </Link>
                <Link
                  to="/portfolio-app/placeholder3"
                  className="dropdown-link"
                >
                  Placeholder 3
                </Link>
              </div>
            </div>
          </li>
          <li>
            <button
              onClick={() =>
                contactRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <strong>Contact</strong>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
