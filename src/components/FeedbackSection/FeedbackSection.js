import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackSection.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

const FeedbackSection = ({
  increaseValue,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => (
  <Section title="Please, leave your feedback here:">
    <FeedbackOptions increaseValue={increaseValue} />
    <h2 className={styles.subtitle}>Statistics</h2>
    {countTotalFeedback() === 0 ? (
      <Notification message="No feedback given"></Notification>
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        percentage={countPositiveFeedbackPercentage}
      />
    )}
  </Section>
);

FeedbackSection.prototype = {
  increaseValue: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackSection;
