import {
  FeedbackList,
  ButtonItem,
  StyledButton,
} from './FeedbackWidjet.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <FeedbackList>
        <ButtonItem>
          <StyledButton name="good" type="button" onClick={onLeaveFeedback}>
            Good
          </StyledButton>
        </ButtonItem>
        <ButtonItem>
          <StyledButton name="neutral" type="button" onClick={onLeaveFeedback}>
            Neutral
          </StyledButton>
        </ButtonItem>
        <ButtonItem>
          {' '}
          <StyledButton name="bad" type="button" onClick={onLeaveFeedback}>
            Bad
          </StyledButton>
        </ButtonItem>
      </FeedbackList>
    </>
  );
};
