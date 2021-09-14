import "./style.css";

const Weather = ({ temp, location, description, error }) => {
  return (
    <>
      <div className="weather-container">
        <div className="location">{location}</div>
        <div className="condition">{description}</div>
        <div className="fahrenheit">{temp}</div>
        <div className="error">{error}</div>
      </div>
    </>
  );
};

export default Weather;
