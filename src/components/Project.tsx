type ProjectProps = {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  websiteLink: string;
};

export function Project({
  title,
  description,
  imageSrc,
  githubLink,
  websiteLink,
}: ProjectProps) {
  return (
    <div className="container__project">
      <h2>{title}</h2>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
      <div className="project__links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </div>
    </div>
  );
}
