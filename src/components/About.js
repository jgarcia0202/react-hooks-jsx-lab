import React from "react";
import {image} from "../data/data.js";

function About() {
  // return <div>About</div>;
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Hello I'm Jose from California, I am attending Flatiron to become a software engineer.</p>
      <img src = {image} alt="i made this" />
    </div>
  );
}

export default About;