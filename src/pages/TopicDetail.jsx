import React from "react";
import { useParams } from "react-router-dom";
import "./styles/TopicDetail.css";

// Add topics herea
import PythonTopic from "../data/topics/python/PythonTopic";

function TopicDetail() {
  const { topicName } = useParams(); // Extract 'topicName' from the URL
  let ActiveTopicComponent;
  switch (topicName?.toLowerCase()) {
    case "python":
      ActiveTopicComponent = PythonTopic;
      break;
  }
  return (
    <>
      <ActiveTopicComponent />
    </>
  );
}

export default TopicDetail;
