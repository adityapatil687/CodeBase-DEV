import Tabs from "../../../../../components/TopicDetail/Tabs";
import ImageCard from "../../../../../components/TopicDetail/ImageCard";
import get_started_img from "../../assets/python-getting-started.png";

export default function GetStartedWithPython() {
  return (
    <>
      <main className="p-2">
        <h1>Get Started with Python</h1>
        <br />
        <p>
          Python is a versatile, high-level programming language that is widely
          supported across all major operating systems.
        </p>
        <p>
          You can run Python on your computer using the following two methods:
        </p>
        <ul>
          <li>Run Python online</li>
          <li>Install Python on your computer</li>
        </ul>
        <p>In this tutorial, you will learn both methods.</p>
        <br />
        <h3>Run Python Online</h3>
        <p>
          To execute Python code, you need to have a Python interpreter
          installed on your system. However, if you want to start immediately,
          you can use our free online Python editor.
        </p>

        {/* Using ImageCard Component */}
        <ImageCard
          imgSrc={get_started_img}
          altText="Get Started with Python"
          description="Image 1"
        />

        <p>
          The online editor enables you to run Python code directly in your
          browser—no installation required.
        </p>
        <br />
        <h3>Install Python on Your Computer</h3>
        <p>
          This guide will walk you through the installation process on Windows,
          macOS, and Linux (Ubuntu).
        </p>

        {/* First Tabs for Installation Instructions */}
        {renderTabsForInstallation()}
        <br />
        <br />
        {/* Second Tabs for Advanced Topics or Additional Information */}
        {renderAdditionalTabs()}
      </main>
    </>
  );
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
