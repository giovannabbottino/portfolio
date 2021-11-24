import React from "react";
import Button from "../../components/button/";
import "./style.scss";
import {Card, CardContent, Typography } from '@mui/material/'

export default function AcademicCard({ card }) {
    return (
        <Card sx={{ minWidth: 200, maxWidth:320, minHeight: 250}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {card.title}
                </Typography>
                <Typography variant="body2" color="#a0a0a0">
                    {card.subTitle}
                </Typography>
                {card.button.map(button => { 
                    return (
                    <div className="academic-card-button">
                        <Button text={button.title} newTab={true} href={button.url} />
                    </div>
                    );
                })}
            </CardContent>
        </Card>
    );
  }