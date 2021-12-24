import React from "react";
import "../css/Exp.css";
function Experience() {
  return (
    <div className="exp" id="experience">
      <h2>Experience</h2>
      <div className="exp__card">
        <div className="scard">
          <div className="desc">
            <div>
              <lord-icon
                class="icon"
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#e81c59"
              ></lord-icon>
            </div>
            <div>
              <p className="desc__year">July 2015 - June 2016</p>
              <h3>High School</h3>
              <span> Science and Computer - 91.0%</span>
            </div>
          </div>

          <div className="desc">
            <div>
              <lord-icon
                class="icon"
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#e81c59"
              ></lord-icon>
            </div>
            <div>
              <p className="desc__year"> August 2016 - June 2018</p>
              <h3>Secondary School</h3>
              <span> Science and Maths - 81.0%</span>
            </div>
          </div>

          <div className="desc">
            <div>
              <lord-icon
                class="icon"
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#e81c59"
              ></lord-icon>
            </div>
            <div>
              <p className="desc__year">July 2018 - July 2022</p>
              <h3>Bachelor’s Degree</h3>
              <span> Computer Science Engineering - 79.0%</span>
            </div>
          </div>
        </div>
        <div className="scard">
          <div className="desc">
            <div>
              <lord-icon class="icon"
                src="https://cdn.lordicon.com/lupuorrc.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#e81c59"
              ></lord-icon>
            </div>
            <div>
              <p className="desc__year">June 2020 - Present</p>
              <h3>BrighterBees</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>

          <div className="desc">
            <div>
              <lord-icon  class="icon"
                src="https://cdn.lordicon.com/lupuorrc.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#e81c59"
              ></lord-icon>
            </div>
            <div>
              <p className="desc__year">October 2020 - December 2020</p>
              <h3>Cybees Pvt. Ltd.</h3>
              <span>Python Developer</span>
            </div>
          </div>

          <div className="desc">
            <div>
              <lord-icon class="icon"
                src="https://cdn.lordicon.com/lupuorrc.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#e81c59"
              ></lord-icon>
            </div>
            <div>
              
              <p className="desc__year">July 2021 - December 2021</p>
              <h3>Yokoso Pvt. Ltd.</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
