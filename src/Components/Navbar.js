import React from "react";
import {NavLink} from "react-router-dom";
import crouton from './Images/crouton.png';
import './Styles/navbar.css';
import About from './About.js';
import Team from './Team.js';

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink activeClassName="NavbarActive" className="NavbarHomeLink" to="/"><img className="NavbarHomeLinkImg" src={crouton} alt="Crouton" width="80" height="20"/></NavLink>
      <NavLink activeClassName="NavbarActive" className="NavbarAboutLink" to="/About">/<span className="NavbarLinkText">About</span></NavLink>
      <NavLink activeClassName="NavbarActive" className="NavbarTeamLink" to="/Team">/<span className="NavbarLinkText">Our Team</span></NavLink>
    </div>
  );
};

export default Navbar;
