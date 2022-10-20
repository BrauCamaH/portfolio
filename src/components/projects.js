import React from "react";
import { Card, Divider, Box, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { desktop } from "../shared/screen";

const projects = [
  {
    name: "Restasoft",
    description: "A web app that allows manage a restaurants sales",
  },
  {
    name: "Access Control",
    description:
      "Access control program that uses rfid reader to allow create, read, update and delete users.",
  },
  {
    name: "Mongo Client",
    description: "Electron App where you can manage your mongo db local db",
  },
];
export default function Projects() {
  const isDesktop = useMediaQuery(desktop);
  return (
    <>
      <Typography variant="h4" color="primary">
        Projects
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "15px",
        }}
      >
        {projects.map((skill, i) => (
          <ProjectCard
            key={i}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </Box>
    </>
  );
}

function ProjectCard({ name, description }) {
  return (
    <Card
      sx={css`
        max-width: 300px;
        padding: 10px;
      `}
      variant="outlined"
    >
      <Typography variant="h5">{name} </Typography>
      <Typography variant="body1">{description}</Typography>
    </Card>
  );
}
