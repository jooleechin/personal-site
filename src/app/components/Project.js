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
      <div className = "project-box">
        <h1 className="sectionTitle">PROJECTS</h1>
        <section>
          <div className="project-gallery">
            <div className="project">
              <div className="project-thumb">
                <img src={local} alt={local}/>
              </div>
              <div className="project-desc">
                <span>local</span>
              </div>
            </div>
            <div className="project">
              <div className="project-thumb">
                <img src={hangul} alt={hangul}/>
              </div>
              <div className="project-desc">
                <span>hängul</span>
              </div>
            </div>
            <div className="project">
              <div className="project-thumb">
                <img src={crypto} alt={crypto}/>
              </div>
              <div className="project-desc">
                <span>cryptoKeeper</span>
              </div>
            </div>
            <div className="project">
              <div className="project-thumb">
                <img src={skincare} alt={skincare}/>
              </div>
              <div className="project-desc">
                <span>skincare search</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Project
