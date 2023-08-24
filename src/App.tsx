import React from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { Topics } from "./components/Topics";

export default function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Navbar />
        <Topics />
      </div>
    </div>
  );
}
