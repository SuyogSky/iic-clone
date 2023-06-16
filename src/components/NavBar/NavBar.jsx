import React, { useState } from "react";

import Logo from '../../assets/Images/itahari-normal-logo.svg';
import "./NavBar.scss";
const NavBar = () => {
    const [active, setActive] = useState(false);
    const menuClicked = () => {
        if(active){
            setActive(false)
        }
        else{
            setActive(true)
        }
    }
    return(
        <header className="nav-bar">
            <img src={Logo} alt="" className="logo"/>

            <ul className={`nav-items ${active? 'active':''}`}>
                <li><a href="#about">About&nbsp;Us</a></li>
                <li><a href="#partners">Our&nbsp;Partners</a></li>
                <li><a href="#programmes">Programmes</a></li>
                <li><a href="#admission">Admission</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#enquire">Enquire&nbsp;Now</a></li>
                <li><a href="#contact">Contact&nbsp;Us</a></li>
            </ul>

            <div className={`menu-btn ${active?'active': ''}`} onClick={()=>menuClicked()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default NavBar;