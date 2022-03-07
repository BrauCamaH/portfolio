import * as React from "react";

import { IconButton } from "@mui/material";
import { GitHub, Twitter, Newspaper } from "@mui/icons-material";

export default function Social() {
  return (
    <div>
      <IconButton variant="outlined">
        <GitHub />
      </IconButton>
      <IconButton variant="outlined">
        <Twitter />
      </IconButton>
      <IconButton variant="outlined">
        <Newspaper />
      </IconButton>
    </div>
  );
}
