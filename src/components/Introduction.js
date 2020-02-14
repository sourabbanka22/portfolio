import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faUserFriends } from '@fortawesome/free-solid-svg-icons'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/Laptop.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner" >
                        <div className="desc" style={{paddingTop:200}}>
                          <h3 className="typewriter">Hi! I'm <strong>Sourab Banka</strong><br /></h3>

                          <div style={{display: "flex",justifyContent: "space-between", paddingTop:15, paddingBottom:5}}>
                              <a href="https://www.linkedin.com/in/sourab-banka-23685b171" ><button className="btn btn-outline-primary"> <FontAwesomeIcon icon={faUserFriends}/> Connect</button></a>
                              <a href="https://drive.google.com/file/d/1JEEv88432GRWwP9nuI6ce32nljSAK268/view"><button className="btn btn-outline-primary"><FontAwesomeIcon icon={faAddressCard}/> View CV </button></a>
                          </div>

                          <h3>I like to learn new technologies as the world continues to
                          push technologies forward.<br/></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </section>
        
      </div>
    )
  }
}
