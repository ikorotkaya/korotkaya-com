import React from "react";
import "./App.scss";
import avatar from "./images/Irina_pic.png";

export default function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__navbar">
          <div className="navbar__logo">Irina Korotkaya</div>
          <div className="navbar__links">
            <a className="navbar__link" href="#about">
              about
            </a>
            <a className="navbar__link" href="#projects">
              projects
            </a>
            <a className="navbar__link" href="#contact">
              contact
            </a>
          </div>
        </div>
        <div className="app__topics">
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
                  I'm a software developer with a background in architecture and
                  design.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
