import "./style.css";

const Clock = ({ hour, minute, period }) => {
  return (
    <>
      <div className="clock">
        {hour}:{minute}
        {period}
      </div>
    </>
  );
};

export default Clock;
