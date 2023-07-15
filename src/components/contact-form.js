import * as React from "react";

import { TextField, Box, Button, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

export default function Interest() {
  return (
    <Box>
      <TextField label="Email" margin="dense" fullWidth />
      <TextField label="Name" margin="dense" fullWidth />
      <TextField label="Message" margin="dense" multiline fullWidth />
      <Button>
        Send
        <IconButton disabled color="primary">
          <Send />
        </IconButton>
      </Button>
    </Box>
  );
}
