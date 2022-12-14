import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './FeedbackWidjet/Statistics';
import { FeedbackOptions } from './FeedbackWidjet/FeedbackOptions';
import { Notification } from './FeedbackWidjet/Notification';
import { Section } from './FeedbackWidjet/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    let positiveFeedbackPercentage = 0;
    positiveFeedbackPercentage = (good * 100) / (good + neutral + bad);
    return parseInt(positiveFeedbackPercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title={'Please live feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        {total > 0 && (
          <Section style={{ backgroundColor: 'white' }} title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}

        {total === 0 && <Notification message={'There is no feedback'} />}
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default App;
