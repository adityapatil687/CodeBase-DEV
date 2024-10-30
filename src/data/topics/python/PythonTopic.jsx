import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import topic_contents from "../../contents/topic_contents";

import OffcanvasSidebar from "../../../components/TopicDetail/OffcanvasSidebar";
import FloatingButton from "../../../components/TopicDetail/FloatingButton";
import SideContent from "../../../components/TopicDetail/SideContent";



import GetStartedWithPython from "./contents/Introduction to python/GetStartedWithPython";
import YourFirstPythonProgram from "./contents/Introduction to python/YourFirstPythonProgram";

function PythonTopic() {
  const pythonChapters = topic_contents.python.chapters;
  const [activeTopic, setActiveTopic] = useState(
    pythonChapters[0].topics[0].title
  ); // Default to the first topic
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);
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

// Function to render installation tabs
function renderTabsForInstallation() {
  const tabsData = [
    {
      id: "tab1",
      title: "Windows",
      content: (
        <>
          <h4>To install Python on your Windows, just follow these steps:</h4>
          <ol>
            <li>Install VS Code.</li>
            <li>Download Python Installer File</li>
            <li>Run the Installer</li>
            <li>Install Python</li>
            <li>Verify installation</li>
          </ol>
          <p>Here is a detailed explanation of each of the steps:</p>
          <h3>Step 1: Install VS Code</h3>
          <p>
            Go to the VS Code Official website and download the Windows
            installer. Once the download is complete, run the installer and
            follow the installation process.
          </p>
          <p>Click Finish to complete the installation process</p>
          <h3>Download the Python Installer File</h3>
          <p>
            Go to the official Python website and download the latest version
            (Python 3.12.2 at the time of writing this tutorial) for Windows.
          </p>
          <p>
            The website automatically detects your operating system and gives
            you the right installer.
          </p>
          <ImageCard
            imgSrc={
              "https://www.programiz.com/sites/tutorial2program/files/python-download-page1.png"
            }
            description="Image 2"
          />
        </>
      ),
    },
    {
      id: "tab2",
      title: "Ubuntu",
      content: (
        <>
          <h4>To install Python on your Ubuntu, just follow these steps:</h4>
          <ol>
            <li>Open Terminal.</li>
            <li>
              Run the following command: <code>sudo apt install python3</code>
            </li>
            <li>
              Verify installation using <code>python3 --version</code>
            </li>
          </ol>
          <p>Here is a detailed explanation of each of the steps:</p>
          <h3>Step 1: Open Terminal</h3>
        </>
      ),
    },
    {
      id: "tab3",
      title: "MacOS",
      content: (
        <>
          <h4>To install Python on your MacOS, just follow these steps:</h4>
          <ol>
            <li>Install Homebrew if you haven't already.</li>
            <li>
              Run the following command: <code>brew install python</code>
            </li>
            <li>
              Verify installation using <code>python3 --version</code>
            </li>
          </ol>
          <p>Here is a detailed explanation of each of the steps:</p>
          <h3>Step 1: Install Homebrew</h3>
        </>
      ),
    },
  ];

  return <Tabs tabsData={tabsData} />;
}

// Function to render additional tabs (if needed)
function renderAdditionalTabs() {
  const additionalTabsData = [
    {
      id: "tab1",
      title: "Advanced Topics",
      content: (
        <>
          <h4>Advanced Python Topics:</h4>
          <ul>
            <li>Object-Oriented Programming</li>
            <li>Web Development with Flask/Django</li>
            <li>Data Science with Pandas</li>
          </ul>
        </>
      ),
    },
    {
      id: "tab2",
      title: "Useful Resources",
      content: (
        <>
          <h4>Useful Resources:</h4>
          <ul>
            <li>
              <a href="https://www.python.org/">Official Python Website</a>
            </li>
            <li>
              <a href="https://www.learnpython.org/">Learn Python</a>
            </li>
            <li>
              <a href="https://www.codecademy.com/learn/learn-python-3">
                Codecademy Python Course
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return <Tabs tabsData={additionalTabsData} />;
}

export default PythonTopic;
