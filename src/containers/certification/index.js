import React from "react";
import {Fade} from "react-reveal";
import { certification } from "../../portfolio";
import { Carousel } from '@trendyol-js/react-carousel';
import CertificationCard from "../../components/certificationCard";
import "./style.scss";

export default function Certification() {
    return (
        <div className="main" id="certifications">
            <div className="certification-main-div">
                <Fade left duration={1000}>
                <div className="certification-image-div">
                    <img alt="Giovanna Certification" src={require("../../assests/images/certification.svg").default}></img>
                </div>
                </Fade>
                <Fade right duration={1000}>
                <div className="certification-text-div">
                    <h1 className="certification-heading">{certification.title} </h1>
                    <p className="subTitle certification-text-subtitle">{certification.subTitle}</p>
                    <div className="certification-carousel-div">
                        <Carousel show={2.5} slide={2} transition={0.5} swiping={true}>
                            {certification.list.map(card => {
                                return (
                                    <CertificationCard card={card}/>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
  }