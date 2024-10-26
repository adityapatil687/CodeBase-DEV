import React, { useState, useEffect } from "react";
import './styles/Navbar.css';

function Navbar() {
  // State to manage the icon and theme
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control offcanvas visibility

  // Effect to update the body attribute for theme
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Function to handle the toggle
  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Function to open/close the offcanvas
  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      <nav className="navbar shadow-sm navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="d-inline-flex mb-1 px-2">
            {/* Toggle Button: Only show on small screens */}
            <div className="sideMenuBtn d-lg-none">
              {/* Hide on large screens */}
              <button className="btn mt-1 me-4" onClick={handleOffcanvasToggle}>
                <i className="bi bi-list fs-4"></i>
              </button>
            </div>
            <a className="navbar-brand" href="#">
              <img
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Bootstrap"
                width={40}
              />
            </a>
            <a className="navbar-brand text-light mt-1">
              CodeBase
              <span className="rounded px-1 custom-title-border">DEV</span>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-1">
              <li className="nav-item mx-2">
                <a className="nav-link active text-light nav-link-custom rounded" aria-current="page" href="#">
                  Topics
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active text-light nav-link-custom rounded" aria-current="page" href="#">
                  Docs
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active text-light nav-link-custom rounded" aria-current="page" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={handleToggle}
            className="btn rounded text-light me-2 rounded-circle"
          >
            <i className={`bi ${isDarkMode ? "bi-moon" : "bi-sun"} h5 mt-2`}></i>
          </button>
        </div>
      </nav>

      {/* Offcanvas Sidebar */}
      <div
        className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ visibility: showOffcanvas ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header">
          <div className="d-flex align-items-center">
            <a className="navbar-brand">
              <img
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Bootstrap"
                width={40}
              />
            </a>
            <a className="navbar-brand text-light mt-2 ms-2 h4">CodeBase
              <span className="rounded px-1 custom-title-border">DEV</span>
            </a>
          </div>
          <button
            type="button"
            className="btn-close text-reset btn-close-white"
            onClick={handleOffcanvasToggle}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link nav-link-custom text-light rounded" href="#">
                <span className="ms-3">Topics</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom text-light rounded" href="#">
                <span className="ms-3">Docs</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom text-light rounded" href="#">
                <span className="ms-3">About</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
