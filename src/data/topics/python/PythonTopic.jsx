import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PythonData from "./contents/PythonData";

import OffcanvasSidebar from "../../../components/TopicDetail/OffcanvasSidebar";
import FloatingButton from "../../../components/TopicDetail/FloatingButton";
import SideContent from "../../../components/TopicDetail/SideContent";

import GetStartedWithPython from "./contents/Introduction to python/GetStartedWithPython";
import YourFirstPythonProgram from "./contents/Introduction to python/YourFirstPythonProgram";

function PythonTopic() {
  const pythonChapters = PythonData.python.chapters;
  const location = useLocation();
  
  // State for active topic and offcanvas visibility
  const [activeTopic, setActiveTopic] = useState(null);
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);
  
  // Set the active topic based on the current path
  useEffect(() => {
    const topic = getActiveTopicFromPath(location.pathname);
    if (topic) {
      setActiveTopic(topic);
    } else {
      setActiveTopic(pythonChapters[0].topics[0].title); // Default to the first topic if not found
    }
  }, [location.pathname, pythonChapters]);

  const toggleOffCanvas = () => setOffCanvasOpen(!isOffCanvasOpen);

  const topicClickHandler = (topic) => {
    setActiveTopic(topic.title);
    setOffCanvasOpen(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SideContent
          chapters={pythonChapters}
          activeTopic={activeTopic}
          onTopicClick={topicClickHandler}
        />

        <OffcanvasSidebar
          showOffcanvas={isOffCanvasOpen}
          handleOffcanvasToggle={toggleOffCanvas}
          chapters={pythonChapters}
          activeTopic={activeTopic}
          onTopicClick={topicClickHandler}
        />

        <div className="col-md-7 col-lg-7 border-end border-sm-none">
          {renderMainContent(activeTopic)}
        </div>
        <div className="col-2 d-none d-md-block">
          <h4>On this page</h4>
        </div>
        <FloatingButton toggleOffCanvas={toggleOffCanvas} />
      </div>
    </div>
  );
}

// Function to get active topic based on the current path
function getActiveTopicFromPath(path) {
  for (const chapter of PythonData.python.chapters) {
    const topic = chapter.topics.find((topic) => topic.link === path);
    if (topic) {
      return topic.title; // Return the topic title
    }
  }
  return null; // Return null if no matching topic found
}

// Function to render main content based on active topic
function renderMainContent(activeTopic) {
  switch (activeTopic) {
    case "Get Started with Python":
      return <GetStartedWithPython />;
    case "Your First Python Program":
      return <YourFirstPythonProgram />;
    default:
      return (
        <main className="p-4">
          <h1>Invalid</h1>
          <p>Select a topic from the sidebar.</p>
        </main>
      );
  }
}

export default PythonTopic;
