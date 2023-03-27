import React from "react";

// Import 6 project screenshots
import WeatherVibes from "../assets/Project2-Weather_Vibes.png"
import WheresMyWings from "../assets/Project1-wings_map.png"
import WorkScheduler from "../assets/Project3-WorkScheduler.png"
import PasswordGenerator from "../assets/Project4-PasswordGenerator.png"
import WeatherDashboard from "../assets/Project5-WeatherDashboard.png"
import CodingQuiz from "../assets/Project6-CodingQuiz.png"

function Portfolio() {
    return (
      <section class="portfolio">
  
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col-lg d-flex align-items-stretch">
            <div class="card">
              <img
                src={WeatherVibes}
                alt="WeatherVibes"
                class="card-img-top"
              />
              <div class="card-body">
  
                <a href="https://github.com/swaguespack/WeatherVibes" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://swaguespack.github.io/WeatherVibes/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>
  
  
          <div class="col-lg d-flex align-items-stretch">
            <div class="card">
              <img
                src={WheresMyWings}
                alt="WheresMyWings"
                class="card-img-top"
              />
              <div class="card-body">
                <a href="https://github.com/swaguespack/wheres-my-wings" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://wheres-my-wings.herokuapp.com/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>
  
          <div class="col-lg d-flex align-items-stretch">
            <div class="card">
              <img
                src={WorkScheduler}
                alt="Final Project"
                class="card-img-top"
              />
              <div class="card-body">
                <a href="https://github.com/swaguespack/Shellbys-Work-Day-Scheduler" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://swaguespack.github.io/Shellbys-Work-Day-Scheduler/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>
  
  
          <div class="col-lg d-flex align-items-stretch">
            <div class="card">
              <img
                src={PasswordGenerator}
                alt="Password Generator"
                class="card-img-top"
              />
              <div class="card-body">
                <a href="https://github.com/swaguespack/03-challenge-Password-Generator" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://swaguespack.github.io/03-challenge-Password-Generator/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>
  
          <div class="col-lg d-flex align-items-stretch">
            <div class="card">
              <img
                src={WeatherDashboard}
                alt="Coming Soon"
                class="card-img-top"
              />
              <div class="card-body">
                <a href="https://github.com/swaguespack/Shellbys-Weather-Dashboard" target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
                <a href="https://swaguespack.github.io/Shellbys-Weather-Dashboard/" target="_blank" rel="noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>
  
          <div class="col-lg d-flex align-items-stretch">
            <div class="card">
              <img
                src={CodingQuiz}
                alt="Coming Soon"
                class="card-img-top"
              />
              <div class="card-body">
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