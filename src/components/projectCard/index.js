import React from "react";
import "./style.scss";
import {Card, CardContent, CardActionArea, CardMedia, Typography, Button } from '@mui/material/'
import Tag from "../tag";

export default function ProjectCard({ card }) {
    let image;
    if (card.image.includes("svg") != false){
        image=require("../../assests/images/" + card.image).default
    }
    else{
        image=card.image
    }
    return (
        <Card className="MuiCard-project">
            <CardActionArea>
                <CardMedia className="MuiCardMedia-project"
                    component="img"
                    image={image}
                    height="140"
                />
            </CardActionArea>
            <CardContent>
                <Typography variant="h5" component="div">
                        {card.title}
                </Typography>
                <hr/>
                <Typography variant="body2"  color="#a0a0a0">
                        {card.description}
                </Typography>
                {card.button.map(button => { 
                        return (
                            <Button
                                style={{
                                    color: "#5FDECB"
                                }}
                                target="_blank" 
                                href={button.url}>
                                    {button.title}
                            </Button>
                        );
                    })}
                <hr/>
                <Tag tags={card.tags}/>
            </CardContent>
        </Card>
    );
  }