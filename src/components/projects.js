import React from "react";
import { Card, Divider, Box, Typography, IconButton } from "@mui/material";
import { css } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { desktop } from "../shared/screen";

import { GitHub as Info } from "@mui/icons-material";

const projects = [
  {
    name: "Sufarmed",
    description: "Online store for generic drugs",
    link: "https://github.com/BrauCamaH/sufarmed",
  },
  {
    name: "Restasoft",
    description: "A web app that allows manage a restaurants sales",
    link: "https://github.com/BrauCamaH/restasoft",
  },
  {
    name: "Access Control",
    description:
      "Access control program that uses rfid reader to allow create, read, update and delete users.",
    link: "https://github.com/BrauCamaH/access-control",
  },
  {
    name: "Virtual Villa Napoli Arandas",
    description: "Virtual tour of the Italian Restaurant Villa Napoli Arandas ",
  },
  {
    name: "ARChair",
    description: "AR App where you can visuaize a chair in any room",
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
            link={skill.link}
          />
        ))}
      </Box>
    </>
  );
}

function ProjectCard({ name, description, link }) {
  return (
    <Card
      sx={css`
        max-width: 300px;
        padding: 10px;
        margin: 4px;
      `}
      variant="outlined"
    >
      <Typography variant="h5">{name} </Typography>
      <Typography variant="body1">{description}</Typography>

      {link ? (
        <a href={link}>
          <IconButton variant="outlined">
            <Info />
          </IconButton>
        </a>
      ) : null}
    </Card>
  );
}
