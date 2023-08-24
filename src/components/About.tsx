import avatar from "../images/Irina_pic.png";

export function About() {
  return (
    <div className="app__topic">
    <div className="topic__about-me" id="about">
      <img
        className="about-me__avatar"
        src={String(avatar)}
        alt="Irina
      Korotkaya"
      />
      <div className="about-me__description">
        <div className="description__headline">
          Hey, I'm{" "}
          <b>
            <i>Irina</i>
          </b>
          !
        </div>
        <div className="description__text">
          I'm a full-stack engineer with a background in architecture and
          design.
        </div>
      </div>
    </div>
  </div>
  )
}