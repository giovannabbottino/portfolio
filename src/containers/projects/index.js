import React from "react";
import {Fade} from "react-reveal";
import { project } from "../../portfolio";
import ProjectCard from "../../components/projectCard";
import "./style.scss";

export default function Project() {
    return (
        <div className="main" id="projects">
            <div className="project-main-div">
                <Fade right duration={1000}>
                <div className="project-text-div">
                    <h1 className="project-heading">{project.title} </h1>
                    <p className="subTitle project-text-subtitle">{project.subTitle}</p>
                    <div className="project-car-div">
                            {project.list.map(card => {
                                return (
                                    <ProjectCard card={card}/>
                                );
                            })}
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
  }