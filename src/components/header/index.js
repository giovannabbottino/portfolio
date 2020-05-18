import React from "react";
import "./style.css";
import { Fade } from "react-reveal";
import {greeting} from "../../portifolio/";

function Header() {
    return (
        <Fade top duration={1000} distance="20px">
            <div>
                <header className="header">
                    <a href="" className="logo">
                        <span className="grey-color"> &lt;</span>
                        <span className="logo-name">{greeting.username}</span>
                        <span className="grey-color">/&gt;</span>
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu">
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#experiences">Experiences</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </header>
            </div>
        </Fade>
    );
}

export default Header;
