import { Project } from "./Project";
import { projects } from "../projectData";

export function Projects() {
  return (
    <div className="app__topic">
      <div className="topic__projects" id="projects">
        <div className="projects__headline topic-headline">Projects</div>
        <div className="projects__container">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
