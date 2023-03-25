import React from "react";
import "./WorkItem.css";
import ProjectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";

function WorkItem() {
  return (
    <div className="workitems">
      {ProjectData.slice(0,2).map((project, key) => {
        return (
          <Link
            key={key}
            className="workitem-container"
            to={"/my-work" + project.linkName}
          >
            <img className="project-image" src={project.image} alt="project" />
            <div className="workitem-content">
              <h3> {project.projectName}</h3>
              <h4> {project.short_description}</h4>
              <button className="roundbutton secondary-button">View Project</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default WorkItem;
