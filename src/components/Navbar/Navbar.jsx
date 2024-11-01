import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  // State to manage the icon and theme
  const [isDarkMode, setIsDarkMode] = useState(true);

  // State to control offcanvas visibility
  const [showOffcanvas, setShowOffcanvas] = useState(false);

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
          <OffcanvasButton handleOffcanvasToggle={handleOffcanvasToggle} />
          <NavbarBrand />
          <NavbarLinks />
          <ThemeButton handleToggle={handleToggle} isDarkMode={isDarkMode} />
        </div>
      </nav>

      {/* Offcanvas Sidebar */}
      <OffcanvasSidebar
        showOffcanvas={showOffcanvas}
        handleOffcanvasToggle={handleOffcanvasToggle}
      />
    </>
  );
}

function OffcanvasButton({ handleOffcanvasToggle }) {
  return (
    <>
      <div className="sideMenuBtn d-lg-none">
        {/* Hide on large screens */}
        <button className="btn mt-1" onClick={handleOffcanvasToggle}>
          <i className="bi bi-list fs-4"></i>
        </button>
      </div>
    </>
  );
}

function NavbarBrand() {
  return (
    <>
      <NavLink to="/" className="navbar-brand text-light me-auto ms-2">
        <div className="d-flex">
            <img
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              alt="Bootstrap"
              className="me-2"
              width={40}
            />
          
          <div>
            <span>CodeBase</span>
            <span className="rounded px-1 custom-title-border">DEV</span>
          </div>
        </div>
      </NavLink>
    </>
  );
}
function NavbarLinks() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0 py-1">
          <li className="nav-item mx-2">
            <NavLink
              className="nav-link text-light nav-link-custom rounded"
              aria-current="page"
              to="/topics"
            >
              Topics
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className="nav-link text-light nav-link-custom rounded"
              aria-current="page"
              to="/docs"
            >
              Docs
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className="nav-link text-light nav-link-custom rounded"
              aria-current="page"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

function ThemeButton({ handleToggle, isDarkMode }) {
  return (
    <button
      onClick={handleToggle}
      className="btn rounded text-light me-0 rounded-circle"
    >
      <i className={`bi ${isDarkMode ? "bi-moon" : "bi-sun"} h5 mt-2`}></i>
    </button>
  );
}
function OffcanvasSidebar({ showOffcanvas, handleOffcanvasToggle }) {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ visibility: showOffcanvas ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header">
          <div className="d-flex align-items-center">
            <NavLink to="/" className="navbar-brand" onClick={handleOffcanvasToggle}>
              <img
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Bootstrap"
                width={40}
              />
            </NavLink>
            <NavLink
              to="/"
              className="navbar-brand text-light mt-2 ms-2 h4"
              onClick={handleOffcanvasToggle}
            >
              CodeBase
              <span className="rounded px-1 custom-title-border">DEV</span>
            </NavLink>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={handleOffcanvasToggle}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-link-custom text-light rounded"
                to="/topics"
                onClick={handleOffcanvasToggle}
              >
                <span className="ms-1">Topics</span>
              </NavLink>
            </li>
            <li className="nav-item mt-2">
              <NavLink
                className="nav-link nav-link-custom text-light rounded"
                to="/docs"
                onClick={handleOffcanvasToggle}
              >
                <span className="ms-1">Docs</span>
              </NavLink>
            </li>
            <li className="nav-item mt-2">
              <NavLink
                className="nav-link nav-link-custom text-light rounded"
                to="/about"
                onClick={handleOffcanvasToggle}
              >
                <span className="ms-1">About</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


export default Navbar;
