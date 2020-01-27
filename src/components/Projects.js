import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Portfolio</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/PomodoroClock.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Web Application</a></h3>
											<span>Pomodoro Clock</span>
											<p className="icon">
												<span><a href="https://kind-lamarr-d70ae0.netlify.com/"><FontAwesomeIcon icon={faExternalLinkAlt}/></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/RandomQuoteMachine.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Web Application</a></h3>
											<span>Random Quote Machine</span>
											<p className="icon">
												<span><a href="https://sharp-ptolemy-f559e8.netlify.com"><FontAwesomeIcon icon={faExternalLinkAlt}/></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/MarkDown_Previewer.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Web Application</a></h3>
											<span>MarkDown Previewer</span>
											<p className="icon">
												<span><a href="https://stupefied-hermann-a7a872.netlify.com/"><FontAwesomeIcon icon={faExternalLinkAlt}/></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/JavaScriptCalculator.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Web Application</a></h3>
											<span>JavaScript Calculator</span>
											<p className="icon">
												<span><a href="https://objective-johnson-5e1f44.netlify.com/"><FontAwesomeIcon icon={faExternalLinkAlt}/></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/SelectStars.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Mobile Application</a></h3>
											<span>Safety App</span>
											<p className="icon">
												<span><a href="https://github.com/sourabbanka22/SafetyApp_Mobile/blob/master/README.md"><FontAwesomeIcon icon={faExternalLinkAlt}/></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/SafetyCalculator_Result.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Mobile Backend</a></h3>
											<span>Location Rater</span>
											<p className="icon">
												<span><a href="https://github.com/sourabbanka22/SafetyApp_Backend/blob/master/README.md"><FontAwesomeIcon icon={faExternalLinkAlt}/></a></span>
											</p>
										</div>
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
