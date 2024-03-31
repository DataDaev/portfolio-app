import { Link } from "react-router-dom";
import PortfolioData from "./Data/PortfolioData";

export default function PortfolioItem({
  title,
  imgUrl,
  stack,
  link,
  description,
}) {
  return (
    <div className="project-item">
      <Link to={link}>
        <img className="project-image" src={imgUrl} alt="Portfolio" />
      </Link>
      <div>
        <h3>{title}</h3>
        <p>
          {stack.map((item) => (
            <span>{item}</span>
          ))}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
