import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
 } from "@mui/material";
import { css } from "@emotion/react";
export default function SkillCard({ name, description, image }) {
  return (
    <Card
      sx={css`
        max-width: 300px;
        background-color: #fafafa;
        background-image: url(${image});
        background-repeat: no-repeat;
        margin: 5px;
      `}
    >
      <CardContent>
        <Typography variant="h5" color="primary">
          {name}
        </Typography>
        <Typography variant="body1"> {description}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
