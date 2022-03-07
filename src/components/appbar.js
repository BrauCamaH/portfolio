import * as React from "react";
import { AppBar, Box, Toolbar, Drawer, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link as GatsbyLink } from "gatsby";
import { useMediaQuery } from "@mui/material";

import Link from "./link";
import logo from "../images/logo.png";

import Social from "./social";

function DrawerMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <IconButton style={{ marginLeft: "20px" }} onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Link
          style={{ margin: "20px" }}
          to="/about"
          activeClassName="current-page"
        >
          About
        </Link>
        <Link
          style={{ margin: "20px" }}
          to="/projects"
          activeClassName="current-page"
        >
          Projects
        </Link>
        <Link
          style={{ margin: "20px" }}
          to="/contact"
          activeClassName="current-page"
        >
          Contact
        </Link>
      </Drawer>
    </>
  );
}

export default function ButtonAppBar() {
  const isMobile = useMediaQuery("(max-width:600px)");
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
          {isMobile ? null : (
            <>
              <Link to="/about" activeClassName="current-page">
                About
              </Link>
              <Link to="/projects" activeClassName="current-page">
                Projects
              </Link>
              <Link to="/contact" activeClassName="current-page">
                Contact
              </Link>
            </>
          )}
          <Social />

          {isMobile ? <DrawerMenu /> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
