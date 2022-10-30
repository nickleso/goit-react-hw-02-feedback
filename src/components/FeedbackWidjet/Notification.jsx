import { StyledDiv, SectionTitle } from './FeedbackWidjet.styled';

export const Notification = ({ message }) => {
  return (
    <StyledDiv>
      <SectionTitle>{message}</SectionTitle>
    </StyledDiv>
  );
};
