import { useState, useEffect } from "react";
import "./App.css";
import { Crypto, Greeting, Clock, Weather } from "./components";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

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
        temp: Math.round((apiWeatherData.main.temp * 9) / 5 + 32),
        location: apiWeatherData.name,
        description: apiWeatherData.weather[0].description,
        error: "",
      });
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchWeatherData();
  }, []);

  return (
    <div>
      <Crypto
        bitcoin={coinData.bitcoin}
        ethereum={coinData.ethereum}
        dogecoin={coinData.dogecoin}
      />
      <Greeting />
      <Clock />
      <Weather
        temp={weatherData.temp}
        location={weatherData.location}
        description={weatherData.description}
      />
    </div>
  );
};

export default App;
