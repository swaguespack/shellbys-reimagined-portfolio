import React from 'react';
import ProfilePic from "../assets/shellby-profile-pic.png";


function About() {
  return (
    <section >
      <div class="container-fluid">
      <div class="row aboutMe ">
      <div class="col-xl-6 col-lg-6 col-md-6">
        
      <img 
      class="img-fluid rounded"
      id="profilePic"
      src={ProfilePic}
      width="250px"
      alt="profile"
      />
      
    </div>
    <div class="col-xl-5 col-lg-6 col-md-6" id="aboutMeText">
      <h1>About Me</h1>
      <br></br>
      <p
      className="text text-left"

      >Hi! I'm Shellby. I'm a Data and GIS Analyst at the Atlanta Regional Commission and a student in the Georgia Tech Coding Bootcamp. 
       </p>
       <p className="text text-left">Through the bootcamp, I have gained technical skills in JavaScript, Bootstrap, React.js, MongoDB, NoSQL, SQL, Express.js, React j.s and Node.js, as well as responsive web design.</p>
       <p className="text text-left">Check out my portfolio!</p>
      </div>
      </div>
      </div>
    </section>
  );
}

export default About;