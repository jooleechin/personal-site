import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import yayoi from '../../assests/images/yayoi.jpg'
import '../../assests/css/Splashpage.css'


class Splashpage extends Component {
  render() {
    return(
      <div className = "splash-box">
        <h1 className="name">JOOLEE</h1>
        <div className="words">
            <p>software developer.<br />seattle.</p>
        </div>
        <div className="photo">
            <img src={yayoi} alt={yayoi}/>
        </div>
      </div>
    )
  }
}

export default Splashpage
