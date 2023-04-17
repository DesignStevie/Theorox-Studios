import React from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import WorkPageItems from "../Components/WorkItem/WorkPageItems";
import "./MyWork.css";

function MyWork() {
  return (
    <>
      <div className="page-container">
        <NavBar />
        <div className="containerPlain">
          <h1 className="pageHeadingPurple">My Work</h1>
          <WorkPageItems />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyWork;
