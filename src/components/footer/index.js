import React from "react";
import "./style.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <a href="https://github.com/giovannabbottino/portfolio/" target="_blank" rel="noopener noreferrer">
      <div className="footer-div">
        <p className="footer-text">{emoji("Made with ❤️ by Giovanna Bottino")}</p>
      </div>
      </a>
    </Fade>

  );
}
