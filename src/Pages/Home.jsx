import React from "react";
import { useRef } from "react";
//import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MyImage from "../Images/me.png";
// import NavBar from "../Components/NavBar/NavBar";
import WorkItems from "../Components/WorkItem/WorkPageItems";
import bgImage from "../Images/Background.png";
import aboutbgImage from "../Images/aboutBackground.png";
import "./Home.css";

function Home() {
  // const location = useLocation();
  // const contactSection = useRef(null);
  const workRef = useRef(null);

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   if (location.hash) {
  //     let elem = document.getElementById(location.hash.slice(1));
  //     if (elem) {
  //       elem.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   }
  // }, [location]);

  return (
    <>
      {/* <NavBar /> */}
      <div className="headerGradientBackground">
        <div className="headerContainer">
          <div className="greetingContainer">
            <div className="name">
              Hi, I'm <b>Steven Odendaal</b>
            </div>
            <div className="role">I'm a UX/UI Designer</div>
          </div>
          <div className="scrollArrow">
            <div className="dotText">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white" />
              </svg>
              <p>Let me show you what I do . . .</p>
            </div>
            <div class="vl"></div>
            <div className="scrollMouse">
              <svg
                width="20"
                height="114"
                viewBox="0 0 20 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.14 108.04C17.14 108.96 16.98 109.787 16.66 110.52C16.3267 111.24 15.8733 111.807 15.3 112.22C14.7133 112.633 14.04 112.847 13.28 112.86L13.28 110.92C13.9333 110.853 14.4867 110.587 14.94 110.12C15.38 109.64 15.6 108.947 15.6 108.04C15.6 107.173 15.3867 106.493 14.96 106C14.52 105.493 13.96 105.24 13.28 105.24C12.7467 105.24 12.3133 105.387 11.98 105.68C11.6467 105.973 11.3933 106.34 11.22 106.78C11.0467 107.22 10.86 107.813 10.66 108.56C10.42 109.48 10.18 110.22 9.94 110.78C9.7 111.327 9.32667 111.8 8.82 112.2C8.3 112.587 7.60667 112.78 6.74 112.78C5.98 112.78 5.30667 112.587 4.72 112.2C4.13333 111.813 3.68 111.273 3.36 110.58C3.04 109.873 2.88 109.067 2.88 108.16C2.88 106.853 3.20667 105.787 3.86 104.96C4.51333 104.12 5.38 103.647 6.46 103.54L6.46 105.54C5.92667 105.607 5.46 105.887 5.06 106.38C4.64667 106.873 4.44 107.527 4.44 108.34C4.44 109.1 4.64 109.72 5.04 110.2C5.42667 110.68 5.97333 110.92 6.68 110.92C7.18667 110.92 7.6 110.78 7.92 110.5C8.24 110.207 8.48667 109.853 8.66 109.44C8.82 109.013 9.00667 108.42 9.22 107.66C9.47333 106.74 9.72667 106 9.98 105.44C10.22 104.88 10.6 104.4 11.12 104C11.6267 103.6 12.32 103.4 13.2 103.4C13.88 103.4 14.52 103.58 15.12 103.94C15.72 104.3 16.2067 104.833 16.58 105.54C16.9533 106.247 17.14 107.08 17.14 108.04ZM10.02 101.402C8.66 101.402 7.44 101.095 6.36 100.482C5.26667 99.8684 4.41333 99.0351 3.8 97.9817C3.18667 96.9151 2.88 95.7351 2.88 94.4417C2.88 92.9217 3.24667 91.5951 3.98 90.4617C4.71333 89.3284 5.75333 88.5017 7.1 87.9817L7.1 90.1617C6.26 90.5484 5.61333 91.1084 5.16 91.8417C4.70667 92.5617 4.48 93.4284 4.48 94.4417C4.48 95.4151 4.70667 96.2884 5.16 97.0617C5.61333 97.8351 6.26 98.4417 7.1 98.8817C7.92667 99.3217 8.9 99.5417 10.02 99.5417C11.1267 99.5417 12.1 99.3217 12.94 98.8817C13.7667 98.4417 14.4067 97.8351 14.86 97.0617C15.3133 96.2884 15.54 95.4151 15.54 94.4417C15.54 93.4284 15.32 92.5617 14.88 91.8417C14.4267 91.1084 13.78 90.5484 12.94 90.1617L12.94 87.9817C14.2733 88.5017 15.3067 89.3284 16.04 90.4617C16.76 91.5951 17.12 92.9217 17.12 94.4417C17.12 95.7351 16.82 96.9151 16.22 97.9817C15.6067 99.0351 14.76 99.8684 13.68 100.482C12.6 101.095 11.38 101.402 10.02 101.402ZM17 77.9325L11.3 81.2525L11.3 83.4525L17 83.4525L17 85.2725L3.06 85.2725L3.06 80.7725C3.06 79.7192 3.24 78.8325 3.6 78.1125C3.96 77.3792 4.44667 76.8325 5.06 76.4725C5.67333 76.1125 6.37333 75.9325 7.16 75.9325C8.12 75.9325 8.96667 76.2125 9.7 76.7725C10.4333 77.3192 10.92 78.1458 11.16 79.2525L17 75.7525L17 77.9325ZM9.84 83.4525L9.84 80.7725C9.84 79.7858 9.6 79.0458 9.12 78.5525C8.62667 78.0592 7.97333 77.8125 7.16 77.8125C6.33333 77.8125 5.69333 78.0592 5.24 78.5525C4.78667 79.0325 4.56 79.7725 4.56 80.7725L4.56 83.4525L9.84 83.4525ZM17.14 66.7845C17.14 68.0779 16.84 69.2579 16.24 70.3245C15.6267 71.3912 14.78 72.2379 13.7 72.8645C12.6067 73.4779 11.38 73.7845 10.02 73.7845C8.66 73.7845 7.44 73.4779 6.36 72.8645C5.26667 72.2379 4.42 71.3912 3.82 70.3245C3.20667 69.2579 2.9 68.0779 2.9 66.7845C2.9 65.4779 3.20667 64.2912 3.82 63.2245C4.42 62.1579 5.26 61.3179 6.34 60.7045C7.42 60.0912 8.64667 59.7845 10.02 59.7845C11.3933 59.7845 12.62 60.0912 13.7 60.7045C14.78 61.3179 15.6267 62.1579 16.24 63.2245C16.84 64.2912 17.14 65.4779 17.14 66.7845ZM15.56 66.7845C15.56 65.8112 15.3333 64.9379 14.88 64.1645C14.4267 63.3779 13.78 62.7645 12.94 62.3245C12.1 61.8712 11.1267 61.6445 10.02 61.6445C8.9 61.6445 7.92667 61.8712 7.1 62.3245C6.26 62.7645 5.61333 63.3712 5.16 64.1445C4.70667 64.9179 4.48 65.7979 4.48 66.7845C4.48 67.7712 4.70667 68.6512 5.16 69.4245C5.61333 70.1979 6.26 70.8112 7.1 71.2645C7.92667 71.7045 8.9 71.9245 10.02 71.9245C11.1267 71.9245 12.1 71.7045 12.94 71.2645C13.78 70.8112 14.4267 70.1979 14.88 69.4245C15.3333 68.6379 15.56 67.7579 15.56 66.7845ZM15.52 55.5619L15.52 50.6819L17 50.6819L17 57.3819L3.06 57.3819L3.06 55.5619L15.52 55.5619ZM15.52 46.9291L15.52 42.0491L17 42.0491L17 48.7491L3.06 48.7491L3.06 46.9291L15.52 46.9291Z"
                  fill="white"
                  fill-opacity="0.75"
                />
                <path
                  d="M10 26.0606C4.48485 26.0606 0 21.5758 0 16.0606V10C0 4.48485 4.48485 0 10 0C15.5152 0 20 4.48485 20 10V16.0606C20 21.5758 15.5152 26.0606 10 26.0606ZM10 1.81818C5.49091 1.81818 1.81818 5.49091 1.81818 10V16.0606C1.81818 20.5697 5.49091 24.2424 10 24.2424C14.5091 24.2424 18.1818 20.5697 18.1818 16.0606V10C18.1818 5.49091 14.5091 1.81818 10 1.81818Z"
                  fill="white"
                  fill-opacity="0.75"
                />
                <path
                  d="M10.0002 12.7272C8.49719 12.7272 7.27295 11.5029 7.27295 9.9999V7.57566C7.27295 6.07263 8.49719 4.84839 10.0002 4.84839C11.5033 4.84839 12.7275 6.07263 12.7275 7.57566V9.9999C12.7275 11.5029 11.5033 12.7272 10.0002 12.7272ZM10.0002 6.66657C9.50325 6.66657 9.09113 7.07869 9.09113 7.57566V9.9999C9.09113 10.4969 9.50325 10.909 10.0002 10.909C10.4972 10.909 10.9093 10.4969 10.9093 9.9999V7.57566C10.9093 7.07869 10.4972 6.66657 10.0002 6.66657Z"
                  fill="white"
                  fill-opacity="0.75"
                />
                <path
                  d="M10.0002 6.66667C9.50319 6.66667 9.09106 6.25455 9.09106 5.75758V0.909091C9.09106 0.412121 9.50319 0 10.0002 0C10.4971 0 10.9092 0.412121 10.9092 0.909091V5.75758C10.9092 6.25455 10.4971 6.66667 10.0002 6.66667Z"
                  fill="white"
                  fill-opacity="0.75"
                />
              </svg>
            </div>
          </div>
          <div className="arrow">
            <svg
              onClick={scrollToWork}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 16C32 7.184 24.816 -3.14023e-07 16 -6.99382e-07C7.184 -1.08474e-06 -3.14023e-07 7.184 -6.99382e-07 16C-1.08474e-06 24.816 7.184 32 16 32C24.816 32 32 24.816 32 16ZM15.152 20.464L9.504 14.816C9.264 14.576 9.152 14.272 9.152 13.968C9.152 13.664 9.264 13.36 9.504 13.12C9.968 12.656 10.736 12.656 11.2 13.12L16 17.92L20.8 13.12C21.264 12.656 22.032 12.656 22.496 13.12C22.96 13.584 22.96 14.352 22.496 14.816L16.848 20.464C16.384 20.944 15.616 20.944 15.152 20.464Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="contactContainerWrapper">
            <div className="contactContainer">
              <div className="contactSocials">
                <a
                  href="https://dribbble.com/so128"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 0C7.16667 0 0 7.16667 0 16C0 24.8333 7.16667 32 16 32C24.816 32 32 24.8333 32 16C32 7.16667 24.816 0 16 0ZM26.568 7.37467C28.538 9.77378 29.6281 12.7745 29.6573 15.8787C29.2067 15.792 24.6947 14.872 20.148 15.4453C20.0427 15.2187 19.956 14.976 19.852 14.7333C19.5692 14.0659 19.2687 13.4061 18.9507 12.7547C23.9827 10.7067 26.2733 7.75733 26.568 7.37467ZM16 2.36133C19.4707 2.36133 22.6467 3.66133 25.0587 5.796C24.816 6.14267 22.7507 8.90267 17.892 10.724C15.652 6.612 13.172 3.244 12.7893 2.724C13.8418 2.47825 14.9193 2.35609 16 2.36V2.36133ZM10.1867 3.644C10.5507 4.13067 12.98 7.51467 15.2533 11.54C8.86667 13.2413 3.22667 13.2067 2.62 13.2067C3.50533 8.972 6.36933 5.44933 10.1867 3.644ZM2.32533 16.0173V15.6013C2.916 15.6187 9.544 15.7053 16.3653 13.6573C16.764 14.4213 17.128 15.2013 17.4747 15.9827C17.3013 16.0347 17.1107 16.0867 16.9373 16.1387C9.892 18.412 6.14267 24.624 5.83067 25.1453C3.57388 22.6407 2.32507 19.3887 2.32533 16.0173ZM16 29.6747C12.9627 29.6795 10.0115 28.6654 7.61867 26.7947C7.86133 26.2907 10.6373 20.9453 18.3427 18.256C18.3773 18.2387 18.396 18.2387 18.4293 18.2213C20.356 23.2013 21.136 27.384 21.3453 28.5813C19.696 29.2933 17.892 29.6747 16 29.6747ZM23.6187 27.332C23.48 26.4987 22.7507 22.508 20.9627 17.596C25.2493 16.92 28.9973 18.0307 29.4667 18.1867C28.876 21.9867 26.6893 25.2667 23.6187 27.332Z"
                      fill="#fff"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/steven-odendaal-a09a69187/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.333496 2.784C0.333496 2.13404 0.591691 1.5107 1.05128 1.05112C1.51087 0.591526 2.13421 0.333332 2.78416 0.333332H27.2135C27.5356 0.332805 27.8546 0.395815 28.1524 0.518754C28.4501 0.641692 28.7206 0.822145 28.9485 1.04978C29.1764 1.27742 29.3571 1.54776 29.4804 1.84534C29.6037 2.14293 29.667 2.4619 29.6668 2.784V27.2133C29.6672 27.5355 29.604 27.8546 29.4809 28.1523C29.3578 28.45 29.1773 28.7205 28.9495 28.9484C28.7218 29.1763 28.4513 29.357 28.1537 29.4802C27.856 29.6035 27.537 29.6668 27.2148 29.6667H2.78416C2.46222 29.6667 2.14344 29.6032 1.84603 29.48C1.54861 29.3568 1.27839 29.1761 1.05081 28.9484C0.823226 28.7207 0.642739 28.4504 0.51966 28.1529C0.39658 27.8554 0.333321 27.5366 0.333496 27.2147V2.784ZM11.9442 11.5173H15.9162V13.512C16.4895 12.3653 17.9562 11.3333 20.1602 11.3333C24.3855 11.3333 25.3868 13.6173 25.3868 17.808V25.5707H21.1108V18.7627C21.1108 16.376 20.5375 15.0293 19.0815 15.0293C17.0615 15.0293 16.2215 16.4813 16.2215 18.7627V25.5707H11.9442V11.5173ZM4.61083 25.388H8.88816V11.3333H4.61083V25.3867V25.388ZM9.50016 6.74933C9.50823 7.11556 9.44306 7.47971 9.30848 7.82042C9.17391 8.16112 8.97263 8.47151 8.71647 8.73337C8.46031 8.99524 8.15443 9.2033 7.81677 9.34534C7.47911 9.48739 7.11648 9.56055 6.75016 9.56055C6.38384 9.56055 6.02121 9.48739 5.68356 9.34534C5.3459 9.2033 5.04001 8.99524 4.78385 8.73337C4.5277 8.47151 4.32642 8.16112 4.19184 7.82042C4.05727 7.47971 3.9921 7.11556 4.00016 6.74933C4.01599 6.03047 4.31268 5.34639 4.82668 4.84358C5.34068 4.34077 6.03113 4.05922 6.75016 4.05922C7.4692 4.05922 8.15965 4.34077 8.67365 4.84358C9.18765 5.34639 9.48433 6.03047 9.50016 6.74933Z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </div>
              <a href="mailto: stevenodendaal98@gmail.com">
                <button className="roundbutton tertiaryButton">
                  Let's chat
                </button>
              </a>
              <p className="email">stevenodendaal98@gmail.com</p>
            </div>
          </div>
          <svg
            className="svgDots"
            width="144"
            height="240"
            viewBox="0 0 144 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 16)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 144)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 80)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 208)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 48)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 176)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 112)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 240)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 16)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 144)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 80)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 208)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 48)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 176)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 112)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 240)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 16)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 144)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 80)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 208)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 48)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 176)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 112)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 240)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 16)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 144)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 80)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 208)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 48)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 176)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 112)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 240)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 16)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 144)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 80)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 208)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 48)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 176)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 112)"
              fill="white"
              fill-opacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 240)"
              fill="white"
              fill-opacity="0.25"
            />
          </svg>
        </div>
        <img src={bgImage} className="bgImage" alt="logo" />
      </div>

      {/* HOME --- MY WORK */}

      <div ref={workRef} className="containerPlain">
        <WorkItems />
      </div>

      {/* HOME --- ABOUT ME */}
      <div className="colouredBackground">
        <img src={aboutbgImage} className="aboutbgImage" alt="logo" />
        <div className="about-me containerPlain">
          <div className="sectionHeading">
            <h2>This is Me!</h2>
          </div>
          <div className="aboutMeContainer">
            <div className="paragraph-content">
              <p>
                I am a UX/UI designer with a passion for creating engaging and
                intuitive digital experiences as well as pursuing a side passion
                for front end development.
              </p>
              <br />
              <p>
                Over the past 2 years, I’ve honed my skills in facilitating
                design sprint workshops, user research, information
                architecture, wireframing, prototyping, and visual design, using
                tools such as Figma, Adobe Creative Suite, and VS Code.
              </p>
              <br />
              <p>
                When im not designing, you can find me creating digital art,
                designing tattoos, playing online games, getting out and
                exploring new parts of New Zealand, and many more fun
                activities. These experiences have taught me to be curious,
                creative, and adaptive, traits that I bring to my work as a
                UX/UI designer.
              </p>
            </div>
            <img className="profileImage" src={MyImage} alt="face" />
            <div className="aboutDots">
              <svg
                width="240"
                height="144"
                viewBox="0 0 240 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 16 32)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 144 32)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 80 32)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 208 32)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 48 32)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 176 32)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 112 32)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 240 32)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 16 96)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 144 96)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 80 96)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 208 96)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 48 96)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 176 96)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 112 96)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 240 96)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 16 128)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 144 128)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 80 128)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 208 128)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 48 128)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 176 128)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 112 128)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 240 128)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 16 0)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 144 0)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 80 0)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 208 0)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 48 0)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 176 0)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 112 0)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 240 0)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 16 64)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 144 64)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 80 64)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 208 64)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 48 64)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 176 64)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 112 64)"
                  fill="white"
                  fill-opacity="0.25"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  transform="matrix(-1 0 0 1 240 64)"
                  fill="white"
                  fill-opacity="0.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
