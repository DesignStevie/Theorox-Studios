import React from "react";
import "./WorkPageItems.css";
import ProjectData from "../../Data/ProjectData";

function WorkPageItems() {
  return (
    <>
      {ProjectData.map((project, key) => {
        return (
          <div className="container">
            <div className="myworkitem-container">
              <div className="workitem-image-container">
                <img
                  className="workitem-image"
                  src={project.image}
                  alt="project"
                />
              </div>
              <div className="workItem-desc">
                <h2 className="workItem-Name">{project.projectName}</h2>
                <p className="workItem-desc">{project.long_description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WorkPageItems;
