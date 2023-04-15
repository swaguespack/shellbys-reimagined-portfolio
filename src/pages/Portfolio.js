import React from "react";

// Import 6 project screenshots
import WeatherVibes from "../assets/Project2-Weather_Vibes.png"
import WheresMyWings from "../assets/Project1-wings_map.png"
import Artfolio from "../assets/artfolio.png"
import PasswordGenerator from "../assets/Project4-PasswordGenerator.png"
import WeatherDashboard from "../assets/Project5-WeatherDashboard.png"
import CodingQuiz from "../assets/Project6-CodingQuiz.png"

function Portfolio() {
    return (
      
      <section className="portfolio">
      <h1 class="text-center m-5">My Apps</h1>
         <div className="row row-cols-1 row-cols-md-3">

          <div className="col mb-4">
            <div className="card h-100">
              <img
                src={WeatherVibes}
                alt="WeatherVibes"
                class="card-img-top"
              />
              <div class="card-body">
  
                <a href="https://github.com/swaguespack/WeatherVibes" target="_blank" rel="noreferrer">
                  <button >GitHub</button>
                </a>
                <a href="https://swaguespack.github.io/WeatherVibes/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </div>
            </div>
       
            <div className="col mb-4">
            <div className="card h-100">
              <img
                src={WheresMyWings}
                alt="WheresMyWings"
                class="card-img-top"
              />
              <div className="card-body">
                <a href="https://github.com/swaguespack/wheres-my-wings" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://wheres-my-wings.herokuapp.com/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </div>
            </div>
         
  
            <div className="col mb-4">
            <div className="card h-100">
              <img
                src={Artfolio}
                alt="Final Project"
                class="card-img-top"
              />
              <div className="card-body">
                <a href="https://github.com/swaguespack/eg-art" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://artfolio.herokuapp.com/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
              </div>
          </div>
  
  
          <div className="col mb-4">
            <div className="card h-100">
              <img
                src={PasswordGenerator}
                alt="Password Generator"
                className="card-img-top"
              />
              <div className="card-body">
                <a href="https://github.com/swaguespack/03-challenge-Password-Generator" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://swaguespack.github.io/03-challenge-Password-Generator/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
              </div>
              </div>
          
       
  
            <div className="col mb-4">
            <div className="card h-100">
              <img
                src={WeatherDashboard}
                alt="Coming Soon"
                className="card-img-top"
              />
              <div className="card-body">
                <a href="https://github.com/swaguespack/Shellbys-Weather-Dashboard" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://swaguespack.github.io/Shellbys-Weather-Dashboard/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </div>
            </div>
        
            <div className="col mb-4">
            <div className="card h-100">
              <img
                src={CodingQuiz}
                alt="Coming Soon"
                className="card-img-top"
              />
              <div className="card-body">
                <a href="https://github.com/swaguespack/04-Challenge-Coding-Quiz" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://swaguespack.github.io/04-Challenge-Coding-Quiz/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
         
            </div>
            </div>
          </div>
          </div>
     
   

      </section>
  
  
    );
  }

export default Portfolio