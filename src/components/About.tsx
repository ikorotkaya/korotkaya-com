import { Avatar } from "./Avatar";
import { Headline } from "./Headline";
import { Subheadline } from "./Subheadline";

export function About() {
  return (
    <section className="app__topic" id="about">
      <div className="topic__about-me">
        <Avatar />
        <div className="about-me__description">
          <Headline />
          <Subheadline />
        </div>
      </div>
    </section>
  );
}
