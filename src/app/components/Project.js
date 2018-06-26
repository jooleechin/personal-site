import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assests/css/Project.css'
import crypto from '../../assests/images/crypto.gif'
import hangul from '../../assests/images/hangul.jpg'
import skincare from '../../assests/images/skincare.jpg'
import local from '../../assests/images/local.jpg'

class Project extends Component {
  render() {
    return(
      <div className = "project-box" id = "project">
        <h1 className="sectionTitle-P">PROJECTS</h1>
        <section>
          <div className="project-gallery">
            <div className="project">
              <a href="https://github.com/jooleechin/local-frontend" target="_blank" className="project-thumb dim black b">
                <img src={local} alt={local}/>
              </a>
              <div className="project-desc">
                <h4>local</h4>
                <span>developed a mobile-first react web app that creates travel itineraries based off of user input</span>
              </div>
            </div>
            <div className="project">
              <a href="https://github.com/jooleechin/frontEnd-Korean" target="_blank"  className="project-thumb dim black b">
                <img src={hangul} alt={hangul}/>
              </a>
              <div className="project-desc">
                <h4>hängul</h4>
                <span>a react browser application that will teach a user how to read and pronounce basic korean characters</span>
              </div>
            </div>
            <div className="project">
              <a href= "https://github.com/jooleechin/cryptoKeeper" target="_blank" className="project-thumb dim black b">
                <img src={crypto} alt={crypto}/>
              </a>
              <div className="project-desc">
                <h4>cryptoKeeper</h4>
                <span>a cryptocurrency management tool to keep track of all your investments</span>
              </div>
            </div>
            <div className="project">
              <a href="https://github.com/jooleechin/skincareSearch" target="_blank" className="project-thumb dim black b">
                <img src={skincare} alt={skincare}/>
              </a>
              <div className="project-desc">
                <h4>skincare search</h4>
                <span>one-stop website where users can find ingredients of skincare products</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Project
