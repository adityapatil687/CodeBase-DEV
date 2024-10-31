const generateLink = (chapterTitle, topicTitle) => {
  // Format the titles to create a slug for the URL
  const formattedChapter = chapterTitle.toLowerCase().replace(/\s+/g, '-');
  const formattedTopic = topicTitle.toLowerCase().replace(/\s+/g, '-');
  return `/topics/python/${formattedChapter}/${formattedTopic}`;
};

const PythonData = {
  python: {
    chapters: [
      {
        title: "Python Introduction",
        topics: [
          {
            title: "Get Started with Python",
            link: generateLink("Python Introduction", "Get Started with Python"),
          },
          {
            title: "Your First Python Program",
            link: generateLink("Python Introduction", "Your First Python Program"),
          },
        ],
      },
      {
        title: "Advanced Python",
        topics: [
          {
            title: "Python Decorators",
            link: generateLink("Advanced Python", "Python Decorators"),
          },
          {
            title: "Python Generators",
            link: generateLink("Advanced Python", "Python Generators"),
          },
        ],
      },
      // Additional chapters can be added here
    ],
  },
};

export default PythonData;
