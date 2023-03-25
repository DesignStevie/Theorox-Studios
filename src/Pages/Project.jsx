import { React } from "react";
import "./Project.css";
import { useParams, Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import projectData from "../Data/ProjectData";

function Project(myProjectData) {
  const projectNameFromUrl = useParams().project;

  const [displayProject] = projectData.filter((projectObj) => {
    return "/" + projectNameFromUrl === projectObj.linkName;
  });
  return (
    <>
      <NavBar />
      <div className="page-container">
        <div className="greyBackground">
          <div className="containerPlain">
            {/* PROJECT --- HEADING */}
            <h1 className="pageHeadingPurple">{displayProject.projectName}</h1>
            <div className="headerImage">
                <img
                  src={displayProject.finalSolutionImage}
                  alt="Final Solution"
                />
              </div>
            <div className="projectDetailsContainer">
            <p className="projectIntroductionText">{displayProject.problem}</p>
            <div className="projectDetails">
              <div className="details">
                <h4>COMPANY</h4>
                <p>{displayProject.company}</p>
              </div>
              <div className="details">
                <h4>SQUAD</h4>
                <p>{displayProject.squad}</p>
              </div>
              <div className="details">
                <h4>TIMEFRAME</h4>
                <p>{displayProject.timeframe}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* PROJECT --- UNDERSTAND */}
        <div className="containerPlain">
          <div className="process-header">
            <svg
              width="28"
              height="21"
              viewBox="0 0 28 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6 6.79989C16.6 6.66655 16.6498 6.52211 16.7493 6.36655C16.8498 6.211 16.9667 6.09989 17.1 6.03322C17.7667 5.76655 18.4502 5.56655 19.1507 5.43322C19.8502 5.29989 20.5778 5.23322 21.3333 5.23322C21.7778 5.23322 22.2 5.26122 22.6 5.31722C23 5.37233 23.4111 5.44433 23.8333 5.53322C23.9889 5.55544 24.1222 5.63322 24.2333 5.76655C24.3444 5.89989 24.4 6.05544 24.4 6.23322C24.4 6.54433 24.3053 6.76655 24.116 6.89989C23.9276 7.03322 23.6889 7.06655 23.4 6.99989C23.0667 6.93322 22.728 6.88877 22.384 6.86655C22.0391 6.84433 21.6889 6.83322 21.3333 6.83322C20.6889 6.83322 20.0556 6.89411 19.4333 7.01589C18.8111 7.13855 18.2222 7.29989 17.6667 7.49989C17.3556 7.63322 17.1 7.63322 16.9 7.49989C16.7 7.36655 16.6 7.13322 16.6 6.79989ZM16.6 14.0999C16.6 13.9443 16.6498 13.7888 16.7493 13.6332C16.8498 13.4777 16.9667 13.3666 17.1 13.2999C17.7444 13.0332 18.428 12.8332 19.1507 12.6999C19.8724 12.5666 20.6 12.4999 21.3333 12.4999C21.7778 12.4999 22.2 12.5279 22.6 12.5839C23 12.639 23.4111 12.711 23.8333 12.7999C23.9889 12.8443 24.1222 12.9332 24.2333 13.0666C24.3444 13.1999 24.4 13.3554 24.4 13.5332C24.4 13.8221 24.3053 14.0386 24.116 14.1826C23.9276 14.3274 23.6889 14.3666 23.4 14.2999C23.0667 14.2332 22.728 14.183 22.384 14.1492C22.0391 14.1163 21.6889 14.0999 21.3333 14.0999C20.6889 14.0999 20.0613 14.1608 19.4507 14.2826C18.8391 14.4052 18.2556 14.5777 17.7 14.7999C17.3667 14.9332 17.1 14.9274 16.9 14.7826C16.7 14.6386 16.6 14.411 16.6 14.0999ZM16.6 10.4666C16.6 10.311 16.6498 10.1554 16.7493 9.99989C16.8498 9.84433 16.9667 9.73322 17.1 9.66655C17.7667 9.39989 18.4502 9.19989 19.1507 9.06655C19.8502 8.93322 20.5778 8.86655 21.3333 8.86655C21.7778 8.86655 22.2 8.89411 22.6 8.94922C23 9.00522 23.4111 9.07766 23.8333 9.16655C23.9889 9.18878 24.1222 9.27189 24.2333 9.41589C24.3444 9.56078 24.4 9.72211 24.4 9.89989C24.4 10.1888 24.3053 10.4052 24.116 10.5492C23.9276 10.6941 23.6889 10.7221 23.4 10.6332C23.0667 10.5666 22.728 10.5221 22.384 10.4999C22.0391 10.4777 21.6889 10.4666 21.3333 10.4666C20.6889 10.4666 20.0613 10.5279 19.4507 10.6506C18.8391 10.7723 18.2556 10.9443 17.7 11.1666C17.3667 11.2999 17.1 11.2941 16.9 11.1492C16.7 11.0052 16.6 10.7777 16.6 10.4666ZM6.66667 16.3666C7.77778 16.3666 8.85556 16.4888 9.9 16.7332C10.9444 16.9777 11.9778 17.3666 13 17.8999V4.79989C12.0667 4.19989 11.0556 3.74433 9.96667 3.43322C8.87778 3.12211 7.77778 2.96655 6.66667 2.96655C5.86667 2.96655 5.11644 3.03322 4.416 3.16655C3.71644 3.29989 3 3.49989 2.26667 3.76655C2.17778 3.811 2.11111 3.86655 2.06667 3.93322C2.02222 3.99989 2 4.06655 2 4.13322V16.7332C2 16.8666 2.04444 16.9608 2.13333 17.0159C2.22222 17.0719 2.31111 17.0777 2.4 17.0332C3.04444 16.811 3.71644 16.6443 4.416 16.5332C5.11644 16.4221 5.86667 16.3666 6.66667 16.3666ZM15 17.8999C16.0222 17.3666 17.0556 16.9777 18.1 16.7332C19.1444 16.4888 20.2222 16.3666 21.3333 16.3666C22.1333 16.3666 22.8836 16.4221 23.584 16.5332C24.2836 16.6443 24.9556 16.811 25.6 17.0332C25.6889 17.0777 25.7778 17.0719 25.8667 17.0159C25.9556 16.9608 26 16.8666 26 16.7332V4.13322C26 4.06655 25.9778 3.99989 25.9333 3.93322C25.8889 3.86655 25.8222 3.811 25.7333 3.76655C25 3.49989 24.2836 3.29989 23.584 3.16655C22.8836 3.03322 22.1333 2.96655 21.3333 2.96655C20.2222 2.96655 19.1222 3.12211 18.0333 3.43322C16.9444 3.74433 15.9333 4.19989 15 4.79989V17.8999ZM14 20.2999C13.7333 20.2999 13.4889 20.2666 13.2667 20.1999C13.0444 20.1332 12.8333 20.0443 12.6333 19.9332C11.7222 19.4221 10.7609 19.0332 9.74933 18.7666C8.73867 18.4999 7.71111 18.3666 6.66667 18.3666C5.84444 18.3666 5.04444 18.4554 4.26667 18.6332C3.48889 18.811 2.73333 19.0777 2 19.4332C1.53333 19.6554 1.08356 19.6221 0.650667 19.3332C0.216889 19.0443 0 18.6332 0 18.0999V3.63322C0 3.34433 0.0724444 3.07189 0.217333 2.81589C0.361333 2.56078 0.577778 2.37766 0.866667 2.26655C1.75556 1.82211 2.69467 1.49411 3.684 1.28255C4.67244 1.07189 5.66667 0.966553 6.66667 0.966553C7.95556 0.966553 9.22222 1.14433 10.4667 1.49989C11.7111 1.85544 12.8889 2.37766 14 3.06655C15.1111 2.37766 16.2889 1.85544 17.5333 1.49989C18.7778 1.14433 20.0444 0.966553 21.3333 0.966553C22.3333 0.966553 23.328 1.07189 24.3173 1.28255C25.3058 1.49411 26.2444 1.82211 27.1333 2.26655C27.4222 2.37766 27.6387 2.56078 27.7827 2.81589C27.9276 3.07189 28 3.34433 28 3.63322V18.0999C28 18.6332 27.7778 19.039 27.3333 19.3172C26.8889 19.5946 26.4222 19.6221 25.9333 19.3999C25.2 19.0666 24.4502 18.811 23.684 18.6332C22.9169 18.4554 22.1333 18.3666 21.3333 18.3666C20.2889 18.3666 19.2613 18.4999 18.2507 18.7666C17.2391 19.0332 16.2778 19.4221 15.3667 19.9332C15.1667 20.0443 14.9556 20.1332 14.7333 20.1999C14.5111 20.2666 14.2667 20.2999 14 20.2999Z"
                fill="#5D4FFF"
              />
            </svg>
            <h3 className="processName">Understand</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.understand}</div>
            <div className="process-image"></div>
          </div>
        </div>
        {/* PROJECT --- RESEARCH */}
        <div className="containerPlain">
          <div className="process-header">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3665 22.7333L13.6665 15.0667C12.9999 15.6222 12.2332 16.0556 11.3665 16.3667C10.4999 16.6778 9.61098 16.8333 8.69987 16.8333C6.41098 16.8333 4.47765 16.0444 2.89987 14.4667C1.32209 12.8889 0.533203 10.9556 0.533203 8.66667C0.533203 6.4 1.32209 4.472 2.89987 2.88267C4.47765 1.29422 6.41098 0.5 8.69987 0.5C10.9665 0.5 12.8888 1.28889 14.4665 2.86667C16.0443 4.44444 16.8332 6.37778 16.8332 8.66667C16.8332 9.62222 16.6776 10.5333 16.3665 11.4C16.0554 12.2667 15.6332 13.0222 15.0999 13.6667L22.7999 21.3667C22.9776 21.5444 23.0665 21.7667 23.0665 22.0333C23.0665 22.3 22.9665 22.5333 22.7665 22.7333C22.5665 22.9333 22.3279 23.0333 22.0505 23.0333C21.7723 23.0333 21.5443 22.9333 21.3665 22.7333ZM8.69987 14.8333C10.411 14.8333 11.8612 14.2333 13.0505 13.0333C14.239 11.8333 14.8332 10.3778 14.8332 8.66667C14.8332 6.95556 14.239 5.5 13.0505 4.3C11.8612 3.1 10.411 2.5 8.69987 2.5C6.96654 2.5 5.50565 3.1 4.3172 4.3C3.12787 5.5 2.5332 6.95556 2.5332 8.66667C2.5332 10.3778 3.12787 11.8333 4.3172 13.0333C5.50565 14.2333 6.96654 14.8333 8.69987 14.8333Z"
                fill="#5D4FFF"
              />
            </svg>
            <h3 className="processName">Research</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.research}</div>
            <div className="process-image"></div>
          </div>
        </div>
        {/* PROJECT --- IDEATE */}
        <div className="containerPlain">
          <div className="process-header">
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6663 23.6666C14.3775 23.6666 14.1388 23.5724 13.9503 23.3839C13.761 23.1946 13.6663 22.9555 13.6663 22.6666C13.6663 22.3777 13.761 22.1386 13.9503 21.9493C14.1388 21.7608 14.3775 21.6666 14.6663 21.6666C15.8219 21.6666 16.833 21.4333 17.6997 20.9666C18.5663 20.4999 18.9997 19.9555 18.9997 19.3333C18.9997 18.8888 18.7886 18.4888 18.3663 18.1333C17.9441 17.7777 17.3663 17.4777 16.633 17.2333L18.133 15.7333C19.0441 16.1333 19.7499 16.6333 20.2503 17.2333C20.7499 17.8333 20.9997 18.5333 20.9997 19.3333C20.9997 20.6888 20.333 21.7497 18.9997 22.5159C17.6663 23.283 16.2219 23.6666 14.6663 23.6666ZM2.83301 13.7333C2.03301 13.3555 1.41656 12.9164 0.983674 12.4159C0.549897 11.9164 0.333008 11.3333 0.333008 10.6666C0.333008 9.82214 0.661008 9.10525 1.31701 8.51592C1.97212 7.92747 3.15523 7.25547 4.86634 6.49992C6.28856 5.85547 7.2219 5.37192 7.66634 5.04925C8.11079 4.72747 8.33301 4.3777 8.33301 3.99992C8.33301 3.55547 8.07745 3.16659 7.56634 2.83325C7.05523 2.49992 6.31079 2.33325 5.33301 2.33325C4.73301 2.33325 4.21656 2.41103 3.78367 2.56659C3.3499 2.72214 2.96634 2.96659 2.63301 3.29992C2.45523 3.49992 2.23301 3.61636 1.96634 3.64925C1.69967 3.68303 1.45523 3.61103 1.23301 3.43325C1.01079 3.25547 0.88323 3.03325 0.850341 2.76659C0.816563 2.49992 0.899675 2.25547 1.09967 2.03325C1.47745 1.56659 2.0499 1.16659 2.81701 0.833252C3.58323 0.499919 4.4219 0.333252 5.33301 0.333252C6.8219 0.333252 8.02768 0.671919 8.95034 1.34925C9.87212 2.02747 10.333 2.91103 10.333 3.99992C10.333 4.79992 10.0219 5.52214 9.39968 6.16659C8.77745 6.81103 7.53301 7.53325 5.66634 8.33325C4.33301 8.91103 3.44412 9.36081 2.99967 9.68259C2.55523 10.0053 2.33301 10.3333 2.33301 10.6666C2.33301 10.9555 2.50545 11.2333 2.85034 11.4999C3.19434 11.7666 3.69967 12.011 4.36634 12.2333L2.83301 13.7333ZM20.6997 8.99992L16.1663 4.46659L17.433 3.16659C17.8775 2.72214 18.3943 2.49992 18.9837 2.49992C19.5721 2.49992 20.0775 2.72214 20.4997 3.16659L21.9997 4.66659C22.4441 5.08881 22.6663 5.59414 22.6663 6.18259C22.6663 6.77192 22.4441 7.28881 21.9997 7.73325L20.6997 8.99992ZM3.89967 21.2666H5.59967L15.7997 11.0666L14.0997 9.36658L3.89967 19.5666V21.2666ZM2.49967 23.2666C2.3219 23.2666 2.17745 23.211 2.06634 23.0999C1.95523 22.9888 1.89967 22.8444 1.89967 22.6666V18.9999C1.89967 18.9555 1.95523 18.7999 2.06634 18.5333L14.0997 6.49992L18.6663 11.0666L6.63301 23.0999C6.58856 23.1221 6.43301 23.1777 6.16634 23.2666H2.49967Z"
                fill="#5D4FFF"
              />
            </svg>
            <h3 className="processName">Ideate</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.ideate}</div>
            <div className="process-image"></div>
          </div>
        </div>

        {/* PROJECT --- PROTOTYPE */}
        <div className="containerPlain">
          <div className="process-header">
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16634 26.1666C3.25523 26.1666 2.47212 25.8386 1.81701 25.1826C1.16101 24.5275 0.833008 23.7443 0.833008 22.8332C0.833008 22.0777 1.05523 21.411 1.49967 20.8332C1.94412 20.2555 2.49967 19.8555 3.16634 19.6332V8.36657C2.49967 8.14435 1.94412 7.74435 1.49967 7.16657C1.05523 6.58879 0.833008 5.92212 0.833008 5.16657C0.833008 4.25546 1.16101 3.4719 1.81701 2.8159C2.47212 2.16079 3.25523 1.83324 4.16634 1.83324C4.9219 1.83324 5.58856 2.05546 6.16634 2.4999C6.74412 2.94435 7.14412 3.4999 7.36634 4.16657H12.6997L10.633 2.0999C10.433 1.92212 10.333 1.6999 10.333 1.43324C10.333 1.16657 10.433 0.922125 10.633 0.699903C10.833 0.499903 11.0663 0.399902 11.333 0.399902C11.5997 0.399902 11.8441 0.499903 12.0663 0.699903L15.6663 4.33324C15.9108 4.57768 16.033 4.86079 16.033 5.18257C16.033 5.50524 15.9108 5.78879 15.6663 6.03324L12.033 9.66657C11.9441 9.77768 11.8388 9.85546 11.717 9.8999C11.5943 9.94435 11.4717 9.96079 11.349 9.94924C11.2272 9.93857 11.0997 9.91101 10.9663 9.86657C10.833 9.82212 10.7219 9.74435 10.633 9.63324C10.433 9.43324 10.333 9.20568 10.333 8.95057C10.333 8.69457 10.433 8.45546 10.633 8.23324L12.6997 6.16657H7.36634C7.18856 6.6999 6.91079 7.15546 6.53301 7.53324C6.15523 7.91101 5.69967 8.18879 5.16634 8.36657V19.6332C5.85523 19.8555 6.41656 20.2555 6.85034 20.8332C7.28323 21.411 7.49967 22.0777 7.49967 22.8332C7.49967 23.7443 7.17745 24.5275 6.53301 25.1826C5.88856 25.8386 5.09967 26.1666 4.16634 26.1666ZM21.833 1.83324C22.7441 1.83324 23.5277 2.16079 24.1837 2.8159C24.8388 3.4719 25.1663 4.25546 25.1663 5.16657C25.1663 6.0999 24.8388 6.88879 24.1837 7.53324C23.5277 8.17768 22.7441 8.4999 21.833 8.4999C20.8997 8.4999 20.1108 8.17768 19.4663 7.53324C18.8219 6.88879 18.4997 6.0999 18.4997 5.16657C18.4997 4.25546 18.8219 3.4719 19.4663 2.8159C20.1108 2.16079 20.8997 1.83324 21.833 1.83324ZM4.16634 24.1666C4.54412 24.1666 4.86101 24.0386 5.11701 23.7826C5.37212 23.5275 5.49967 23.211 5.49967 22.8332C5.49967 22.4555 5.37212 22.139 5.11701 21.8839C4.86101 21.6279 4.54412 21.4999 4.16634 21.4999C3.78856 21.4999 3.47167 21.6279 3.21567 21.8839C2.96056 22.139 2.83301 22.4555 2.83301 22.8332C2.83301 23.211 2.96056 23.5275 3.21567 23.7826C3.47167 24.0386 3.78856 24.1666 4.16634 24.1666ZM4.16634 6.4999C4.54412 6.4999 4.86101 6.37235 5.11701 6.11724C5.37212 5.86124 5.49967 5.54435 5.49967 5.16657C5.49967 4.78879 5.37212 4.4719 5.11701 4.2159C4.86101 3.96079 4.54412 3.83324 4.16634 3.83324C3.78856 3.83324 3.47167 3.96079 3.21567 4.2159C2.96056 4.4719 2.83301 4.78879 2.83301 5.16657C2.83301 5.54435 2.96056 5.86124 3.21567 6.11724C3.47167 6.37235 3.78856 6.4999 4.16634 6.4999ZM21.833 6.4999C22.2108 6.4999 22.5272 6.37235 22.7823 6.11724C23.0383 5.86124 23.1663 5.54435 23.1663 5.16657C23.1663 4.78879 23.0383 4.4719 22.7823 4.2159C22.5272 3.96079 22.2108 3.83324 21.833 3.83324C21.4552 3.83324 21.1388 3.96079 20.8837 4.2159C20.6277 4.4719 20.4997 4.78879 20.4997 5.16657C20.4997 5.54435 20.6277 5.86124 20.8837 6.11724C21.1388 6.37235 21.4552 6.4999 21.833 6.4999ZM17.833 14.5666L19.2997 15.9666L12.9997 22.2666V24.1666H14.8663L21.1997 17.8332L22.5997 19.2332L16.433 25.4332C16.2108 25.6555 15.9552 25.8332 15.6663 25.9666C15.3775 26.0999 15.0663 26.1666 14.733 26.1666H12.1997C11.8663 26.1666 11.5828 26.0501 11.349 25.8172C11.1161 25.5835 10.9997 25.2888 10.9997 24.9332V22.4332C10.9997 22.0999 11.0606 21.7888 11.1823 21.4999C11.305 21.211 11.4775 20.9555 11.6997 20.7332L17.833 14.5666ZM22.5997 19.2332L17.833 14.5666L19.733 12.6666C20.1997 12.1999 20.7717 11.9666 21.449 11.9666C22.1272 11.9666 22.6997 12.211 23.1663 12.6999L24.4663 13.9999C24.933 14.4666 25.1663 15.0332 25.1663 15.6999C25.1663 16.3666 24.933 16.9332 24.4663 17.3999L22.5997 19.2332Z"
                fill="#5D4FFF"
              />
            </svg>

            <h3 className="processName">Prototype</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.prototype}</div>
            <div className="process-image"></div>
          </div>
        </div>
        {/* PROJECT --- VALIDATE */}
        <div className="containerPlain">
          <div className="process-header">
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.36725 22.1331L3.86725 21.3998C3.57836 21.3331 3.34503 21.1722 3.16725 20.9171C2.98947 20.6611 2.92281 20.3886 2.96725 20.0998L3.30059 16.4998L0.933919 13.7998C0.711697 13.5775 0.600586 13.3109 0.600586 12.9998C0.600586 12.6886 0.711697 12.422 0.933919 12.1998L3.30059 9.49975L2.96725 5.89975C2.92281 5.61087 2.98947 5.33842 3.16725 5.08242C3.34503 4.82731 3.57836 4.66642 3.86725 4.59975L7.36725 3.86642L9.20059 0.766421C9.37836 0.499754 9.60592 0.321976 9.88325 0.233087C10.1615 0.144198 10.4339 0.15531 10.7006 0.266421L14.0006 1.66642L17.3006 0.266421C17.5673 0.15531 17.8397 0.144198 18.1179 0.233087C18.3953 0.321976 18.6228 0.499754 18.8006 0.766421L20.6339 3.86642L24.1339 4.59975C24.4228 4.66642 24.6561 4.82731 24.8339 5.08242C25.0117 5.33842 25.0784 5.61087 25.0339 5.89975L24.7006 9.49975L27.0672 12.1998C27.2895 12.422 27.4006 12.6886 27.4006 12.9998C27.4006 13.3109 27.2895 13.5775 27.0672 13.7998L24.7006 16.4998L25.0339 20.0998C25.0784 20.3886 25.0117 20.6611 24.8339 20.9171C24.6561 21.1722 24.4228 21.3331 24.1339 21.3998L20.6339 22.1331L18.8006 25.2331C18.6228 25.4998 18.3953 25.6775 18.1179 25.7664C17.8397 25.8553 17.5673 25.8442 17.3006 25.7331L14.0006 24.3331L10.7006 25.7331C10.4339 25.8442 10.1615 25.8553 9.88325 25.7664C9.60592 25.6775 9.37836 25.4998 9.20059 25.2331L7.36725 22.1331ZM11.7673 16.4331C11.9895 16.6553 12.2673 16.7664 12.6006 16.7664C12.9339 16.7664 13.2117 16.6553 13.4339 16.4331L18.9673 10.8998C19.1673 10.6998 19.2673 10.4606 19.2673 10.1824C19.2673 9.90509 19.1673 9.66642 18.9673 9.46642C18.7673 9.26642 18.5339 9.16642 18.2673 9.16642C18.0006 9.16642 17.7561 9.26642 17.5339 9.46642L12.6006 14.4331L10.4339 12.2664C10.2339 12.0886 9.99481 12.0051 9.71659 12.0158C9.43925 12.0273 9.2117 12.122 9.03392 12.2998C8.83392 12.4998 8.73392 12.7331 8.73392 12.9998C8.73392 13.2664 8.83392 13.4998 9.03392 13.6998L11.7673 16.4331ZM10.6006 23.5998L14.0006 22.1664L17.4339 23.5998L19.3339 20.3998L23.0006 19.5664L22.6672 15.7998L25.1339 12.9998L22.6672 10.1664L23.0006 6.39975L19.3339 5.59975L17.4006 2.39975L14.0006 3.83309L10.5673 2.39975L8.66725 5.59975L5.00059 6.39975L5.33392 10.1664L2.86725 12.9998L5.33392 15.7998L5.00059 19.5998L8.66725 20.3998L10.6006 23.5998Z"
                fill="#5D4FFF"
              />
            </svg>
            <h3 className="processName">Validate</h3>
          </div>
          <div className="process-container">
            <div className="process-text">{displayProject.validate}</div>
            <div className="process-image"></div>
          </div>
        </div>
        {/* PROJECT --- FINAL SOLUTION */}
        <div className="colouredBackground">
          <div className="containerPlain">
            <h3 className="projectSolution subHeading">Final Solution</h3>
            <div className="finalSolutionContainer">
              <div className="process-textSolution">
                {displayProject.finalSolution}
              </div>
              <div className="process-image">
                <img
                  src={displayProject.finalSolutionImage}
                  alt="Final Solution"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="containerPlain">
          <div className="moreProjectsContainer">
            <h1 className="pageHeading">More Projects.</h1>
          </div>
          <div className="workitems">
            {projectData
              .filter((projectData) => projectData.id !== displayProject.id)
              .map((project, key) => {
                return (
                  <Link
                    key={key}
                    className="workitem-container"
                    to={"/my-work" + project.linkName}
                  >
                    <img
                      className="project-image"
                      src={project.image}
                      alt="project"
                    />
                    <div className="workitem-content">
                      <h3> {project.projectName}</h3>
                      <h4>UX/UI</h4>
                      <p> {project.short_description}</p>
                      <button className="roundbutton secondary-button">
                        View Project
                      </button>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
