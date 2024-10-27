import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // For navigation links
import "./styles/topicDetail.css"; // Custom styles

function TopicDetail() {
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => setOffCanvasOpen(!isOffCanvasOpen);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar (visible on medium and larger screens) */}
        <div className="sideContent col-md-3 col-lg-2 d-none d-md-block pt-3">
          {/* Accordion for Topic Chapters */}
          <TopicContents />
        </div>

        {/* Off-canvas Sidebar for Small Screens */}
        <OffcanvasSidebar
          showOffcanvas={isOffCanvasOpen}
          handleOffcanvasToggle={toggleOffCanvas}
        />

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Getting Started with Python</h1>
          </div>
          <p>
            Python is a versatile, high-level programming language that is
            widely supported across all major operating systems.
          </p>
          <h2>Run Python Online</h2>
          <p>
            To execute Python code, you need to have a Python interpreter
            installed on your system. However, if you want to start immediately,
            you can use our free online Python editor.
          </p>

          <section className="code-section">
            <h2>Hello, World! Program</h2>
            <pre>
              <code className="bg-dark">
                {`# This is a simple Python program that prints "Hello, World!"
print("Hello, World!")`}
              </code>
            </pre>
          </section>
        </main>

        {/* Floating Button to Toggle Off-canvas Sidebar */}
        <button
          className="btn floating-btn rounded-circle"
          onClick={toggleOffCanvas}
        >
          <i className="bi bi-list-task"></i>
        </button>
      </div>
    </div>
  );
}

function TopicContents() {
  return (
    <>
      <div className="accordion" id="chaptersAccordion">
        {/* Chapter 1 */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                Chapter 1: Installation
              </button>
            </h2>
            <div
              id="collapse1"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span className="nav-link nav-link-custom active">
                  Python Basics
                </span>
                <span className="nav-link nav-link-custom mt-2">
                  Python Basics
                </span>
                <span className="nav-link nav-link-custom mt-2">
                  Python Basics
                </span>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Chapter 2: Data Types
              </button>
            </h2>
            <div
              id="collapse2"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span className="nav-link nav-link-custom active">
                  Data Types Basics
                </span>
                <span className="nav-link nav-link-custom mt-2">Lists</span>
                <span className="nav-link nav-link-custom mt-2">Tuples</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function OffcanvasSidebar({ showOffcanvas, handleOffcanvasToggle }) {
  return (
    <div
      className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""}`}
      tabIndex="-1"
      aria-labelledby="offcanvasExampleLabel"
      style={{ visibility: showOffcanvas ? "visible" : "hidden" }}
    >
      <div className="offcanvas-header">
        <h3>Contents</h3>
        <button
          type="button"
          className="btn-close text-reset btn-close-white"
          onClick={handleOffcanvasToggle}
        ></button>
      </div>
      <div className="offcanvas-body p-0">
        <TopicContents />
      </div>
    </div>
  );
}

export default TopicDetail;
