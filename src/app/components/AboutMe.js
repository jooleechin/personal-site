import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assests/css/AboutMe.css'

class AboutMe extends Component {
  render() {
    return(
      <div className = "about-box">
        <h1 className="sectionTitle">ABOUT</h1>
        <section className="content">
          <div className="about-me-blurb">
            <p>hello! my name is joolee chin and i am a software developer that
              has full-stack knowledge. I enjoy designing and building responsive
              websites.</p>
          </div>
          <div className="tech">
            <p>programming skills:</p>
            <div class="skills_languages">
              <ul class="language_bubble">
                <li class="circle">javascript</li>
                <li class="circle">html5</li>
                <li class="circle">css3</li>
                <li class="circle sql">mysql</li>
                <li class="circle node">node.js</li>
                <li class="circle node">react.js</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default AboutMe
