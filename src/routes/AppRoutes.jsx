import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Topics from "../pages/Topics";
import About from "../pages/About";
import Docs from "../pages/Docs";
import TopicDetail from "../pages/TopicDetail";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/topics/*" element={<Topics />} />
    <Route path="/topics/:topicName" element={<TopicDetail />} />
    <Route path="/about" element={<About />} />
    <Route path="/docs" element={<Docs />} />
  </Routes>
);

export default AppRoutes;
