import React from "react";
import {Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material/'
import "./style.scss";

export default function TalkCard({ card }) {
    let cardMedia;
    if (card.embedId != null) {
        cardMedia = <CardMedia className="MuiCardMedia"
                component="iframe"
                image={"https://www.youtube.com/embed/" + card.embedId}
            />;
    } else {
        cardMedia = 
        <a href={card.link} target="_blank">
            <CardMedia className="MuiCardMedia"
                component="img"
                image={require("../../assests/images/" + card.image).default}
                alt="Giovanna Working"
                height="140"
            />
        </a>;
    }
        return (
            <Card className="MuiCard-talk">
                <CardActionArea>
                    {cardMedia}
                </CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {card.title}
                    </Typography>
                    <hr/>
                    <Typography variant="body2"  color="#a0a0a0">
                        {card.subTitle}
                    </Typography>
                </CardContent>
            </Card>
        );
  }