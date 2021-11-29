import React from "react";
import "./style.scss";
import {Card, CardContent, CardActionArea, CardMedia, Typography, Button } from '@mui/material/'

export default function CertificationCard({ card }) {
    let image;
    if (card.image.includes("svg") != false){
        image=require("../../assests/images/" + card.image).default
    }
    else{
        image=card.image
    }
    return (
        <Card className="MuiCard-certification">
            <CardActionArea>
                <CardMedia className="MuiCardMedia-certification"
                    component="img"
                    image={image}
                    height="140"
                />
            </CardActionArea>
            <CardContent>
                <Typography variant="h5" component="div">
                    {card.title}
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
            </CardContent>
        </Card>
    );
  }