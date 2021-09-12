import { useEffect } from "react";
import "./style.css";

const Weather = () => {
  const api = process.env.REACT_APP_WEATHER_API_KEY;
  const loc = document.querySelector(".location");
  const tempF = document.querySelector(".fahrenheit");
  const condition = document.querySelector(".condition");

  useEffect(() => {
    const fetchData = () => {
      let long = "-87.687593";
      let lat = "41.915883";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description } = data.weather[0];

          const fahrenheit = Math.round((temp * 9) / 5 + 32);
          loc.textContent = `${place}`;
          condition.textContent = `${description}`;
          tempF.textContent = `${fahrenheit} °F`;
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="weather-container">
        <div className="location"></div>
        <div className="condition"></div>
        <div className="fahrenheit"></div>
      </div>
    </>
  );
};

export default Weather;
