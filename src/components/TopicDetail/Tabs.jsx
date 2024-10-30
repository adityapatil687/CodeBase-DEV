import React, { useState } from "react";

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id); // Default to the first tab

  return (
    <div>
      <ul className="nav nav-tabs">
        {tabsData.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content border-end border-start border-bottom p-4">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
