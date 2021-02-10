import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/react';
import { theme } from '../theme/theme';

import Social from '../components/social';
import Skills from '../components/skills';

import '../theme/variables.css';

const Home = () => {
  return (
    <Layout>
      <div
        css={css`
          padding: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <div>
          <h1
            css={css`
              font-size: 3.65rem;
            `}
          >
            Braulio Camarena
          </h1>
          <h2
            css={css`
              font-size: 1.885rem;
              text-align: left;
              max-width: 700px;
              color: ${theme.colors.medium};
            `}
          >
            Fullstack Javascript developer, with a game development background.
          </h2>
        </div>
      </div>
      <Social />
      <Skills />
    </Layout>
  );
};

export default Home;
