import React, { useState } from "react";
import "./styles/TopicDetail.css";
import { Link } from "react-router-dom";

const chapters = [
  {
    title: "Python Introduction",
    topics: [
      { title: "Get Started with Python", link: "" },
      { title: "Your First Python Program", link: "" },
      { title: "Python Comments", link: "" },
    ],
  },
  {
    title: "Python Fundamentals",
    topics: [
      { title: "Python Variables and Literals", link: "" },
      { title: "Python Type Conversion", link: "" },
      { title: "Python Basic Input and Output", link: "" },
      { title: "Python Operators", link: "" },
    ],
  },
];

function TopicDetail() {
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);
  const toggleOffCanvas = () => setOffCanvasOpen(!isOffCanvasOpen);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar (visible on medium and larger screens) */}
        <div className="sideContent col-md-3 col-lg-3 border-end d-none d-md-block p-0">
          {/* Accordion for Topic Chapters */}
          <TopicContents />
        </div>

        {/* Off-canvas Sidebar for Small Screens */}
        <OffcanvasSidebar
          showOffcanvas={isOffCanvasOpen}
          handleOffcanvasToggle={toggleOffCanvas}
        />

        {/* Main Content */}
        <main className="col-md-9 col-lg-9 p-0 m-0 px-4 py-2">
          <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-bottom">
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
    <div className="accordion accordion-flush" id="accordionExample">
      {chapters.map((chapter, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {chapter.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-2">
              {chapter.topics.map((topic, topicIndex) => (
                <Link
                  key={topicIndex}
                  to={topic.link}
                  className="content-link nav-link ps-3 p-2 rounded my-2"
                >
                  {topic.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
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
      <div className="offcanvas-body p-0 m-0">
        <TopicContents />
      </div>
    </div>
  );
}

export default TopicDetail;
