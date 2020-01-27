import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-contact" data-section="contact">

            <div className="colorlib-narrow-content">
				
                <div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Stay Connected</span>
							<h2 className="colorlib-heading">Contact Me</h2>            
						</div>
				</div>

				<div className="row">
                    <div className="col-md-6">
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon" style={{paddingTop:25, backgroundColor:"#D44638"}}>
                                	<FontAwesomeIcon icon={faEnvelope} size="3x" color="#EEEEEE"/>
								</div>
								<div className="colorlib-text">
									<p>sourabbankawork@gmail.com</p>
								</div>
						</div>
					</div>
					<div className="col-md-6">
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon" style={{paddingTop:25}}>
                            	<FontAwesomeIcon icon={faMapMarkedAlt} size="3x" color="#EA4335"/>
                            </div>
                            <div className="colorlib-text">
                                <p>Navi Mumbai, India</p>
                            </div>
                        </div>
					</div>
				</div>

				<div className="row" style={{paddingTop:80}} >
					<div className="col-md-4" >
					</div>
					<div className="col-md-4" >
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft" style={{display:"flex", justifyContent:"space-around"}}>
                                <a href="https://facebook.com/sourab.banka"><FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" /></a>
								<a href="https://www.linkedin.com/in/sourab-banka-23685b171"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#0e76a8" /></a>
								<a href="https://github.com/sourabbanka22"><FontAwesomeIcon icon={faGithub} size="2x" color="#333"/></a>
						</div>
					</div>
                    <div className="col-md-4" >
					</div>
				</div>

			</div>
		</section>

      </div>
    )
  }
}
