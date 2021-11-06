import React, { Component } from 'react';
import './Design/SCSS/CaseStudies.scss'
import Design from './Design/Design.js'

import {
  Link
} from "react-router-dom";

class HomePage extends Component {

  render(){
    return (
      <React.Fragment>
      <div className="DesktopSlogan"><h1 className="LogoTextDesktop">Ayon</h1><p> Empowering people through computing.</p></div>
      <ul className="Links">
        <li><a href="https://open.spotify.com/show/7ghIep9DKlF6CkMmg0pxRm" target="_blank" rel="noopener noreferrer">Podcast</a></li>
        <li><a href="https://rdmr.io/" target="_blank">App</a></li>
        <li><a href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/" target="_blank" rel="noopener noreferrer">Altruism Pledge</a></li>
      </ul>
      <div className="Header">
        <h1 className="CircleTextDesktop">A</h1>
        <div className="HeaderText">
          <h1 className="LogoText"></h1>
          <p> Empowering people through computing.</p>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default HomePage
