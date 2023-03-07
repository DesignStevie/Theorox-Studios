import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="sidenav-container">
      <div className="mobile-menu-container">
        <div className="sidenav-mobile">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item selected" : "nav-item "
            }
          >
            Ts.
          </NavLink>
          <div className="mobile-menu" onClick={() => setOpen(!isOpen)}>
            {!isOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" fill="white" />
                <rect y="2" width="20" height="2" rx="1" fill="#2E2E2E" />
                <rect y="16" width="20" height="2" rx="1" fill="#2E2E2E" />
                <rect y="9" width="11" height="2" rx="1" fill="#2E2E2E" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99987 10.3999L2.2332 17.1665C2.05543 17.3443 1.82787 17.4385 1.55054 17.4492C1.27231 17.4608 1.0332 17.3665 0.833203 17.1665C0.633203 16.9665 0.533203 16.7332 0.533203 16.4665C0.533203 16.1999 0.633203 15.9665 0.833203 15.7665L7.59987 8.99987L0.833203 2.2332C0.655425 2.05543 0.561203 1.82743 0.550536 1.5492C0.538981 1.27187 0.633203 1.0332 0.833203 0.833203C1.0332 0.633203 1.26654 0.533203 1.5332 0.533203C1.79987 0.533203 2.0332 0.633203 2.2332 0.833203L8.99987 7.59987L15.7665 0.833203C15.9443 0.655425 16.1723 0.560759 16.4505 0.549203C16.7279 0.538537 16.9665 0.633203 17.1665 0.833203C17.3665 1.0332 17.4665 1.26654 17.4665 1.5332C17.4665 1.79987 17.3665 2.0332 17.1665 2.2332L10.3999 8.99987L17.1665 15.7665C17.3443 15.9443 17.4385 16.1719 17.4492 16.4492C17.4608 16.7274 17.3665 16.9665 17.1665 17.1665C16.9665 17.3665 16.7332 17.4665 16.4665 17.4665C16.1999 17.4665 15.9665 17.3665 15.7665 17.1665L8.99987 10.3999Z"
                  fill="#1C1B1F"
                />
              </svg>
            )}
          </div>
        </div>
        <div className={isOpen ? "menu-opened" : "menu-closed"}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item-mobile selected" : "nav-item-mobile"
            }end
          >
            Home
          </NavLink>
          <NavLink
            to="/my-work"
            className={({ isActive }) =>
              isActive ? "nav-item-mobile selected" : "nav-item-mobile"
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "nav-item-mobile selected" : "nav-item-mobile"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/#contact"
            className="nav-item-mobile"
          >
            Contact
          </NavLink>
        </div>
      </div>

      <div className="sidenav-item-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item selected" : "nav-item "
          }end
        >
          SO.
        </NavLink>
        <NavLink
          to="/my-work"
          className={({ isActive }) =>
            isActive ? "nav-item selected" : "nav-item "
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "nav-item selected" : "nav-item "
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/#contact"
          className="nav-item"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
