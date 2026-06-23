// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import ChatBot from "./sections/ChatBot";
import ScrollProgress from "./components/ScrollProgress";
import "./styles/custom.css";

function App() {
  return (
    <div className="scroll-smooth">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <ChatBot />
    </div>
  );
}//main 
export default App;
