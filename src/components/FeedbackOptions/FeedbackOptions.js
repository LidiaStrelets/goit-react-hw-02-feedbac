import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ increaseValue, options }) => (
  <div className={styles.btnWrapper}>
    {options.map((option, index) => (
      <button
        key={index}
        className={styles.btn}
        type="button"
        onClick={() => increaseValue(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.prototype = {
  increaseValue: PropTypes.func.isRequired,
};

export default FeedbackOptions;
