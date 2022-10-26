import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';

class FeedbackWidjet extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
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

    return (
      <div>
        <Section title={'Please live feedback'}>
          <FeedbackOptions
            onLeaveGoodFeedback={this.addGoodFeedback}
            onLeaveaNeutralFeedback={this.addNeutralFeedback}
            onLeaveBadFeedback={this.addBadFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>

        <Notification
          message={'There is no feedback'}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}

export default FeedbackWidjet;
