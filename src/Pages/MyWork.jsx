import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import WorkPageItems from "../Components/WorkItem/WorkPageItems";
import "./MyWork.css";

function MyWork() {
  return (
    <div className="mywork-main">
      <NavBar />
      <div className="container">
        <h1 className="page-heading">My Work.</h1>
      </div>
      <WorkPageItems />
    </div>
  );
}

export default MyWork;
