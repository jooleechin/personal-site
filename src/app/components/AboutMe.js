import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assests/css/AboutMe.css'

class AboutMe extends Component {
  render() {
    return(
      <div className = "about-box">
        <h1 className="sectionTitle">ABOUT</h1>
        <section className="content">
          <h4 className="blurb">hello! my name is joolee chin and i am a software developer that
            has full-stack knowledge. I enjoy designing and building responsive
            websites.
          </h4>
          <div className="tech">
            <p>programming skills:</p>
            <div class="skills_languages">
              <ul class="language_bubble">
                <li class="circle">js ES6</li>
                <li class="circle">html5</li>
                <li class="circle">css3</li>
                <li class="circle sql">sql</li>
                <li class="circle sql">python</li>
              </ul>
            </div>
            <div className="skills">
              <ul>
                <p>frameworks:</p>
                <li>// react | react router</li>
                <li>// node</li>
                <li>// express.js</li>
                <li>// knex.js</li>
              </ul>
              <ul>
                <p>tools:</p>
                <li>// git</li>
                <li>// github</li>
                <li>// postgreSQL</li>
                <li>// heroku</li>
                <li>// knex.js</li>
                <li>// postman</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default AboutMe
