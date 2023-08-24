import js from "../images/js-file.png";

export function Skills() {
  return (
    <div className="app__topic">
      <div className="topic__skills" id="skills">
        <div className="skills__headline topic-headline">Skills</div>
        <div className="skills__text">Some technologies I work with:</div>
        <div className="skills__list">
          <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">HTML</h5>
            </div>
            <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">CSS/Sass</h5>
            </div>
            <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">JavaScript</h5>
            </div>
            <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">TypeScript</h5>
            </div>
            <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">React</h5>
            </div>
            <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">Node.js</h5>
            </div>
            <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">Express</h5>
            </div>
            <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">PostgreSQL/SQL</h5>
            </div>
            {/* <div className="skills__list-item">
              <img className="list-item__image" src={String(js)} alt="html" />
              <h5 className="list-item__text">VS Code</h5>
            </div> */}
          </div>
        </div>
      </div>
  );
}
