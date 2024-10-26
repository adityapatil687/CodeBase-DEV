// App.js
import React from 'react';
import { createPortal } from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      {/* Use createPortal to render Navbar inside the <nav> element */}
      {createPortal(<Navbar />, document.getElementById('navbar'))}
      <Hero />
    </>
  );
}

export default App;
