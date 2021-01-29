import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { theme } from '../theme/theme';
import { css } from '@emotion/react';

const NavLink = styled(Link)`
  color: ${theme.colors.secondary};
  font-size: 1rem;
  padding: 0.25rem;
  background: transparent;
  margin-left: 0.5rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid ${theme.colors.secondary};
  }
`;

const Navbar = () => {
  return (
    <nav
      css={css`
        grid-area: navbar;
        background: ${theme.colors.primary};
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem 0;
      `}
    >
      <div
        css={css`
          margin: 0 1rem 0 0;
          padding: 0.25rem;
        `}
      >
        <NavLink to="/about/" activeClassName="current-page">
          about
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
