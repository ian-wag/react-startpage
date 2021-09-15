import "./style.css";

const Greeting = ({ greet }) => {
  return (
    <>
      <h1 className="greeting">{greet}</h1>
    </>
  );
};

export default Greeting;
