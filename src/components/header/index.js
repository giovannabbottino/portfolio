import React from "react";
import "./style.scss";
import Headroom from "react-headroom";
import { greeting, buttons } from "../../portfolio";
import Lang from "../language"

function Header() {
    return (
        <Headroom>
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
        </Headroom>
    );
}

export default Header;
