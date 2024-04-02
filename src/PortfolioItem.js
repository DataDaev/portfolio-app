import { Link } from "react-router-dom";

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
      <div className="project-information">
        <h3>{title}</h3>
        <p className="project-stack">
          {stack.map((item) => (
            <span>{item}</span>
          ))}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
