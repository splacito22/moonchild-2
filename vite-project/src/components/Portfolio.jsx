import React from "react";
import Project from "./Project";
import CocktailImage from "../assets/Images/Cocktail.png";
import PumprImage from "../assets/Images/Pumpr.png";
import ComingImage from "../assets/Images/Coming-soon.jpg";

const Portfolio = () => {
  return (
    <section id="work">
      <h2>Work</h2>
      <div className="portfolio">
        {/* Project 1 */}
        <Project
          title="Cocktail Companions"
          imageSrc={CocktailImage}
          githubLink="https://github.com/Evanilla57/cocktail-companions"
          liveLink="#"
        />
        {/* Project 2 */}
        <Project
          title="Pumpr"
          imageSrc={PumprImage}
          githubLink="https://github.com/Evanilla57/pumpr/"
          liveLink="#"
        />
        {/* Project 3 */}
        <Project
          title="Application 3"
          imageSrc={ComingImage}
          githubLink="#"
          liveLink="#"
        />
      </div>
    </section>
  );
};

export default Portfolio;
