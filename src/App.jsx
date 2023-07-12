import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyWork from "./Pages/MyWork";
import Resume from "./Pages/Resume";
import Project from "./Pages/Project";
import projectData from "./Data/ProjectData";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/#contact" element={<Home />} />
        <Route
          path="/my-work/:project"
          element={<Project projectData={projectData} />}
        />
      </Routes>
    </>
  );
}

export default App;
