import React from "react";
import "./style.css";
import { Card, CardContent, Typography } from '@material-ui/core/';

export default function ExperienceCard({ experienceDetails }) {
  return (
    <div key={experienceDetails.title}>
      <Card className="rectangle" >
        <CardContent>
        <Typography className="experience-card-title" variant="h5" component="h2">
          {experienceDetails.title}
        </Typography>
        <Typography className="experience-card-job_title" color="textSecondary">
          {experienceDetails.job_title}
        </Typography>
        <Typography className="experience-card-description-div" variant="body2" component="p">
          {experienceDetails.description.map(dec => {
            return (
              <p className="experience-card-description" key={dec} >{dec}</p>
            );
          })}
        </Typography>
        <Typography className="experience-card-job_date" color="textSecondary" gutterBottom>
          {experienceDetails.start_date} - {experienceDetails.end_date}
        </Typography>
        </CardContent>
      </Card>
    </div >
  );
}
