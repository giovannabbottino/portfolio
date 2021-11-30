import React from "react";
import {Fade} from "react-reveal";
import { certification } from "../../portfolio";
import Carousel from 'react-elastic-carousel';
import CertificationCard from "../../components/certificationCard/"
import "./style.scss";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

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
                    <Carousel breakPoints={breakPoints}>
                    {certification.list.map(card => {
                        return (
                            <CertificationCard card={card}/>
                        );
                    })}
                    </Carousel>
                </div>
                </Fade>
            </div>
        </div>
    );
  }