import React from "react";
import "./style.css";

const Loading = ({ coinLoad, weatherLoad }) => {
  if (coinLoad && weatherLoad) {
    return (
      <div className="loader">
        <p></p>
      </div>
    );
  } else {
    return (
      <div className="none">
        <p></p>
      </div>
    );
  }
};

export default Loading;
