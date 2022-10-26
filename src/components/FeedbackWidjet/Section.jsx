import { StyledSection, SectionTitle } from './FeedbackWidjet.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};
