import React from "react";
import "../TopicDetail/styles/CodeSection.css";

const CodeSection = ({ children }) => {
  return (
    <div className="code-section">
      <div className="code-header"></div>
      <pre className="code">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeSection;
