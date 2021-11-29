import React from "react";
import { talk } from "../../portfolio";
import {Fade} from "react-reveal";
import TalkCard from "../../components/talkCard";
import "./style.scss";

export default function Talk() {
    return (
        <div className="main" id="talks">
            <div className="talk-main-div">
                <Fade right duration={1000}>
                <div className="talk-text-div">
                    <h1 className="talk-heading">{talk.title} </h1>
                    <p className="subTitle talk-text-subtitle">{talk.subTitle}</p>
                    <div className="talk-card-container">
                        {talk.list.map(card => {
                            return (
                                <TalkCard card={card}/>
                            );
                        })}
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
  }