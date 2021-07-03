// import './App.css';
import React, { Component } from 'react';
import FeedbackSection from './components/FeedbackSection';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseValue = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return (
      <div className="App">
        <FeedbackSection
          increaseValue={this.increaseValue}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    );
  }
}

export default App;
