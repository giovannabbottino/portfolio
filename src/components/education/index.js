import React from "react";
import "./style.css";
import { education } from "../../portifolio";

export default function Education() {
    return (
        <div className="education-div">
            {education.map(edu => {
                return (
                    <a href={edu.link} className="icon-button" target="_blank" key={edu.name}>
                        <img
                            className="icon-button"
                            src={edu.image}>
                        </img>
                    </a>
                );
            })}
        </div>
    );
}
