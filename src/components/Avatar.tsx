import React from "react";

import avatar from "../images/Irina_pic.png";

export function Avatar() {
  return (
    <img
      className="about-me__avatar"
      src={String(avatar)}
      alt="Irina
  Korotkaya"
    />
  );
}
