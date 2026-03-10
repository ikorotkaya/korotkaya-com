import React from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Navbar />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
