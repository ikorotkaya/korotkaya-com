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
    <div className="project">
      <div className="project__title">{title}</div>
      <img className="project__prev" src={imageSrc} alt={title} />
      <p>{description}</p>
      <div className="project__menu">
        <a
          className="project__menu-link"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="project__menu-link"
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
      </div>
    </div>
  );
}
