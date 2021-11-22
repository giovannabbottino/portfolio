import React from "react";
import "./style.scss";
import { Fade } from "react-reveal";
import { greeting, buttons } from "../../portfolio";
import Lang from "../language"

function Header() {
    return (
        <Fade top duration={1000} distance="20px">
            <div>
                <header className="header">
                    <a href="" className="logo">
                        <span className="logo-name">{greeting.username}</span>
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu">
                        <li>
                            <a href="#projects">{buttons.projects}</a>
                        </li>
                        <li>
                            <a href="#certifications">{buttons.certifications}</a>
                        </li>
                        <li>
                            <a href="#talks">{buttons.talks}</a>
                        </li>
                        <li>
                            <a href="#academic">{buttons.academic}</a>
                        </li>
                        <li>
                            <a href="#contact">{buttons.contact}</a>
                        </li>
                        <li>
                            <a>
                                <Lang />
                            </a>
                        </li>
                    </ul>
                </header>
            </div>
        </Fade>
    );
}

export default Header;
