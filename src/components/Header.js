import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome, faUser, faIdBadge } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/Myself.jpg)'}} />
              <h1 id="colorlib-name"><a href="index.html">Sourab Banka</a></h1>
              <span className="status">Computer Engineering Student</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{paddingTop:30}}>
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home" style={{display: "flex",justifyContent: "space-around"}}><FontAwesomeIcon icon={faHome} size="2x"/><p style={{height:10}}>Introduction</p></a></li>
                  <li><a href="#projects" data-nav-section="projects" style={{display: "flex",justifyContent: "space-around"}}><FontAwesomeIcon icon={faBriefcase} size="2x"/><p style={{height:10, marginLeft:10, marginRight:14}}>Portfolio</p></a></li>
                  <li><a href="#about" data-nav-section="about" style={{display: "flex",justifyContent: "space-around"}} ><FontAwesomeIcon icon={faUser} size="2x"/><p style={{height:10, marginLeft:14, marginRight:14}}>About Me</p></a></li>
                  <li><a href="#contact" data-nav-section="contact" style={{display: "flex",justifyContent: "space-around"}} ><FontAwesomeIcon icon={faIdBadge} size="2x"/><p style={{height:10, marginLeft:2, marginRight:14}}>Contact Me</p></a></li>
                </ul>
              </div>
            </nav>
            
          </aside>
        </div>
      </div>
    )
  }
}
