export const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveaNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <>
      <div>
        <button type="button" onClick={onLeaveGoodFeedback}>
          Good
        </button>
        <button type="button" onClick={onLeaveaNeutralFeedback}>
          Neutral
        </button>
        <button type="button" onClick={onLeaveBadFeedback}>
          Bad
        </button>
      </div>
    </>
  );
};
