import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assests/css/Footer.css'

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

class Footer extends Component {
  render() {
    return(
      <div>
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

export default Footer
