import React from "react";
import TopicContents from "./TopicContents"; // Adjust the import path as necessary

function SideContent({ chapters, activeTopic, onTopicClick }) {
  return (
    <div className="sideContent col-md-3 col-lg-3 border-end d-none d-md-block p-0">
      <TopicContents
        chapters={chapters}
        activeTopic={activeTopic}
        onTopicClick={onTopicClick}
      />
    </div>
  );
}

export default SideContent;
