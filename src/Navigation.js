import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/portfolio-app/">
        <h2>Davis Tran</h2>
      </Link>

      <ul className="nav-links">
        {/* <li>
          <strong>About</strong>
        </li> */}
        <li>
          <div className="dropdown">
            <strong>Projects</strong>
            <div className="content">
              <Link to="/portfolio-app/placeholder1" className="dropdown-link">
                Placeholder 1
              </Link>
              <Link to="/portfolio-app/placeholder2" className="dropdown-link">
                Placeholder 2
              </Link>
              <Link to="/portfolio-app/placeholder3" className="dropdown-link">
                Placeholder 3
              </Link>
            </div>
          </div>
        </li>
        <li>
          <Link to="/portfolio-app/contact">
            <strong>Contact</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
