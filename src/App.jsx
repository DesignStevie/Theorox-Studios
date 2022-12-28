import { Routes, Route } from "react-router-dom";
import UnderConstruction from "./Pages/UnderConstruction";
import Home from "./Pages/Home";
import MyWork from "./Pages/MyWork";
import ArtAndDesign from "./Pages/ArtAndDesign";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
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
        <Route path="/extra" element={<ArtAndDesign />} />
        <Route path="/about" element={<About />} />
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
