import * as React from "react";

import { IconButton } from "@mui/material";
import { GitHub, LinkedIn, Newspaper } from "@mui/icons-material";

export default function Social() {
  return (
    <div>
      <a href="https://github.com/BrauCamaH">
        <IconButton variant="outlined">
          <GitHub />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/braulio-guadalupe-camarena-huerta-111b4a16a/">
        <IconButton variant="outlined">
          <LinkedIn />
        </IconButton>
      </a>
      <a href="https://medium.com/@braulio-camarenah">
        <IconButton variant="outlined">
          <Newspaper />
        </IconButton>
      </a>
    </div>
  );
}
