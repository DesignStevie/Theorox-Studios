import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import WorkItem from "../Components/WorkItem/WorkItem";
import MyImage from "../Images/header-image-plain.png";
import "./Home.css";

function Home() {
  const contactSection = useRef(null);
  const offset = 24;

  const executeScroll = () => {
    document.body.scrollTo({
      behavior: "smooth",
      top: contactSection.current.offsetTop - offset,
    });
  };

  return (
    <>
      <NavBar />
      <div className="header-background">
        <img className="home-face" src={MyImage} alt="face" />
      </div>
      <div className="header-container">
        <div className="header-content">
          <h1>Steven</h1>
          <h1>Odendaal</h1>
          <h4 className="header-title">
            A <b>UX/UI Designer</b> with a hint of <b>Frontend Development</b>.
          </h4>
          <div className="home-header-socials">
            <button
              className="roundbutton primary-button"
              onClick={executeScroll}
            >
              Contact Me
            </button>
            <div className="social-icons">
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
                  fill="#2E2E2E"
                />
              </svg>
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
                  fill="#2E2E2E"
                />
              </svg>
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
                  d="M8.9535 0.421328C10.5175 0.349328 11.0162 0.333328 15.0002 0.333328C18.9842 0.333328 19.4828 0.350662 21.0455 0.421328C22.6082 0.491995 23.6748 0.741328 24.6082 1.10266C25.5855 1.47199 26.4722 2.04933 27.2055 2.79599C27.9522 3.52799 28.5282 4.41333 28.8962 5.392C29.2588 6.32533 29.5068 7.392 29.5788 8.952C29.6508 10.5187 29.6668 11.0173 29.6668 15C29.6668 18.984 29.6495 19.4827 29.5788 21.0467C29.5082 22.6067 29.2588 23.6733 28.8962 24.6067C28.5282 25.5855 27.9512 26.4723 27.2055 27.2053C26.4722 27.952 25.5855 28.528 24.6082 28.896C23.6748 29.2587 22.6082 29.5067 21.0482 29.5787C19.4828 29.6507 18.9842 29.6667 15.0002 29.6667C11.0162 29.6667 10.5175 29.6493 8.9535 29.5787C7.3935 29.508 6.32683 29.2587 5.3935 28.896C4.41472 28.5279 3.52792 27.951 2.79483 27.2053C2.04867 26.4729 1.47125 25.5865 1.10283 24.608C0.741496 23.6747 0.493496 22.608 0.421496 21.048C0.349496 19.4813 0.333496 18.9827 0.333496 15C0.333496 11.016 0.350829 10.5173 0.421496 8.95466C0.492163 7.39199 0.741496 6.32533 1.10283 5.392C1.47179 4.41344 2.04965 3.52708 2.79616 2.79466C3.52822 2.04866 4.41413 1.47125 5.39216 1.10266C6.3255 0.741328 7.39216 0.493328 8.95216 0.421328H8.9535ZM20.9268 3.06133C19.3802 2.99066 18.9162 2.976 15.0002 2.976C11.0842 2.976 10.6202 2.99066 9.0735 3.06133C7.64283 3.12666 6.86683 3.36533 6.3495 3.56666C5.6655 3.83333 5.17616 4.14933 4.66283 4.66266C4.17622 5.13606 3.80174 5.71237 3.56683 6.34933C3.3655 6.86666 3.12683 7.64266 3.0615 9.07333C2.99083 10.62 2.97616 11.084 2.97616 15C2.97616 18.916 2.99083 19.38 3.0615 20.9267C3.12683 22.3573 3.3655 23.1333 3.56683 23.6507C3.8015 24.2867 4.17616 24.864 4.66283 25.3373C5.13616 25.824 5.7135 26.1987 6.3495 26.4333C6.86683 26.6347 7.64283 26.8733 9.0735 26.9387C10.6202 27.0093 11.0828 27.024 15.0002 27.024C18.9175 27.024 19.3802 27.0093 20.9268 26.9387C22.3575 26.8733 23.1335 26.6347 23.6508 26.4333C24.3348 26.1667 24.8242 25.8507 25.3375 25.3373C25.8242 24.864 26.1988 24.2867 26.4335 23.6507C26.6348 23.1333 26.8735 22.3573 26.9388 20.9267C27.0095 19.38 27.0242 18.916 27.0242 15C27.0242 11.084 27.0095 10.62 26.9388 9.07333C26.8735 7.64266 26.6348 6.86666 26.4335 6.34933C26.1668 5.66533 25.8508 5.176 25.3375 4.66266C24.8641 4.17609 24.2878 3.80161 23.6508 3.56666C23.1335 3.36533 22.3575 3.12666 20.9268 3.06133ZM13.1268 19.5213C14.173 19.9568 15.338 20.0156 16.4227 19.6876C17.5075 19.3596 18.4447 18.6652 19.0743 17.723C19.7039 16.7808 19.9869 15.6492 19.8749 14.5215C19.7629 13.3938 19.2628 12.34 18.4602 11.54C17.9485 11.0286 17.3298 10.6371 16.6486 10.3935C15.9674 10.15 15.2407 10.0605 14.5208 10.1315C13.8009 10.2025 13.1057 10.4322 12.4852 10.8042C11.8648 11.1761 11.3345 11.681 10.9326 12.2825C10.5306 12.8839 10.2671 13.567 10.1609 14.2826C10.0546 14.9982 10.1084 15.7284 10.3182 16.4207C10.5281 17.113 10.8888 17.7501 11.3745 18.2863C11.8601 18.8224 12.4586 19.2442 13.1268 19.5213ZM9.6695 9.66933C10.3695 8.9693 11.2006 8.414 12.1152 8.03514C13.0299 7.65629 14.0102 7.46129 15.0002 7.46129C15.9902 7.46129 16.9705 7.65629 17.8851 8.03514C18.7997 8.414 19.6308 8.9693 20.3308 9.66933C21.0309 10.3694 21.5862 11.2004 21.965 12.1151C22.3439 13.0297 22.5389 14.01 22.5389 15C22.5389 15.99 22.3439 16.9703 21.965 17.8849C21.5862 18.7996 21.0309 19.6306 20.3308 20.3307C18.917 21.7444 16.9996 22.5387 15.0002 22.5387C13.0008 22.5387 11.0833 21.7444 9.6695 20.3307C8.25572 18.9169 7.46146 16.9994 7.46146 15C7.46146 13.0006 8.25572 11.0831 9.6695 9.66933ZM24.2108 8.584C24.3843 8.42035 24.5232 8.22357 24.6192 8.00529C24.7153 7.78702 24.7666 7.55169 24.7701 7.31324C24.7735 7.07478 24.7291 6.83806 24.6395 6.61707C24.5498 6.39609 24.4167 6.19534 24.2481 6.02671C24.0795 5.85809 23.8787 5.725 23.6578 5.63535C23.4368 5.5457 23.2 5.5013 22.9616 5.50477C22.7231 5.50825 22.4878 5.55953 22.2695 5.65559C22.0513 5.75165 21.8545 5.89052 21.6908 6.06399C21.3726 6.40137 21.1983 6.84949 21.2051 7.31324C21.2119 7.77698 21.3991 8.21983 21.727 8.54779C22.055 8.87574 22.4978 9.06297 22.9616 9.06973C23.4253 9.07649 23.8735 8.90225 24.2108 8.584Z"
                  fill="#2E2E2E"
                />
              </svg>
            </div>
          </div>
        </div>
        <b className="sphere first"></b>
        <b className="sphere second"></b>
        <b className="sphere third"></b>
      </div>

      {/* HOME --- MY WORK */}

      <div className="my-work containerPlain">
        <div className="sectionHeading">
          <h2>Featured Work</h2>
          <hr className="headerLine" />
          {/* <Link className="linkButton" to="/my-work">
            View All
          </Link> */}
        </div>
        <div className="containerPlain">
          <WorkItem />
          <div className="workItemButton">
            <Link to="/my-work">
              <button className="roundbutton secondary-button viewAllButton">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* HOME --- ABOUT ME */}
      <div className="colouredBackground">
        <div className="about-me containerPlain">
          <div className="sectionHeading">
            <h2>This is Me!</h2>
            <hr className="headerLine" />
          </div>
          <div className="paragraph-content">
            <p>
              I grew up having a passion and desire to create, build, and make
              everything around me look and feel good, I knew being in this
              field would give me the best of both worlds to make things not
              just look great but also feel good to the users.
            </p>
            <br />
            <p>
              I studied to get my Bachelors in Design, majored in Interface
              Design and minored in Computer Science as I also have a deep
              passion for front end development as well.
            </p>
            <br />
            <p>
              If I can design it to look and feel good, why not build it as
              well?
            </p>
            <br />
            <p>
              I now continue to persue my career in UX/UI and continue learning
              and developing myself further each day.
            </p>
          </div>
        </div>
      </div>

      {/* HOME --- MY WORK */}
      <div ref={contactSection}></div>
      <div className="containerPlain">
        <div className="sectionHeading">
          <h2>Get in Touch</h2>
          <hr className="headerLine" />
        </div>
        <div className="contactContainer">
          <div className="halfForm">
            <Contact />
          </div>
          <div className="contactImage halfForm"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
