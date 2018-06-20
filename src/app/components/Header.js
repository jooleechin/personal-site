import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assests/css/header.css'

class Header extends Component {
  render() {
    return(
      <div className = "nav-box">
        <header>
          <nav>
            <Link to="/" className="nav-link">home</Link>
            <Link to="/" className="nav-link">about me</Link>
            <Link to="/" className="nav-link">projects</Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
