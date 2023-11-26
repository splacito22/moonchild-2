import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
// import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="contact" component={Contact} />
          <Route path="resume" component={Resume} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
