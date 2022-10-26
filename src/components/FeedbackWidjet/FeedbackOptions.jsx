import {
  FeedbackList,
  ButtonItem,
  StyledButton,
} from './FeedbackWidjet.styled';

export const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveaNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <>
      <FeedbackList>
        <ButtonItem>
          <StyledButton type="button" onClick={onLeaveGoodFeedback}>
            Good
          </StyledButton>
        </ButtonItem>
        <ButtonItem>
          <StyledButton type="button" onClick={onLeaveaNeutralFeedback}>
            Neutral
          </StyledButton>
        </ButtonItem>
        <ButtonItem>
          {' '}
          <StyledButton type="button" onClick={onLeaveBadFeedback}>
            Bad
          </StyledButton>
        </ButtonItem>
      </FeedbackList>
    </>
  );
};
