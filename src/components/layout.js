import * as React from "react";
import { Global, css } from "@emotion/react";
import Helmet from "react-helmet";
import Appbar from "./appbar";
import Container from "@mui/material/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          h1 {
            font-family: "Roboto", sans-serif;
          }
        `}
      />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <Appbar />
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
