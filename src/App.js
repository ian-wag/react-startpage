import React from "react";
import "./App.css";
import { Crypto, Greeting, Weather } from "./components";

const App = () => {
  return (
    <div>
      <Crypto />
      <Greeting />
      <Weather />
    </div>
  );
};

export default App;
