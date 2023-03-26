import React from "react";
import "./Resume.css";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

function Resume() {
  return (
    <>
      <div className="page-container">
        <NavBar />
        <div className="colouredBackground">
          <div className="resumeAbout containerPlain">
            <h1 className="pageHeadingWhite">About Me</h1>
            <hr className="headerLineLarge" />
            <p>
            I am a UX/UI designer with a passion for creating engaging and intuitive digital experiences as well as pursuing a side passion for front end development.
            </p>
            <br />
            <p>
            Over the past 2 years, I’ve honed my skills in facilitating design sprint workshops, user research, information architecture, wireframing, prototyping, and visual design, using tools such as Figma, Adobe Creative Suite, and VS Code.
            </p>
            <br />
            <p>
            When im not designing, you can find me creating digital art, designing tattoos, playing online games, getting out and exploring new parts of New Zealand, and many more fun activities. These experiences have taught me to be curious, creative, and adaptive, traits that I bring to my work as a UX/UI designer.
            </p>
          </div>
        </div>
        <div className="containerPlain">
          <h1 className="pageHeadingPurple">Experience</h1>
          <div className="experienceContainer">
            <p className="experienceTitle">UX Designer</p>
            <p className="experienceCompany">Gallagher</p>
            <p className="experienceDate">January 2022 - Current</p>
            <br />
            <p className="experienceDescription">
              Managing and supporting 2-4 squads with various UX tasks including
              - User Research & Interviews, Conduct User Testing, Creating UI,
              Facilitating Design Sprints and various other workshops. I worked
              across multiple platforms including Web Apps, Desktop Apps, and
              Mobile Apps.
            </p>
          </div>
          <div className="experienceContainer">
            <p className="experienceTitle">
              Graphics Designer | Lead Web Designer
            </p>
            <p className="experienceCompany">Glu Group</p>
            <p className="experienceDate">January 2021 - January 2022</p>
            <br />
            <p className="experienceDescription">
              Working with multiple diverse clients, designing content for their
              businesses, ranging from new/rebrand logos, business cards,
              flyer's, posters, signage, marketing posts and many other
              deliverables, but mainly focusing on designing/developing websites
            </p>
          </div>
          <div className="experienceContainer">
            <p className="experienceTitle">Communication Consultant</p>
            <p className="experienceCompany">Spark</p>
            <p className="experienceDate">October 2018 - January 2021</p>
            <br />
            <p className="experienceDescription">
              Working with the latest cellular technologies, assisting customers
              with great service. Selling mobile plans, cellular devices and
              broadband connections. Constantly working towards meeting a
              monthly target and cash handling.
            </p>
          </div>
        </div>
        <div className="containerPlain">
          <h1 className="pageHeadingPurple">Education</h1>
          <div className="educationContainer">
            <p className="educationTitle">
              Bachelor of Design - Majoring in Interface Design and Minoring in
              Computer Science
            </p>
            <p className="educationSchool">University of Waikato</p>
            <p className="educationDate">September 2018 - January 2021</p>
            <br />
            <p className="educationDescription"></p>
          </div>
          <div className="educationContainer">
            <p className="educationTitle">NCEA Level 03</p>
            <p className="educationSchool">Sutherland High School</p>
            <p className="educationDate">January 2011 - December 2015</p>
            <br />
            <p className="educationDescription"></p>
          </div>
        </div>
        <div className="containerPlain">
          <h1 className="pageHeadingPurple">Achievements</h1>
          <div className="achievementContainer">
            <div className="ahievement">
              <p className="achievementTitle">Top Designer of the Year</p>
              <p className="achievementPlace">University of Waikato</p>
            </div>
            <p className="achievementDate">2020</p>
          </div>
          <div className="achievementContainer">
            <div className="ahievement">
              <p className="achievementTitle">Deans Award of Academic Excellence</p>
              <p className="achievementPlace">University of Waikato</p>
            </div>
            <p className="achievementDate">2020</p>
          </div>
          <div className="achievementContainer">
            <div className="ahievement">
              <p className="achievementTitle">Deans Award of Academic Excellence</p>
              <p className="achievementPlace">University of Waikato</p>
            </div>
            <p className="achievementDate">2019</p>
          </div>
          <div className="achievementContainer">
            <div className="ahievement">
              <p className="achievementTitle">Bronze Certificate in Sales</p>
              <p className="achievementPlace">Spark</p>
            </div>
            <p className="achievementDate">2019</p>
          </div>
          <div className="achievementContainer">
            <div className="ahievement">
              <p className="achievementTitle">Local Bursary Competition for Web Developemnt Course</p>
              <p className="achievementPlace">Sutherland High School</p>
            </div>
            <p className="achievementDate">2015</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Resume;
