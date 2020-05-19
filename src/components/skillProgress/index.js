import React from "react";
import "./style.css";
import { techStack } from "../../portifolio";

export default function StackProgress() {
    return (
            <div className="skills-bar">
                {techStack.experience.map((exp) => {
                    const progressStyle = {
                        width: exp.progressPercentage
                    };
                    return (
                        <div className="skill" key={exp.Stack}>
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                    );
                })}
            </div>
    );
}