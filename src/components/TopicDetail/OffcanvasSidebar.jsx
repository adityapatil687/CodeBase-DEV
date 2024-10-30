import React from "react";
import TopicContents from "./TopicContents";

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
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style={{ visibility: showOffcanvas ? "visible" : "hidden" }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Topics
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          onClick={handleOffcanvasToggle}
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <TopicContents
          chapters={chapters}
          activeTopic={activeTopic}
          onTopicClick={onTopicClick}
        />
      </div>
    </div>
  );
}

export default OffcanvasSidebar;
