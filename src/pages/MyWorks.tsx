import { Link } from "react-router-dom";
import { useState } from "react";
import { config } from "../config";
import ProductionEventCard from "../components/ProductionEventCard";
import "./MyWorks.css";

type WorkCategory = "all" | "development" | "production";

const MyWorks = () => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("all");
  const featuredRepositoryUrls = new Set(
    config.projects.map((project) => project.repository),
  );
  const developmentProjects = [
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
        description:
          "description" in project && project.description
            ? project.description
            : "A project from my public GitHub repositories.",
      })),
  ].slice(0, 9);
  const projects = developmentProjects;

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of my development projects and live production work</p>
        <div className="myworks-filters" role="tablist" aria-label="Work categories">
          {(
            [
              ["all", "All Works"],
              ["development", "Development"],
              ["production", "Live Production"],
            ] as const
          ).map(([category, label]) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="myworks-grid">
        {activeCategory !== "production" &&
          projects.map((project, index) => {
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
                  {"repository" in project && project.repository && (
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
        {activeCategory !== "development" &&
          config.productionEvents.map((event, index) => (
            <ProductionEventCard
              key={event.id}
              event={event}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default MyWorks;
