import React from 'react'
import '../css/About.css'
function About() {
    return (
        <div className="about" id="aboutMe">
            <h2>About  Me</h2>

            <div className="about__section">
                <div className="content">
                    <p>
                    I am Ankit Gupta, Developer from  India ❤. I have rich experience in Web Designing, Python and JavaScript backend Development. Can build scalable platforms for you. AWS too.
                    </p>
                    <button>Download CV</button>
                </div>
                <div >
                    <div className="about__skill">
                    <label>Python</label>
                    <progress max="100" value="85"></progress>
                    </div>
                    <div className="about__skill">
                    <label>JavaScript</label>
                    <progress max="100" value="82"></progress>
                    </div>
                    <div className="about__skill">
                    <label>Design</label>
                    <progress max="100" value="85"></progress>
                    </div>
                </div>
                <div>
                <div className="about__skill">
                    <label>Front End</label>
                    <progress max="100" value="88"></progress>
                    </div>
                    <div className="about__skill">
                    <label>CSS Frameworks</label>
                    <progress max="100" value="92"></progress>
                    </div>
                    <div className="about__skill">
                    <label>Database</label>
                    <progress max="100" value="80"></progress>
                    </div>
                </div>
            </div>

            <div className="banner__section">
                <div className="banner">
                  
                    <div className="banner__card">
                        <div>
                            <h1><i class="fas fa-award"></i></h1>
                        </div>
                        <div>
                            <h1>02+</h1>
                            <p>Awards & Prizes</p>
                        </div>
                    </div>
               
                    <div className="banner__card">
                        <div>
                        <h1><i class="fas fa-coffee"></i></h1>
                        </div>
                        <div>
                            <h1>06+</h1>
                            <p>Cup Coffees</p>
                        </div>
                    </div>


                </div>
                <div className="banner">
  
                <div className="banner__card">
                        <div>
                            <h1><i class="fas fa-fire-alt"></i></h1>
                        </div>
                        <div>
                            <h1>10+</h1>
                            <>Projects Completed</>
                        </div>
                    </div>
                    <div className="banner__card">
                        <div>
                            <h1><i class="fas fa-smile"></i></h1>
                        </div>
                        <div>
                            <h1>06+</h1>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
