import React from "react";

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        Download my{" "}
        <a
          href="path/to/your/resume.pdf" // Replace with the actual path to your resume
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
