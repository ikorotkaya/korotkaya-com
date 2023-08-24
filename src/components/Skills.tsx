import js from "../images/js-file.png";

export function Skills() {
  return (
    <div className="app__topic">
      <div className="topic__skills" id="skills">
        <div className="skills__headline topic-headline">Skills</div>
        <div className="skills__text">Some technologies I work with:</div>
        <div className="skills__list">
          <div className="skills__list-item">
              <div className="list-item__text">HTML</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
            <div className="skills__list-item">
              <div className="list-item__text">CSS/Sass</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
            <div className="skills__list-item">
              <div className="list-item__text">JavaScript</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
            <div className="skills__list-item">
              <div className="list-item__text">TypeScript</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
            <div className="skills__list-item">
              <div className="list-item__text">React</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
            <div className="skills__list-item">
              <div className="list-item__text">Node.js</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
            <div className="skills__list-item">
              <div className="list-item__text">Express</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
            <div className="skills__list-item">
              <div className="list-item__text">PostgreSQL/SQL</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
            <div className="skills__list-item">
              <div className="list-item__text">VS Code</div>
              <img className="list-item__image" src={String(js)} alt="html" />
            </div>
          </div>
        </div>
      </div>
  );
}
