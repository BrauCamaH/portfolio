import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { css } from "@emotion/react";
export default function SkillCard(name, description, image) {
  return (
    <Card
      sx={css`
        max-width: 300px;
        background-color: #fafafa;
        background-image: url(${"images/node.svg"});
        background-repeat: no-repeat;
        margin: 5px;
      `}
    >
      <CardContent>
        <Typography variant="h5" color="primary" bold>
          React
        </Typography>
        <Typography variant="body1">
          lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
