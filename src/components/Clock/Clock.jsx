import { useEffect } from "react";
import "./style.css";

const Clock = () => {
  const clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let period = "am";

    if (hour === 0) {
      hour = 12;
    }

    if (hour === 12) {
      period = "pm";
    }

    if (hour > 12) {
      hour = hour - 12;
      period = "pm";
    }

    if (hour < 10) {
      hour = "0" + hour;
    } else {
      // eslint-disable-next-line no-self-assign
      hour = hour;
    }

    if (minute < 10) {
      minute = "0" + minute;
    } else {
      // eslint-disable-next-line no-self-assign
      minute = minute;
    }

    const time = `${hour}:${minute}${period}`;
    document.querySelector(".clock").textContent = time;

    setTimeout(clock, 1000);
  };

  useEffect(() => {
    clock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="clock"></div>
    </>
  );
};

export default Clock;
