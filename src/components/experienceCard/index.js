import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core/';
import { TimelineItem } from 'vertical-timeline-component-for-react';

export default function ExperienceCard({ experienceDetails }) {
  return (
    <div key={experienceDetails.title}>
      <TimelineItem
        style={{
          color: experienceDetails.color,
        }}
        dateInnerStyle={{
          background: experienceDetails.color
        }}
        dateText={experienceDetails.start_date}>
        <Card>
          <CardContent style={{ backgroundColor: experienceDetails.color }}>
            <Typography
              gutterBottom variant="h5"
              variant='h5'
              style={{ color: '#FFFFFF' }}
            >
              {experienceDetails.title}
            </Typography>
          </CardContent>
          <CardContent>
          <Typography
              gutterBottom variant="h6"
              variant='h6'
              style={{ color: experienceDetails.color }}
            >
              {experienceDetails.job_title}
            </Typography>
            <Typography>
              {experienceDetails.description}
            </Typography>
          </CardContent>
        </Card>
      </TimelineItem>
    </div >
  );
}
