import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#about">About Me</Link>
        </li>
        <li>
          <Link href="#work">Portfolio</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="#resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
