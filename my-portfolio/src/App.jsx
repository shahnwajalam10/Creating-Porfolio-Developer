import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Project from "./Components/Project";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path = '/hero' element = { <Hero/> }></Route>
        <Route path = '/experience' element = { <Experience/> }></Route>
        <Route path = '/about' element = { <About/> }></Route>
        <Route path = '/project' element = { <Project/> }></Route>
        <Route path = '/education' element = { <Education/> }></Route>
        <Route path = '/contact' element = { <Contact/> }></Route>
        <Route path = '/skill' element = { <Skill/> }></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
