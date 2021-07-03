import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ increaseValue }) => (
  <div className={styles.btnWrapper}>
    <button className={styles.btn} type="button" onClick={() => increaseValue('good')}>
      Good
    </button>
    <button className={styles.btn} type="button" onClick={() => increaseValue('neutral')}>
      Neutral
    </button>
    <button className={styles.btn} type="button" onClick={() => increaseValue('bad')}>
      Bad
    </button>
  </div>
);

FeedbackOptions.prototype = {
  increaseValue: PropTypes.func.isRequired,
};

export default FeedbackOptions;
