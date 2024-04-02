import { Link } from "react-router-dom";
import Profile from "./assets/Profile.jpg";
import PortfolioData from "./Data/PortfolioData";
import PortfolioItem from "./PortfolioItem";
import Contact from "./Contact";

export default function Home({ projectsRef, contactRef, profileRef }) {
  return (
    <div className="home-container">
      <section ref={profileRef} className="summary">
        <div className="summary-text">
          <h1>Hello, my name is Davis</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="summary-buttons">
            <Link to="https://www.linkedin.com/in/davisdaitran" target="_blank">
              <button className="linkedin button">View LinkedIn</button>
            </Link>

            <Link to="https://github.com/DataDaev" target="_blank">
              <button className="github button">View Github</button>
            </Link>
          </div>
        </div>
        <img className="profile" src={Profile} alt="Profile of Davis Tran" />
      </section>

      <section ref={projectsRef} className="projects-section">
        <h1>Portfolio</h1>
        <div className="projects-grid">
          {PortfolioData.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}
