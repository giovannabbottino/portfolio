import React from "react";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

import "./style.css";
import { greeting } from "../../portifolio";

import SocialMedia from "../../components/socialMedia/";
import Button from "../../components/button/";
import Education from "../../components/education"

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <Education />
            <div className="button-greeting-div">
            <Button text="Contact me" href="#contact" />
            <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
        <img alt="Giovanna Standing" src={require("../../assests/images/undraw_logic_n6th.svg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
