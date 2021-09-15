import React from "react";
import "./style.css";

const Links = () => {
  return (
    <>
      <div className="links">
        <a href="https://www.reddit.com/">
          <p className="link-text underline">reddit.</p>
        </a>
        <a href="https://www.twitch.tv/directory/following">
          <p className="link-text underline">twitch.</p>
        </a>
        <a href="https://twitter.com/home">
          <p className="link-text underline">twitter.</p>
        </a>
        <a href="https://github.com/ian-wag">
          <p className="link-text underline">github.</p>
        </a>
      </div>
    </>
  );
};

export default Links;
