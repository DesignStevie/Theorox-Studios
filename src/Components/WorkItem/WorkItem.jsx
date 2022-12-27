import React from "react";
import "./WorkItem.css";
import ProjectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";

function WorkItem() {
  return (
    <div className="workitems">
      {ProjectData.map((project, key) => {
        return (
          <Link
            key={key}
            className="workitem-container"
            to={"/my-work" + project.linkName}
          >
            <div className="work-item-background"></div>
            <div className="workitem-content">
              <h4> {project.projectName}</h4>
              <p> {project.short_description}</p>
            </div>
            <img className="project-image" src={project.image} alt="project" />
          </Link>
        );
      })}
    </div>
  );
}

export default WorkItem;
