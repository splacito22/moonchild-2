import React from "react";

const Project = ({ title, imageSrc, githubLink, liveLink }) => {
  return (
    <div className="project">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default Project;
