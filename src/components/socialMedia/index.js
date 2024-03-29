import React from "react";
import "./style.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      
      {socialMediaLinks.github ? 
      (<a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.gitlab ?
      <a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      :
      null }

      {socialMediaLinks.linkedin ?
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gmail ?
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      :
      null}



      {socialMediaLinks.instagram ?
      <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
      :
      null}
      {socialMediaLinks.deviantart ?
      <a href={socialMediaLinks.deviantart} className="icon-button deviantart" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-deviantart"></i>
        <span></span>
      </a>
      :
      null}

    </div>
  );
}
