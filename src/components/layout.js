import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/react';
import { theme } from '../theme/theme';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: ${theme.background};
            color: ${theme.text};
            font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-size: 18px;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${theme.text};
            line-height: 1.1;
            font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }
        `}
      />
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
