// App.js
import React from 'react';
import { createPortal } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';

// Pages
import Home from './pages/Home';
import Topics from './pages/Topics';
import About from './pages/About';
import Docs from './pages/Docs';

function App() {
  return (
    <Router>
      {/* Render Navbar inside a specific <nav> element using createPortal */}
      {createPortal(<Navbar />, document.getElementById('navbar'))}

      {/* Define Routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default App;
