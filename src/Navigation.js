import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/portfolio-app/">
        <h2>Davis Tran</h2>
      </Link>

      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
