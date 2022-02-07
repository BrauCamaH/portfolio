import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link as GatsbyLink } from "gatsby";

import Link from "./link";
import logo from "../images/logo.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <GatsbyLink to="/">
              <GatsbyLink to="/">
                <img width={80} height={50} src={logo} alt="logo" />
              </GatsbyLink>
            </GatsbyLink>
          </Box>
          <Link to="/about" activeClassName="current-page">
            About
          </Link>
          <Link to="/projects" activeClassName="current-page">
            Projects
          </Link>
          <Link to="/contact" activeClassName="current-page">
            Contact
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
