import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../../assests/css/header.css'

class Header extends Component {
  render() {
    return(
      <div className = "nav-box">
        <header>
          <nav>
            <Link to="/#top" className="nav-link">home</Link>
            <Link to="/#about" className="nav-link">about me</Link>
            <Link to="/#project" className="nav-link">projects</Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
