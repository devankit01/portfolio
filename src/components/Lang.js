import React from 'react'
import '../css/Lang.css'

function Lang() {
    return (
        <div className="lang">
            {/* <h2>I Speak</h2> */}
            <div className="lang__card">
                <marquee scrollamount="3"  behavior="alternate">
                <span>
                <i class="devicon-html5-plain"></i>
                </span>

                <span>
                <i class="devicon-css3-plain"></i>
                </span>


                <span>
                <i class="devicon-bootstrap-plain"></i>
                </span>

                <span>
                <i class="devicon-tailwindcss-original-wordmark"></i>
                </span>

                <span>
                <i class="devicon-javascript-plain"></i>
                </span>

                <span>
                <i class="devicon-python-plain"></i>
                </span>

                <span>
                <i class="devicon-git-plain"></i>
                </span>

                <span>
                <i class="devicon-react-original"></i>
                </span>

                <span>
                <i class="devicon-nodejs-plain-wordmark"></i>
                </span>

                <span>
                <i class="devicon-express-original-wordmark "></i>
                </span>

                <span>
                <i class="devicon-django-plain "></i>
                </span>

               


                <span>
                <i class="devicon-flask-original-wordmark "></i>
                </span>

                </marquee>
            </div>
        </div>
    )
}

export default Lang
