import { useState, useEffect } from "react";
import "./App.css";
import { Crypto, Greeting, Clock, Weather } from "./components";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [currentTime, setCurrentTime] = useState([]);

  const fetchCoinData = async () => {
    const apiCoinData = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd`
    )
      .then((res) => res.json())
      .then((data) => data);
    setCoinData({
      data: apiCoinData,
      bitcoin: apiCoinData.bitcoin.usd,
      ethereum: apiCoinData.ethereum.usd,
      dogecoin: apiCoinData.dogecoin.usd,
      error: "",
    });
  };

  const fetchWeatherData = async () => {
    const api = process.env.REACT_APP_WEATHER_API_KEY;
    let long = "-87.6803";
    let lat = "41.9227";
    const apiWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => data);
    if (!apiWeatherData) {
      setWeatherData({
        temp: "",
        location: "",
        description: "",
        error: "ERROR FETCHING CURRENT WEATHER",
      });
    } else {
      setWeatherData({
        temp: Math.round((apiWeatherData.main.temp * 9) / 5 + 32) + "°F",
        location: apiWeatherData.name,
        description: apiWeatherData.weather[0].description,
        error: "",
      });
    }
  };

  const time = () => {
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
      hour = hour + 0;
    }

    if (minute < 10) {
      minute = "0" + minute;
    } else {
      minute = minute + 0;
    }
    setCurrentTime({ hour, minute, period });
  };

  useEffect(() => {
    fetchCoinData();
    fetchWeatherData();
    setInterval(() => time(), 1000);
  }, []);

  return (
    <div className="container">
      <Crypto
        bitcoin={coinData.bitcoin}
        ethereum={coinData.ethereum}
        dogecoin={coinData.dogecoin}
      />
      <Greeting />
      <Clock
        hour={currentTime.hour}
        minute={currentTime.minute}
        period={currentTime.period}
      />
      <Weather
        temp={weatherData.temp}
        location={weatherData.location}
        description={weatherData.description}
      />
    </div>
  );
};

export default App;
