import React, { useState } from "react";
import { Link } from "react-router-dom";

import pythontopics from "./contents/pythontopic";
import get_started_img from "./assets/python/python-getting-started.png";

function PythonTopic() {
  const pythonChapters = pythontopics.python.chapters;

  const [activeTopic, setActiveTopic] = useState(
    pythonChapters[0].topics[0].title
  ); // Default to the first topic
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => setOffCanvasOpen(!isOffCanvasOpen);

  const topicClickHandler = (topic) => {
    setActiveTopic(topic.title);
    setOffCanvasOpen(false); // Close sidebar on click
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sideContent col-md-3 col-lg-3 border-end d-none d-md-block p-0">
          <TopicContents
            chapters={pythonChapters}
            activeTopic={activeTopic}
            onTopicClick={topicClickHandler}
          />
        </div>

        <OffcanvasSidebar
          showOffcanvas={isOffCanvasOpen}
          handleOffcanvasToggle={toggleOffCanvas}
          chapters={pythonChapters}
          activeTopic={activeTopic}
          onTopicClick={topicClickHandler}
        />

        <div className="col-md-9 col-lg-9">
          {renderMainContent(activeTopic)}
        </div>

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

function renderMainContent(activeTopic) {
  switch (activeTopic) {
    case "Get Started with Python":
      return (
        <main className="p-4">
          <h1>Get Started with Python</h1>
          <p>
            Python is a versatile, high-level programming language that is
            widely supported across all major operating systems.
          </p>
          <p>
            You can run Python on your computer using the following two methods:
          </p>
          <ul>
            <li>Run Python online</li>
            <li>Install Python on your computer</li>
          </ul>
          <p>In this tutorial, you will learn both methods.</p>

          <h3>Run Python Online</h3>
          <p>
            To execute Python code, you need to have a Python interpreter
            installed on your system. However, if you want to start immediately,
            you can use our free online Python editor.
          </p>

          <div className="row">
            <img
              src={get_started_img}
              className="img"
              alt="Get Started with Python"
            />
          </div>
          <p>
            The online editor enables you to run Python code directly in your
            browser—no installation required.
          </p>

          <h3>Install Python on Your Computer</h3>
          <p>
            This guide will walk you through the installation process on
            Windows, macOS, and Linux (Ubuntu).
          </p>

          {/* Bootstrap Tabs for Installation Instructions */}
          <ul className="nav nav-tabs" id="installationTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="windows-tab"
                data-bs-toggle="tab"
                data-bs-target="#windows"
                type="button"
                role="tab"
                aria-controls="windows"
                aria-selected="true"
              >
                Windows
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="ubuntu-tab"
                data-bs-toggle="tab"
                data-bs-target="#ubuntu"
                type="button"
                role="tab"
                aria-controls="ubuntu"
                aria-selected="false"
              >
                Ubuntu (Linux)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="macos-tab"
                data-bs-toggle="tab"
                data-bs-target="#macos"
                type="button"
                role="tab"
                aria-controls="macos"
                aria-selected="false"
              >
                macOS
              </button>
            </li>
          </ul>

          <div className="tab-content mt-3" id="installationTabsContent">
            {/* Windows Instructions */}
            <div
              className="tab-pane fade show active"
              id="windows"
              role="tabpanel"
              aria-labelledby="windows-tab"
            >
              <h4>
                To install Python on your Windows, just follow these steps:
              </h4>
              <ol>
                <li>Install VS Code.</li>
                <li>Download Python Installer File</li>
                <li>Run the Installer</li>
                <li>Install Python</li>
                <li>Verify installation</li>
              </ol>
              <p>Here is a detailed explanation of each of the steps:</p>
              <h3>Setp 1: Install VS Code</h3>
            </div>

            {/* Ubuntu (Linux) Instructions */}
            <div
              className="tab-pane fade"
              id="ubuntu"
              role="tabpanel"
              aria-labelledby="ubuntu-tab"
            >
              <h4>Installing Python on Ubuntu (Linux)</h4>
              <ul>
                <li>Open the terminal.</li>
                <li>
                  Update the package list: <code>sudo apt update</code>
                </li>
                <li>
                  Install Python: <code>sudo apt install python3</code>
                </li>
                <li>
                  Verify the installation: <code>python3 --version</code>
                </li>
              </ul>
            </div>

            {/* macOS Instructions */}
            <div
              className="tab-pane fade"
              id="macos"
              role="tabpanel"
              aria-labelledby="macos-tab"
            >
              <h4>Installing Python on macOS</h4>
              <ul>
                <li>
                  Open Terminal and install Homebrew if not already installed:{" "}
                  <code>
                    /bin/bash -c "$(curl -fsSL
                    https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
                  </code>
                </li>
                <li>
                  Install Python via Homebrew: <code>brew install python</code>
                </li>
                <li>
                  Verify the installation: <code>python3 --version</code>
                </li>
              </ul>
            </div>
          </div>
        </main>
      );

    case "Your First Python Program":
      return (
        <main className="p-4">
          <h1>Your First Python Program</h1>
          <p>Write your first 'Hello, World!' program.</p>
        </main>
      );

    case "Python Comments":
      return (
        <main className="p-4">
          <h1>Python Comments</h1>
          <p>Learn about comments in Python.</p>
        </main>
      );

    default:
      return (
        <main className="p-4">
          <h1>Invalid</h1>
          <p>Select a topic from the sidebar.</p>
        </main>
      );
  }
}

function TopicContents({ chapters, activeTopic, onTopicClick }) {
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
                  to=""
                  onClick={() => onTopicClick(topic)}
                  className={`content-link nav-link ps-3 p-2 rounded my-2 ${
                    activeTopic === topic.title ? "active" : ""
                  }`}
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

function OffcanvasSidebar({
  showOffcanvas,
  handleOffcanvasToggle,
  chapters,
  activeTopic,
  onTopicClick,
}) {
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
          className="btn-close text-reset"
          onClick={handleOffcanvasToggle}
        ></button>
      </div>
      <TopicContents
        chapters={chapters}
        activeTopic={activeTopic}
        onTopicClick={onTopicClick}
      />
    </div>
  );
}

export default PythonTopic;
