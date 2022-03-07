import * as React from "react";
import {
  Card,
  CardContent,
  Box,
  Avatar,
  Divider,
  Typography,
} from "@mui/material";

import { useMediaQuery } from "@mui/material";
import { desktop } from "../shared/screen";

export default function Profile() {
  const isDesktop = useMediaQuery(desktop);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: isDesktop ? "nowrap" : "wrap",
          margin: 2,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/images/profile.jpg"
          sx={{
            width: isDesktop ? 300 : 200,
            height: isDesktop ? 300 : 200,
            margin: 2,
          }}
        />

        <Card variant="outlined">
          <CardContent>
            <h2>Hi, I’m Braulio Camarena</h2>
            <Divider />
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold", margin: 2 }}
              gutterBottom
            >
              I am interested in game y web development.
              <br /> <br /> I use react and node js to create web apps, also i
              can make games with unity. I am really curious and enjoy learn new
              things. I like read and play sports.
              <br /> <br /> I am always glad to meet new people and share my
              knowledge.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
