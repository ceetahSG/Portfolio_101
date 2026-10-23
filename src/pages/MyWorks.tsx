import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  const featuredRepositoryUrls = new Set(
    config.projects.map((project) => project.repository),
  );
  const projects = [
    ...config.projects,
    ...config.githubProjects
      .filter((project) => !featuredRepositoryUrls.has(project.repository))
      .map((project) => ({
        ...project,
        category: "GitHub Repository",
        technologies: "See repository for details",
        image:
          project.image ??
          `https://opengraph.githubassets.com/1/${project.repository.replace(
            "https://github.com/",
            "",
          )}`,
        description: "A project from my public GitHub repositories.",
      })),
  ].slice(0, 9);

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {projects.map((project, index) => {
          const cardContent = (
            <>
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              </div>
              <div className="myworks-card-info">
                <div className="myworks-card-title">
                  <h3>{project.title}</h3>
                  {"status" in project && project.status && (
                    <span className="myworks-card-status">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
                <div className="myworks-card-links">
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      Repository
                    </a>
                  )}
                  {"live" in project && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      Live site
                    </a>
                  )}
                </div>
              </div>
            </>
          );

          return (
            <div
              className="myworks-card"
              key={project.id}
              data-cursor="disable"
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
