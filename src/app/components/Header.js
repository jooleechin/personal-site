import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assests/css/header.css'

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

class Foo extends Component {
  render() {
    return(
      <div className = "site-root">
        <header>
          <section className="name">
            <Link to="/">joolee chin</Link>
          </section>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/">about me</Link>
              </li>
              <li>
                <Link to="/">projects</Link>
              </li>
            </ul>
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
          <p>
            &copy; joolee chin 2018
          </p>
        </footer>
      </div>
    )
  }
}

export default Foo
