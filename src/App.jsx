import { Routes, Route } from "react-router-dom";
import UnderConstruction from "./Pages/UnderConstruction";
import Home from "./Pages/Home";
import MyWork from "./Pages/MyWork";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Project from "./Pages/Project";
import projectData from "./Data/ProjectData";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<UnderConstruction />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/my-work/:project"
          element={<Project projectData={projectData} />}
        />
      </Routes>
    </>
  );
}

export default App;
