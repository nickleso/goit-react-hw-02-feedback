import styled from '@emotion/styled';

export const StyledSection = styled.section`
  width: ${props => props.theme.spacing(120)};
  border-radius: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(5)};
  margin: 0 auto;
  margin-top: ${props => props.theme.spacing(5)};
  overflow: hidden;

  background-color: ${props => props.theme.colors.white};
`;

export const StyledDiv = styled.div`
  width: ${props => props.theme.spacing(120)};
  border-radius: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(5)};
  margin: 0 auto;
  margin-top: ${props => props.theme.spacing(5)};
  overflow: hidden;

  background-color: ${props => props.theme.colors.white};
`;

export const SectionTitle = styled.h2`
  text-align: right;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  text-transform: uppercase;
  margin: 0;
`;

export const FeedbackList = styled.ul`
  background-color: ${props => props.theme.colors.white};
  border-radius: 0 0 ${props => props.theme.spacing(3)};

  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
`;

export const FeedbacktItem = styled.li`
  display: grid;

  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;

  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const ButtonItem = styled.li`
  display: grid;

  line-height: 2.5;
  overflow: hidden;
  border-radius: 10px;

  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const StyledStats = styled.p`
  color: ${props => props.theme.colors.gray};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;

export const StyledData = styled.span`
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;

export const StyledButton = styled.button`
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  margin-bottom: 0;
`;
