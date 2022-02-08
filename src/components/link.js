import * as React from "react";
import Button from "@mui/material/Button";

import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  :visited,
  :hover,
  :link,
  :focus {
    color: inherit;
  }

  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type{
    margin-right: 20px;
  }
`;

const Link = React.forwardRef(function Link(props, ref) {
  return <Button color="primary" component={StyledLink} ref={ref} {...props} />;
});

export default Link;
