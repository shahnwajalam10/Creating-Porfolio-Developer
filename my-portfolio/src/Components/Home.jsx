import About from "./About";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Skill from "./Skill";
import Github from "./Github";
const Home = () => {
  return (
    <>
      <About />
      <Experience />
      <Skill/>
      <Project />
      <Education />
      <Github/>
      <Contact />
    </>
  );
};

export default Home;