import React, { useState } from "react";
import "./styles/TopicDetail.css";
import { Link } from "react-router-dom";
import topics from "../data/topics"; // Import topics data

function TopicDetail() {
  const pythonChapters = topics.python.chapters; // Access Python chapters

  const [activeTopic, setActiveTopic] = useState(pythonChapters[0].topics[0].title); // Default to the first topic
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => setOffCanvasOpen(!isOffCanvasOpen);
  const topicClickHandler = (topic) => setActiveTopic(topic.title);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar (visible on medium and larger screens) */}
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

        {/* Main Content - Conditionally Rendered */}
        <MainContent activeTopic={activeTopic} chapters={pythonChapters} />

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

function OffcanvasSidebar({ showOffcanvas, handleOffcanvasToggle, chapters, activeTopic, onTopicClick }) {
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

function MainContent({ activeTopic, chapters }) {
  const topicContent = chapters
    .flatMap((chapter) => chapter.topics)
    .find((topic) => topic.title === activeTopic)?.content;

  return (
    <main className="col-md-9 col-lg-9 p-0 m-0 px-4 py-2">
      <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">{activeTopic}</h1>
      </div>
      <div>
        <p>{topicContent}</p>
      </div>
    </main>
  );
}

export default TopicDetail;
