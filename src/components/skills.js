import React, { useState } from 'react';
import { css } from '@emotion/react';
import { theme } from '../theme/theme';
import PropTypes from 'prop-types';

const SkillComponent = ({ imgPath, setShowModal }) => {
  return (
    <button
      css={css`
        position: relative;
        color: ${theme.colors.medium};
        text-decoration: none;
        overflow: hidden;
        outline: 0;
        border: 0;
        border-radius: 0.2rem;
        cursor: pointer;
      `}
    >
      <img
        css={css`
          width: 80px;
        `}
        src={imgPath}
        onClick={() => {
          setShowModal(true);
        }}
      />
    </button>
  );
};

SkillComponent.propTypes = {
  imgPath: PropTypes.string.isRequired,
  setShowModal: PropTypes.func,
};

const ModalInfo = ({ showModal, setShowModal }) => {
  return (
    <div
      css={css`
        display: ${showModal ? 'block' : 'none'};
        background-color: ${theme.colors.medium};
        border-radius: 8px;
        position: fixed;
        width: 600px;
        max-width: 100%;
        height: 400px;
        max-height: 100%;
        z-index: 100;
        left: 50%;
        top: 50%;
        box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.1);
        transform: translate(-50%, -50%);
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row-reverse;
        `}
      >
        <button
          css={css`
            margin: 6px;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            text-decoration: none;
            overflow: hidden;
            outline: 0;
            border: 0;
          `}
          onClick={() => {
            setShowModal(false);
          }}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

ModalInfo.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

const Skills = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ModalInfo showModal={showModal} setShowModal={setShowModal} />
      <h1>Skills</h1>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        `}
      >
        <SkillComponent
          setShowModal={setShowModal}
          imgPath="/skills/reactjs.svg"
        />
        <SkillComponent
          setShowModal={setShowModal}
          imgPath="/skills/nodejs.svg"
        />
        <SkillComponent
          setShowModal={setShowModal}
          imgPath="/skills/unity.svg"
        />
      </div>
    </div>
  );
};

export default Skills;
