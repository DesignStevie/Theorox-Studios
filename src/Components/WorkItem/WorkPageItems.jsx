import React from "react";
import "./WorkPageItems.css";
import ProjectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";

function WorkPageItems() {
  return (
    <>
      {ProjectData.map((project, key) => {
        return (
          <div className="container">
            <div className="myworkitem-container">
              <Link
                className="workitem-image-container"
                key={key}
                to={"/my-work" + project.linkName}
              >
                <img
                  className="workitem-image"
                  src={project.image}
                  alt="project"
                />
              </Link>
              <div className="workItem-desc">
                <div className="workitem-nameContainer">
                  <Link
                    className="workitem-text-container"
                    key={key}
                    to={"/my-work" + project.linkName}
                  >
                    <h2 className="workItem-Name">{project.projectName}</h2>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.475 15.1C7.325 14.95 7.25 14.7706 7.25 14.562C7.25 14.354 7.31667 14.175 7.45 14.025L12.75 8.74995H1.125C0.925 8.74995 0.75 8.67895 0.6 8.53695C0.45 8.39562 0.375 8.21662 0.375 7.99995C0.375 7.78328 0.45 7.60395 0.6 7.46195C0.75 7.32062 0.925 7.24995 1.125 7.24995H12.75L7.45 1.97495C7.31667 1.82495 7.25 1.64595 7.25 1.43795C7.25 1.22928 7.325 1.04995 7.475 0.899951C7.625 0.766618 7.8 0.699951 8 0.699951C8.2 0.699951 8.375 0.766618 8.525 0.899951L14.975 7.37495C15.075 7.45828 15.146 7.55395 15.188 7.66195C15.2293 7.77062 15.25 7.88328 15.25 7.99995C15.25 8.11662 15.2293 8.22895 15.188 8.33695C15.146 8.44562 15.075 8.54162 14.975 8.62495L8.525 15.1C8.375 15.2333 8.2 15.2999 8 15.2999C7.8 15.2999 7.625 15.2333 7.475 15.1Z"
                        fill="#5D4FFF"
                      />
                    </svg>
                  </Link>
                </div>
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
