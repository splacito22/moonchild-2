import React from "react";

const Portfolio = () => {
  return (
    <section id="work">
      <h2>Work</h2>
      <div className="portfolio">
        {/* Repeat the following block for each project */}
        <a href="https://github.com/Evanilla57/cocktail-companions">
          <img
            src="./assets/Images/Screenshot 2023-08-15 213932.png"
            alt="Cocktail Companions"
          />
          <h3>Cocktail Companions</h3>
        </a>
        {/* ... Repeat for other projects */}
      </div>
    </section>
  );
};

export default Portfolio;
