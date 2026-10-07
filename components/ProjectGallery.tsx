"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "./Icons";

const projects = [
  {
    name: "Burnhop",
    category: "Games",
    type: "2D action / Browser",
    status: "Solo practice",
    description:
      "Jet-powered movement and side-view shooting, with a customizable pilot at the center of it all.",
    note: "Desktop browser · Multiplayer currently unavailable. Native version in development.",
    image: "/projects/burnhop.webp",
    alt: "Burnhop’s illustrated pilot and moonlit desert entrance",
    url: "https://burnhop.lowhp.studio",
    number: "01",
  },
  {
    name: "Greytrace",
    category: "Games",
    type: "Shooting prototype / Browser",
    status: "Beta",
    description:
      "A tactical shooting playground focused on movement, gun handling, and getting another round in.",
    note: "Desktop browser · Practice maps. No live matchmaking.",
    image: "/projects/greytrace.webp",
    alt: "Greytrace’s actual beta lobby with its operator and practice-map selection",
    url: "https://greytrace.lowhp.studio",
    number: "02",
  },
  {
    name: "Templio",
    category: "Web",
    type: "Custom websites / Web",
    status: "Live",
    description:
      "Personal websites with a point of view. Bring an idea; build a little corner of the internet around it.",
    note: "Custom websites built collaboratively. Explore the current work and pitch an idea.",
    image: "/projects/templio.webp",
    alt: "Templio’s custom-websites homepage featuring a portfolio example",
    url: "https://www.templio.app",
    number: "03",
  },
] as const;
const filters = ["All", "Games", "Web"] as const;
type Filter = (typeof filters)[number];

export default function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );
  return (
    <section
      id="projects"
      className="projects-section shell"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected projects</p>
          <h2 id="projects-title">
            Things to play.
            <br />
            Places to explore.
          </h2>
        </div>
        <p>
          Different ideas. The same curiosity.
          <br />
          Take a look around.
        </p>
      </div>
      <div className="gallery-toolbar">
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item === "All" ? "All projects" : item}
              <span>
                {item === "All" ? "03" : item === "Games" ? "02" : "01"}
              </span>
            </button>
          ))}
        </div>
        <p className="project-count" role="status" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.name}>
            <a
              className="project-image"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore ${project.name} (opens in a new tab)`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={1280}
                height={800}
                sizes="(max-width: 700px) 92vw, (max-width: 1000px) 45vw, 30vw"
              />
              <span className="project-image-arrow">
                <ArrowUpRight />
              </span>
            </a>
            <div className="project-info">
              <p className="project-type">
                {project.type}
                <span>{project.number}</span>
              </p>
              <div className="project-title">
                <h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </h3>
                <span className="project-status">
                  <span />
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <p className="project-note">{project.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
