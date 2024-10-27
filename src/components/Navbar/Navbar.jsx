import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/" className="navbar-brand text-light mt-1 me-auto ms-2">
        <img
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          alt="Bootstrap"
          className="me-2"
          width={40}
        />
        CodeBase
        <span className="rounded px-1 custom-title-border">DEV</span>
      </Link>
    </>
  );
}
function NavbarLinks() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-1">
          <li className="nav-item mx-2">
            <Link
              className="nav-link active text-light nav-link-custom rounded"
              aria-current="page"
              to="/topics"
            >
              Topics
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="nav-link active text-light nav-link-custom rounded"
              aria-current="page"
              to="/docs"
            >
              Docs
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="nav-link active text-light nav-link-custom rounded"
              aria-current="page"
              to="/about"
            >
              About
            </Link>
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
            <Link to="/" className="navbar-brand">
              <img
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Bootstrap"
                width={40}
              />
            </Link>
            <Link to="/" className="navbar-brand text-light mt-2 ms-2 h4">
              CodeBase
              <span className="rounded px-1 custom-title-border">DEV</span>
            </Link>
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
              <Link
                className="nav-link nav-link-custom text-light rounded"
                to="/topics"
              >
                <span className="ms-3">Topics</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-link-custom text-light rounded"
                to="/docs"
              >
                <span className="ms-3">Docs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-link-custom text-light rounded"
                to="/about"
              >
                <span className="ms-3">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
