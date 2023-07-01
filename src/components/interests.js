import * as React from "react";

import { Avatar, Box, Chip } from "@mui/material";
import { LibraryBooks, Sports, Code } from "@mui/icons-material";
import { css } from "@emotion/react";

export default function Interest() {
  return (
    <Box
      sx={css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      `}
    >
      <Chip
        avatar={
          <Avatar>
            <LibraryBooks />
          </Avatar>
        }
        label="Books"
      />
      <Chip
        avatar={
          <Avatar>
            <Sports />
          </Avatar>
        }
        label="Sports"
      />
      <Chip
        avatar={
          <Avatar>
            <Code />
          </Avatar>
        }
        label="Software Development"
      />
    </Box>
  );
}
