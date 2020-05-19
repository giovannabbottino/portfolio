import React from "react";
import "./style.css";
import ExperienceCard from "../../components/experienceCard";
import { experienceSection, socialMediaLinks } from "../../portifolio";
import { Fade } from "react-reveal";
import Button from "../../components/button"

export default function Experiences() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="experiences">
        <div className="experience-header">
          <h1 className="experience-header-title">{experienceSection.title}</h1>
          <p className="subTitle experience-header-subtitle">{experienceSection.subtitle}</p>
          {experienceSection.experiences.map(experience => {
            return (
              <ExperienceCard
                experienceDetails={{
                  title: experience.title,
                  job_title: experience.job_title,
                  description: experience.description,
                  xp_linhas: experience.xp_linhas,
                  start_date: experience.start_date,
                  end_date: experience.end_date
                }}
              />
            );
          })}
          <div className="more-button">
            <Button text="More" newTab={true} href={socialMediaLinks.linkedin} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
