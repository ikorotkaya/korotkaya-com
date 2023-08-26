type SkillProps = {
  title: string;
  logoSrc: string;
};

export function Skill({ title, logoSrc }: SkillProps) {
  return (
    <div className="skills__list-item">
      <img className="list-item__image" src={String(logoSrc)} alt={title} />
      <h5 className="list-item__text">{title}</h5>
    </div>
  );
}
