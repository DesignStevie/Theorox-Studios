import React from "react";
import "./WorkItem.css";
import ProjectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";

function WorkPageItems() {
  return (
    <div className="workitems">
      {ProjectData.map((project, key) => {
        return (
          <Link
            key={key}
            className="workitem-container"
            to={"/my-work" + project.linkName}
          >
            <img className="project-image" src={project.image} alt="project" />
            <div className="workitem-content">
              <h1>0{project.id + 1}</h1>
              <h2 className="pageHeadingPurpleSmall"> {project.projectName}</h2>
              <p> {project.short_description}</p>
              <button className="roundbutton secondary-button">
                View Project
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default WorkPageItems;
