import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul className={css.buttonList}>
      {options.map((value, index) => {
        return (
          <li key={index}>
            <button
              className={css.feedbackButton}
              onClick={() => onClick(value)}
              type="button"
            >
              {value}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
