import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assests/css/header.css'

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

class Header extends Component {
  render() {
    return(
      <div className = "site-root">
        <header>
          <section className="name">
            <Link to="/">joolee chin</Link>
          </section>
          <nav>
            <Link to="/" className="nav-link">home</Link>
            <Link to="/" className="nav-link">about me</Link>
            <Link to="/" className="nav-link">projects</Link>
          </nav>
        </header>
        <footer>
          <p className="contact-info">
            <a href="mailto:jooleechin@gmail.com">jooleechin@gmail.com</a>
          </p>
          <p className="social-icons">
            <a href="https://www.instagram.com/_hijools/" target="_blank" ><Fa iconClass="fa-instagram" /></a>
            <a href="https://github.com/jooleechin" target="_blank" ><Fa iconClass="fa-github" /></a>
            <a href="https://www.linkedin.com/in/jooleechin" target="_blank" ><Fa iconClass="fa-linkedin" /></a>
          </p>
        </footer>
      </div>
    )
  }
}

export default Header
