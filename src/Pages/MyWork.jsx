import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import WorkPageItems from "../Components/WorkItem/WorkPageItems";
import "./MyWork.css";

function MyWork() {
  return (
    <div className="page-container">
      <NavBar />
      <div className="container">
        <h1 className="page-heading">My Work.</h1>
      </div>
      <WorkPageItems />
    </div>
  );
}

export default MyWork;
