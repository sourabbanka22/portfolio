import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>My name is Sourab Banka and I am a Final Year Computer Engineering Student and a Technology Enthusiast, currently 
					    living in Navi Mumbai, Maharashtra, India. In my free time, I study Full Stack Development and try to contribute to open 
						source projects. I am both self-driven and self-motivated, and I am constantly experimenting with new technologies 
						and techniques. </p>
                    <p>I am very passionate about Full Stack Development, and strive to better myself as a developer, and 
						the development community as a whole.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Technological Proficiencies</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <div >
                    <h3 style={{paddingTop:0, textTransform: "uppercase", fontWeight: "bold"}}>Full Stack Development</h3>
                    <img src="images/FS.jpg" className="img-responsive" alt="Full Stack Development" />
                    <p style={{paddingTop:20}}>I am familiar with the trending Web and Mobile Development Frameworks like React JS, React Native and Django.</p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <div >
                    <h3 style={{paddingTop:0, textTransform: "uppercase", fontWeight: "bold"}}>Machine Learning</h3>
                    <img src="images/AI.jpg" className="img-responsive" alt="Machine Learning" />
                    <p style={{paddingTop:20}}>I have developed several Machine Learning models for Classification and Regression, and
                      I love integrating those with my Web and Mobile Applications.</p>
               </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <div>
                    <h3 style={{paddingTop:0, textTransform: "uppercase", fontWeight: "bold"}}>Git</h3>
                    <img src="images/Git_logo.png" className="img-responsive" alt="Github" />
                    <p style={{paddingTop:20}}>My interest in the open source world has tought me a lot about the most popular 
                      Distributed Version Control System called Git.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        
      </div>
    )
  }
}
