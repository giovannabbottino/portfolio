import React from "react";
import "./style.css";
import ExperienceCard from "../../components/experienceCard";
import { experienceSection, socialMediaLinks } from "../../portifolio";
import { Fade } from "react-reveal";
import Button from "../../components/button"
import { Timeline } from 'vertical-timeline-component-for-react';

export default function Experiences() {
  return (
    <div className="main" id="experiences">
      <div className="experience-header">
        <h1 className="experience-header-title">{experienceSection.title}</h1>
        <p className="subTitle experience-header-subtitle">{experienceSection.subtitle}</p>
      </div>
      <Timeline lineColor={'#ddd'}>
        <Fade bottom duration={1000} distance="20px">
          {experienceSection.experiences.map(experience => {
            return (
              <ExperienceCard
                experienceDetails={{
                  title: experience.title,
                  job_title: experience.job_title,
                  description: experience.description,
                  start_date: experience.start_date,
                  color: experience.color,
                }}
              />
            );
          })}
        </Fade>
      </Timeline>
      <div className="more-button">
        <Button text="More" newTab={true} href={socialMediaLinks.linkedin} />
      </div>
    </div>
  );
}
