import {
  FeedbackList,
  ButtonItem,
  StyledButton,
} from './FeedbackWidjet.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <ButtonItem key={option}>
          <StyledButton name={option} type="button" onClick={onLeaveFeedback}>
            {option.toUpperCase()}
          </StyledButton>
        </ButtonItem>
      ))}
    </FeedbackList>
  );
};
