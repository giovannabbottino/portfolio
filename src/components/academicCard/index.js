import React from "react";
import Button from "../../components/button/";
import "./style.scss";
import {Card, CardContent, CardActions, Typography } from '@mui/material/'

export default function AcademicCard({ card }) {
    return (
        <Card sx={{ minWidth: 370 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {card.title}
                </Typography>
                <Typography variant="body2">
                    {card.subTitle}
                </Typography>
            </CardContent>
            <CardActions>
                {card.button.map(button => { 
                    return (
                    <div className="academic-card-button">
                        <Button text={button.title} newTab={true} href={button.url} />
                    </div>
                    );
                })}
            </CardActions>
        </Card>
    );
  }