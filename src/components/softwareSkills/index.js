import React from "react";
import "./style.css";
import { skillsSection } from "../../portifolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName} key={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
