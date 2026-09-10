import React, { useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Capability from "./components/Capability.jsx";
import Services from "./components/Services.jsx";
import Solutions from "./components/Solutions.jsx";
import Projects from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";
import About from "./components/About.jsx";
import Values from "./components/Values.jsx";
import Why from "./components/Why.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

const THEME_KEY = "ab-tech-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_KEY);
  return stored === "dark" ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="ab-root">
      <Nav theme={theme} onToggle={toggleTheme} />
      <Hero />
      <Capability />
      <Services />
      <Solutions />
      <Projects />
      <TechStack />
      <About />
      <Values />
      <Why />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}