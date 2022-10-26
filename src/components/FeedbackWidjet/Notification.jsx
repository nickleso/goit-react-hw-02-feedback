export const Notification = ({ message, total }) => {
  return <>{total === 0 && <p>{message}</p>}</>;
};
