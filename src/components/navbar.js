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
        padding: 1rem;
        background: ${theme.colors.primary};
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <Link to="/">
        <img
          css={css`
            width: 60px;
            height: 30px;
          `}
          src="/logo.png"
          alt="logo"
        />
      </Link>
      <div
        css={css`
          margin: 0 1rem 0 0;
          padding: 0.25rem;
        `}
      >
        <NavLink
          css={css`
            color: ${theme.background};
          `}
          to="/about/"
          activeClassName="current-page"
        >
          About
        </NavLink>
        <NavLink
          css={css`
            color: ${theme.background};
          `}
          to="/projects/"
          activeClassName="current-page"
        >
          Projects
        </NavLink>
        <NavLink
          css={css`
            color: ${theme.background};
          `}
          to="/contact/"
          activeClassName="current-page"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
