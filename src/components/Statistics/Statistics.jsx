import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statisticWrapper}>
      <p className={css.statisticValue}>Good: {good}</p>
      <p className={css.statisticValue}>Neutral: {neutral}</p>
      <p className={css.statisticValue}>Bad: {bad}</p>
      <p className={css.statisticValue}>Total: {total}</p>
      <p className={css.statisticValue}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
