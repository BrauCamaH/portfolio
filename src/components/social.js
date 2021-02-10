import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { theme } from '../theme/theme';

const SocialItem = ({ color, svgIcon, text }) => {
  return (
    <div>
      <a>
        <button
          css={css`
            background-color: ${color};
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 8px;
            overflow: hidden;
            color: #fff;
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            outline: 0;
            border: 0;
            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
            cursor: pointer;
            :active {
              background-color: ${theme.colors.primary};
              background-size: 100%;
              border-style: outset;
            }
          `}
        >
          <span>
            <img
              css={css`
                width: 30px;
                margin-top: 3px;
                margin-right: 3px;
                filter: invert(100%) sepia(0%) saturate(7479%)
                  hue-rotate(253deg) brightness(105%) contrast(100%);
              `}
              src={svgIcon}
              alt="social"
            />
          </span>
          <p
            css={css`
              font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI',
                Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
                sans-serif;
              color: white;
            `}
          >
            {text}
          </p>
        </button>
      </a>
    </div>
  );
};

SocialItem.propTypes = {
  color: PropTypes.string,
  svgIcon: PropTypes.string,
  text: PropTypes.string,
};

const Social = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
      `}
    >
      <SocialItem text="Github" color="#181717" svgIcon="/social/github.svg" />
      <SocialItem
        text="Linkedin"
        color="#0077B5"
        svgIcon="/social/linkedin.svg"
      />
      <SocialItem text="Medium" color="#12100E" svgIcon="/social/medium.svg" />
      <SocialItem
        text="Youtube"
        color="#FF0000"
        svgIcon="/social/youtube.svg"
      />
      <SocialItem
        text="Twitter"
        color="#1DA1F2"
        svgIcon="/social/twitter.svg"
      />
    </div>
  );
};

export default Social;
