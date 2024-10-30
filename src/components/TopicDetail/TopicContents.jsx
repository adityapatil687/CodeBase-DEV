import { Link } from "react-router-dom";

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
                  to={""}  // Update to use the link from topic
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

export default TopicContents;
