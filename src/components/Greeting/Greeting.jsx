import { useEffect } from "react";
import "./style.css";

const Greeting = () => {
  const greet = () => {
    let date = new Date();
    let hour = date.getHours();
    const me = "Ian";

    if (hour < 12) {
      document.querySelector(".greeting").innerText = `Good morning, ${me}.`;
    } else if (hour < 18) {
      document.querySelector(".greeting").innerText = `Good afternoon, ${me}.`;
    } else {
      document.querySelector(".greeting").innerText = `Good evening, ${me}.`;
    }
  };

  useEffect(() => {
    greet();
  }, []);

  return (
    <>
      <h1 className="greeting">Hello, Ian</h1>
    </>
  );
};

export default Greeting;
