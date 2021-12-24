import React from 'react'
import '../css/Service.css'

function Service() {
    return (
        <div className="service" id="service">
            
             <h2>What I Do</h2>
            <div className="service__card">
                <div className="card">
                        <img src="https://bolby-react.vercel.app/images/service-1.svg" alt="" />
                        <h3>Web Design</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip </p>
                </div>
                <div className="card">
                <img src="https://bolby-react.vercel.app/images/service-2.svg" alt="" />
                        <h3>Web Development</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip </p>
                </div>
        
                <div className="card">
                <img src="https://bolby-react.vercel.app/images/price-1.svg" alt="" />
                        <h3>SEO and Digital</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip </p>
               
                </div>
                </div>
        </div>
    )
}

export default Service
