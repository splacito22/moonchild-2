// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Project />
      <Contact />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
