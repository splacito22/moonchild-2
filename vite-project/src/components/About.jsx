import React from "react";
import profilepic from "../assets/Images/Portfolio-picture.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="profile">
        <img
          src={profilepic}
          alt="Developer's Photo"
          style={{
            width: "200px", // Set the desired width
            height: "200px", // Set the desired height
            borderRadius: "50%", // Make it a circle
            marginBottom: "10px", // Optional: Add some spacing below the image
          }}
        />
        <h3>Stephany Placito</h3>
      </div>
      <p>This is a work in progress. Stay tuned for more updates!</p>
    </section>
  );
};

export default About;
