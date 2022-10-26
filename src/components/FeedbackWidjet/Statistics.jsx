import {
  FeedbackList,
  FeedbacktItem,
  StyledStats,
  StyledData,
} from './FeedbackWidjet.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) => {
  return (
    <>
      {total > 0 && (
        <FeedbackList>
          <FeedbacktItem>
            <StyledStats>
              Good: <StyledData>{good}</StyledData>
            </StyledStats>
          </FeedbacktItem>
          <FeedbacktItem>
            <StyledStats>
              Neutral: <StyledData>{neutral}</StyledData>
            </StyledStats>
          </FeedbacktItem>
          <FeedbacktItem>
            <StyledStats>
              Bad: <StyledData>{bad}</StyledData>
            </StyledStats>
          </FeedbacktItem>
          <FeedbacktItem>
            <StyledStats>
              Total: <StyledData>{total}</StyledData>
            </StyledStats>
          </FeedbacktItem>
          <FeedbacktItem>
            <StyledStats>
              Positive feedback:{' '}
              <StyledData>
                {positivePercentage ? positivePercentage : 0}%
              </StyledData>
            </StyledStats>
          </FeedbacktItem>
        </FeedbackList>
      )}
    </>
  );
};
