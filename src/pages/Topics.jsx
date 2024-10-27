import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Topics.css"
function Topics() {
  const topicsList = [
    {
      name: "JavaScript",
      image:
        "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FBFMMlbcQvml9HSqXcvNp&w=384&q=75",
      category: "Programming Language",
      description:
        "JavaScript is a versatile programming language commonly used in web development to create dynamic and interactive user interfaces.",
    },
    // You can add more categories and languages as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All topics");

  // Filter languages based on search input and selected category
  const filteredLanguages = topicsList.filter((lang) => {
    const matchesSearchTerm = lang.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All topics" || lang.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  const categories = [
    "All topics",
    "Programming Language",
    "Projects",
    "Software Engineering Essentials",
    "Mobile Development",
    "Front End Development",
    "Back End Development",
    "Cloud",
  ];

  useEffect(() => {
    const rootDiv = document.getElementById("root");
    if (rootDiv) {
      rootDiv.classList.remove("my-auto");
    }
  }, []);

  return (
    <>
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="pe-2">
            <h1>Topics</h1>
          </div>

          <div className="d-flex align-items-center ms-auto">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search topics..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ minWidth: "160px" }}
            />
            {/* Category Selector */}
            <select
              className="form-select ms-2 w-50"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row g-4">
          {filteredLanguages.map((lang, index) => (
            <div className="col-6 col-sm-4" key={index}>
              <div className="topic-card-bg-custom card rounded">
                <Link
                  to={`/topics/${lang.name.toLowerCase()}`}
                  className="text-decoration-none link-light"
                >
                  <img
                    src={lang.image}
                    className="card-img-top"
                    alt={lang.name}
                    
                  />
                  <div className="card-body">
                    <h5 className="card-title">{lang.name}</h5>
                    <p className="card-text ">
                      {lang.description} {/* Use description from the array */}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Topics;
