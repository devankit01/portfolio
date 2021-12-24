import React from 'react'
import '../css/landing.css'
import Typewriter from 'typewriter-effect';


function LandingPage() {
    return (
        <div className="landing__page">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/gvX8V4N/profile.png" alt="profile" border="0" /></a>
            <h2>Ankit G.</h2>
            <p className="landing__tag">
                        <Typewriter className="landing__tag"
            options={{
                strings: ['I am Full Stack Developer 💻', 'I am Web Designer ☕' ,'Founder @BrighterBees'],
                autoStart: true,
                loop: true,
            }}
            />
            </p>
            <div className="landing__icons">
            <a href="https://github.com/devankit01"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ankit-gupta-4b4848196/"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/ankit.codes/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.hackerrank.com/devankitgupta01"><i class="fab fa-hackerrank"></i></a>
            <a href="https://twitter.com/Gupta42Ankit"><i class="fab fa-twitter"></i></a>
            </div>
            <button className="landing__btn">Hire Me</button>
        </div>  
    )
}

export default LandingPage
