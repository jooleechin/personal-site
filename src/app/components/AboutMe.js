import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assests/css/AboutMe.css'
import yayoi from '../../assests/images/yayoi.jpg'

class AboutMe extends Component {
  render() {
    return(
      <div className = "about-box">
        <h1 className="sectionTitle">ABOUT</h1>
        <section className="content">
          <div className="about_me">
            <div className="photo">
              <img src={yayoi} alt={yayoi}/>
            </div>
            <div className="blurb">
              <h4>Hello!</h4>
              <p>My name is Joolee Chin and I am a software developer that
              has full-stack knowledge.<br/>I enjoy designing and building responsive
              websites.<br/>Things I use to get the job done:
              </p>
            </div>
          </div>
          <section>
            <div className="skills">
              <ul>
                <p>programming:</p>
                <li>// javascript ES6</li>
                <li>// html5</li>
                <li>// css3</li>
                <li>// sql</li>
                <li>// python</li>
              </ul>
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
          </section>
        </section>

      </div>
    )
  }
}

export default AboutMe
