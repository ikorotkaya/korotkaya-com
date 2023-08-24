import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";  

export function Topics() {
  return (
    <div className="app__topics">
      <About />
      <Skills />
      <Projects />  
      <Contact />
    </div>
  );
}
