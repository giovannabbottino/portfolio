import React from "react";
import { academic } from "../../portfolio";
import {Fade} from "react-reveal";
import AcademicCard from "../../components/academicCard";
import "./style.scss";

export default function Academic() {
    return (
        <div className="main" id="academic">
            <div className="academic-main-div">
                <Fade left duration={1000}>
                <div className="academic-image-div">
                    <img alt="Giovanna Working" src={require("../../assests/images/academic.svg").default}></img>
                </div>
                </Fade>
                <Fade right duration={1000}>
                <div className="academic-text-div">
                    <h1 className="academic-heading">{academic.title} </h1>
                    <p className="subTitle academic-text-subtitle">{academic.subTitle}</p>
                    <div className="academic-card-container">
                        {academic.list.map(card => {
                            return (
                                <div className="academic-card-div">
                                <AcademicCard card={card}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
  }