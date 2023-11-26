import React from "react";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section id="work">
      <h2>Work</h2>
      <div className="portfolio">
        {/* Project 1 */}
        <Project
          title="Cocktail Companions"
          imageSrc="./assets/Images/Screenshot 2023-08-15 213932.png"
          githubLink="https://github.com/Evanilla57/cocktail-companions"
          liveLink="#"
        />
        {/* Project 2 */}
        <Project
          title="Pumpr"
          imageSrc="./assets/Images/Screenshot 2023-10-19 194028.png"
          githubLink="https://github.com/Evanilla57/pumpr/"
          liveLink="#"
        />
        {/* Project 3 */}
        <Project
          title="Application 3"
          imageSrc="assets/Images/Coming-Soon-Image.jpg"
          githubLink="#"
          liveLink="#"
        />
      </div>
    </section>
  );
};

export default Portfolio;
