import React, { Component } from 'react';
import './App.css';
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
           <Header></Header>
				<div id="colorlib-main">
					<Introduction></Introduction>
          <Projects></Projects>
					<AboutMe></AboutMe>
          <Footer></Footer>
        </div>
      	</div>
      </div>
    );
  }
}

export default App;
