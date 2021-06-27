import React from "react";
import "./style.scss";
import Education from "../../components/education";
import {educationSection} from "../../portfolio";

export default function EducationSection() {
  if (educationSection.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{educationSection.title}</h1>
        <div className="education-card-container">
          {educationSection.schools.map((school, index) => (
            <Education key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}