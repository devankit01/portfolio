import React from 'react'

function Sidebar() {
    return (
      
        <nav>
        <div class="logo">
        AG /
        </div>
       
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
        </label>
        <ul>
           <li><a class="active" href="#">Home</a></li>
           <li><a href="#aboutMe">About Me</a></li>
           <li><a href="#service">Services</a></li>
           <li><a href="#experience">Experience</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#">Contact</a></li>
        </ul>
     </nav>
     
     
    )
}

export default Sidebar
