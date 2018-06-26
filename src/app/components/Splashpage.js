import React, { Component } from 'react'
import '../../assests/css/Splashpage.css'

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

class Splashpage extends Component {
  render() {
    return(
      <div className = "splash-box" id="top">
        <h1 className="name">JOOLEE</h1>
        <div className="words">
            <p>software developer.<br />seattle.</p>
        </div>
        <section>
          <div className="code">
            <pre>
            {
`class Joolee_Chin extends Homo.sapien {
  const BIO = {
    f_name: 'Joolee',
    l_name: 'Chin',
    ethnicity: 'Korean',
    location: {
      city: 'Seattle',
      state: 'Washington'
    },
    contact: {
      email: 'jooleechin_(at)_gmail_dot_com',
      github: 'github.com/jooleechin',
      linkedin: 'linkedin.com/in/jooleechin'
    }
  }
  let SKILLS = ['Developer', 'Designer']
}`
            }
            </pre>
          </div>
        </section>
        <div className="down-arrow">
          <Fa iconClass="fa-angle-down" />
        </div>
      </div>
    )
  }
}

export default Splashpage
