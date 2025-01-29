import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Timeline from "./Timeline";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import Projects from "./Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div id="education">
        <Timeline />
        <Experience />
        <Projects />
        <Contact />
      
      </div>
    </div>
  );
}

export default App;
