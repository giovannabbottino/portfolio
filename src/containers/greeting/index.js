import React from "react";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

import "./style.css";
import { greeting, buttons } from "../../portfolio";

import SocialMedia from "../../components/socialMedia/";
import Button from "../../components/button/";

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
          </div>
        </div>
        <div className="greeting-image-div">
        <div className="button-greeting-div">
            <Button text={buttons.contact} href="#contact" />
            <Button text={buttons.resume} newTab={true} href={greeting.resumeLink} />
            </div>
        <img alt="Giovanna Standing" src={require("../../assests/images/greetings.svg")}></img>

        </div>
      </div>
    </div>
    </Fade>
  );
}
