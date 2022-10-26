import { StyledDiv, SectionTitle } from './FeedbackWidjet.styled';

export const Notification = ({ message, total }) => {
  return (
    <>
      {total === 0 && (
        <StyledDiv>
          <SectionTitle>{message}</SectionTitle>
        </StyledDiv>
      )}
    </>
  );
};
