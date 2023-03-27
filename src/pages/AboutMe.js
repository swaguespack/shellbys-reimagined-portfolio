import React from 'react';
//import "../pages";
//import { Link } from "react-router-dom";
import ProfilePic from "../assets/shellby-profile-pic.png";


function About() {
  return (
    <section class="about">
      <img 
      src={ProfilePic}
      className="profile-picture"
      alt="profile"
      style={{
        paddingTop: "35px"
      }}
      />
      <h1 id="about">I'm an About Me section</h1>
      <p>     Technical skills in JavaScript, Bootstrap, 
              React.js, MongoDB, NoSQL, SQL, Express.js, React j.s and Node.js,
              as well as responsive web design. </p>
    </section>
  );
}

export default About;