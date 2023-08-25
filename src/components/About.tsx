import {Avatar} from "./Avatar";
import {Headline} from "./Headline";
import {Subheadline} from "./Subheadline";

export function About() {
  return (
    <div className="app__topic">
    <div className="topic__about-me" id="about">
      <Avatar />
      <div className="about-me__description">
        <Headline />
        <Subheadline />
      </div>
    </div>
  </div>
  )
}