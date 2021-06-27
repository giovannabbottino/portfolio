import React from "react";
import "./style.css";
import SoftwareSkill from "../../components/softwareSkills";
import StackProgress from "../../components/skillProgress";
import { skillsSection } from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
        <div className="skills-image-div">
          <img alt="Giovanna Working" src={require("../../assests/images/undraw_certification_aif8.svg")}></img>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
          <SoftwareSkill />
          <StackProgress />
        </div>
        </Fade>
      </div>
    </div>
  );
}
