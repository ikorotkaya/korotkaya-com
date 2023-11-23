import React from "react";
import { Skill } from "./Skill";
import { skillsData } from "../skillsData";

export function Skills() {
  return (
    <div className="app__topic">
      <div className="topic__skills" id="skills">
        <div className="skills__headline topic-headline">Skills</div>
        <div className="skills__text">Technologies I work with:</div>
        <div className="skills__list">
          {skillsData.map((skill, index) => (
            <Skill key={index} title={skill.title} logoSrc={skill.logoSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}
