import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";

import { useMediaQuery } from "@mui/material";
import { desktop } from "../shared/screen";

import SkillCard from "./skillcard";

const skills = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    image: "react.svg",
  },
  {
    name: "NodeJs",
    description:
      "s a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    image: "node.svg",
  },
  {
    name: "Unity",
    description:
      "One unified platform with flexible solutions for you to build, manage, and grow your game.",
    image: "unity.svg",
  },
];

export default function Skills() {
  const isDesktop = useMediaQuery(desktop);

  return (
    <>
      <Typography variant="h4" color="primary">
        Skills
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
        }}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            {...skill}
            image={`/images/${skill.image}`}
          />
        ))}
      </Box>
    </>
  );
}
