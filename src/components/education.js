import React from "react";
import {
  Typography,
  Divider,
  Card,
  Box,
  CardHeader,
  Avatar,
} from "@mui/material";
import { css } from "@emotion/react";
import { SchoolOutlined } from "@mui/icons-material";

const list = [
  {
    description: "Ingeniería en Sistemas Computacionales 2016-2021",
    image: "banner-tecmm.jpg",
  },
];

export default function Education() {
  return (
    <>
      <Typography variant="h4" color="primary">
        Education
      </Typography>
      <Divider />
      <Box
        sx={css`
          margin: 10px;
        `}
      >
        {list.map((listItem, index) => (
          <Card key={index}>
            <CardHeader
              avatar={
                <Avatar>
                  <SchoolOutlined />
                </Avatar>
              }
              title={listItem.description}
            />
            <img
              style={{ maxWidth: "100%" }}
              src={`/images/education/${listItem.image}`}
            />
          </Card>
        ))}
      </Box>
    </>
  );
}
